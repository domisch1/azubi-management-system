import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AzubiService } from 'src/app/services/azubi.service';

@Component({
  selector: 'app-azubi-view',
  templateUrl: './azubi-view.component.html',
  styleUrls: ['./azubi-view.component.css'],
})
export class AzubiViewComponent implements OnInit, OnDestroy {
  activeAzubi: any = {};
  id: any;
  private subRoute: any;
  private azubiSubVacation: any;
  private azubiSubIllness: any;

  constructor(
    private azubiService: AzubiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subRoute = this.route.params.subscribe((params) => {
      this.id = +params['id'];
      this.activeAzubi = this.azubiService.azubis[+params['id']];
    });
    this.azubiSubVacation = this.azubiService.newVacation.subscribe((data) => {
      this.activeAzubi.vacationDays += data.days;
    });
    this.azubiSubIllness = this.azubiService.newIllness.subscribe((data) => {
      this.activeAzubi.illnessDays += data.days;
    });
  }
  ngOnDestroy(): void {
    this.azubiSubVacation.unsubscribe();
    this.azubiSubIllness.unsubscribe();
    this.subRoute.unsubscribe();
  }
}
