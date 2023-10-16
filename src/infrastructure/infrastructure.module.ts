import { Module } from '@nestjs/common';
import { offerRepositoryImp } from './repositories/offer.repository';
import { OfferController } from './controller/offer/offer.controller';
import { IocModule } from './ioc/ioc.module';
import { PersistenceModule } from './persistence/persistence.module';

@Module({
  providers: [offerRepositoryImp],
  exports: [offerRepositoryImp],
  imports: [
    PersistenceModule,
    IocModule.register({
      modules: [InfrastructureModule],
      repositories: {
        offerRepository: offerRepositoryImp,
      },
    }),
  ],
  controllers: [OfferController],
})
export class InfrastructureModule {}
