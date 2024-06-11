import { Injectable } from '@angular/core';
import { Observable,of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  setToken(token:string){
    localStorage.setItem('token', token)
  }
  checkToken(){
    return localStorage.getItem('token')!=null;
  }
 logout(){
   localStorage.removeItem('token')
 }

  checkLogin(username:any, password:any):Observable<any>
  {
    if(username=='anju@gmail.com' && password=='anju@123'){
      this.setToken('abcde')
      return of({name:'Admin', email:'admin@gmail.com'})
    }
    else{
      return throwError(new Error('Failed to login!!'))
    }
  }
 }
