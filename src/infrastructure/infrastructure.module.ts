import { Module } from '@nestjs/common';
import { OfferRepositoryImp } from './repositories/offer.repository';
import { OfferController } from './controller/offer/offer.controller';
import { IocModule } from './ioc/ioc.module';
// import { PersistenceModule } from './persistence/persistence.module';
import { ApplyController } from './controller/apply/apply.controller';
import { ApplyRepositoryImp } from './repositories/apply.repository';

@Module({
  providers: [OfferRepositoryImp, ApplyRepositoryImp],
  exports: [OfferRepositoryImp, ApplyRepositoryImp],
  imports: [
    // PersistenceModule,
    IocModule.register({
      modules: [InfrastructureModule],
      repositories: {
        offerRepository: OfferRepositoryImp,
        applyRepository: ApplyRepositoryImp,
      },
    }),
  ],
  controllers: [OfferController, ApplyController],
})
export class InfrastructureModule {}
