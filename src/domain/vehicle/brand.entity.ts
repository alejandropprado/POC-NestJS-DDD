import { IAudit } from '../audit/audit.entity';

export interface IBrand extends IAudit {
  id?: string;
  name: string;
  isDeleted: boolean;
}
