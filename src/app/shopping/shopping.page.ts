import { Component, OnInit } from '@angular/core';
import { SelectFormationServiceService } from '../services/select-formation-service.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.page.html',
  styleUrls: ['./shopping.page.scss'],
})
export class ShoppingPage implements OnInit {
  public  formations_mycourses = {};
  public formations_choisir=[];
  public formations =[];
 curruser: any = null;
 public aaa ={

  
  

}
  constructor(public ngFireAuth :AngularFireAuth,private _select_service : SelectFormationServiceService) { 
   
  }

   ngOnInit() {
    this._select_service.getFormations_mycourses().subscribe(data => {this.formations_mycourses = data;
      for(var i in this.formations_mycourses ){
       
        this.formations_choisir.push(this.formations_mycourses[i]);
        
        
      }
      
     
    } );
    this._select_service.getFormations().subscribe(data => {this.formations = data;
      console.log(this.formations);
      } );
      this.ngFireAuth.authState.subscribe(user=>{
        if(user)
          this.curruser = user.uid;
          
      });
      
    this.aaa ={
     
      "color": "white",
      "background-color": "black"

  
   
      
  
    }
     
  }

}
