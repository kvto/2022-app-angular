import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { RestService } from './../rest.service';

@Component({
  selector: 'app-list-views',
  templateUrl: './list-views.component.html',
  styleUrls: ['./list-views.component.css']
})
export class ListViewsComponent {
  
  @ViewChild('editTmpl', { static: true }) editTmpl!:TemplateRef<any>;
  @ViewChild('hdrTpl', { static: true }) hdrTpl!:TemplateRef<any>;

  rows = [];
  columns = [];

  ColumnMode = ColumnMode;

  constructor(private RestService: RestService) { }

  ngOnInit(): void {
    this.columns = [
      
        cellTemplate: this.imageTmpl,

      
    ];
  }

}