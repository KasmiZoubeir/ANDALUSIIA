import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SelectFormationServiceService {
  private _url_select_formation: string ="https://projet-ionic-prof-default-rtdb.firebaseio.com/formations.json";
  private _url_insert_course: string ="https://projet-ionic-prof-default-rtdb.firebaseio.com/mycourses.json";

  constructor(private _http: HttpClient) { }
  getFormations():Observable<any[]>{
    return this._http.get<any[]>(this._url_select_formation);
  }
  getFormations_mycourses():Observable<any[]>{
    return this._http.get<any[]>(this._url_insert_course);
  }
  insertMyCourses(course : {}){
    return this._http.post(this._url_insert_course,course);

  }
 
}


