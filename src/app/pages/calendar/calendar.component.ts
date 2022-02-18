import { Component, OnInit } from '@angular/core';
import { CalendarService } from 'src/app/services/calendar.service';
import { AzubiService } from 'src/app/services/azubi.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  constructor(
    private calendarService: CalendarService,
    private azubiService: AzubiService
  ) {}

  ngOnInit(): void {}
}
