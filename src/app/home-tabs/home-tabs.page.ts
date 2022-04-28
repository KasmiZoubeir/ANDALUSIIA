import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

import { SelectFormationServiceService } from '../services/select-formation-service.service';
@Component({
  selector: 'app-home-tabs',
  templateUrl: './home-tabs.page.html',
  styleUrls: ['./home-tabs.page.scss'],
})
export class HomeTabsPage implements OnInit {
public  formations = [];
email='';
  constructor(private router : Router,public ngFireAuth :AngularFireAuth ,private _select_service : SelectFormationServiceService) { }

  ngOnInit() {
    this._select_service.getFormations().subscribe(data => {this.formations = data;
    console.log(this.formations);
    } );
    
    this.ngFireAuth.authState.subscribe(user=>{
      if(user)
        this.email = user.email;
        

    });
  }
  SignOut() {
    return this.ngFireAuth.signOut().then(() => {
      window.alert('Logged out!');
      this.router.navigate(['/login']);
    });
  }

}
