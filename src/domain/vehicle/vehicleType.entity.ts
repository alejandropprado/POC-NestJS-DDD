import { IAudit } from '../audit/audit.entity';
import { IFeature } from './feature.entity';

export interface IVehicleType extends IAudit {
  name: string;
  icon: string;
  fetature: IFeature[];
}
