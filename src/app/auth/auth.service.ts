import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseURL = environment.backend + "/auth"
  corsHeaders = {
    headers : new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*'
    })
  }

  constructor(private http:HttpClient) { }

  login(user){
    return this.http.post(this.baseURL + "/login", user ).toPromise();
  }

  logout(){
    return this.http.get(this.baseURL + "/logout",this.corsHeaders ).toPromise().then().catch(e => {
      console.log("error in service");
    });
  }
}
