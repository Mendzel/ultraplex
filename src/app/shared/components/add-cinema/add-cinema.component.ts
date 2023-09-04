import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CinemasService } from 'src/app/services/cinemas.service';

@Component({
  selector: 'app-add-cinema',
  templateUrl: './add-cinema.component.html',
  styleUrls: ['./add-cinema.component.scss'],
})
export class AddCinemaComponent {
  name = new FormControl('', Validators.required);

  constructor(private cinemaService: CinemasService) {}

  addCinema() {
    if (this.name.value)
      this.cinemaService.addCinema({ name: this.name.value }).subscribe({
        next: () => {
          this.name.setValue('');
          window.location.reload();
        },
        error: (error) => console.log(error),
      });
  }
}
