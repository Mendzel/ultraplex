import { Injectable, effect, signal } from '@angular/core';

import { Cinema, CinemasData } from '../interfaces/cinema';
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

  setScreenCounter(cinemasData: CinemasData) {
    this.screensCounter = 0;

    cinemasData.content.forEach(
      (cinema) => (this.screensCounter += cinema.screens?.length || 0)
    );
  }
}
