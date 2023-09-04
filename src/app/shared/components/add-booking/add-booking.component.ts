import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

import { BookingsService } from 'src/app/services/bookings.service';

@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.scss'],
})
export class AddBookingComponent {
  seats = new FormControl(null, Validators.required);

  constructor(
    private bookingsService: BookingsService,
    public config: DynamicDialogConfig
  ) {}

  addBooking() {
    if (this.seats.value)
      this.bookingsService
        .addBooking({
          screeningId: this.config.data.screening.id,
          seats: this.seats.value,
        })
        .subscribe({
          next: () => {
            window.location.reload();
          },
          error: (error) => console.log(error),
        });
  }
}
