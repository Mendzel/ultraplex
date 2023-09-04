import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';

@Component({
  selector: 'app-movies-table',
  templateUrl: './movies-table.component.html',
  styleUrls: ['./movies-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoviesTableComponent {
  @Input() movies!: Movie[];
  movieCoversPaths = [
    './assets/movie-covers/1.jpg',
    './assets/movie-covers/2.png',
    './assets/movie-covers/3.jpg',
    './assets/movie-covers/4.png',
    './assets/movie-covers/5.jpg',
    './assets/movie-covers/6.jpg',
    './assets/movie-covers/7.jpg',
    './assets/movie-covers/8.jpg',
    './assets/movie-covers/9.jpg',
    './assets/movie-covers/10.jpg',
    './assets/movie-covers/11.jpg',
  ];

  assignRandomMovie() {
    const num = +(Math.random() * 11).toFixed();
    return this.movieCoversPaths[num];
  }
}
