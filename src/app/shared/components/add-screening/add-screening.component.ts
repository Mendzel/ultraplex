import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { ScreeningsService } from 'src/app/services/screenings.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-add-screening',
  templateUrl: './add-screening.component.html',
  styleUrls: ['./add-screening.component.scss'],
})
export class AddScreeningComponent {
  movieId = new FormControl(undefined, Validators.required);
  startTime = new FormControl(new Date(), Validators.required);
  sending = false;

  constructor(
    private screeningService: ScreeningsService,
    public config: DynamicDialogConfig,
    public store: StoreService,
    private messageService: MessageService
  ) {}

  addScreening() {
    const date = this.startTime.value?.toISOString();

    if (this.movieId.value && date) {
      this.sending = true;

      this.screeningService
        .addScreening(
          { movieId: this.movieId.value, startTime: date },
          this.config.data.cinemaId,
          this.config.data.screen.id
        )
        .subscribe({
          next: () => {
            this.sending = false;
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
