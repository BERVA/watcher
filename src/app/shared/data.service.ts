import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Movie } from "../movies/movie.model";
import { Anahtar } from "./keys";

@Injectable({
  providedIn: 'root'
})

export class DataService{

  apiKey = this.anahtar.apiKey;


  getData(url: any){
    return this.http.get<Movie | any>(`https://api.themoviedb.org/3${url}?api_key=2d5a9ae4ac8bc294767ed0013f9c6c20&language=en-US'`)
  }



  constructor(
    private http: HttpClient,
    private anahtar: Anahtar
  ){}

}
