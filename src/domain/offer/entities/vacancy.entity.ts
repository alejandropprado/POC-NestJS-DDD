import { IFeature } from 'src/domain/vehicle/feature.entity';
import { IVehicleType } from 'src/domain/vehicle/vehicleType.entity';

export interface IVehicleVacancy {
  type: IVehicleType['name'];
  icon: IVehicleType['icon'];
  features: IFeature[];
}
export interface IVacancy {
  total: number;
  base: string;
  showTotal: boolean;
  documentRequired: boolean;
  veichle: IVehicleVacancy;
}
