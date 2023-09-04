import { Component, OnInit } from '@angular/core';

import { CinemasService } from './services/cinemas.service';
import { MoviesService } from './services/movies.service';
import { StoreService } from './services/store.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ultraplex';

  constructor(
    private cinemasService: CinemasService,
    private moviesService: MoviesService,
    private store: StoreService
  ) {}

  ngOnInit() {
    this.getData();
  }

  async getData() {
    this.store.cinemas.set(
      await firstValueFrom(this.cinemasService.getCinemas('size=1000'))
    );
    this.store.movies.set(
      await firstValueFrom(this.moviesService.getMovies('size=1000'))
    );
  }
}
