import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { BookingsService } from 'src/app/services/bookings.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  numberOfBookings$?: Observable<number>;

  constructor(
    public store: StoreService,
    private bookingsService: BookingsService
  ) {}

  ngOnInit(): void {
    this.numberOfBookings$ = this.bookingsService.getBookingsNumber();
  }
}
