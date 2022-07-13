import { Component } from '@angular/core';
import { Icon, Map, marker } from 'leaflet';
import { drinkWaterSoraluze } from './drink-waters.data';

@Component({
  selector: 'app-route',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class CustomIconComponent {
  map!: Map;

  setMap($event: Map) {
    // Take current map with add configurations to use to expand with doc info
    this.map = $event;

    const drinkWaterIcon = new Icon({
      iconUrl:
        'https://raw.githubusercontent.com/leaflet-maps-course/resources/main/markers/icons/custom/drink_water.png',
      shadowUrl:
        'https://raw.githubusercontent.com/leaflet-maps-course/resources/main/markers/icons/custom/drink_water_shadow.png',
      iconSize: [41, 41],
      iconAnchor: [20, 41],
      popupAnchor: [1, -38],
      shadowSize: [41, 41],
    });

    drinkWaterSoraluze.map((point) => {
      marker([point.lat, point.lon], { icon: drinkWaterIcon })
        .addTo(this.map)
        .bindPopup(point.name);
    });

    const drinkWaterEibar = marker([43.1837883, -2.4719938], {
      icon: drinkWaterIcon,
    })
      .addTo(this.map)
      .bindPopup('Untzaga plaza');

    this.map.fitBounds([
      ...drinkWaterSoraluze.map(
        (point) => [point.lat, point.lon] as [number, number]
      ),
      [drinkWaterEibar.getLatLng().lat, drinkWaterEibar.getLatLng().lng],
    ]);
  }
}
