import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private httpCliente: HttpClient) {
    console.log('Spotify service listo');
  }
  getQuery( query: string ){
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQBTcvmTbDIzdlmrf-iv81C7AJU8L1_tS9aKeQHi3Ulost3zpdJ7QOsNNtGhcl_A7pEqECaD1QSBp81X6yg'
    });
    return this.httpCliente.get(url, {headers});
  }
  getNewRealeases() {
    return this.getQuery('browse/new-releases?limit=20')
                .pipe(map(data => data['albums'].items));
  }
  getArtistas(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
            .pipe(map(data => data['artists'].items));
  }
  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
                .pipe(map(data => data['tracks']));
  }
}
