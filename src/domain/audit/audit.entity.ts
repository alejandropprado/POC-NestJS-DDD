import { IPartialEmployee } from '../employee/employee.entity';

export interface IAudit {
  created: {
    by: IPartialEmployee;
    at: Date;
  };
  updated?: {
    by: IPartialEmployee;
    at: Date;
  };
  deleted?: {
    by: IPartialEmployee;
    at: Date;
  };
}
