import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MovieDetailComponent } from "./movie-detail/movie-detail.component";
import { MoviesListComponent } from "./movies-list/movies-list.component";
import { MoviesComponent } from "./movies.component";

const routes: Routes = [
  {
    path: 'movies', component: MoviesComponent,
  },

  {
    path: 'movies/:id', component: MovieDetailComponent
  }
]
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]

})


export class MoviesRoutingModule{

}
