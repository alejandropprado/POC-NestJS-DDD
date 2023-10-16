import { Module, Type, DynamicModule, Provider } from '@nestjs/common';
import { CreateOfferUseCase } from 'src/application/use-cases/offer/create-offer.use-case';
import { IOfferRepository } from 'src/domain/offer/interfaces/offer.repository';
import { OfferService } from 'src/domain/offer/services/offer.service';
import { DomainModule } from './domain/domain.module';
import { ApplyService } from 'src/domain/apply/services/apply.service';
import { IApplyRepository } from 'src/domain/apply/interfaces/apply.repository';
import { CreateApplyUseCase } from 'src/application/use-cases/apply/create-apply.use-case';

export type IOCModuleOptions = {
  modules: Type[];
  repositories: {
    offerRepository: Type<IOfferRepository>;
  };
};

@Module({
  imports: [DomainModule],
})
export class IocModule {
  static register({ modules, repositories }: IOCModuleOptions): DynamicModule {
    const { offerRepository } = repositories;

    // Registro de servicios
    const offerServiceProvider: Provider = {
      provide: OfferService.name,
      useFactory: (offerRepository: IOfferRepository) => {
        return new OfferService(offerRepository);
      },
      inject: [offerRepository],
    };
    const applyServiceProvider: Provider = {
      provide: ApplyService.name,
      useFactory: (applyRepository: IApplyRepository) => {
        return new ApplyService(applyRepository);
      },
      inject: [offerRepository],
    };

    // Registro de casos de uso
    const createOfferUseCaseProvider: Provider = {
      provide: CreateOfferUseCase.name,
      useFactory: (offerService: OfferService) => {
        return new CreateOfferUseCase(offerService);
      },
      inject: [OfferService.name],
    };
    const createApplyUseCaseProvider: Provider = {
      provide: CreateApplyUseCase.name,
      useFactory: (applyService: ApplyService) => {
        return new CreateApplyUseCase(applyService);
      },
      inject: [ApplyService.name],
    };

    return {
      module: IocModule,
      providers: [
        offerServiceProvider,
        applyServiceProvider,

        createOfferUseCaseProvider,
        createApplyUseCaseProvider,
      ],
      exports: [CreateOfferUseCase.name, CreateApplyUseCase.name],
      imports: [...modules],
    };
  }
}
