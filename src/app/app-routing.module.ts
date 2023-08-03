import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'properties',
    loadChildren: () =>
      import('./estate-property/estate-property.module').then(
        (m) => m.EstatePropertyModule,
      ),
  },
  { path: '**', redirectTo: 'properties', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
