import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/compat/firestore';
import { select, Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { getUser } from '../auth/store/auth.selector';
import { User } from '../auth/user.model';
import { AppState } from '../store/app.reducer';
import { watchListe} from './shared.model';

// Veri eklenirken eşleşme yapmalı ve o id'nin altına eklemeli
// Liste Kullanıcın id'si ile oluşturulacak.
// İçine sadece Movie ve Serie Id'ler eklenecek.


// Giriş yapınca state'de listeyi tut.
// Movie-Serie ve Detay sayfasında listeye eklemeye izin ver.
// 3 yerde kullanılacağı için fonksiyonu güzel yaz.
//

@Injectable({
  providedIn: 'root'
})
export class FsApiService {

  user: string = "amQ8Z3fJJaUnFCqSozCqDxYMgtF3";
  collectionName: string = "watchList";

  private watchListDoc: AngularFirestoreDocument<watchListe>;
  watchList: Observable<watchListe>;

  constructor(
    private afs: AngularFirestore,
    private store: Store<AppState>
  ) {

    this.watchListDoc = afs.doc<watchListe>(this.collectionName + `/${this.user}`);
    this.watchList = this.watchListDoc.valueChanges();
  }




  getWatchList(){
    return this.watchList
  }

  addToWatchList(element: string){

    // Tip kontrolü yap, ona göre Movie veya Serie ekle.


    return this.afs.collection(this.collectionName + `/${this.user}`).add(element)
  }

  deleteFromWatchList(element: string){
    return this.afs.collection(this.collectionName).doc(element).delete()
  }




}
