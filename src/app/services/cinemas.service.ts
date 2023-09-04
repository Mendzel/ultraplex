import { Injectable } from '@angular/core';
import { Observable, tap, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Cinema, CinemasData } from '../interfaces/cinema';
import { StoreService } from './store.service';
import { Screening, ScreeningsData } from '../interfaces/screening';

@Injectable({
  providedIn: 'root',
})
export class CinemasService {
  baseUrl: string = 'https://develop.hybrid.iov99.com/ultraplex/api/v1/cinemas';

  constructor(private http: HttpClient, private store: StoreService) {}

  getCinemas(filterParams: string = ''): Observable<Cinema[]> {
    return this.http.get<CinemasData>(`${this.baseUrl}?${filterParams}`).pipe(
      tap((cinemasData) => {
        this.store.cinemasCounter = cinemasData.totalElements;
        this.store.setScreenCounter(cinemasData);
      }),
      map((cinemasData) => cinemasData.content)
    );
  }

  getScreenings(
    id: number,
    filterParams: string = ''
  ): Observable<Screening[]> {
    return this.http
      .get<ScreeningsData>(`${this.baseUrl}/${id}/screenings?${filterParams}`)
      .pipe(map((screeningsData) => screeningsData.content));
  }

  addCinema(cinema: Cinema): Observable<Cinema> {
    return this.http.put<Cinema>(`${this.baseUrl}`, cinema);
  }

  errorHandler() {}
}
