import { Component, Input } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

import { Screening } from 'src/app/interfaces/screening';
import { AddBookingComponent } from 'src/app/shared/components/add-booking/add-booking.component';

@Component({
  selector: 'app-screening',
  templateUrl: './screening.component.html',
  styleUrls: ['./screening.component.scss'],
  providers: [DialogService],
})
export class ScreeningComponent {
  @Input() screening?: Screening;
  ref: DynamicDialogRef | undefined;

  constructor(public dialogService: DialogService) {}

  addNewBooking() {
    this.ref = this.dialogService.open(AddBookingComponent, {
      data: {
        screening: this.screening,
      },
      header: 'Adding new booking',
    });
  }

  getScreeningEndTime(): string {
    let newDate;

    if (this.screening) {
      const dateObject = new Date(this.screening.start);
      newDate = new Date(
        dateObject.getTime() + this.screening.movie.runtime * 60000 // Adding runtime to specify screening end date
      );
    }
    return newDate!.toISOString();
  }
}
