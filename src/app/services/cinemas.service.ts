import { Injectable } from '@angular/core';
import { Observable, tap, map, catchError, of } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Cinema, CinemaDTO, CinemasData } from '../interfaces/cinema';
import { StoreService } from './store.service';
import { Screen } from '../interfaces/screen';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class CinemasService {
  baseUrl: string = 'https://develop.hybrid.iov99.com/ultraplex/api/v1/cinemas';

  constructor(
    private http: HttpClient,
    private store: StoreService,
    private messageService: MessageService
  ) {}

  getCinemas(filterParams: string = ''): Observable<Cinema[]> {
    return this.http.get<CinemasData>(`${this.baseUrl}?${filterParams}`).pipe(
      map((cinemasData) => cinemasData.content.filter((cinema) => cinema.name)), // filtering out cinemas without names
      tap((cinemas) => {
        this.store.cinemasCounter = cinemas.length;
        this.store.setScreenCounter(cinemas);
      }),
      catchError((error: HttpErrorResponse) => {
        return this.errorHandler(error);
      })
    );
  }

  addScreenToCinema(id: number, screen: Screen) {
    return this.http.put<Screen>(`${this.baseUrl}/${id}/screens`, screen);
  }

  addCinema(cinema: CinemaDTO): Observable<CinemaDTO> {
    return this.http.put<CinemaDTO>(`${this.baseUrl}`, cinema);
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
