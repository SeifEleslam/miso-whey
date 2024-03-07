import { Component, OnInit } from '@angular/core';
import { LocationsApiService } from '../../../../services/api/locations.api.service';
import { Observable, map } from 'rxjs';
import {
  GoogleMap,
  MapDirectionsRenderer,
  MapDirectionsService,
} from '@angular/google-maps';
@Component({
  selector: 'app-locations-map',
  templateUrl: './locations-map.component.html',
  styleUrl: './locations-map.component.scss',
})
export class LocationsMapComponent implements OnInit {
  constructor(
    private locationApi: LocationsApiService,
    private mapDirectionsService: MapDirectionsService
  ) {}
  directionsResults$?: Observable<google.maps.DirectionsResult | undefined>;
  locations: { lat: number; lng: number }[] = [];
  ngOnInit(): void {
    this.locationApi.locationsMapData().subscribe({
      next: (res) => {
        this.locations = res.data.map((marker) => ({
          lat: marker.latitude,
          lng: marker.longitude,
        }));
        const request: google.maps.DirectionsRequest = {
          destination: this.locations[0],
          origin: this.locations[1],
          travelMode: google.maps.TravelMode.DRIVING,
        };
        this.directionsResults$ = this.mapDirectionsService
          .route(request)
          .pipe(map((response) => response.result));
        console.log(this.locations);
      },
    });
  }
}
