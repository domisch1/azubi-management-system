import { Component, OnInit, OnDestroy } from '@angular/core';
import { CalendarService } from 'src/app/services/calendar.service';
import { ConvertingService } from 'src/app/services/converting.service';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
registerLocaleData(localeDe, 'de');
@Component({
  selector: 'app-calendar-basic',
  templateUrl: './calendar-basic.component.html',
  styleUrls: ['./calendar-basic.component.css'],
})
export class CalendarBasicComponent implements OnInit, OnDestroy {
  today: any;
  month: any;
  date: any;
  year: any;
  viewMonth: any[] = [];
  convertedMonth: any;
  monthActually: any;
  dayToggler = false;
  dayContent: any;
  constructor(
    private calendarService: CalendarService,
    private convertingService: ConvertingService
  ) {}
  ngOnInit(): void {
    this.today = this.calendarService.today;
    this.convertedMonth = this.calendarService.convertedMonth;
    this.month = this.calendarService.month;
    this.monthActually = this.calendarService.monthActually;
    this.date = 1;
    this.year = this.calendarService.year;
    this.calendarService.createCalendar();
    this.viewMonth = this.calendarService.viewMonth;
  }
  nextMonth() {
    this.calendarService.nextMonth();
    this.month = this.calendarService.month;
    this.monthActually = this.calendarService.monthActually;
    this.viewMonth = this.calendarService.viewMonth;
    this.convertedMonth = this.calendarService.convertedMonth;
  }
  beforeMonth() {
    this.calendarService.beforeMonth();
    this.month = this.calendarService.month;
    this.monthActually = this.calendarService.monthActually;
    this.viewMonth = this.calendarService.viewMonth;
    this.convertedMonth = this.calendarService.convertedMonth;
  }
  ngOnDestroy(): void {
    console.log(this.calendarService.month);
    this.calendarService.date = 1;
    this.calendarService.month = this.calendarService.today.getMonth() + 1;
    this.calendarService.year = this.calendarService.today.getFullYear();
    this.calendarService.convertedMonth = this.convertingService.convertMonth(
      this.calendarService.today.getMonth()
    );
    this.calendarService.viewMonth = [];
  }
  showDay(day: any) {
    console.log(day);
    this.dayToggler = true;
    this.dayContent = day;
  }
}
