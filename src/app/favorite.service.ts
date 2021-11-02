import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Movie } from './movie';

@Injectable()
export class FavoriteService {
    private store = new BehaviorSubject<Movie[]>([]);
   
    get value$(): Observable<Movie[]> {
        return this.store
    }

    add(movie: Movie): void {
        this.store.next([...this.store.value, movie]) 
    }

    delete(id: string): void {
        this.store.next(
            this.store.value.filter((movie) => movie.imdbID !== id)
        )
    }
}