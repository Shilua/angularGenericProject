import { Component, OnInit } from '@angular/core';
import { DataBaseService } from "../../services/data-base.service";

@Component({
  selector: 'app-object-list',
  templateUrl: './object-list.component.html',
  styleUrls: ['./object-list.component.css']
})
export class ObjectListComponent implements OnInit {
  objectList: any[]
  listName: string;
  constructor(private dataBase:DataBaseService) { 
    this.listName = 'nameOfData'
    this.objectList = this.dataBase.returnDataFromList(this.listName);
  }

  ngOnInit(): void {
  }

}
