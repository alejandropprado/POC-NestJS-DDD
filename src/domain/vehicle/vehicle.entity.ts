import { IAudit } from '../audit/audit.entity';
import { IVehicleType } from './vehicleType.entity';

export interface IVehicle extends IAudit {
  id?: string;
  providerId: string;
  plate: string;
  year: string;
  model: string;
  brand: string;
  type: {
    name: IVehicleType['name'];
    icon: IVehicleType['icon'];
  };
  loadCapacity: number;
  color: string;
  gasType: string;
  engineNumber: string;
  chassisNumber: string;
  blocked: {
    isBlocked: boolean;
    reason: string;
  };
}
