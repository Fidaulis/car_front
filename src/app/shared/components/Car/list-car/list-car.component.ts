import { Component, OnInit } from '@angular/core';
import {CarModel} from "../../../../Utils/model/CarModel";
import {CarsService} from "../../../../Utils/service/cars.service";

@Component({
  selector: 'app-list-car',
  templateUrl: './list-car.component.html',
  styleUrls: ['./list-car.component.css']
})
export class ListCarComponent implements OnInit {
public cars: CarModel[];

  constructor(
    private carsService: CarsService
  ) { }

  ngOnInit(): void {
    this.getAllCar();
  }

  /**
   * get All car
   */
  public getAllCar() {
    this.carsService.allCar().subscribe((cars: any) => {
      this.cars = cars
    })
  }

}
