import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataBaseService {
  
  object: Observable<any[]>;
  objectList: any[];
  constructor(private context: AngularFireDatabase) {
    
   }
   getDataFromList(listName:string ){
    this.object = this.context.list(listName).valueChanges();
    this.object.subscribe(data => this.objectList = data, error => console.log(error));
   }

   saveData(listName:string, dataKey:any, data:any){
        this.context.list(listName).set(dataKey,data);
   }

   returnList(){
     return this.objectList;
   }
}
