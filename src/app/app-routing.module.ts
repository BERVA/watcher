import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth/auth.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
  {path: 'auth', component: AuthComponent},
  {path: 'movies', component: MoviesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
