import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking, BookingsData } from '../interfaces/booking';
import { Observable, catchError, map, of } from 'rxjs';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class BookingsService {
  baseUrl: string =
    'https://develop.hybrid.iov99.com/ultraplex/api/v1/bookings';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  getBookingsNumber(): Observable<number | never[]> {
    return this.http.get<BookingsData>(`${this.baseUrl}`).pipe(
      map((bookingsData) => bookingsData.totalElements),
      catchError((error: HttpErrorResponse) => {
        return this.errorHandler(error);
      })
    );
  }

  addBooking(booking: Booking): Observable<Booking> {
    return this.http.put<Booking>(`${this.baseUrl}`, booking);
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
