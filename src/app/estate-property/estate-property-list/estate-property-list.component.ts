import { Component, OnInit } from '@angular/core';

import { EstatePropertyService } from '../estate-property.service';
import { EstateProperty } from 'src/app/shared/models/estate-property.model';
import { EstatePropertyFilter } from 'src/app/shared/models/estate-property-filter.model';
import { EstateSortOption } from 'src/app/shared/enums/estate-sort-option.enum';

@Component({
  selector: 'app-estate-property-list',
  templateUrl: './estate-property-list.component.html',
  styleUrls: ['./estate-property-list.component.scss'],
})
export class EstatePropertyListComponent implements OnInit {
  public estateProperties: EstateProperty[] = [];

  public sortOption = EstateSortOption.PriceAscending;

  private filter: EstatePropertyFilter | null = null;

  constructor(private estatePropertyService: EstatePropertyService) {}

  ngOnInit(): void {
    this.getEstateProperties();
  }

  public onFilterChange(filter: EstatePropertyFilter | null) {
    this.filter = filter;
    this.getEstateProperties();

  }

  onSortChange(sortOption: EstateSortOption) {
    this.sortOption = sortOption;
    this.getEstateProperties();
  }

  private getEstateProperties() {
    this.estateProperties = this.estatePropertyService.getAllProperties({
      filter: this.filter,
      sort: this.sortOption,
    });
  }
}
