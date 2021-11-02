import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, switchMap, distinctUntilChanged} from 'rxjs/operators';
import { MovieHttpService } from '../movie-http.service';
import { Movie } from '../movie';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  searchControl: FormControl;
  movies$: Observable<Movie[]>;
  
  @Output() delete: EventEmitter<string> = new EventEmitter();
  @Output() add: EventEmitter<Movie> = new EventEmitter();
  @Input() value: any[] = [];
  
  constructor( private movieService: MovieHttpService) { }

  ngOnInit(): void {
    this.searchControl = new FormControl();
    this.movies$ = this.searchControl.valueChanges
      .pipe(
        distinctUntilChanged(),
        switchMap(
          searchString => this.movieService.searchMovie(searchString)
        ),
        map((res: any)=> res.Search)
      );
  }

  isFavorite(id: string) {
    return this.value.some((movie: any) => movie.imdbID === id)
  }

  onChange(movie: any) {
    this.isFavorite(movie.imdbID)
      ? this.delete.emit(movie.imdbID)
      : this.add.emit(movie)
  }
}
