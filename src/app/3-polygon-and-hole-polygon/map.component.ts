import { Component } from '@angular/core';

import { polygon, Map } from 'leaflet';
@Component({
  selector: 'app-route-with-markers',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class PolygonAndHoleComponent {
  map!: Map;

  setMap($event: Map) {
    // Take current map with add configurations to use to expand with doc info
    this.map = $event;

    const latlngs: [number, number][][] = [
      [
        [37, -109.05], // Inferior izquierdo
        [41.31082388091818, -112.06054687499999], // Superior izquierda izquierda (más al fondo)
        [41, -109.03], // Superior izquierdo
        [41, -102.05], // Superior derecha
        [37, -102.04], // Inferior derecho
      ], // Polígono
      [
        [37.29, -108.58], // Inferior derecha
        [40.71, -108.58], // Superior derecha
        [40.71, -102.5], // Superior izquierda
        [37.29, -102.5], // Inferior izquierda
      ], // hole
    ];

    polygon(latlngs, { color: 'red' }).addTo(this.map);

    // Denver polígono

    const latlngBoundsDenver: [number, number][][] = [
      [
        [-105.03410339355469, 39.74521015328692],
        [-105.02174377441406, 39.72039163613398],
        [-104.95101928710938, 39.72461669561139],
        [-104.91325378417969, 39.74626606218367],
        [-104.92904663085938, 39.772130775078956],
        [-105.00251770019531, 39.77054750039529],
        [
          -105.03410339355469, // longitud
          39.74521015328692, // latitud
        ],
      ].map((point) => point.reverse() as [number, number]),
      [
        [-104.95977401733398, 39.74375825213213],
        [-104.9410629272461, 39.74375825213213],
        [-104.9410629272461, 39.754448807459376],
        [-104.95977401733398, 39.754448807459376],
        [-104.95977401733398, 39.74375825213213],
      ].map((point) => point.reverse() as [number, number]),
    ];

    polygon(latlngBoundsDenver, {
      color: 'yellow',
      fillColor: 'orange',
    })
      .addTo(this.map)
      .bindPopup('Denver');

    // zoom the map to the polygon

    this.map.fitBounds(latlngs[0]);
  }
}
