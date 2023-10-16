import { IOffer } from '../entities/offer.entity';

export interface IOfferService {
  createOffer(offer: Partial<IOffer>): Promise<IOffer>;
  getPublicOffers(): Promise<IOffer[]>;
}
