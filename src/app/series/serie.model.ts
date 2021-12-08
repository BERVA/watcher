export interface Serie{
  adult?: string,
  backdrop_path?: string,
  id?: number,
  original_title?: string,
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
