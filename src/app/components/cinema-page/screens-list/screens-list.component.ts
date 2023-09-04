import { Component, Input, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';

import { Screen } from 'src/app/interfaces/screen';
import { ScreeningsService } from 'src/app/services/screenings.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-screens-list',
  templateUrl: './screens-list.component.html',
  styleUrls: ['./screens-list.component.scss'],
})
export class ScreensListComponent implements OnInit {
  @Input() screens?: Screen[];

  constructor(
    private store: StoreService,
    private screeningsService: ScreeningsService
  ) {}

  async ngOnInit() {
    this.store.screeningsForSelectedCinema.set(
      await firstValueFrom(
        this.screeningsService.getScreenings(this.store.selectedCinemaId())
      )
    );
  }

  screenTrack(index: number, screen: Screen) {
    return screen.id;
  }
}
