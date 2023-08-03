import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstatePropertyListComponent } from './estate-property-list/estate-property-list.component';
import { EstatePropertyCreateComponent } from './estate-property-create/estate-property-create.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: EstatePropertyListComponent },
  { path: 'new', component: EstatePropertyCreateComponent },
  { path: ':id/edit', component: EstatePropertyCreateComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstatePropertyRoutingModule {}
