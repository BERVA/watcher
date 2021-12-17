import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { SerieDetailComponent } from "./serie-detail/serie-detail.component";
import { SerieComponent } from "./serie/serie.component";
import { SeriesListComponent } from "./series-list/series-list.component";
import { SeriesRoutingModule } from "./series-routing.module";
import { SeriesComponent } from "./series.component";


@NgModule({
  declarations: [
    SeriesComponent,
    SeriesListComponent,
    SerieComponent,
    SerieDetailComponent,
  ],
  imports: [
    SharedModule,
    RouterModule,
    SeriesRoutingModule
  ]
})
export class SeriesModule{

}
