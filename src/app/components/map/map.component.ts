import { Component, OnInit } from '@angular/core';

import * as L from 'leaflet';
import { MarkerService } from 'src/app/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  private map: any;
  

  private initMap(): void {

    // When opening the map this will be the view point
    this.map = L.map('map').setView([40,-100],5)

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    

    tiles.addTo(this.map);
  
  }

  constructor(private markerService : MarkerService) { }

  ngAfterViewInit():void{
    this.initMap();
    this.markerService.makesMarkers(this.map);
  }


  ngOnInit(): void {
    this.initMap();
  }
  

}
