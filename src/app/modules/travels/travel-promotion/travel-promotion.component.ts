import { Router } from '@angular/router';
import { Travel } from '../../core/interfaces/travel';
import { TravelService } from '../../core/services/travel.service';
import { AfterViewInit, Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-travel-promotion',
  templateUrl: './travel-promotion.component.html',
  styleUrls: ['./travel-promotion.component.css'],
})
export class TravelPromotionComponent implements AfterViewInit {
  private _travelsInPromotion: Travel[] = [];

  dataSource!: MatTableDataSource<Travel>;
  displayedColumns: string[] = [
    'Dokąd',
    'Cena za osobę dorosłą',
    'cena za dziecko',
    'Data wylotu',
    'buttons',
  ];

  constructor(
    private travelService: TravelService,
    private router: Router,
  ) {}
  ngAfterViewInit(): void {
    this.travelService.getTravelsInPromotion().subscribe({
      next: (travel) => {
        this._travelsInPromotion = travel;
        this.dataSource = new MatTableDataSource<Travel>(travel);
      },
    });
  }

  // ngOnInit(): void {
  //   this.travelService.getTravelsInPromotion().subscribe({
  //     next: (travel) => {
  //       this._travelsInPromotion = travel;
  //     },
  //   });
  // }

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
