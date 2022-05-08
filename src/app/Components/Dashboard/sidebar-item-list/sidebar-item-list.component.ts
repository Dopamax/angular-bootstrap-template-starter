import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-item-list',
  templateUrl: './sidebar-item-list.component.html',
  styleUrls: ['./sidebar-item-list.component.css']
})
export class SidebarItemListComponent implements OnInit {
@Input() name:string="";
@Input() icon:string="";
@Input() tabindex:string="";
@Input() link:string="";
  constructor() { }

  ngOnInit(): void {
  }

}
