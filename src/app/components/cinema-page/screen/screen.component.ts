import { Component, Input, effect } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

import { Screen } from 'src/app/interfaces/screen';
import { Screening } from 'src/app/interfaces/screening';
import { StoreService } from 'src/app/services/store.service';
import { AddScreeningComponent } from 'src/app/shared/components/add-screening/add-screening.component';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss'],
  providers: [DialogService],
})
export class ScreenComponent {
  @Input() screenData?: Screen;
  screenings: Screening[] = [];
  ref: DynamicDialogRef | undefined;

  constructor(
    private store: StoreService,
    private dialogService: DialogService
  ) {
    effect(() => {
      this.screenings = this.filterScreeningsByScreenName(
        this.store.screeningsForSelectedCinema()
      );
    });
  }

  assignHeaderName() {
    return `${this.screenData?.name} (Screenings: ${this.screenings.length})`;
  }

  filterScreeningsByScreenName(screenings: Screening[]) {
    return screenings.filter(
      (screening) => screening.screenName === this.screenData?.name
    );
  }

  trackByScreening(index: number, screening: Screening) {
    return screening.id;
  }

  addNewScreening() {
    this.ref = this.dialogService.open(AddScreeningComponent, {
      data: {
        cinemaId: this.store.selectedCinemaId(),
        screen: this.screenData,
      },
      header: 'Adding New Screening',
    });
  }
}
