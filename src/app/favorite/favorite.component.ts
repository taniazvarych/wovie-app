import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from "rxjs";
import { FavoriteService } from '../favorite.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  @Input() value: Movie[] = [];
  @Output() delete: EventEmitter<string> = new EventEmitter;

  constructor(
    private favoriteService: FavoriteService
  ) {}

  ngOnInit(): void {
    
  }
  

}
