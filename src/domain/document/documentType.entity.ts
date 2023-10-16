import { IAudit } from '../audit/audit.entity';

export interface IDocumentType extends IAudit {
  id?: string;
  name: string;
  nameStandard: string | null;
  blockOperation: boolean | null;
  blockPayment: boolean | null;
  dateLimiteUpload: number;
  daysToNotificationExpires: number;
  periodicity: number | null;
  requiredTo: string;
  documentExpired: boolean | null;
  documentExtension: string;
  groupedBy: string[];
  isDelete: boolean;
}
