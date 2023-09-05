import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard-page/dashboard/dashboard.component';
import { CinemaComponent } from './components/cinema-page/cinema/cinema.component';
import { ErrorPageComponent } from './shared/components/error-page/error-page.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'cinema/:id', component: CinemaComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', pathMatch: 'full', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
