import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { CinemasService } from 'src/app/services/cinemas.service';

@Component({
  selector: 'app-add-cinema',
  templateUrl: './add-cinema.component.html',
  styleUrls: ['./add-cinema.component.scss'],
})
export class AddCinemaComponent {
  name = new FormControl('', Validators.required);
  sending = false;

  constructor(
    private cinemaService: CinemasService,
    private messageService: MessageService
  ) {}

  addCinema() {
    if (this.name.value) {
      this.sending = true;

      this.cinemaService.addCinema({ name: this.name.value }).subscribe({
        next: () => {
          this.name.setValue('');
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
