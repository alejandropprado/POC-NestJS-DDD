import { ICompany } from 'src/domain/company/company.entity';
import { IOffer } from 'src/domain/offer/entities/offer.entity';
import { IVacancy } from 'src/domain/offer/entities/vacancy.entity';

export class CreateOfferRequestDTO implements Partial<IOffer> {
  title: string;
  description: string;
  details: string;
  priority: number;
  status: string;
  isCyber: boolean;
  publicationDate: { from: Date; to: Date };
  vacancies: IVacancy[];
  documentsTemplate: string[];
  company: ICompany;
  codeOffer: string;
  privateCommercialOffer: boolean;
  commercialOffer: {
    value: number;
    isPrivate: boolean;
  };
}
