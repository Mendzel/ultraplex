import { Component, Input, effect } from '@angular/core';
import { Screen } from 'src/app/interfaces/screen';
import { Screening } from 'src/app/interfaces/screening';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss'],
})
export class ScreenComponent {
  @Input() screen?: Screen;
  screenings: Screening[] = [];

  constructor(private store: StoreService) {
    effect(() => {
      this.screenings = this.filterScreeningsByScreenName(
        this.store.screeningsForSelectedCinema()
      );
    });
  }

  filterScreeningsByScreenName(screenings: Screening[]) {
    return screenings.filter(
      (screening) => screening.screenName === this.screen?.name
    );
  }

  trackByScreening(index: number, screening: Screening) {
    return screening.id;
  }
}
