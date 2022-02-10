import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { getUser, getUserMail } from '../auth/store/auth.selector';
import { User } from '../auth/user.model';
import { FsApiService } from '../shared/fs-api.service';
import { watchListe } from '../shared/shared.model';
import { AppState } from '../store/app.reducer';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  koleksiyon: any;
  userMail$: Observable<string>

  yeniListe: watchListe;

  constructor(
    private store: Store<AppState>,
    private afs: FsApiService
  ) { }

  ngOnInit(): void {

    this.userMail$ = this.store.pipe(
      select(getUserMail)
    );

  //   this.afs.listeGetir().subscribe(
  //    (data : watchListe[]) =>{
  //      this.watchList = data;
  //    }
  //  );

  this.yeniListe = {
    movieIds: [
    ],
    serieIds: []
  }


  //this.afs.ekle("Baris", this.yeniListe);






   /*

   Watchlist koleksiyonunun altında listeler yerine kullanıcılar da olabilir.

   Kullanıcı id ile eşleştirip ona ait listeleri getir ve birleştir.

   //***koleksiyonun altında doğrudan user id ile eşleşen bir array olsa daha mantıklı olabilir gibi dene bunu



   */
  }

}
