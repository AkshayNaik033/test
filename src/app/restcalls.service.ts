import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RestcallsService {

  constructor(private http: HttpClient) { }

  getAPIData(){
    return this.http.get('/api/test');
  }

  getLoginDetails(loginDetails){
    return this.http.post('/api/login',loginDetails)
  }
}
