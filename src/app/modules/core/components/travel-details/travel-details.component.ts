import { Component, OnInit } from '@angular/core';
import { Travel } from '../../interfaces/travel';
import { TravelService } from '../../services/travel.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-travel-details',
  templateUrl: './travel-details.component.html',
  styleUrls: ['./travel-details.component.css'],
})
export class TravelDetailsComponent implements OnInit {
  travel: Travel | undefined;
  id!: number;

  constructor(
    private travelService: TravelService,
    private router: Router,
    private acivatedRoute: ActivatedRoute,
  ) {}
  ngOnInit(): void {
    // this.id = +this.acivatedRoute.snapshot.params['id'];
    this.acivatedRoute.params.subscribe((params) => {
      this.id = +params['id'];
    });
    this.travelService.getTravelById(this.id).subscribe((response) => {
      this.travel = response;
    });
  }
}
