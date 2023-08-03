import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { EstateProperty } from '../shared/models/estate-property.model';
import { EstatePropertyData } from '../shared/models/estate-propery-data.model';
import { EstatePropertyFilter } from '../shared/models/estate-property-filter.model';
import { EstateSortOption } from '../shared/enums/estate-sort-option.enum';
// use this for testing by setting estateProperties subject
import dummyPropertyData from './estate-property-data.json';

@Injectable({
  providedIn: 'root',
})
export class EstatePropertyService {
  // start at 99 so ids from dummy data aren't copied
  private currentPropertyId = 99;

  // pass empty array to start with empty list
  private estateProperties = new BehaviorSubject<EstateProperty[]>(
    dummyPropertyData as EstateProperty[],
  );

  constructor() {}

  addProperty(estatePropertyData: EstatePropertyData) {
    const estateProperties = this.estateProperties.value;
    const newProperty: EstateProperty = {
      ...estatePropertyData,
      id: this.currentPropertyId,
    };
    this.currentPropertyId += 1;

    this.estateProperties.next([...estateProperties, newProperty]);
    return newProperty;
  }

  getProperty(id: number): EstateProperty | undefined {
    const estateProperties = this.estateProperties.value;
    return estateProperties.find((estateProperty) => estateProperty.id == id);
  }

  getAllProperties(options?: {
    filter?: EstatePropertyFilter | null;
    sort?: EstateSortOption | null;
  }): EstateProperty[] {
    let estateProperties = this.estateProperties.value;

    if (options?.filter) {
      estateProperties = this.filterEstateProperties(
        estateProperties,
        options.filter,
      );
    }

    if (options?.sort) {
      estateProperties = this.sortEstateProperties(
        estateProperties,
        options.sort,
      );
    }

    return estateProperties;
  }

  updateProperty(id: number, estatePropertyData: Partial<EstatePropertyData>) {
    const estateProperties = this.estateProperties.value;
    const newEstateProperties = estateProperties.map((estateProperty) => {
      if (estateProperty.id !== id) {
        return estateProperty;
      }

      return {
        ...estateProperty,
        ...estatePropertyData,
      };
    });

    this.estateProperties.next(newEstateProperties);
  }

  deleteProperty(id: number): void {
    const estateProperties = this.estateProperties.value;
    const newEstateProperties = estateProperties.filter(
      (estateProperty) => estateProperty.id !== id,
    );
    this.estateProperties.next(newEstateProperties);
  }

  filterEstateProperties(
    properties: EstateProperty[],
    filter: EstatePropertyFilter,
  ): EstateProperty[] {
    return properties.filter((property: EstateProperty) => {
      const isMinPriceMatch = !filter.minPrice || property.price >= filter.minPrice;
      const isMaxPriceMatch = !filter.maxPrice || property.price <= filter.maxPrice;
      const isPriceInRange = isMinPriceMatch && isMaxPriceMatch;

      const isPropertyTypeMatch = !filter.type || property.type == filter.type;
      const isBedroomsMatch = !filter.bedrooms || property.bedrooms === filter.bedrooms;
      const isBathroomsMatch = !filter.bathrooms || property.bathrooms === filter.bathrooms;

      return (
        isPriceInRange &&
        isPropertyTypeMatch &&
        isBedroomsMatch &&
        isBathroomsMatch
      );
    });
  }

  sortEstateProperties(
    properties: EstateProperty[],
    sortOption: `${EstateSortOption}`,
  ) {
    const [field, sortOrder] = sortOption.split('-');
    const sortField = field as 'price' | 'bedrooms' | 'bathrooms';

    const compareFn = (
      propertyA: EstateProperty,
      propertyB: EstateProperty,
    ) => {
      if (sortOrder === 'asc') {
        return propertyA[sortField] - propertyB[sortField];
      } else {
        return propertyB[sortField] - propertyA[sortField];
      }
    };

    return properties.sort(compareFn);
  }
}
