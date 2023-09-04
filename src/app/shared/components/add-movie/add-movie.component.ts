import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss'],
})
export class AddMovieComponent {
  name = new FormControl('', Validators.required);
  runtime = new FormControl(0, Validators.required);

  constructor(private moviesService: MoviesService) {}

  addMovie() {
    if (this.name.value && this.runtime.value)
      this.moviesService
        .addMovie({ name: this.name.value, runtime: this.runtime.value })
        .subscribe({
          next: () => {
            this.name.setValue('');
            this.runtime.setValue(0);
            window.location.reload();
          },
          error: (error) => console.log(error),
        });
  }
}
