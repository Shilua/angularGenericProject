import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-object-table',
  templateUrl: './object-table.component.html',
  styleUrls: ['./object-table.component.css']
})
export class ObjectTableComponent implements OnInit {
  @Input()
  list:any [];
  constructor() { }
  ngOnInit(): void {
  }

}
