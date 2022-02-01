import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  //Local Users Data 
  /*
  username !: string ;
    email !: string ;
    password !: string;
  */
  users : User[] = [
    { "username" : "Ahmed","email" : "ahmedjedidi@gmail.com", "password" : "123456789" },
    { "username" : "Aymen","email" : "aymengharbi@gmail.com", "password" : "123456789" },
    { "username" : "Ahmed","email" : "ahmed.jedidi.stage@b2m-it.com", "password" : "123456789" },
    { "username" : "Ahmed","email" : "aymen.gharbi@b2m-it.com", "password" : "123456789" }
  ];

  public loggedUser !:string ;
  public isloggedIn : Boolean = false;
  public name !: string;




  constructor(private router: Router) { }

  /*VideEmail(user : User):Boolean{
    if(user.email == "") 
    {return true;}
    else
    { return false;}
  }

  VidePassword(user : User):Boolean{
    if(user.password == "")  this.password.length == 0
    { return true;}
    else 
     {return false;}
  }*/

  //login
  SignIn(user :User):Boolean{
    let validUser: Boolean = false;
    this.users.forEach((curUser) => {
    if(user.email === curUser.email && user.password==curUser.password) {
    validUser = true;
    this.loggedUser = curUser.username;
    this.isloggedIn = true;
    localStorage.setItem('loggedUser',this.loggedUser);
    localStorage.setItem('isloggedIn',String(this.isloggedIn));
    }
    });
    return validUser;
    }





    logout() {
    this.isloggedIn = false;
    this.loggedUser = "";
    this.loggedUser != undefined;


    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn',String(this.isloggedIn));
    
    this.router.navigate(['/login']);
    }


    isAdmin():Boolean{
      if (!this.loggedUser) //this.loggedUser == undefiened
      return false;
      return true;//(this.loggedUser.indexOf('A') >-1) ;
      ;
      }
      

      setLoggedUserFromLocalStorage(login : string) {
        this.loggedUser = login;
        this.isloggedIn = true;
        }
        



}
