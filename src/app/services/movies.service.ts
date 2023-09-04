import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';

import { Movie, MoviesData } from '../interfaces/movie';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  baseUrl: string = 'https://develop.hybrid.iov99.com/ultraplex/api/v1/movies';

  constructor(private http: HttpClient, private store: StoreService) {}

  getMovies(filterParams: string = ''): Observable<Movie[]> {
    return this.http.get<MoviesData>(`${this.baseUrl}?${filterParams}`).pipe(
      tap((moviesData) => {
        this.store.moviesCounter = moviesData.totalElements;
      }),
      map((moviesData) => moviesData.content)
    );
  }

  addMovie(movie: Movie): Observable<Movie> {
    return this.http.put<Movie>(`${this.baseUrl}`, movie);
  }

  errorHandler() {}
}
