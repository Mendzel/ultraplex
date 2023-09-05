import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Observable } from 'rxjs';

import { BookingsService } from 'src/app/services/bookings.service';
import { StoreService } from 'src/app/services/store.service';
import { AddCinemaComponent } from 'src/app/shared/components/add-cinema/add-cinema.component';
import { AddMovieComponent } from 'src/app/shared/components/add-movie/add-movie.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [DialogService],
})
export class DashboardComponent {
  numberOfBookings$?: Observable<number | never[]>;
  ref: DynamicDialogRef | undefined;

  constructor(
    public store: StoreService,
    public dialogService: DialogService,
    private bookingsService: BookingsService
  ) {}

  ngOnInit(): void {
    this.numberOfBookings$ = this.bookingsService.getBookingsNumber();
  }

  showAddCinemaDialog(): void {
    this.ref = this.dialogService.open(AddCinemaComponent, {
      header: 'Adding New Cinema',
    });
  }

  showAddMovieDialog(): void {
    this.ref = this.dialogService.open(AddMovieComponent, {
      header: 'Adding New Movie',
    });
  }
}
