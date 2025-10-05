export interface Genre {
  id: number
  name: string
}

export interface GenreList {
  genres: Genre[]
}

export interface Movie {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface MovieList {
  page: number
  results: Movie[]
  total_pages: number
  total_result: number
}

export interface MovieLatestList extends MovieList {
  dates: {
    maximum: string
    minimum: string
  }
}

export interface Cast {
  adult: boolean
  gender: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: string
  cast_id: number
  character: string
  credit_id: string
  order: number
}

export interface Crew {
  adult: boolean
  gender: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: string
  credit_id: string
  department: string
  job: string
}
export interface MovieDetail {
  title: string
  release_date: string
  runtime: number
  vote_average: number
  poster_path: string
  genres: Genre[]
  overview: string
  credits: {
    cast: Cast[]
    crew: Crew[]
  }
  recommendations: MovieList
}
