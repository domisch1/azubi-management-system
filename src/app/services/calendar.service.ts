import { Injectable } from '@angular/core';
import { AzubiService } from './azubi.service';
import { ConvertingService } from './converting.service';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  today = new Date();
  month = this.today.getMonth() + 1;
  date = 1;
  year = this.today.getFullYear();
  viewMonth: any[] = [];
  monthActually = this.month;
  convertedMonth = this.convertingService.convertMonth(this.today.getMonth());

  constructor(
    private azubiService: AzubiService,
    private convertingService: ConvertingService
  ) {}

  createCalendar() {
    this.viewMonth = [];
    for (let i = 0; i < 42; i++) {
      let fullDate = new Date(this.month + '/' + this.date + '/' + this.year);
      if (fullDate.getMonth() + 1 !== this.month) {
        this.date = 1;
        this.month += 1;
        fullDate = new Date(this.month + '/' + this.date + '/' + this.year);
      }
      let fullDateString = this.month + '/' + this.date + '/' + this.year;
      if (i === 0 && fullDate.getDay() !== 1) {
        let monthBefore;
        let dateBefore;
        let yearBefore;
        let loopCondition;
        if (this.month === 1) {
          monthBefore = 12;
        } else {
          monthBefore = this.month - 1;
        }
        if (monthBefore === 2) {
          dateBefore = 28;
        } else if (
          monthBefore === 4 ||
          monthBefore === 6 ||
          monthBefore === 9 ||
          monthBefore === 11
        ) {
          dateBefore = 30;
        } else {
          dateBefore = 31;
        }
        if (monthBefore === 12) {
          yearBefore = this.year - 1;
        } else {
          yearBefore = this.year;
        }
        if (fullDate.getDay() === 0) {
          dateBefore -= 5;
        } else {
          dateBefore -= fullDate.getDay() - 2;
        }
        if (fullDate.getDay() === 0) {
          loopCondition = 7;
        } else {
          loopCondition = fullDate.getDay();
        }
        for (let j = 1; j < loopCondition; j++) {
          let fullDateBefore: any = new Date(
            monthBefore + '/' + dateBefore + '/' + yearBefore
          );
          let fullDateBeforeString =
            monthBefore + '/' + dateBefore + '/' + yearBefore;
          dateBefore = fullDateBefore.getDate() + 1;
          let dayBefore = this.convertingService.convertDate(
            fullDateBefore.getDay()
          );
          this.viewMonth.push({
            date: fullDateBefore,
            day: dayBefore,
            formattedDate: fullDateBeforeString,
            vacation: [],
            illness: [],
          });
        }
      }
      if (fullDate.getDate() === 31) {
        this.date = 1;
        this.month = fullDate.getMonth() + 2;
      } else {
        this.date = fullDate.getDate() + 1;
        this.month = fullDate.getMonth() + 1;
      }
      if (fullDate.getDate() === 31 && fullDate.getMonth() === 11) {
        this.month = 1;
        this.year = fullDate.getFullYear() + 1;
      } else {
        this.year = fullDate.getFullYear();
      }
      let day = this.convertingService.convertDate(fullDate.getDay());
      if (this.viewMonth.length < 42) {
        this.viewMonth.push({
          date: fullDate,
          day: day,
          formattedDate: fullDateString,
          vacation: [],
          illness: [],
        });
      }
    }
    this.month--;
    this.date = 1;
    this.azubiService.azubis.forEach((azubi) => {
      if (azubi.vacation.length > 0) {
        azubi.vacation.forEach((vacationObj: any) => {
          vacationObj.daysContainer.forEach((day: any) => {
            this.viewMonth.forEach((date) => {
              if (day === date.formattedDate) {
                date.vacation.push({
                  azubi: azubi.name,
                  days: vacationObj,
                });
              }
            });
          });
        });
      }
    });
    this.azubiService.azubis.forEach((azubi) => {
      if (azubi.illness.length > 0) {
        azubi.illness.forEach((illnessObj: any) => {
          illnessObj.daysContainer.forEach((day: any) => {
            this.viewMonth.forEach((date) => {
              if (day === date.formattedDate) {
                date.illness.push({
                  azubi: azubi.name,
                  days: illnessObj,
                });
              }
            });
          });
        });
      }
    });
    // console.log(this.viewMonth);
  }
  beforeMonth() {
    // YEAR SWITCH
    if (this.month === 1) {
      this.month = 12;
      this.year--;
      this.convertedMonth = this.convertingService.convertMonth(this.month - 1);
      this.createCalendar();
      this.month = 12;
      this.year--;
      this.monthActually = this.month;
    } else {
      this.month--;
      this.monthActually = this.month;
      this.convertedMonth = this.convertingService.convertMonth(this.month - 1);
      this.createCalendar();
    }
  }
  nextMonth() {
    // YEAR SWITCH
    if (this.month === 12) {
      this.month = 1;
      this.year++;
    } else {
      this.month++;
    }
    this.monthActually = this.month;
    this.convertedMonth = this.convertingService.convertMonth(this.month - 1);
    this.createCalendar();
  }
}
