import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EstateSortOption } from 'src/app/shared/enums/estate-sort-option.enum';

@Component({
  selector: 'app-estate-property-sort',
  templateUrl: './estate-property-sort.component.html',
  styleUrls: ['./estate-property-sort.component.scss'],
})
export class EstatePropertySortComponent {
  @Input() value = EstateSortOption.PriceAscending;

  @Output() sortChange = new EventEmitter<EstateSortOption>();

  public selectedSortOption: EstateSortOption;

  public sortOptions = [
    {
      label: 'Price: lowest first',
      value: EstateSortOption.PriceAscending,
    },
    {
      label: 'Price: highest first',
      value: EstateSortOption.PriceDescending,
    },
    {
      label: 'Bedrooms: highest first',
      value: EstateSortOption.BedroomDescending,
    },
    {
      label: 'Bedrooms: lowest first',
      value: EstateSortOption.BathroomAscending,
    },
    {
      label: 'Bathrooms: highest first',
      value: EstateSortOption.BathroomDescending,
    },
    {
      label: 'Bathrooms: lowest first',
      value: EstateSortOption.BathroomAscending,
    },
  ];

  constructor() {
    this.selectedSortOption = this.value;
  }

  public onSortChange() {
    this.sortChange.emit(this.selectedSortOption);
  }
}
