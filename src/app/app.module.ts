import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PersonalSpaceComponent } from './pages/personal-space/personal-space.component';
import { AzubiManagementComponent } from './pages/azubi-management/azubi-management.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { AddingFormComponent } from './components/adding-form/adding-form.component';
import { AzubiViewComponent } from './components/azubi-view/azubi-view.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PersonalSpaceComponent,
    AzubiManagementComponent,
    CalendarComponent,
    AddingFormComponent,
    AzubiViewComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
