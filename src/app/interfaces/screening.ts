import { Movie } from './movie';
import { Pageable, Sort } from './tableData';

export interface Screening {
  id: number;
  cinemaName: string;
  screenName: string;
  start: string;
  movie: Movie;
}

export interface ScreeningDTO {
  movieId: number;
  startTime: string;
}

export interface ScreeningsData {
  content: Screening[];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: Pageable;
  size: number;
  sort: Sort;
  totalElements: number;
  totalPages: number;
}
