import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StoreModule } from '@ngrx/store';
import * as fromApp from './store/app.reducer'
import { EffectsModule } from '@ngrx/effects';
import { MoviesEffects } from './movies/store/movies.effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { CustomSerializer } from './store/router/custom-serializer';
import { MovieDetailEffects } from './movies/movie-detail/store/movie-detail.effects';
import { SeriesEffects } from './series/store/series.effects';
import { SerieDetailEffects } from './series/serie-detail/store/serie-detail.effects';
import { ProfileComponent } from './profile/profile.component';
import { AuthEffects } from './auth/store/auth.effects';
import { MoviesModule } from './movies/movies.module';
import { SeriesModule } from './series/series.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { PeopleComponent } from './people/people.component';
import { PersonComponent } from './people/person/person.component';
import { PersonDetailComponent } from './people/person-detail/person-detail.component';
import { PeopleListComponent } from './people/people-list/people-list.component';
import { PeopleEffects } from './people/store/people.effects';
import { PersonDetailEffects } from './people/person-detail/store/person-detail.effects';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    PeopleComponent,
    PersonComponent,
    PersonDetailComponent,
    PeopleListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    MoviesModule,
    SeriesModule,
    SharedModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([MoviesEffects, MovieDetailEffects, SeriesEffects, SerieDetailEffects, AuthEffects, PeopleEffects, PersonDetailEffects]),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer
    }),
    StoreDevtoolsModule.instrument({logOnly: environment.production})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
