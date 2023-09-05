import { Component, Input } from '@angular/core';

import { Cinema } from 'src/app/interfaces/cinema';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-cinemas-table',
  templateUrl: './cinemas-table.component.html',
  styleUrls: ['./cinemas-table.component.scss'],
})
export class CinemasTableComponent {
  @Input() cinemas!: Cinema[];

  constructor(private store: StoreService) {}

  selectedCinema(cinema: Cinema) {
    this.store.selectedCinema = cinema;
  }
}
