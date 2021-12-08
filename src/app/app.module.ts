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
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { CustomSerializer } from './store/router/custom-serializer';
import { DetailComponent } from './shared/detail/detail.component';
import { SeriesComponent } from './series/series.component';
import { MovieDetailEffects } from './movies/movie-detail/store/movie-detail.effects';
import { SeriesListComponent } from './series/series-list/series-list.component';
import { SerieComponent } from './series/serie/serie.component';
import { SerieDetailComponent } from './series/serie-detail/serie-detail.component';
import { SeriesEffects } from './series/store/series.effects';
import { FigureComponent } from './shared/figure/figure.component';
import { SerieDetailEffects } from './series/serie-detail/store/serie-detail.effects';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HeaderComponent,
    MoviesComponent,
    MovieComponent,
    MoviesListComponent,
    MovieDetailComponent,
    DetailComponent,
    SeriesComponent,
    SeriesListComponent,
    SerieComponent,
    SerieDetailComponent,
    FigureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([MoviesEffects, MovieDetailEffects, SeriesEffects, SerieDetailEffects]),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer
    }),
    StoreDevtoolsModule.instrument({logOnly: environment.production}),
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
