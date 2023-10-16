import { Module, Provider } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseConfigService } from './connect';
import { Offer, OfferSchema } from './schema/offer.schema';
import { OfferMongoRepository } from './repository/offer.repository';

const OfferMongoProvider: Provider = {
  provide: OfferMongoRepository.name,
  useClass: OfferMongoRepository,
};

@Module({
  imports: [
    // MongooseModule.forRootAsync({
    //   useClass: MongooseConfigService,
    // }),
    // MongooseModule.forFeature([{ name: Offer.name, schema: OfferSchema }]),
  ],
  providers: [],
  exports: [],
})
export class MongodbModule {}
