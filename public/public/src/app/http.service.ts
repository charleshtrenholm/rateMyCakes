import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getCakes(){
    return this._http.get('/cakes')
  }

  postNewCake(cakeData){
    return this._http.post('/cakes', cakeData);
  }

  postNewRating(cakeData, id){
    return this._http.put('/cakes/'+ id, cakeData);
  }

}
