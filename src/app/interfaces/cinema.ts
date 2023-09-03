import { Screen } from './screen';
import { Pageable, Sort } from './tableData';

export interface Cinema {
  id: number;
  name: string;
  screens?: Screen[];
}

export interface CinemasData {
  content: Cinema[];
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
