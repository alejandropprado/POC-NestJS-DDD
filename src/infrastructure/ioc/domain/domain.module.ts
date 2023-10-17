import { DynamicModule, Module, Provider, Type } from '@nestjs/common';
import { OfferService } from 'src/domain/offer/services/offer.service';
import { IOfferRepository } from 'src/domain/offer/interfaces/offer.repository';
import { ApplyService } from 'src/domain/apply/services/apply.service';
import { IApplyRepository } from 'src/domain/apply/interfaces/apply.repository';

export type DomainModuleOptions = {
  modules: Type[];
  repositories: {
    offerRepository: Type<IOfferRepository>;
    applyRepository: Type<IApplyRepository>;
  };
};

@Module({})
export class DomainModule {
  static register({
    modules,
    repositories,
  }: DomainModuleOptions): DynamicModule {
    const { offerRepository, applyRepository } = repositories;

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
      inject: [applyRepository],
    };

    return {
      module: DomainModule,
      providers: [offerServiceProvider, applyServiceProvider],
      exports: [OfferService.name, ApplyService.name],
      imports: [...modules],
      global: true,
    };
  }
}
