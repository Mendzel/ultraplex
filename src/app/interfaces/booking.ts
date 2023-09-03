import { Pageable, Sort } from './tableData';

export interface Booking {
  id: number;
}

export interface BookingsData {
  content: Booking[];
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
