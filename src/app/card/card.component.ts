import { Component, OnInit, Input } from '@angular/core';
import { ServicioDeFavoritosService } from './../servicio-de-favoritos.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() dataEntrance:any;

  public image:string | undefined;
  constructor(private servicioFavorito: ServicioDeFavoritosService) { }

  ngOnInit(): void {
    this.image = 'https://image.shutterstock.com/image-photo/photo-old-movie-projector-260nw-92369284.jpg'
    // console.log("entrando data:"+this.dataEntrance)
  }
agregarFavorito(){
 console.log('agregando favoritoooo'+this.dataEntrance)
 this.servicioFavorito.disparadorDeFavoritos.emit({
   data:this.dataEntrance
 });
}
}
