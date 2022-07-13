# Angular Leaflet Map - Charla Técnica AT Sistemas - Expandir opciones no implementadas en la librería

[Editado en Stackblitz⚡️](https://stackblitz.com/edit/angular-leaflet-map-ce-angular-ej-4)

En este cuarto proyecto trabajaremos con 4 proyectos. El objetivo principal es enseñar en todos ellos la misma forma de obtener el objeto del mapa con las configuraciones que le asignemos para poder expandirlo con otras opciones.

Lo que hay que tener en cuenta básicamente es lo siguiente:

## En el HTML, debemos de añadir el evento para recibir la información del mapa

Tenemos que añadir el evento **setUpMap** que servirá para recibir el evento desde el hijo y con ello, le debemos de añadir una función que podría ser por ejemplo **setMap** (esto es opcional, lo de **setUpMap** no) y pasarle el evento.
```html
<ng-leaflet-map
  [mapId]="'marker__basic__map'"
  (setUpMap)="setMap($event)"
></ng-leaflet-map>
```

## En el componente obtener el evento y con ello tener opción de trabajar con ello

Ahora debemos usar esta base y con ello, haremos posteriormente todas las amplicaciones con el objeto del mapa que traemos como evento desde el hijo.

```typescript
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
    // Tomamos el evento del mapa actual con configuraciones adicionales para usar para expandir con información de la documentación: https://leafletjs.com/reference.html
    this.map = $event;

    // Código para ampliar con funcionalidades no implementadas en la librería
   
  }
}

```
## Ejemplos que se muestran con esa base
* Añadir un rectángulo.
* Añadir rectángulos, marcadores, círculos, líneas (Polyline).
* Polígonos y huecos en polígonos
* Uso de iconos personalizados.
