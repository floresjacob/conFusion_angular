import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { RestangularModule, Restangular } from 'ngx-restangular';

import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DishService {

  constructor(private restangular: Restangular,
              private processHTTPMsgService: ProcessHTTPMsgService) { }

                getDishes(): Observable<Dish[]> {
                  return this.restangular.all('dishes').getList()
                  .catch(error => { return error; } );
                }

                getDish(id: number): Observable<Dish> {
                  return  this.restangular.one('dishes',id).get()
                  .catch(error => { return error; } );
                }

                getFeaturedDish(): Observable<Dish> {
                  return this.restangular.all('dishes').getList({featured: true})
                    .map(dishes => dishes[0])
                    .catch(error => { return error; } );
                }

                getDishIds(): Observable<number[]> {
                  return this.getDishes()
                    .map(dishes => { return dishes.map(dish => dish.id) })
                    .catch(error => { return error; } );
                }

}
