import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SelectFormationServiceService } from '../services/select-formation-service.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-detail-formation',
  templateUrl: './detail-formation.page.html',
  styleUrls: ['./detail-formation.page.scss'],
})
export class DetailFormationPage implements OnInit {
 titre = '';
 formations1 = [];

 curruser: any = null;
 subscribe_formations: {
   uid:'',
   formation_added:''
 };
 public aaa ={
  
  
  

};

public  formations_mycourses = {};
  public formations_choisir=[];
  public formations =[];
  constructor(private _http: HttpClient,private route:ActivatedRoute,private _select_service : SelectFormationServiceService,public ngFireAuth :AngularFireAuth ) {
    
   }
  

 
   ngOnInit() {
    this.titre = this.route.snapshot.paramMap.get('id');
    console.log(this.titre);
   
      
      
       this.ngFireAuth.authState.subscribe(user=>{
        if(user)
          this.curruser = user.uid;

      });
     
      this._select_service.getFormations_mycourses().subscribe(data => {this.formations_mycourses = data;
        for(var i in this.formations_mycourses ){
         
          this.formations_choisir.push(this.formations_mycourses[i]);
          
        
        }
        
      
       
      } );
      this._select_service.getFormations().subscribe(data => {this.formations1 = data;
        
      } );

     
     
     
     
      

        }
     
  subscribe(aa){
    this.subscribe_formations = {uid:this.curruser,formation_added:aa};
    console.log(this.subscribe_formations);
    this._http.post("https://projet-ionic-prof-default-rtdb.firebaseio.com/mycourses.json",this.subscribe_formations).subscribe((response)=>console.log(response));

    this.aaa ={
     
      "color": "white",
      "background-color": "black"

  
   
      
  
    }
  }


}
