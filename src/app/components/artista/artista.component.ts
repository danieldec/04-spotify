import { SpotifyService } from './../../services/spotify.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent {
  artista: any = {};
  loading: boolean;
  topTracks: any[] = [];
  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.loading = true;
    this.router.params.subscribe(params => {
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    });
  }
  getArtista(id: string){
    this.spotify.getArtista(id)
    .subscribe(artista => {
      this.artista = artista;
      console.log(this.artista);
      this.loading = false;
      });
   }
   getTopTracks(id: string){
     this.spotify
          .getTopTracks(id)
          .subscribe(topTrack => {
            console.log(topTrack);
            this.topTracks = topTrack;
          });
   }

}
