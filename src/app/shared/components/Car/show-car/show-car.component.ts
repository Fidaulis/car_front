import { Component, OnInit } from '@angular/core';
import {CarModel} from "../../../../Utils/model/CarModel";
import {CarsService} from "../../../../Utils/service/cars.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-show-car',
  templateUrl: './show-car.component.html',
  styleUrls: ['./show-car.component.css']
})
export class ShowCarComponent implements OnInit {
  public car: CarModel;
  public carName: any;

  constructor(
    private carsService: CarsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getCarById();
  }

  /**
   * Get car by ID
   */
  public getCarById(): void {
    const idCar = this.activatedRoute.snapshot.paramMap.get('id');
    if (idCar) {
      this.carsService.oneCar(idCar).subscribe((car: any) => {
        this.car = car;
        this.carName = car.name;
      })
    }
  }

}
