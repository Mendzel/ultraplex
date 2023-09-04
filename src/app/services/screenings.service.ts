import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import {
  Screening,
  ScreeningDTO,
  ScreeningsData,
} from '../interfaces/screening';

@Injectable({
  providedIn: 'root',
})
export class ScreeningsService {
  baseUrl: string = 'https://develop.hybrid.iov99.com/ultraplex/api/v1/cinemas';

  constructor(private http: HttpClient) {}

  getScreenings(
    id: number,
    filterParams: string = ''
  ): Observable<Screening[]> {
    return this.http
      .get<ScreeningsData>(`${this.baseUrl}/${id}/screenings?${filterParams}`)
      .pipe(map((screeningsData) => screeningsData.content));
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
}
