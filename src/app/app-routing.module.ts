import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { PeopleComponent } from './people/people.component';
import { PersonDetailComponent } from './people/person-detail/person-detail.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path: 'auth', component: AuthComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'person', component: PeopleComponent},
  {path: 'person/:id', component: PersonDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
