import { Injectable } from '@angular/core';
import { MainApiService } from './main.api.service';
import { LocationsApi } from '../../interfaces/models/marker';

@Injectable()
export class LocationsApiService {
  locationsEP = 'Location/GetAllLocations';
  constructor(private api: MainApiService) {}

  locationsMapData() {
    return this.api.fetchData<undefined, LocationsApi>(
      'GET',
      this.locationsEP,
      undefined,
      undefined
    );
  }
  //   usersChartData() {
  //     return this.api.fetchData<undefined, UsersChartAPIData>(
  //       'GET',
  //       this.usersChartEP,
  //       undefined,
  //       undefined
  //     );
  //   }
}
