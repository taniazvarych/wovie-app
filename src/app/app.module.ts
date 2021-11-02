import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieHttpService } from './movie-http.service';
import { FavoriteService } from './favorite.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from '../app/list/list.component';
import { DetailsComponent } from './details/details.component';
import { FavoriteComponent } from './favorite/favorite.component'
import { MovieContainer } from './movie-container/movie-container.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailsComponent,
    FavoriteComponent,
    MovieContainer,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  
  providers: [ MovieHttpService, FavoriteService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
