import { EventEmitter, Injectable } from '@angular/core';

interface TimeAway {
  timespan: string;
  days: number;
  daysContainer: any[];
}

interface Azubi {
  name: string;
  personalData: {
    email: string;
    phoneNumber: string;
    address: string;
    birthDate: string;
    gender: string;
  };
  jobData: {
    startDate: string;
    endDate: string;
    jobName: string;
  };
  vacation: Array<TimeAway> | any;
  illness: Array<TimeAway> | any;
  vacationDays: number;
  illnessDays: number;
}

@Injectable({
  providedIn: 'root',
})
export class AzubiService {
  azubis: Array<Azubi> = [
    {
      name: 'Max Mustermann',
      personalData: {
        email: 'max-muster@gmail.com',
        phoneNumber: '0176 821414512',
        address: 'An der Musteralee 21',
        birthDate: '21.01.2000',
        gender: 'männlich',
      },
      jobData: {
        startDate: '01.09.2022',
        endDate: '01.02.2025',
        jobName: 'Industriemechaniker',
      },
      vacation: [
        {
          timespan: '01.04.2022 - 05.04.2022',
          days: 5,
          daysContainer: [
            '4/1/2022',
            '4/2/2022',
            '4/3/2022',
            '4/4/2022',
            '4/5/2022',
          ],
        },
        {
          timespan: '08.02.2022 - 10.02.2022',
          days: 3,
          daysContainer: ['2/8/2022', '2/9/2022', '2/10/2022'],
        },
      ],
      illness: [
        {
          timespan: '15.02.2022 - 16.02.2022',
          days: 2,
          daysContainer: ['2/15/2022', '2/16/2022'],
        },
      ],
      vacationDays: 8,
      illnessDays: 2,
    },
    {
      name: 'Anna Bruch',
      personalData: {
        email: 'anna-muster@gmail.com',
        phoneNumber: '0176 46386523',
        address: 'Eberweg 12',
        birthDate: '18.12.2002',
        gender: 'weiblich',
      },
      jobData: {
        startDate: '01.09.2022',
        endDate: '01.02.2024',
        jobName: 'Fachkraft Metalltechnik',
      },
      vacation: [],
      illness: [],
      vacationDays: 0,
      illnessDays: 0,
    },
  ];

  constructor() {}

  setActiveAzubi = new EventEmitter();
  newAzubi = new EventEmitter();
  newVacation = new EventEmitter();
  newIllness = new EventEmitter();
}
