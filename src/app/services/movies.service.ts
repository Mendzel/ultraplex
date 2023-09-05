import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';

import { Movie, MoviesData } from '../interfaces/movie';
import { StoreService } from './store.service';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  baseUrl: string = 'https://develop.hybrid.iov99.com/ultraplex/api/v1/movies';

  constructor(
    private http: HttpClient,
    private store: StoreService,
    private messageService: MessageService
  ) {}

  getMovies(filterParams: string = ''): Observable<Movie[]> {
    return this.http.get<MoviesData>(`${this.baseUrl}?${filterParams}`).pipe(
      map((moviesData) => moviesData.content.filter((movie) => movie.name)), //filtering out movies without names
      tap((movies) => {
        this.store.moviesCounter = movies.length;
      }),
      catchError((error: HttpErrorResponse) => {
        return this.errorHandler(error);
      })
    );
  }

  addMovie(movie: Movie): Observable<Movie> {
    return this.http.put<Movie>(`${this.baseUrl}`, movie);
  }

  errorHandler(error: HttpErrorResponse) {
    this.messageService.add({
      severity: 'error',
      summary: `HTTP Error, Status code: ${error.status}`,
      detail: error.error.error,
    });
    console.log(error);

    return of([]);
  }
}
