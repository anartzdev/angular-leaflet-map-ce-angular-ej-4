import { Component } from '@angular/core';
import { LatLngBounds, rectangle, Map } from 'leaflet';

@Component({
  selector: 'app-default-layer',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class RectangleComponent {
  map!: Map;

  setMap($event: Map) {
    // Take current map with add configurations to use to expand with doc info
    this.map = $event;

    // Implement options that NOT implement in library. Although not implement, we must expand with exist more functionalities
    const bounds = new LatLngBounds([
      [43.2, -2.273474],
      [43.1736979, -2.4173475],
    ]);
    // Crear un rectángulo naranja a partir de los límites especificados
    // Create rectangle with specify limits
    const rectangleOne = rectangle(bounds, {
      color: '#ff7800',
      weight: 1,
      stroke: true,
    }).addTo(this.map);

    // Hacemos zoom y centramos al área que que queremos movernos
    // Esto lo usamos si dibujamos un rectángulo, si no, usamos la ubicación inicial
    // al crear el mapa
    // Al estar con un rectángulo,
    // vamos a coger la zona que ocupa haciendo un rectangulo imaginario donde obtenemos
    // las coordenadas de arriba-izquierda, arriba-derecha, abajo-izquierda y abajo-derecha
    // Con coger por ejemplo Norte-Este y Sur-Oeste, ya acota el rectángulo
    this.map.fitBounds([
      [
        rectangleOne.getBounds().getNorthEast().lat,
        rectangleOne.getBounds().getNorthEast().lng,
      ],
      [
        rectangleOne.getBounds().getSouthWest().lat,
        rectangleOne.getBounds().getSouthWest().lng,
      ],
    ]);
  }
}
