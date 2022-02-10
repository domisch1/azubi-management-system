import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalSpaceComponent } from './pages/personal-space/personal-space.component';
import { AzubiManagementComponent } from './pages/azubi-management/azubi-management.component';
import { CalendarComponent } from './pages/calendar/calendar.component';

const routes: Routes = [
  { path: '', component: PersonalSpaceComponent },
  { path: 'azubis', component: AzubiManagementComponent },
  { path: 'calendar', component: CalendarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
