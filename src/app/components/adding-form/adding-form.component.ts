import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AzubiService } from 'src/app/services/azubi.service';

@Component({
  selector: 'app-adding-form',
  templateUrl: './adding-form.component.html',
  styleUrls: ['./adding-form.component.css'],
})
export class AddingFormComponent implements OnInit {
  firstName = '';
  lastName = '';
  email = '';
  phoneNumber = '';
  address = '';
  birthDate = '';
  gender = '';
  firstDay = '';
  lastDay = '';
  jobName = '';
  constructor(private azubiService: AzubiService) {}

  ngOnInit(): void {}
  addAzubi(createForm: NgForm) {
    let newAzubi = {
      name: this.firstName + ' ' + this.lastName,
      personalData: {
        email: this.email,
        phoneNumber: this.phoneNumber,
        address: this.address,
        birthDate: this.birthDate,
        gender: this.gender,
      },
      jobData: {
        startDate: this.firstDay,
        endDate: this.lastDay,
        jobName: this.jobName,
      },
      vacation: [],
      illness: [],
      vacationDays: 0,
      illnessDays: 0,
    };
    this.azubiService.newAzubi.emit(newAzubi);
    this.azubiService.azubis.push(newAzubi);
    createForm.resetForm();
  }
}
