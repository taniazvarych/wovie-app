import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../favorite.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-container',
  templateUrl: './movie-container.component.html',
  styleUrls: ['./movie-container.component.scss']
})
export class MovieContainer implements OnInit {
  public value$: Observable<Movie[]> = this.favoriteService.value$;
  showFavorite: boolean = false
  
  constructor(private favoriteService: FavoriteService) {}

  ngOnInit(): void {}

  changeTable() {
    this.showFavorite = !this.showFavorite 
  }

  delete(id: string) {
    this.favoriteService.delete(id)
  }

  addNew(movie: Movie) {
    this.favoriteService.add(movie);
  }

}
