import { IAudit } from '../audit/audit.entity';

export interface IModel extends IAudit {
  id?: string;
  name: string;
  brandId: number;
  isDeleted: boolean;
}
