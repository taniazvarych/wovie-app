import { Component, OnInit } from '@angular/core';
import { MovieHttpService } from '../movie-http.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Detail } from '../details.movie';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  details$: Observable<Detail>

  constructor(
    private route: ActivatedRoute,
    private service: MovieHttpService
    ) {}

  ngOnInit(): void {
    this.details$ = this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) =>
          this.service.getMovie(params.get('id')!))
      );
  }

}
