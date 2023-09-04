import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

import { CounterComponent } from './counter/counter.component';
import { TableComponent } from './table/table.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CinemasTableComponent } from './cinemas-table/cinemas-table.component';
import { MoviesTableComponent } from './movies-table/movies-table.component';
import { RuntimeFormatterPipe } from 'src/app/pipes/runtime-formatter.pipe';

@NgModule({
  declarations: [
    CounterComponent,
    TableComponent,
    DashboardComponent,
    CinemasTableComponent,
    MoviesTableComponent,
    RuntimeFormatterPipe,
  ],
  imports: [
    CommonModule,
    CardModule,
    TabViewModule,
    TableModule,
    ButtonModule,
    RouterModule,
    BrowserAnimationsModule,
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
