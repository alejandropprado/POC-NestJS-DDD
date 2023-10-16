import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {
  ICommercialOffer,
  IOffer,
} from 'src/domain/offer/entities/offer.entity';
import {
  IVacancy,
  IVehicleVacancy,
} from 'src/domain/offer/entities/vacancy.entity';
import { Audit } from './audit.schema';
import { Company } from './company.schema';
import { IFeature } from 'src/domain/vehicle/feature.entity';
import { IVehicleType } from 'src/domain/vehicle/vehicleType.entity';

class PublicationDate {
  @Prop({ required: true })
  from: Date;
  @Prop({ required: true })
  to: Date;
}

class Feature extends Audit implements IFeature {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  value: string;
}

class Vehicle implements IVehicleVacancy {
  @Prop({ required: true })
  type: IVehicleType['name'];
  @Prop({ required: true })
  icon: IVehicleType['icon'];
  @Prop({ required: true })
  features: Feature[];
}

class Vacancy implements IVacancy {
  @Prop({ required: true })
  total: number;
  @Prop({ required: true })
  base: string;
  @Prop({ required: true })
  showWebsite: boolean;
  @Prop({ required: true })
  documentRequired: boolean;
  @Prop({ required: true })
  veichle: Vehicle;
  @Prop({ required: true })
  showTotal: boolean;
}

class CommercialOffer implements ICommercialOffer {
  @Prop({ required: true })
  value: number;
  @Prop({ required: true })
  isPrivate: boolean;
}

@Schema()
export class Offer extends Audit implements IOffer {
  city: string;
  @Prop({ required: true })
  title: string;
  @Prop({ required: true })
  description: string;
  @Prop({ required: true })
  details: string;
  @Prop({ required: true })
  priority: number;
  @Prop({ required: true })
  status: string;
  @Prop({ required: true })
  isCyber: boolean;
  @Prop({ required: true })
  isDeleted: boolean;
  @Prop({ required: true })
  publicationDate: PublicationDate;
  @Prop({ required: true })
  vacancies: Vacancy[];
  @Prop({ required: true })
  documentsTemplate: string[];
  @Prop({ required: true })
  company: Company;
  @Prop({ required: true })
  codeOffer: string;
  @Prop({ required: true })
  privateCommercialOffer: boolean;
  @Prop({ required: true })
  commercialOffer: CommercialOffer;
  @Prop({ required: true })
  documentsTemplateIds: string[];
}

export type OfferDocument = Offer & Document;

export const OfferSchema = SchemaFactory.createForClass(Offer);
