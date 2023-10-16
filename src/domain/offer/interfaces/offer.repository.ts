import { IOffer } from '../entities/offer.entity';

export interface IOfferRepository {
  createOffer(offer: Partial<IOffer>): Promise<IOffer>;
  getPublicOffers(): Promise<IOffer[]>;
}
