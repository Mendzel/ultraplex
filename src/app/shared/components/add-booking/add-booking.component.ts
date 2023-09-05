import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

import { BookingsService } from 'src/app/services/bookings.service';

@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.scss'],
})
export class AddBookingComponent {
  seats = new FormControl(null, Validators.required);
  sending = false;

  constructor(
    private bookingsService: BookingsService,
    public config: DynamicDialogConfig,
    private messageService: MessageService
  ) {}

  addBooking() {
    if (this.seats.value) {
      this.sending = true;

      this.bookingsService
        .addBooking({
          screeningId: this.config.data.screening.id,
          seats: this.seats.value,
        })
        .subscribe({
          next: () => {
            window.location.reload();
          },
          error: (error: HttpErrorResponse) => {
            this.messageService.add({
              severity: 'error',
              summary: `HTTP Error, Status code: ${error.status}`,
              detail: error.error.error,
            });
            this.sending = false;
          },
        });
    }
  }
}
