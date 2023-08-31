import { Router } from '@angular/router';
import { Travel } from '../../interfaces/travel';
import { TravelService } from '../../services/travel.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travel-promotion',
  templateUrl: './travel-promotion.component.html',
  styleUrls: ['./travel-promotion.component.css'],
})
export class TravelPromotionComponent implements OnInit {
  private _travelsInPromotion: Travel[] = [];
  constructor(
    private travelService: TravelService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.travelService.getTravelsInPromotion().subscribe({
      next: (travel) => {
        this._travelsInPromotion = travel;
      },
    });
  }

  public get travels() {
    return this._travelsInPromotion.slice();
  }

  getTravel(index: number): Travel {
    return this.travels[index];
  }

  navigateToDetails(index: number) {
    this.router.navigate(['/travel', index]);
  }
}
