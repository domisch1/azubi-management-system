import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalSpaceComponent } from './pages/personal-space/personal-space.component';
import { AzubiManagementComponent } from './pages/azubi-management/azubi-management.component';
import { CalendarComponent } from './pages/calendar/calendar.component';

import { AddingFormComponent } from './components/adding-form/adding-form.component';
import { AzubiViewComponent } from './components/azubi-view/azubi-view.component';

const routes: Routes = [
  { path: '', component: PersonalSpaceComponent },
  {
    path: 'azubis',
    component: AzubiManagementComponent,
    children: [
      { path: '', component: AddingFormComponent },
      { path: 'view/:id', component: AzubiViewComponent },
    ],
  },
  { path: 'calendar', component: CalendarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
