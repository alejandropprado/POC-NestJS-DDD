import { Inject, Injectable } from '@nestjs/common';
import { IOffer } from 'src/domain/offer/entities/offer.entity';
import { IOfferRepository } from 'src/domain/offer/interfaces/offer.repository';
// import { OfferMongoRepository } from '../persistence/database/mongodb/repository/offer.repository';

@Injectable()
export class OfferRepositoryImp implements IOfferRepository {
  // constructor(
  //   @Inject(OfferMongoRepository.name)
  //   private offerRepository: IOfferRepository,
  // ) {}

  async createOffer(offer: Partial<IOffer>): Promise<IOffer> {
    return Promise.resolve({ ...offer, id: '123' } as IOffer);
    // return this.offerRepository.createOffer(offer);
  }
  getPublicOffers(): Promise<IOffer[]> {
    return Promise.resolve([]);
    // return this.offerRepository.getPublicOffers();
  }
}
