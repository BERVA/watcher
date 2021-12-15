import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { Movie } from "../movies/movie.model";
import { Serie, ApiResponse, Credits } from "../series/serie.model";
import { Anahtar } from "./keys";

@Injectable({
  providedIn: 'root'
})

export class DataService{

  apiKey = this.anahtar.apiKey;

  getData(url: any){
    return this.http.get<Movie | Serie | any>(`https://api.themoviedb.org/3${url}?api_key=2d5a9ae4ac8bc294767ed0013f9c6c20&language=en-US'`)
  }

  getPopular(url: string){
    return this.http.get<ApiResponse>(`https://api.themoviedb.org/3/${url}/popular?api_key=${this.apiKey}&language=en-US&page=1`).pipe(
      map(data => {
        return data.results
      })
    )
  }

  getCredits(url: string){
    return this.http.get<Credits>(`https://api.themoviedb.org/3/${url}/credits?api_key=${this.apiKey}&language=en-US&page=1`).pipe(
      map((data: Credits) => {
        return data
      })
    )
  }

  getMedia(url: string){
    return this.http.get<ApiResponse>(`https://api.themoviedb.org/3/${url}/images?api_key=${this.apiKey}&language=en-US&page=1`).pipe(
      map(data => {
        return data
      })
    )

  }

  addToList(){

  }




  constructor(
    private http: HttpClient,
    private anahtar: Anahtar
  ){}

}
