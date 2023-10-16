import { IFeature } from 'src/domain/vehicle/feature.entity';
import { IVehicleType } from 'src/domain/vehicle/vehicleType.entity';

export interface IVacancy {
  total: number;
  base: string;
  showTotal: boolean;
  documentRequired: boolean;
  veichle: {
    type: IVehicleType['name'];
    icon: IVehicleType['icon'];
    features: IFeature[];
  };
}
