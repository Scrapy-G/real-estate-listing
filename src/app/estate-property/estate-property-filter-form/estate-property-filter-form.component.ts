import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { EstatePropertyType } from 'src/app/shared/enums/estate-property-type.enum';
import { EstatePropertyFilter } from 'src/app/shared/models/estate-property-filter.model';

@Component({
  selector: 'app-estate-property-filter-form',
  templateUrl: './estate-property-filter-form.component.html',
  styleUrls: ['./estate-property-filter-form.component.scss'],
})
export class EstatePropertyFilterFormComponent {
  @Output() filterChanged = new EventEmitter<EstatePropertyFilter | null>();

  filterForm = new FormGroup({
    minPrice: new FormControl(''),
    maxPrice: new FormControl(''),
    type: new FormControl(''),
    bedrooms: new FormControl(''),
    bathrooms: new FormControl(''),
  });

  applyFilter(): void {
    const filter = this.filterForm.value as EstatePropertyFilter;
    this.filterChanged.emit(filter);
  }

  clearFilter(): void {
    this.filterForm.reset();
    this.filterChanged.emit(null);
  }

  public getPropertyTypes() {
    return Object.values(EstatePropertyType);
  }
}
