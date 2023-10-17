import { Module } from '@nestjs/common';
import { OfferRepositoryImp } from './repositories/offer.repository';
import { OfferController } from './controller/offer/offer.controller';
// import { PersistenceModule } from './persistence/persistence.module';
import { ApplyController } from './controller/apply/apply.controller';
import { ApplyRepositoryImp } from './repositories/apply.repository';
import { DomainModule } from './ioc/domain/domain.module';
import { ApplicationModule } from './ioc/application/application.module';

@Module({
  providers: [OfferRepositoryImp, ApplyRepositoryImp],
  exports: [OfferRepositoryImp, ApplyRepositoryImp],
  imports: [
    // PersistenceModule,
    DomainModule.register({
      modules: [InfrastructureModule],
      repositories: {
        offerRepository: OfferRepositoryImp,
        applyRepository: ApplyRepositoryImp,
      },
    }),
    ApplicationModule.register({
      modules: [DomainModule, InfrastructureModule],
    }),
  ],
  controllers: [OfferController, ApplyController],
})
export class InfrastructureModule {}
