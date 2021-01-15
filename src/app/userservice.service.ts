import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/model/user';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { }
  url="http://localhost:4000"
  insert(data):Observable<User[]>{
    return this.http.post<User[]>(this.url+'/signup',data)
  }
  logindata(data):Observable<User[]>{
    console.log(data);
    return this.http.post<User[]>(this.url+'/login',data)
  }
    // logingaurd(){
    
  //   return !!localStorage.getItem('TokenName')
    
    
  // }
  adminlogin(data):Observable<User[]>{
    return this.http.post<User[]>(this.url+'/adminlogin',data)
  }
}
