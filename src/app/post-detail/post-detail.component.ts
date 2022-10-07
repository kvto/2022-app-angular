import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  public id:any;
  constructor(private route:ActivatedRoute, private RestService:RestService) { }

  ngOnInit(): void {
    this.route.params.subscribe((paramMap:any) =>{
     const [params] = paramMap
     console.log(params.variable);
    }
     )}
      
  cargarData(){

  }

}
