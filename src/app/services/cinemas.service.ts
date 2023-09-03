import { Injectable } from '@angular/core';
import { Observable, tap, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Cinema, CinemasData } from '../interfaces/cinema';

@Injectable({
  providedIn: 'root',
})
export class CinemasService {
  baseUrl: string = 'https://develop.hybrid.iov99.com/ultraplex/api/v1/cinemas';
  cinemasCounter: number = 0;
  screensCounter: number = 0;

  constructor(private http: HttpClient) {}

  getCinemas(filterParams: string = ''): Observable<Cinema[]> {
    return this.http.get<CinemasData>(`${this.baseUrl}?${filterParams}`).pipe(
      tap((cinemasData) => {
        this.cinemasCounter = cinemasData.totalElements;
        cinemasData.content.forEach(
          (cinema) => (this.screensCounter += cinema.screens?.length || 0)
        );
      }),
      map((cinemasData) => cinemasData.content)
    );
  }

  addCinema(cinema: Cinema): Observable<Cinema> {
    return this.http.put<Cinema>(`${this.baseUrl}`, cinema);
  }

  errorHandler() {}
}
