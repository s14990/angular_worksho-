import { HttpServiceModel } from './../utils/models';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Api } from './../utils/api';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemsService implements HttpServiceModel {

  constructor(
    private http: HttpClient
  ) { }


  fetch(filters?: { [key: string]: any; }): Observable<any> {
    return this.http.get(Api.DATA_ITEMS, { params: filters});
  }
  get(id: number): Observable<any> {
    return this.http.get(Api.DATA_ITEMS + "/" + id);
  }
  add(item: any): Observable<any> {
    throw new Error('Method not implemented.');
  }
  update(item: any): Observable<any> {
    throw new Error('Method not implemented.');
  }
  remove(id: number): Observable<any> {
    return this.http.delete(Api.DATA_ITEMS + "/" + id);
  }
}
