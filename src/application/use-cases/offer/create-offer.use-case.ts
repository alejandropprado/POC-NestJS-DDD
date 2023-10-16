import { IOffer } from 'src/domain/offer/entities/offer.entity';
import { OfferService } from 'src/domain/offer/services/offer.service';
import { IUseCase } from '../common/use-case.entity';

export class CreateOfferUseCase implements IUseCase<Partial<IOffer>, IOffer> {
  constructor(private readonly offerService: OfferService) {}

  execute(offerToCreateDTO: Partial<IOffer>): Promise<IOffer> {
    return this.offerService.createOffer(offerToCreateDTO);
  }
}
