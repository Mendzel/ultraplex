import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CinemasService } from './services/cinemas.service';
import { DashboardModule } from './components/dashboard-page/dashboard.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { CinemaModule } from './components/cinema-page/cinema.module';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    DashboardModule,
    CinemaModule,
    SharedModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastModule,
  ],
  providers: [CinemasService, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
