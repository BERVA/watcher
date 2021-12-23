import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DetailComponent } from "./detail/detail.component";
import { FigureComponent } from "./figure/figure.component";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import { SummaryPipe } from "./pipes/summary.pipe";
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    DetailComponent,
    FigureComponent,
    LoadingSpinnerComponent,
    SummaryPipe
  ],
  imports:[
    CommonModule,
    SwiperModule
  ],

  exports: [
    DetailComponent,
    FigureComponent,
    LoadingSpinnerComponent,
    CommonModule,
    SummaryPipe
  ]

})
export class SharedModule{

}
