import { APIStandard } from './apiStandard';

export interface Marker {
  latitude: number;
  longitude: number;
}

export interface LocationsApi extends APIStandard {
  data: Marker[];
}
