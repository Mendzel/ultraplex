import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
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

  constructor(
    private screeningService: ScreeningsService,
    public config: DynamicDialogConfig,
    public store: StoreService
  ) {}

  addScreening() {
    const date = this.startTime.value?.toISOString();

    if (this.movieId.value && date)
      this.screeningService
        .addScreening(
          { movieId: this.movieId.value, startTime: date },
          this.config.data.cinemaId,
          this.config.data.screen.id
        )
        .subscribe({
          next: () => {
            window.location.reload();
          },
          error: (error) => console.log(error),
        });
  }
}
