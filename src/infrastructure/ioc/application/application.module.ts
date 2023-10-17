import { DynamicModule, Module, Provider, Type } from '@nestjs/common';
import { CreateOfferUseCase } from 'src/application/use-cases/offer/create-offer.use-case';
import { OfferService } from 'src/domain/offer/services/offer.service';
import { CreateApplyUseCase } from 'src/application/use-cases/apply/create-apply.use-case';
import { ApplyService } from 'src/domain/apply/services/apply.service';

export type ApplicationModuleOptions = {
  modules: Type[];
};

@Module({})
export class ApplicationModule {
  static register({ modules }: ApplicationModuleOptions): DynamicModule {
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
      module: ApplicationModule,
      providers: [createOfferUseCaseProvider, createApplyUseCaseProvider],
      exports: [CreateOfferUseCase.name, CreateApplyUseCase.name],
      imports: [...modules],
    };
  }
}
