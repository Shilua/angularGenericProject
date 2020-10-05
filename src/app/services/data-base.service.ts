import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataBaseService {
  
  object: Observable<any[]>;
  objectList: any[];
  error: boolean;
  constructor(private context: AngularFireDatabase) {
    this.error = false;
   }
   returnDataFromList(listName:string ){
    this.object = this.context.list(listName).valueChanges();
    this.object.subscribe(data => this.objectList = data, error => this.error = true);
    if (this.error) {
      return "ha ocurrido un error"
    }
    else{
      return this.objectList;
    }
   }

   saveData(listName:string, dataKey:any, data:any){
        this.context.list(listName).set(dataKey,data);
   }
}
