import { IApproval } from '../../approval/approval.entity';
import { IAudit } from '../../audit/audit.entity';
import { IEmployee, IPartialEmployee } from '../../employee/employee.entity';
import { IVehicle } from '../../vehicle/vehicle.entity';

export interface IApply extends IAudit {
  id?: string;
  offersId: number;
  type: number;
  quantityCouriers: number | null;
  quantityVehicles: number | null;
  comments: string | null;
  provider: IPartialEmployee;

  vehicles: IVehicle[];
  employees: IEmployee[];
  approvals: IApproval[];
  interactions: IInteractions[];

  isDelete: boolean;
  status: string;
}

export interface IInteractions extends IAudit {
  type: string;
  comments: string | null;
}
