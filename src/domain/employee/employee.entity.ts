import { IAddress } from '../address/address.entity';
import { IAudit } from '../audit/audit.entity';

export interface IEmployee extends IAudit {
  id?: string;
  providerId?: string | null;
  parentId?: string | null;
  name: string;
  lastname1: string;
  lastname2?: string | null;
  numberRut: string;
  phone: string;
  email: string;
  address: IAddress;
  status: number;
  isDeleted: boolean;
  subcontract: boolean;
  contractType: number;
  type: 'courier' | 'peoneta' | 'provider' | string;
  blocked: {
    isBlocked: boolean;
    reason: string;
  };
}

export interface IPartialEmployee extends Partial<IEmployee> {
  id?: string;
  name: string;
  lastname1: string;
  lastname2?: string | null;
  numberRut: string;
  phone: string;
  email: string;
  status: number;
}
