import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  data: BehaviorSubject<any>;
  constructor() { }
  isUserLoggedIn(value){
    if(value)
    {
      this.data= new BehaviorSubject(true);
    }
    else{
      this.data= new BehaviorSubject(false);
    }
  }
 
}
