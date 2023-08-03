import { EstatePropertyType } from "../enums/estate-property-type.enum";

export interface EstatePropertyFilter {
  minPrice?: number;
  maxPrice?: number;
  type?: `${EstatePropertyType}`;
  bedrooms?: number;
  bathrooms?: number;
}