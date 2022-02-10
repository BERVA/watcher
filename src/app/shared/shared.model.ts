export interface Backdrops{
  aspect_ratio: number,
  file_path: string
}

export interface Media{
  backdrops?: Backdrops[],
  posters?:[],
  logos?: []

}

export interface profile{
  aspect_ratio: number,
  file_path: string
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
  profile_path?: string,
  poster_path?: string,
  title?: string
}

export interface Crew{

}


export interface AppendToResponsePerson{
  id?: number;
  name?: string,
  biography?: string,
  images?: profile[],
  combined_credits?: {
    cast: Cast[],
    crew: Crew[]
  },
  profile_path?: string,
  birthday?: string,
  known_for_department?: string
}




/// New Data Format

export interface ApiResponse{
  page: number,
  results: [{}],
  total_pages: number,
  total_results: number
}


export interface image{
  aspect_ratio: number,
  file_path: string
}
export interface video{
  id: string,
  key: string,
  name: string,
  site: string
}

export interface AppendToResponseMovie{
  adult?: string,
  backdrop_path?: string,
  id?: number,
  original_title?: string,
  overview?: string,
  poster_path?: string,
  title?: string,
  genres?:[
      {
        id?: number,
        name?: string
      }
    ],
  vote_average?: number
  images?: {
    backdrops?: image[],
    posters?: image[],
    logos?: image[]
  },
  credits?: {
    cast: Cast[],
    crew: Crew[]
  },
  videos?: {
    results?: video[]
  }
  name?: string,
  release_date?: string,
  first_air_date?: string,
  last_air_date?: string,
}


export interface AppendToResponseSerie{
  adult?: string,
  backdrop_path?: string,
  id?: number,
  original_title?: string,
  overview?: string,
  poster_path?: string,
  title?: string,
  genres?:[
      {
        id?: number,
        name?: string
      }
    ],
  vote_average?: number
  images?: {
    backdrops?: image[],
    posters?: image[],
    logos?: image[]
  },
  credits?: {
    cast: Cast[],
    crew: Crew[]
  },
  videos?: {
    results: video[]
  }
  name?: string,
  release_date?: string,
  first_air_date?: string,
  last_air_date?: string,
}


//
export interface watchListe{
  movieIds: [],
  serieIds: []
}



