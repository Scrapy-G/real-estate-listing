import { EstatePropertyType } from '../enums/estate-property-type.enum';

export interface EstateProperty {
  id: number;
  address: string;
  price: number;
  type: `${EstatePropertyType}`;
  bedrooms: number;
  bathrooms: number;
  description?: string;
}
