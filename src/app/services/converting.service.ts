import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConvertingService {
  constructor() {}
  convertDate(date: number) {
    let day;
    switch (date) {
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
    return day;
  }
  convertMonth(month: number) {
    let convertedMonth;
    switch (month) {
      case 0: {
        convertedMonth = 'Januar';
        break;
      }
      case 1: {
        convertedMonth = 'Februar';
        break;
      }
      case 2: {
        convertedMonth = 'März';
        break;
      }
      case 3: {
        convertedMonth = 'April';
        break;
      }
      case 4: {
        convertedMonth = 'Mai';
        break;
      }
      case 5: {
        convertedMonth = 'Juni';
        break;
      }
      case 6: {
        convertedMonth = 'Juli';
        break;
      }
      case 7: {
        convertedMonth = 'August';
        break;
      }
      case 8: {
        convertedMonth = 'September';
        break;
      }
      case 9: {
        convertedMonth = 'Oktober';
        break;
      }
      case 10: {
        convertedMonth = 'November';
        break;
      }
      case 11: {
        convertedMonth = 'Dezember';
        break;
      }
    }
    return convertedMonth;
  }
}
