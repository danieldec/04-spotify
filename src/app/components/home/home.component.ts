import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  nuevasCanciones: any[] = [];
  loading = true;
  error: boolean;
  mensajeError: string;
  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.error = false;
    this.spotify.getNewRealeases()
      .subscribe((data: any) => {
        console.log(data);
        this.nuevasCanciones = data;
        this.loading = false;
      }, (errorServicio) => {
        this.error = true;
        this.loading = false;
        this.mensajeError = errorServicio.error.error.message;
      });
  }


}
