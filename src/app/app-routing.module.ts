import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard-page/dashboard/dashboard.component';
import { CinemaComponent } from './components/cinema-page/cinema/cinema.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'cinema/:id', component: CinemaComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
