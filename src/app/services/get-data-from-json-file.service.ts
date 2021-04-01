import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetDataFromJsonFileService {

   
  url: string ="../../assets/data.json" ;
  constructor(private http : HttpClient) { }

  getdataFun = function ( ) 
  {
    //you must return observable here 
     return this.http.get(this.url) ; 
  }
  //here you can write any function and use it every where 
  //every time you need it 
  //as you can see me i used it in all get http requests .

}
