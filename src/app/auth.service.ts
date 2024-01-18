import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Session } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users: any[] = [
    {
      id: 0,
      name: 'David',
      username: 'david',
      password: 'david',
    },
    {
      id: 1,
      name: 'root',
      username: 'root',
      password: 'root',
    },
    {
      id: 2,
      name: 'Nacho',
      username: 'nacho',
      password: 'nacho',
    },
  ]
  
  session: any;
  constructor(private router: Router) { 
    let session: any = localStorage.getItem('session');
    if(session) {
       session = JSON.stringify(session);
    }

    this.session = session;
  }

  login(username: String, password: String){
    let user = this.users.find((u)=> u.username===username && u.password===password)
    if(user){
      this.session=user;
      localStorage.setItem('session', JSON.stringify(this.session));
    }
    return user;
  }

  logout(){
    this.session = undefined;
    localStorage.removeItem('session');
    this.router.navigateByUrl('/');
  }
}
