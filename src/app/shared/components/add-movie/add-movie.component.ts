import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss'],
})
export class AddMovieComponent {
  name = new FormControl('', Validators.required);
  runtime = new FormControl(null, Validators.required);
  sending = false;

  constructor(
    private moviesService: MoviesService,
    private messageService: MessageService
  ) {}

  addMovie() {
    if (this.name.value && this.runtime.value) {
      this.sending = true;

      this.moviesService
        .addMovie({ name: this.name.value, runtime: this.runtime.value })
        .subscribe({
          next: () => {
            this.name.setValue('');
            this.runtime.setValue(null);
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
