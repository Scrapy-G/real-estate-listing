import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { EstatePropertyService } from '../estate-property.service';
import { EstatePropertyData } from 'src/app/shared/models/estate-propery-data.model';
import { EstatePropertyType } from 'src/app/shared/enums/estate-property-type.enum';

@Component({
  selector: 'app-estate-property-create',
  templateUrl: './estate-property-create.component.html',
  styleUrls: ['./estate-property-create.component.scss'],
})
export class EstatePropertyCreateComponent implements OnInit {
  public editPropertyId: number | null = null; //property being edited

  public estatePropertyForm = new FormGroup({
    address: new FormControl('', Validators.required),
    price: new FormControl('', [Validators.required, Validators.min(0)]),
    type: new FormControl('', Validators.required),
    bedrooms: new FormControl('', [Validators.required, Validators.min(0)]),
    bathrooms: new FormControl('', [Validators.required, Validators.min(0)]),
    description: new FormControl(''),
  });

  constructor(
    private estatePropertyService: EstatePropertyService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (!id) return;

      this.editPropertyId = parseInt(id);
      const estateProperty = this.estatePropertyService.getProperty(
        this.editPropertyId,
      );

      this.estatePropertyForm.patchValue(estateProperty as any);
    });
  }

  public getFormControl(control: string) {
    return this.estatePropertyForm.get(control)!;
  }

  public saveProperty() {
    if (!this.estatePropertyForm.valid) return;

    const newEstateProperty: EstatePropertyData = this.estatePropertyForm
      .value as any;

    if (this.editPropertyId) {
      this.estatePropertyService.updateProperty(
        this.editPropertyId,
        newEstateProperty,
      );
    } else {
      this.estatePropertyService.addProperty(newEstateProperty);
    }

    this.router.navigate(['/properties']);
  }

  public getPropertyTypes() {
    return Object.values(EstatePropertyType);
  }
}
