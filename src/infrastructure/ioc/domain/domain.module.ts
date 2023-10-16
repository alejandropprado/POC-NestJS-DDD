import { DynamicModule, Module, Provider, Type } from '@nestjs/common';
import { IOfferRepository } from 'src/domain/offer/interfaces/offer.repository';
import { OfferService } from 'src/domain/offer/services/offer.service';

export type ModuleOptions = {
  modules: Type[];
  repositories: {
    offerRepository: Type<IOfferRepository>;
  };
};

@Module({})
export class DomainModule {
  static register({ modules, repositories }: ModuleOptions): DynamicModule {
    const { offerRepository } = repositories;

    const offerServiceProvider: Provider = {
      provide: OfferService.name,
      useFactory: (offerRepository: IOfferRepository) => {
        return new OfferService(offerRepository);
      },
      inject: [offerRepository],
    };

    return {
      module: DomainModule,
      imports: [...modules],
      providers: [offerServiceProvider],
      exports: [OfferService.name],
    };
  }
}
