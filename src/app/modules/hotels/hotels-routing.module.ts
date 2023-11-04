import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelsTableComponent } from './hotels-table/hotels-table.component';
import { OneHotelComponent } from './one-hotel/one-hotel.component';
import { HotelFormComponent } from './hotel-form/hotel-form.component';

const routes: Routes = [
  { path: 'hotels', component: HotelsTableComponent, title: 'Hotele' },
  { path: 'hotels/add', component: HotelFormComponent, title: 'Dodaj Hotel' },
  { path: 'hotels/:id', component: OneHotelComponent, title: 'Hotel' },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelsRoutingModule {}
