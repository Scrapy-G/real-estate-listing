import { Component, Input } from '@angular/core';

import { EstateProperty } from 'src/app/shared/models/estate-property.model';

@Component({
  selector: 'app-estate-property-list-item',
  templateUrl: './estate-property-list-item.component.html',
  styleUrls: ['./estate-property-list-item.component.scss'],
})
export class EstatePropertyListItemComponent {
  @Input() estateProperty!: EstateProperty;
}
