import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DoctorServiceService {

  constructor(private _http:HttpClient) { }

  url:string='http://localhost:8081/doctor';

  adddoctorservice(doc){

    return this._http.post<number>(this.url+'/',doc);
  }
}
