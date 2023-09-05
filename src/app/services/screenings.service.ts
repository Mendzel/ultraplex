import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import {
  Screening,
  ScreeningDTO,
  ScreeningsData,
} from '../interfaces/screening';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ScreeningsService {
  baseUrl: string = 'https://develop.hybrid.iov99.com/ultraplex/api/v1/cinemas';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  getScreenings(
    id: number,
    filterParams: string = ''
  ): Observable<Screening[]> {
    return this.http
      .get<ScreeningsData>(`${this.baseUrl}/${id}/screenings?${filterParams}`)
      .pipe(
        map((screeningsData) => screeningsData.content),
        catchError((error: HttpErrorResponse) => {
          return this.errorHandler(error);
        })
      );
  }

  addScreening(
    screening: ScreeningDTO,
    cinemaId: number,
    screenId: number
  ): Observable<ScreeningDTO> {
    return this.http.put<ScreeningDTO>(
      `${this.baseUrl}/${cinemaId}/screens/${screenId}/screenings`,
      screening
    );
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
