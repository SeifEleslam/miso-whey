import { Injectable } from '@angular/core';
import { Params } from '../interfaces/models/params';
import { PAGE_SIZE_OPTIONS } from '../interfaces/consts/params';

@Injectable()
export class ParamsService {
  constructor() {}

  reviewParams(params: any, paramsType: string[]): [boolean, Partial<Params>] {
    let newParams: Record<string, any> = {};
    let valid = true;
    for (let key in params) {
      if (params.hasOwnProperty(key)) {
        if (paramsType.includes(key) && params[key]) {
          newParams[key] = params[key];
        } else {
          valid = false;
        }
      }
    }
    return [
      +params['pageNumber'] > 0 &&
        PAGE_SIZE_OPTIONS.includes(+params['pageSize']) &&
        valid,
      {
        ...newParams,
        pageNumber: +params['pageNumber'] > 0 ? +params['pageNumber'] : 1,
        pageSize: PAGE_SIZE_OPTIONS.includes(+params['pageSize'])
          ? +params['pageSize']
          : 50,
      },
    ];
  }
}
