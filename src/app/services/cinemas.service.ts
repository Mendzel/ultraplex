import { Injectable } from '@angular/core';
import { Observable, tap, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Cinema, CinemaDTO, CinemasData } from '../interfaces/cinema';
import { StoreService } from './store.service';
import { Screen } from '../interfaces/screen';

@Injectable({
  providedIn: 'root',
})
export class CinemasService {
  baseUrl: string = 'https://develop.hybrid.iov99.com/ultraplex/api/v1/cinemas';

  constructor(private http: HttpClient, private store: StoreService) {}

  getCinemas(filterParams: string = ''): Observable<Cinema[]> {
    return this.http.get<CinemasData>(`${this.baseUrl}?${filterParams}`).pipe(
      map((cinemasData) => cinemasData.content.filter((cinema) => cinema.name)), // filtering out cinemas without names
      tap((cinemas) => {
        this.store.cinemasCounter = cinemas.length;
        this.store.setScreenCounter(cinemas);
      })
    );
  }

  addScreenToCinema(id: number, screen: Screen) {
    return this.http.put<Screen>(`${this.baseUrl}/${id}/screens`, screen);
  }

  addCinema(cinema: CinemaDTO): Observable<CinemaDTO> {
    return this.http.put<CinemaDTO>(`${this.baseUrl}`, cinema);
  }

  errorHandler() {}
}
