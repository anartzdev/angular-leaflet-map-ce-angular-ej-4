import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgLeafletModule } from '@mugan86/ng-leaflet';
import { AppRoutingModule } from './app-routing.module';

import { IConfigMap } from '@mugan86/ng-leaflet/lib/models';
import { tileLayers } from '@mugan86/ng-leaflet';
import { RectangleComponent } from './1-rectangle/map.component';
import { CircleRectanglePolylineComponent } from './2-circle-rectangle-polyline/map.component';
import { PolygonAndHoleComponent } from './3-polygon-and-hole-polygon/map.component';
import { CustomIconComponent } from './4-custom-icon/map.component';

// Use fake location
// Developer Chrome tools / Settings / More tools / Sensors
const config: IConfigMap = {
  center: [35.08424, -106.64905],
  defaultLayer: {
    map: tileLayers.baseLayers.osmHot.map,
    atribution: tileLayers.baseLayers.osmHot.atribution,
  },
  watermark: {
    size: '40px',
    position: 'topright',
    border: true,
  },
  zoom: {
    zoomInTitle: 'Aumentar',
    zoomOutTitle: 'Disminuir',
  },
};

@NgModule({
  imports: [BrowserModule, NgLeafletModule.forRoot(config), AppRoutingModule],
  declarations: [
    AppComponent,
    RectangleComponent,
    CircleRectanglePolylineComponent,
    PolygonAndHoleComponent,
    CustomIconComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
