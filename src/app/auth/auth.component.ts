import { Component, OnInit } from '@angular/core';
import {NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from '../store/app.reducer';
import { AuthResponseData, AuthService } from './auth.service';
import { LoginStart, SignInStart } from './store/auth.actions';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  isLoginMode: boolean = true;
  error: string = '';
  private storeSub = Subscription;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {

    this.store.select('auth').subscribe(
      authState => {
        this.error = authState.authError;
        if(this.error){
          this.error = authState.authError
        }
      }
    )

  }

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm){
    if(!form.valid){
      return;
    } else{
      const email = form.value.email;
      const password = form.value.password;
      if(!this.isLoginMode){
       this.store.dispatch(SignInStart({email, password}))
      } else{

        this.store.dispatch(LoginStart({email, password}))
      }
    }
    form.reset();

  }

}
