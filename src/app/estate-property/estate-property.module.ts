import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list'
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';

import { EstatePropertyRoutingModule } from './estate-property-routing.module';
import { EstatePropertyListComponent } from './estate-property-list/estate-property-list.component';
import { EstatePropertyListItemComponent } from './estate-property-list-item/estate-property-list-item.component';
import { EstatePropertyCreateComponent } from './estate-property-create/estate-property-create.component';
import { EstatePropertyFilterFormComponent } from './estate-property-filter-form/estate-property-filter-form.component';
import { EstatePropertySortComponent } from './estate-property-sort/estate-property-sort.component';

@NgModule({
  declarations: [
    EstatePropertyListComponent,
    EstatePropertyListItemComponent,
    EstatePropertyCreateComponent,
    EstatePropertyFilterFormComponent,
    EstatePropertySortComponent,
  ],
  imports: [
    CommonModule,
    EstatePropertyRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatChipsModule,
  ],
})
export class EstatePropertyModule {}
