import { Component, OnInit } from '@angular/core';
import { AzubiService } from 'src/app/services/azubi.service';
@Component({
  selector: 'app-azubi-management',
  templateUrl: './azubi-management.component.html',
  styleUrls: ['./azubi-management.component.css'],
})
export class AzubiManagementComponent implements OnInit {
  azubis: any[] = [];

  constructor(private azubiService: AzubiService) {}

  ngOnInit(): void {
    this.azubiService.azubis.forEach((azubi) => {
      this.azubis.push(azubi);
    });
  }
}
