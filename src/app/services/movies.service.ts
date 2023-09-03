import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Movie, MoviesData } from '../interfaces/movie';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  baseUrl: string = 'https://develop.hybrid.iov99.com/ultraplex/api/v1/movies';
  moviesCounter: number = 0;

  constructor(private http: HttpClient) {}

  getMovies(filterParams: string = ''): Observable<Movie[]> {
    return this.http.get<MoviesData>(`${this.baseUrl}?${filterParams}`).pipe(
      tap((moviesData) => {
        this.moviesCounter = moviesData.totalElements;
      }),
      map((moviesData) => moviesData.content)
    );
  }

  addMovie(movie: Movie): Observable<Movie> {
    return this.http.put<Movie>(`${this.baseUrl}`, movie);
  }

  errorHandler() {}
}
