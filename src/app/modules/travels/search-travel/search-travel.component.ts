import { Component } from '@angular/core';
import { Travel } from '../../core/interfaces/travel';
import { TravelService } from '../../core/services/travel.service';

@Component({
  selector: 'app-search-travel',
  templateUrl: './search-travel.component.html',
  styleUrls: ['./search-travel.component.css'],
})
export class SearchTravelComponent {
  travels!: Travel[];
  kindOfSearching!: number;
  destinationName!: string;

  constructor(private travelService: TravelService) {}

  findAllTravelsByDestination() {
    if (this.kindOfSearching == 1) {
      this.findTravelByCountry();
    } else if (this.kindOfSearching == 2) {
      this.findTravelByCity();
    } else {
      this.findTravelByContinent();
    }
  }

  findTravelByCity() {
    this.travelService
      .searchTravelByCity(this.destinationName)
      .subscribe((travel) => {
        return (this.travels = travel);
      });
  }

  findTravelByCountry() {
    this.travelService
      .searchTravelByCountry(this.destinationName)
      .subscribe((travel) => {
        return (this.travels = travel);
      });
  }

  findTravelByContinent() {
    this.travelService
      .searchTravelByContinent(this.destinationName)
      .subscribe((travel) => {
        return (this.travels = travel);
      });
  }
}
