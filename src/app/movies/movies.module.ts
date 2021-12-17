import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { MovieDetailComponent } from "./movie-detail/movie-detail.component";
import { MovieComponent } from "./movie/movie.component";
import { MoviesListComponent } from "./movies-list/movies-list.component";
import { MoviesRoutingModule } from "./movies-routing.module";
import { MoviesComponent } from "./movies.component";


@NgModule({
  declarations: [
    MoviesComponent,
    MoviesListComponent,
    MovieDetailComponent,
    MovieComponent
  ],
  imports: [
    SharedModule,
    RouterModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule {


}
