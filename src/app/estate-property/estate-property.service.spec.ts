import { take } from 'rxjs';
import { EstateSortOption } from '../shared/enums/estate-sort-option.enum';
import { EstatePropertyFilter } from '../shared/models/estate-property-filter.model';
import { EstateProperty } from '../shared/models/estate-property.model';
import { EstatePropertyData } from '../shared/models/estate-propery-data.model';
import { EstatePropertyService } from './estate-property.service';

describe('EstatePropertyService', () => {
  let service: EstatePropertyService;
  let estateProperties: EstateProperty[];

  beforeEach(() => {
    service = new EstatePropertyService();
    estateProperties = [
      {
        id: 1,
        address: '123 Main Street',
        price: 100,
        type: 'house',
        bedrooms: 3,
        bathrooms: 1,
      },
      {
        id: 2,
        address: '456 Oak Avenue',
        price: 50,
        type: 'condo',
        bedrooms: 2,
        bathrooms: 2,
      },
      {
        id: 3,
        address: '789 Pine Road',
        price: 200,
        type: 'house',
        bedrooms: 4,
        bathrooms: 3,
      },
    ];
  });

  describe('sortEstateProperties function', () => {
    it('should sort by price in ascending order', () => {
      const sortOption = 'price-asc';

      const sortedProperties = service.sortEstateProperties(
        estateProperties,
        sortOption,
      );

      expect(sortedProperties).toEqual([
        {
          id: 2,
          address: '456 Oak Avenue',
          price: 50,
          type: 'condo',
          bedrooms: 2,
          bathrooms: 2,
        },
        {
          id: 1,
          address: '123 Main Street',
          price: 100,
          type: 'house',
          bedrooms: 3,
          bathrooms: 1,
        },
        {
          id: 3,
          address: '789 Pine Road',
          price: 200,
          type: 'house',
          bedrooms: 4,
          bathrooms: 3,
        },
      ]);
    });

    it('should sort by price in descending order', () => {
      const sortOption = 'price-desc';

      const sortedProperties = service.sortEstateProperties(
        estateProperties,
        sortOption,
      );

      expect(sortedProperties).toEqual([
        {
          id: 3,
          address: '789 Pine Road',
          price: 200,
          type: 'house',
          bedrooms: 4,
          bathrooms: 3,
        },
        {
          id: 1,
          address: '123 Main Street',
          price: 100,
          type: 'house',
          bedrooms: 3,
          bathrooms: 1,
        },
        {
          id: 2,
          address: '456 Oak Avenue',
          price: 50,
          type: 'condo',
          bedrooms: 2,
          bathrooms: 2,
        },
      ]);
    });

    it('should sort by bedrooms in ascending order', () => {
      const sortOption = 'bedrooms-asc';

      const sortedProperties = service.sortEstateProperties(
        estateProperties,
        sortOption,
      );

      expect(sortedProperties).toEqual([
        {
          id: 2,
          address: '456 Oak Avenue',
          price: 50,
          type: 'condo',
          bedrooms: 2,
          bathrooms: 2,
        },
        {
          id: 1,
          address: '123 Main Street',
          price: 100,
          type: 'house',
          bedrooms: 3,
          bathrooms: 1,
        },
        {
          id: 3,
          address: '789 Pine Road',
          price: 200,
          type: 'house',
          bedrooms: 4,
          bathrooms: 3,
        },
      ]);
    });

    it('should sort by bedrooms in descending order', () => {
      const sortOption = 'bedrooms-desc';

      const sortedProperties = service.sortEstateProperties(
        estateProperties,
        sortOption,
      );

      expect(sortedProperties).toEqual([
        {
          id: 3,
          address: '789 Pine Road',
          price: 200,
          type: 'house',
          bedrooms: 4,
          bathrooms: 3,
        },
        {
          id: 1,
          address: '123 Main Street',
          price: 100,
          type: 'house',
          bedrooms: 3,
          bathrooms: 1,
        },
        {
          id: 2,
          address: '456 Oak Avenue',
          price: 50,
          type: 'condo',
          bedrooms: 2,
          bathrooms: 2,
        },
      ]);
    });

    it('should sort by bathrooms in ascending order', () => {
      const sortOption = 'bathrooms-asc';

      const sortedProperties = service.sortEstateProperties(
        estateProperties,
        sortOption,
      );

      expect(sortedProperties).toEqual([
        {
          id: 1,
          address: '123 Main Street',
          price: 100,
          type: 'house',
          bedrooms: 3,
          bathrooms: 1,
        },
        {
          id: 2,
          address: '456 Oak Avenue',
          price: 50,
          type: 'condo',
          bedrooms: 2,
          bathrooms: 2,
        },
        {
          id: 3,
          address: '789 Pine Road',
          price: 200,
          type: 'house',
          bedrooms: 4,
          bathrooms: 3,
        },
      ]);
    });

    it('should sort by bathrooms in descending order', () => {
      const sortOption = 'bathrooms-desc';

      const sortedProperties = service.sortEstateProperties(
        estateProperties,
        sortOption,
      );

      expect(sortedProperties).toEqual([
        {
          id: 3,
          address: '789 Pine Road',
          price: 200,
          type: 'house',
          bedrooms: 4,
          bathrooms: 3,
        },
        {
          id: 2,
          address: '456 Oak Avenue',
          price: 50,
          type: 'condo',
          bedrooms: 2,
          bathrooms: 2,
        },
        {
          id: 1,
          address: '123 Main Street',
          price: 100,
          type: 'house',
          bedrooms: 3,
          bathrooms: 1,
        },
      ]);
    });
  });

  describe('filterEstateProperties function', () => {
    it('should return all properties if no filters set', () => {
      const filter = {};

      const properties = service.filterEstateProperties(
        estateProperties,
        filter,
      );

      expect(properties).toEqual(estateProperties);
    });

    it('should filter by max price', () => {
      const filter = { maxPrice: 100 };

      const properties = service.filterEstateProperties(
        estateProperties,
        filter,
      );

      expect(properties).toEqual(
        jasmine.arrayContaining([
          {
            id: 1,
            address: '123 Main Street',
            price: 100,
            type: 'house',
            bedrooms: 3,
            bathrooms: 1,
          },
          {
            id: 2,
            address: '456 Oak Avenue',
            price: 50,
            type: 'condo',
            bedrooms: 2,
            bathrooms: 2,
          },
        ]),
      );
    });

    it('should filter by minimum price', () => {
      const filter = { minPrice: 100 };

      const properties = service.filterEstateProperties(
        estateProperties,
        filter,
      );

      expect(properties).toEqual(
        jasmine.arrayContaining([
          {
            id: 1,
            address: '123 Main Street',
            price: 100,
            type: 'house',
            bedrooms: 3,
            bathrooms: 1,
          },
          {
            id: 3,
            address: '789 Pine Road',
            price: 200,
            type: 'house',
            bedrooms: 4,
            bathrooms: 3,
          },
        ]),
      );
    });

    it('should filter by property type', () => {
      const filter: EstatePropertyFilter = { type: 'condo' };

      const properties = service.filterEstateProperties(
        estateProperties,
        filter,
      );

      expect(properties).toEqual([
        {
          id: 2,
          address: '456 Oak Avenue',
          price: 50,
          type: 'condo',
          bedrooms: 2,
          bathrooms: 2,
        },
      ]);
    });

    it('should filter by bathroom count', () => {
      const filter = { bathrooms: 1 };

      const properties = service.filterEstateProperties(
        estateProperties,
        filter,
      );

      expect(properties).toEqual([
        {
          id: 1,
          address: '123 Main Street',
          price: 100,
          type: 'house',
          bedrooms: 3,
          bathrooms: 1,
        },
      ]);
    });

    it('should filter by bedroom count', () => {
      const filter = { bedrooms: 3 };

      const properties = service.filterEstateProperties(
        estateProperties,
        filter,
      );

      expect(properties).toEqual([
        {
          id: 1,
          address: '123 Main Street',
          price: 100,
          type: 'house',
          bedrooms: 3,
          bathrooms: 1,
        },
      ]);
    });
  });

  describe('REST operations', () => {
    let propertyData: EstatePropertyData;

    beforeEach(() => {
      propertyData = {
        address: 'Rainvow Street',
        price: 750,
        type: 'apartment',
        bedrooms: 3,
        bathrooms: 1,
      };
    });

    describe('addProperty function', () => {
      it('should add estate property', () => {
        const propertiesCount = service.getAllProperties().length;

        service.addProperty(propertyData);

        const properties = service.getAllProperties();
        expect(properties.length).toBe(propertiesCount + 1);
        expect(properties).toContain(jasmine.objectContaining(propertyData));
      });

      it('should return estate property', () => {
        const estateProperty = service.addProperty(propertyData);

        expect(estateProperty).toEqual(jasmine.objectContaining(propertyData));
      });
    });

    describe('getAllProperties function', () => {
      it('should return all properties', () => {
        const propertiesCount = service.getAllProperties().length;
        service.addProperty(propertyData);

        const properties = service.getAllProperties();

        expect(properties.length).toBe(propertiesCount + 1);
      });

      it('should call filterEstateProperties function with filter if options has filter', () => {
        spyOn(service, 'filterEstateProperties');
        const filter = { minPrice: 100 };

        service.getAllProperties({ filter });

        expect(service.filterEstateProperties).toHaveBeenCalledWith(
          jasmine.any(Array),
          filter,
        );
      });

      it('should call sortEstateProperties function with sort option if options has sort', () => {
        spyOn(service, 'sortEstateProperties');
        const sort = 'price-asc' as EstateSortOption;

        service.getAllProperties({ sort });

        expect(service.sortEstateProperties).toHaveBeenCalledWith(
          jasmine.any(Array),
          sort,
        );
      });
    });

    it('getProperty function should return correct estate property', () => {
      const estateProperty = service.addProperty(propertyData);

      const expectedProperty = service.getProperty(estateProperty.id);

      expect(estateProperty).toEqual(expectedProperty as EstateProperty);
    });

    it('updateProperty function should update estate property correctly', () => {
      const estateProperty = service.addProperty(propertyData);

      service.updateProperty(estateProperty.id, { address: 'Long lane' });

      const updatedEstateProperty = service.getProperty(estateProperty.id)!;
      expect(updatedEstateProperty).toEqual(
        jasmine.objectContaining({ address: 'Long lane' }),
      );
    });

    it('deleteProperty function should remove correct estate property', () => {
      const estateProperty = service.addProperty(propertyData);
      const propertiesCount = service.getAllProperties().length;

      service.deleteProperty(estateProperty.id);

      const properties = service.getAllProperties();
      expect(properties.length).toBe(propertiesCount - 1);
      expect(properties).not.toContain(estateProperty);
    });
  });
});
