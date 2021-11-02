import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Detail } from './details.movie';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})

export class MovieHttpService {
  constructor( private http: HttpClient ) {
  }

  searchMovie(query: string =''): Observable<Movie> { 
    return this.http.get<Movie>(`http://www.omdbapi.com/?apikey=4a6f8f63&s=${query}&plot=full&page=1`);
  }
 
  getMovie(id: string): Observable<Detail> {
    return this.http.get<Detail>(`http://www.omdbapi.com/?apikey=4a6f8f63&i=${id}&plot=full`);
  }
}