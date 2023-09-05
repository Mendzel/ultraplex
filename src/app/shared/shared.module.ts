import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';

import { HeaderComponent } from './components/header/header.component';
import { AddCinemaComponent } from './components/add-cinema/add-cinema.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { AddScreenComponent } from './components/add-screen/add-screen.component';
import { AddBookingComponent } from './components/add-booking/add-booking.component';
import { AddScreeningComponent } from './components/add-screening/add-screening.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AddCinemaComponent,
    AddMovieComponent,
    AddScreenComponent,
    AddBookingComponent,
    AddScreeningComponent,
    ErrorPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    ReactiveFormsModule,
    InputTextModule,
    CalendarModule,
    DropdownModule,
  ],
  exports: [HeaderComponent],
})
export class SharedModule {}
