import { IAudit } from '../audit/audit.entity';

export interface ICompany extends IAudit {
  id?: string;
  name: string;
}
