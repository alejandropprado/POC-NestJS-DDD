import { IAudit } from '../audit/audit.entity';
import { IPartialEmployee } from '../employee/employee.entity';

export interface IApproval extends IAudit {
  id?: string;
  typeApproval: number;
  status: number;
  comments: {
    byBlue: string;
    byProvider: string;
  };
  isDelete: boolean;
  employee: IPartialEmployee;
}
