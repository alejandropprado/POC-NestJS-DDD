import { IPartialEmployee } from 'src/domain/employee/employee.entity';
import { IOfferService } from '../interfaces/offer.service';
import { IOfferRepository } from '../interfaces/offer.repository';
import { IOffer } from '../entities/offer.entity';

export class OfferService implements IOfferService {
  constructor(private readonly offerRepository: IOfferRepository) {}

  async createOffer(offer: Partial<IOffer>): Promise<IOffer> {
    const offerToCreate: IOffer = {
      ...(offer as IOffer),
      isDeleted: false,
      created: {
        by: { email: 'alejandro@blue.cl' } as IPartialEmployee,
        at: new Date(),
      },
    };
    const newOffer = await this.offerRepository.createOffer(offerToCreate);
    return newOffer;
  }

  getPublicOffers(): Promise<IOffer[]> {
    return this.offerRepository.getPublicOffers();
  }
}
