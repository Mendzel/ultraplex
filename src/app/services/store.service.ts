import { Injectable, effect, signal } from '@angular/core';

import { Cinema } from '../interfaces/cinema';
import { Movie } from '../interfaces/movie';
import { Screening } from '../interfaces/screening';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  cinemasCounter?: number;
  screensCounter!: number;
  moviesCounter?: number;
  selectedCinema?: Cinema;

  screeningsForSelectedCinema = signal<Screening[]>([]);
  movies = signal<Movie[]>([]);
  cinemas = signal<Cinema[]>([]);
  selectedCinemaId = signal<number>(0);

  constructor() {
    effect(() => {
      this.selectedCinema = this.cinemas().filter(
        (cinema) => cinema.id === this.selectedCinemaId()
      )[0];
    });
  }

  setScreenCounter(cinemas: Cinema[]) {
    this.screensCounter = 0;

    cinemas.forEach(
      (cinema) => (this.screensCounter += cinema.screens?.length || 0)
    );
  }
}
