import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root',
})
export class MarkerService {
  baseUrl: string = 'http://localhost:3000/PLNT20'
  constructor(private http: HttpClient) {}

  makesMarkers(map: L.Map): void {
    this.http.get(this.baseUrl).subscribe((res : any) => {

      
      for(const c of res){
        const lat = c.latitude;
        const long = c.longtitude;
       
        const marker = L.marker([lat,long]).addTo(map);
        /*marker.bindPopup( `<center>
                            <p>
                              <strong>'${c.PlantID}'</strong>
                            </p>
                          </center>`
        ).openPopup() */
      }

    });
  }
}