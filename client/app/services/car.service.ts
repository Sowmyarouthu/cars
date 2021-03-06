import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Car } from '../shared/models/car.model';

@Injectable()
export class CarService {

  constructor(private http: HttpClient) { }

  getCars(make: string): Observable<Car[]> {
    console.log(make);
    return this.http.get<Car[]>(`/api/cars/${make}`);
  }
  getCarsbycategory(): Observable<Car[]> {
    
    return this.http.get<Car[]>('/api/cars');
  }

  // getCars(): Observable<Car[]> {
    
  //   return this.http.get<Car[]>('/api/cars');
  // }

  countCars(): Observable<number> {
    return this.http.get<number>('/api/cars/count');
  }
 

  addCar(car: Car): Observable<Car> {
    return this.http.post<Car>('/api/car', car);
  }

  getCar(car: Car): Observable<Car> {
    return this.http.get<Car>(`/api/car/${car._id}`);
  }

  editCar(car: Car): Observable<string> {
    return this.http.put(`/api/car/${car._id}`, car, { responseType: 'text' });
  }

  deleteCar(car: Car): Observable<string> {
    return this.http.delete(`/api/car/${car._id}`, { responseType: 'text' });
  }

  
}
