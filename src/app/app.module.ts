import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth/auth.component';
import { HeaderComponent } from './header/header/header.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movies/movie/movie.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { StoreModule } from '@ngrx/store';
import * as fromApp from './store/app.reducer'
import { EffectsModule } from '@ngrx/effects';
import { MoviesEffects } from './movies/store/movies.effects';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HeaderComponent,
    MoviesComponent,
    MovieComponent,
    MoviesListComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([MoviesEffects]),
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
