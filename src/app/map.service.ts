import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root',
})
export class MarkerService {

  // Json file
  baseUrl: string = 'http://localhost:3000/PLNT20'
  
  constructor(private http: HttpClient) {}


  // Function to create markers
  makesMarkers(map: L.Map): void {
    this.http.get(this.baseUrl).subscribe((res : any) => {

      
      for(const c of res){
        const lat = c.Latitude;
        const long = c.Longitude;
       
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