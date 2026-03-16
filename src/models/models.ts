export interface Movie {
  id: number
  title: string
  subtitle: string
  posterURL: string
  imdbId: string
}

export type MovieData = Movie[]

export interface ApiResponse<T> {
  status: string
  responseCode: number
  data?: T
}

export interface SimpleSuccessResponse {
  data: MovieData
}
export interface SimpleErrorResponse {
  error: true
}
