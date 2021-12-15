export interface Serie{
  adult?: string,
  backdrop_path?: string,
  id?: number,
  original_title?: string,
  name?: string,
  overview?: string,
  poster_path?: string,
  title?: string,
  genres?: [{
   id?: number,
   name?: string
 }],
  vote_average?: number
}


export interface ApiResponse{
 page: number,
 results: [{}],
 total_pages: number,
 total_results: number
}

export interface Cast{
  adult?: boolean,
  gender?: number,
  id?: number,
  known_for_department?: string,
  name?: string,
  original_name?: string,
  character?: string,
  order?: number,
  credit_id?: string,
  profile_path?: string


}

export interface Crew{

}

export interface Credits{

  id?: number,
  cast?: Cast[],
  crew?: Crew[]

}


