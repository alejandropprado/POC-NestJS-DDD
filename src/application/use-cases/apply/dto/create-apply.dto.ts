import { IApply, IInteractions } from 'src/domain/apply/entities/apply.entity';
import { IApproval } from 'src/domain/approval/approval.entity';
import {
  IEmployee,
  IPartialEmployee,
} from 'src/domain/employee/employee.entity';
import { IVehicle } from 'src/domain/vehicle/vehicle.entity';

export class CreateApplyRequestDTO implements Partial<IApply> {
  offersId: number;
  type: number;
  quantityCouriers: number | null;
  quantityVehicles: number | null;
  comments: string | null;
  provider: IPartialEmployee;
}

export class CreateApplyResponseDTO implements IApply {
  id?: string;
  offersId: number;
  type: number;
  quantityCouriers: number;
  quantityVehicles: number;
  comments: string;
  provider: IPartialEmployee;
  vehicles: IVehicle[];
  employees: IEmployee[];
  approvals: IApproval[];
  interactions: IInteractions[];
  isDelete: boolean;
  status: string;
  created: { by: IPartialEmployee; at: Date };
}
