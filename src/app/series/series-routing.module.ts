import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SerieDetailComponent } from "./serie-detail/serie-detail.component";
import { SeriesComponent } from "./series.component";


const routes: Routes = [
  {
    path: 'series', component: SeriesComponent,
  },
  {
    path: 'series/:id', component: SerieDetailComponent
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
export class SeriesRoutingModule{

}
