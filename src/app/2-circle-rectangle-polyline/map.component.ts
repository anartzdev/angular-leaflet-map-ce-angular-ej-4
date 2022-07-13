import { Component } from '@angular/core';
import {
  LatLngBounds,
  rectangle,
  Map,
  circle,
  polyline,
  marker,
} from 'leaflet';

@Component({
  selector: 'app-external-layer-default',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class CircleRectanglePolylineComponent {
  map!: Map;

  setMap($event: Map) {
    // Take current map with add configurations to use to expand with doc info
    this.map = $event;

    // 1.- Añadir marcador de Londres
    marker([51.50732, -0.12859]).addTo(this.map).bindPopup(`
          <h5>Londres</h5>
          <p>Capital de Inglaterra y del Reino Unido<br/>
          <a href="https://es.wikipedia.org/wiki/Londres" target="_blank">
              Más información
          </a>
          </p>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/London_City_Hall.jpg/976px-London_City_Hall.jpg" />
`);
    // 2.- Londres de 1806
    rectangle(
      new LatLngBounds([
        [51.5335, 0.0005],
        [51.4698, -0.2134],
      ]),
      {
        color: '#36b6c7',
      }
    ).addTo(this.map);

    // 3.- Big ben
    circle([51.50069, -0.12459], {
      color: 'green',
      weight: 3,
      fillOpacity: 0.5,
      radius: 10,
    })
      .addTo(this.map)
      .bindTooltip('Big Ben');

    // 4.- Camden Town

    circle([51.5423, -0.1405], {
      color: 'pink',
      weight: 6,
      fillColor: 'blue',
      fillOpacity: 0.5,
      radius: 500,
    })
      .addTo(this.map)
      .bindTooltip('Camden Town');

    // 5.- Trazado de la avenida de Buckingham a los jardines Grosvenor

    const roadLinesBounds: [number, number][] = [
      [51.49103, -0.1494],
      [51.49251, -0.14779],
      [51.49382, -0.14686],
      [51.49411, -0.14676],
      [51.49591, -0.14548],
      [51.49796, -0.14683],
    ];

    polyline(roadLinesBounds, { weight: 8, color: '#e8c889' })
      .addTo(this.map)
      .bindPopup('Avenida Buckingham => Jardines Grosvenor')
      .openPopup();

    this.map.fitBounds([
      [51.5581, 0.0012],
      [51.4698, -0.2134],
    ]);
  }
}
