import { IAudit } from 'src/domain/audit/audit.entity';
import { IVacancy } from './vacancy.entity';
import { ICompany } from 'src/domain/company/company.entity';

export interface IOffer extends IAudit {
  id?: string;
  title: string;
  description: string;
  details: string;
  priority: number;
  status: string;
  isCyber: boolean;
  isDeleted: boolean;
  publicationDate: {
    from: Date;
    to: Date;
  };
  vacancies: IVacancy[];
  documentsTemplateIds: string[];
  company: ICompany;
  codeOffer: string;
  commercialOffer: {
    value: number;
    isPrivate: boolean;
  };
  city: string;
}
