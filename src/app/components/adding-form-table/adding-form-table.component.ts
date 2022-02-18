import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AzubiService } from 'src/app/services/azubi.service';

@Component({
  selector: 'app-adding-form-table',
  templateUrl: './adding-form-table.component.html',
  styleUrls: ['./adding-form-table.component.css'],
})
export class AddingFormTableComponent implements OnInit {
  @Input() triggerFunction: any;
  @Input() id: any;

  firstDay: any;
  lastDay: any;

  constructor(private azubiService: AzubiService) {}

  ngOnInit(): void {}
  formatDates() {
    console.log(this.firstDay);
    let firstDay = new Date(this.firstDay);
    let firstDayString =
      firstDay.getMonth() +
      1 +
      '/' +
      firstDay.getDate() +
      '/' +
      firstDay.getFullYear();
    let lastDay = new Date(this.lastDay.toString());
    let days = [firstDayString];
    let overallDays =
      Math.round(
        (lastDay.getTime() - firstDay.getTime()) * 0.000000011574074074074
      ) + 1;
    let mutateDay = firstDay;
    for (let i = 1; i < overallDays; i++) {
      let month = mutateDay.getMonth() + 1;
      let date = mutateDay.getDate() + 1;
      let year = mutateDay.getFullYear();
      let newDate = new Date(month + '/' + date + '/' + year);
      if (newDate.getMonth() + 1 !== month) {
        date = 1;
        month += 1;
        newDate = new Date(month + '/' + date + '/' + year);
      }
      let newDateString = month + '/' + date + '/' + year;
      days.push(newDateString.toString());
      mutateDay = newDate;
    }
    let firstDayDate;
    let firstDayMonth;
    let firstDayYear = firstDay.getFullYear();
    let lastDayDate;
    let lastDayMonth;
    let lastDayYear = lastDay.getFullYear();
    // FIRST DAY FORMAT DAY
    if (firstDay.getDate() < 10) {
      firstDayDate = '0' + firstDay.getDate();
    } else {
      firstDayDate = firstDay.getDate();
    }
    // FIRST DAY FORMAT MONTH
    if (firstDay.getMonth() < 9) {
      firstDayMonth = '0' + (firstDay.getMonth() + 1);
    } else {
      firstDayMonth = firstDay.getMonth() + 1;
    }
    // LAST DAY FORMAT DAY
    if (lastDay.getDate() < 10) {
      lastDayDate = '0' + lastDay.getDate();
    } else {
      lastDayDate = lastDay.getDate();
    }
    // LAST DAY FORMAT MONTH
    if (lastDay.getMonth() < 9) {
      lastDayMonth = '0' + (lastDay.getMonth() + 1);
    } else {
      lastDayMonth = lastDay.getMonth() + 1;
    }
    let resultFirstDay =
      firstDayDate + '.' + firstDayMonth + '.' + firstDayYear;
    let resultLastDay = lastDayDate + '.' + lastDayMonth + '.' + lastDayYear;
    return { resultFirstDay, resultLastDay, overallDays, days };
  }
  pushData(addDays: NgForm) {
    let result = this.formatDates();
    let timespan = result.resultFirstDay + ' - ' + result.resultLastDay;
    let test = new Date(this.firstDay);
    let days = result.overallDays;
    let daysContainer = result.days;
    if (this.triggerFunction === 'vacation') {
      this.azubiService.azubis[this.id].vacation.push({
        timespan,
        days,
        daysContainer,
      });
      this.azubiService.newVacation.emit({ timespan, days, test });
    }
    if (this.triggerFunction === 'illness') {
      this.azubiService.azubis[this.id].illness.push({
        timespan,
        days,
        daysContainer,
      });
      this.azubiService.newIllness.emit({ timespan, days });
    }
    addDays.resetForm();
  }
}
