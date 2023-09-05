import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { CinemasService } from 'src/app/services/cinemas.service';

@Component({
  selector: 'app-add-screen',
  templateUrl: './add-screen.component.html',
  styleUrls: ['./add-screen.component.scss'],
})
export class AddScreenComponent {
  name = new FormControl('', Validators.required);
  sending = false;

  constructor(
    private cinemaService: CinemasService,
    public config: DynamicDialogConfig,
    private messageService: MessageService
  ) {}

  addScreen() {
    if (this.name.value) {
      this.sending = true;

      this.cinemaService
        .addScreenToCinema(this.config.data.cinema.id, {
          name: this.name.value,
        })
        .subscribe({
          next: () => {
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
