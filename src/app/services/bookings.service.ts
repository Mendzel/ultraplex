import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking, BookingsData } from '../interfaces/booking';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookingsService {
  baseUrl: string =
    'https://develop.hybrid.iov99.com/ultraplex/api/v1/bookings';

  constructor(private http: HttpClient) {}

  getBookingsNumber(): Observable<number> {
    return this.http
      .get<BookingsData>(`${this.baseUrl}`)
      .pipe(map((bookingsData) => bookingsData.totalElements));
  }

  addBooking(booking: Booking): Observable<Booking> {
    return this.http.put<Booking>(`${this.baseUrl}`, booking);
  }

  errorHandler() {}
}
