export interface IAddress {
  street: string;
  street2: string;
  number: string;
  city: string;
  commune: string;
  zipCode: string;
  geoReference?: object | null;
}
