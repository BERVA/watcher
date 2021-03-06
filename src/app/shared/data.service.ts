import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { Movie } from "../movies/movie.model";
import { Serie, ApiResponse, Credits, Media } from "../series/serie.model";
import { Anahtar } from "./keys";

@Injectable({
  providedIn: 'root'
})

export class DataService{

  apiKey = this.anahtar.apiKey;

  getDetail(url: string){
    return this.http.get(`https://api.themoviedb.org/3/${url}?api_key=${this.apiKey}&append_to_response=videos,images,credits`).pipe(
      map(
        (data) => {
          return data
        }
      )
    )
  }

  getData(url: any){
    return this.http.get<Movie | Serie | any>(`https://api.themoviedb.org/3${url}?api_key=${this.apiKey}&language=en-US'`)


  }

  getPopular(url: string){
    return this.http.get<ApiResponse>(`https://api.themoviedb.org/3/${url}/popular?api_key=${this.apiKey}&language=en-US&page=1`).pipe(
      map(data => {
        return data.results
      })
    )
  }

  getPersonDetail(url: string){
    return this.http.get(`https://api.themoviedb.org/3/${url}?api_key=${this.apiKey}&append_to_response=videos,images,combined_credits`).pipe(
      map(data => {
        return data
      })
    )
  }

  getPopularPeople(){
    return this.http.get<ApiResponse>(`https://api.themoviedb.org/3/person/popular?api_key=${this.apiKey}&language=en-US&page=1`).pipe(
      map(data => {
        return data.results
      })
    )
  }

  getTrailer(url: string){
    return this.http.get(`https://api.themoviedb.org/3/${url}/videos?api_key=${this.apiKey}`).pipe(
      map(
        data => {
          return data;
        }
      )
    )
  }

  onSearch(searchQuery: string){
    return this.http.get(`https://api.themoviedb.org/3/search/multi?api_key=${this.apiKey}&query=${searchQuery}`).pipe(
      map(
        data => {
          return data;
        }
      )
    )
  }

  addToList(){

  }




  constructor(
    private http: HttpClient,
    private anahtar: Anahtar
  ){}

}
