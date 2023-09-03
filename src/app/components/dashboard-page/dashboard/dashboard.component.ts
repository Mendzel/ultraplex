import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Cinema } from 'src/app/interfaces/cinema';
import { Movie } from 'src/app/interfaces/movie';
import { BookingsService } from 'src/app/services/bookings.service';
import { CinemasService } from 'src/app/services/cinemas.service';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  cinemas$?: Observable<Cinema[]>;
  movies$?: Observable<Movie[]>;
  numberOfBookings$?: Observable<number>;

  constructor(
    public cinemasService: CinemasService,
    public moviesService: MoviesService,
    private bookingsService: BookingsService
  ) {}

  ngOnInit(): void {
    this.cinemas$ = this.cinemasService.getCinemas('size=1000');
    this.movies$ = this.moviesService.getMovies('size=1000');
    this.numberOfBookings$ = this.bookingsService.getBookingsNumber();
  }
}
