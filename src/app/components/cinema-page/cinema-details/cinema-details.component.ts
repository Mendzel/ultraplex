import { Component, Input } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

import { Cinema } from 'src/app/interfaces/cinema';
import { AddScreenComponent } from 'src/app/shared/components/add-screen/add-screen.component';

@Component({
  selector: 'app-cinema-details',
  templateUrl: './cinema-details.component.html',
  styleUrls: ['./cinema-details.component.scss'],
  providers: [DialogService],
})
export class CinemaDetailsComponent {
  @Input() cinema?: Cinema;
  ref: DynamicDialogRef | undefined;

  constructor(public dialogService: DialogService) {}

  addScreenToCinema() {
    this.ref = this.dialogService.open(AddScreenComponent, {
      data: {
        cinema: this.cinema,
      },
      header: `Adding New Screen`,
    });
  }
}
