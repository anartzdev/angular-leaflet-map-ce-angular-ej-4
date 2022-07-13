import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RectangleComponent } from './1-rectangle/map.component';
import { CircleRectanglePolylineComponent } from './2-circle-rectangle-polyline/map.component';
import { PolygonAndHoleComponent } from './3-polygon-and-hole-polygon/map.component';
import { CustomIconComponent } from './4-custom-icon/map.component';

const routes: Routes = [
  { path: '', component: RectangleComponent },
  {
    path: 'circle-rectangle-polyline',
    component: CircleRectanglePolylineComponent,
  },
  { path: 'polygon-and-with-hole', component: PolygonAndHoleComponent },
  { path: 'custom-icon', component: CustomIconComponent },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
