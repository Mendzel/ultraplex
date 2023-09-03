import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CinemaComponent } from './cinema/cinema.component';
import { CinemaDetailsComponent } from './cinema-details/cinema-details.component';
import { ScreensListComponent } from './screens-list/screens-list.component';
import { ScreenComponent } from './screen/screen.component';

@NgModule({
  declarations: [
    CinemaComponent,
    CinemaDetailsComponent,
    ScreensListComponent,
    ScreenComponent,
  ],
  imports: [CommonModule],
  exports: [CinemaComponent],
})
export class CinemaModule {}
