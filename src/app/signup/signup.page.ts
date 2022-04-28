import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  user  = {
    email : '',
    password : ''
  }

  constructor(private router : Router, public ngFireAuth :AngularFireAuth) { }

  ngOnInit() {
  }
  signIn(){
    this.router.navigate(['/login']);
  }
  async Register(){
    const user = await this.ngFireAuth.createUserWithEmailAndPassword(this.user.email , this.user.password);
   if(user.user.email){
   

     alert('register avec succes');
     this.router.navigate(['/login']);
     
   }else{
     alert(' pas succes')
   }
  
  }

}
