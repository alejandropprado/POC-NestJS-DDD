import { IAudit } from '../audit/audit.entity';

export interface IBase extends IAudit {
  name: string;
  code: string;
  address: string;
}

export interface ILocality extends IAudit {
  id?: string;
  name: string;
  code: IBase[];
  isDelete: boolean;
}
