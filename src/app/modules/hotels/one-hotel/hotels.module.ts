import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { HotelsRoutingModule } from '../hotels-routing.module';
import { HotelsTableComponent } from '../hotels-table/hotels-table.component';
import { DeleteHotelDialogComponent } from './delete-hotel-dialog/delete-hotel-dialog.component';
import { EditHotelDialogComponent } from './edit-hotel-dialog/edit-hotel-dialog.component';
import { OneHotelComponent } from './one-hotel.component';
import { HotelFormComponent } from '../hotel-form/hotel-form.component';

@NgModule({
  declarations: [
    HotelsTableComponent,
    OneHotelComponent,
    DeleteHotelDialogComponent,
    EditHotelDialogComponent,
    HotelFormComponent,
  ],
  imports: [HotelsRoutingModule, SharedModule],
  exports: [],
})
export class HotelsModule {}
