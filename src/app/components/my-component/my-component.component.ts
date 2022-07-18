import { Component, OnInit } from '@angular/core';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import { fromLonLat } from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

import Projection from 'ol/proj/Projection';
import Static from 'ol/source/ImageStatic';
import {getCenter} from 'ol/extent';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  map: any;
  constructor() { }

  ngOnInit(): void {
    this.map = new Map({
      view: new View({
      center: fromLonLat([77.9629, 25.5937]),
      zoom: 5,
      }),
      
      layers: [
        new TileLayer({
          source: new OSM(),
        })
      ],

      target: 'ol-map',
    });

  }
}
