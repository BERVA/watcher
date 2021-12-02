import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { Anahtar } from "../shared/keys";
import { Movie, ApiResponse } from "./movie.model";

@Injectable({
  providedIn: 'root'
})

export class MoviesService{

  constructor(
    private http: HttpClient,
    private anahtar: Anahtar
  ){}
  req: string = this.anahtar.request;

  getPopular(){
    return this.http.get<ApiResponse>(this.req).pipe(
      map(data => {

        return data.results
      })
    )
  }
}
