import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { CinemasService } from 'src/app/services/cinemas.service';

@Component({
  selector: 'app-add-screen',
  templateUrl: './add-screen.component.html',
  styleUrls: ['./add-screen.component.scss'],
})
export class AddScreenComponent {
  name = new FormControl('', Validators.required);

  constructor(
    private cinemaService: CinemasService,
    public config: DynamicDialogConfig
  ) {}

  addScreen() {
    if (this.name.value)
      this.cinemaService
        .addScreenToCinema(this.config.data.cinema.id, {
          name: this.name.value,
        })
        .subscribe({
          next: () => {
            window.location.reload();
          },
          error: (error) => console.log(error),
        });
  }
}
