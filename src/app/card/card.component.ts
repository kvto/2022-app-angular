import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public image:string | undefined;
  constructor() { }

  ngOnInit(): void {
    this.image = 'https://image.shutterstock.com/image-photo/photo-old-movie-projector-260nw-92369284.jpg'
  }

}
