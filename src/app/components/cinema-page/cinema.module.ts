import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';

import { CinemaComponent } from './cinema/cinema.component';
import { CinemaDetailsComponent } from './cinema-details/cinema-details.component';
import { ScreensListComponent } from './screens-list/screens-list.component';
import { ScreenComponent } from './screen/screen.component';
import { ScreeningComponent } from './screening/screening.component';

@NgModule({
  declarations: [
    CinemaComponent,
    CinemaDetailsComponent,
    ScreensListComponent,
    ScreenComponent,
    ScreeningComponent,
  ],
  imports: [CommonModule, AccordionModule, ButtonModule],
  exports: [CinemaComponent],
})
export class CinemaModule {}
