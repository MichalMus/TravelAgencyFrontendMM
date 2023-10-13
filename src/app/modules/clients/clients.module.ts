import { NgModule } from '@angular/core';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients.component';
import { SharedModule } from '../shared/shared.module';
import { ClientsTableComponent } from './clients-table/clients-table.component';
import { OneClientComponent } from './one-client/one-client.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { DeleteClientDialogComponent } from './one-client/delete-client-dialog/delete-client-dialog.component';
import { EditClientDialogComponent } from './one-client/edit-client-dialog/edit-client-dialog.component';

@NgModule({
  declarations: [
    ClientsComponent,
    ClientsTableComponent,
    OneClientComponent,
    ClientFormComponent,
    DeleteClientDialogComponent,
    EditClientDialogComponent,
  ],
  imports: [ClientsRoutingModule, SharedModule],
  exports: [ClientsComponent],
})
export class ClientsModule {}
