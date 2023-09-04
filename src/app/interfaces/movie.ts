import { Pageable, Sort } from './tableData';

export interface Movie {
  id?: number;
  name: string;
  runtime: number;
}

export interface MoviesData {
  content: Movie[];
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
