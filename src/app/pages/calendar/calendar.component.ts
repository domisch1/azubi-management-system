import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  month: any[] = [];
  constructor() {}

  ngOnInit(): void {
    let month = 2;
    let date = 1;
    let year = 2022;
    for (let i = 0; i < 42; i++) {
      let day;
      let fullDate = new Date(month + '/' + date + '/' + year);
      console.log(fullDate.getDay());
      if (i === 0 && fullDate.getDay() !== 1) {
        let dayBefore;
        let monthBefore;
        let dateBefore;
        let yearBefore;
        let loopCondition;
        if (month === 1) {
          monthBefore = 12;
        } else {
          monthBefore = month - 1;
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
        if (monthBefore === 1) {
          yearBefore = year - 1;
        } else {
          yearBefore = year;
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
        console.log(monthBefore + '/' + dateBefore + '/' + yearBefore);
        for (let j = 1; j < loopCondition; j++) {
          let fullDateBefore: any = new Date(
            monthBefore + '/' + dateBefore + '/' + yearBefore
          );
          dateBefore = fullDateBefore.getDate() + 1;
          switch (fullDateBefore.getDay()) {
            case 0: {
              dayBefore = 'Sonntag';
              break;
            }
            case 1: {
              dayBefore = 'Montag';
              break;
            }
            case 2: {
              dayBefore = 'Dienstag';
              break;
            }
            case 3: {
              dayBefore = 'Mittwoch';
              break;
            }
            case 4: {
              dayBefore = 'Donnerstag';
              break;
            }
            case 5: {
              dayBefore = 'Freitag';
              break;
            }
            case 6: {
              dayBefore = 'Samstag';
              break;
            }
          }
          this.month.push({ date: fullDateBefore, day: dayBefore });
        }
      }
      if (fullDate.getDate() === 31) {
        date = 1;
        month = fullDate.getMonth() + 2;
      } else {
        date = fullDate.getDate() + 1;
        month = fullDate.getMonth() + 1;
      }
      if (fullDate.getDate() === 31 && fullDate.getMonth() === 11) {
        month = 1;
        year = fullDate.getFullYear() + 1;
      } else {
        year = fullDate.getFullYear();
      }
      switch (fullDate.getDay()) {
        case 0: {
          day = 'Sonntag';
          break;
        }
        case 1: {
          day = 'Montag';
          break;
        }
        case 2: {
          day = 'Dienstag';
          break;
        }
        case 3: {
          day = 'Mittwoch';
          break;
        }
        case 4: {
          day = 'Donnerstag';
          break;
        }
        case 5: {
          day = 'Freitag';
          break;
        }
        case 6: {
          day = 'Samstag';
          break;
        }
      }
      if (this.month.length < 42) {
        this.month.push({ date: fullDate, day: day });
      }
    }
    console.log(this.month);
  }
}
