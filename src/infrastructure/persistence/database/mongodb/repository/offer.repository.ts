import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { IOffer } from 'src/domain/offer/entities/offer.entity';
import { IOfferRepository } from 'src/domain/offer/interfaces/offer.repository';
import { Offer, OfferDocument } from '../schema/offer.schema';

@Injectable()
export class OfferMongoRepository implements IOfferRepository {
  constructor(
    @InjectModel(Offer.name) private offerModel: Model<OfferDocument>,
  ) {}

  async createOffer(offer: Partial<IOffer>): Promise<IOffer> {
    const newOffer = new this.offerModel(offer);
    const result = await newOffer.save();

    return Promise.resolve({ ...offer, ...result } as IOffer);
  }
  getPublicOffers(): Promise<IOffer[]> {
    throw new Error('Method not implemented.');
  }
}
