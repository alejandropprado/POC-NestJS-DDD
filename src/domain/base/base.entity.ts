import { IAudit } from '../audit/audit.entity';

export interface IBase extends IAudit {
  id?: string;
  name: string;
  code: string;
  isDelete: boolean;
  structureId: number;
}
