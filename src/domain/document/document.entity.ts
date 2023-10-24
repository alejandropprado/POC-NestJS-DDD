import { IAudit } from '../audit/audit.entity';

export interface IDocument extends IAudit {
  id?: string;
  file: {
    type: string;
    path: string;
    expirationDate: Date;
  };
  documentTypeId: string;
  status: string;
  owner: {
    type: string;
    id: string;
  };
}
