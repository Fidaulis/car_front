import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CarModel} from "../model/CarModel";
import {urlList} from "../api/urlList";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  /**
   * Service to get All cars
   */
  public allCar() {
    return this.httpClient.get<CarModel[]>(urlList.path_getAllCar);
  }

  /**
   * Service to get car by Id
   */
  public oneCar(id: string) {
    return this.httpClient.get(urlList.path_getOneCar + id)
      .pipe(map(
        (response: any) => {
          return response;
        }
      ))
  }
}
