import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { MoviesComponent } from './movies/movies.component';
import { ProfileComponent } from './profile/profile.component';
import { SerieDetailComponent } from './series/serie-detail/serie-detail.component';
import { SeriesComponent } from './series/series.component';

const routes: Routes = [
  {path: 'auth', component: AuthComponent},
  {path: 'movies', component: MoviesComponent},
  {path: 'movies/:id', component: MovieDetailComponent},
  {path: 'series', component: SeriesComponent},
  {path: 'series/:id', component: SerieDetailComponent},
  {path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
