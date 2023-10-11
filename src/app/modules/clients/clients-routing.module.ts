import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients.component';
import { OneClientComponent } from './one-client/one-client.component';
import { ClientsTableComponent } from './clients-table/clients-table.component';
import { ClientFormComponent } from './client-form/client-form.component';

const routes: Routes = [
  { path: 'clients', component: ClientsComponent },
  { path: 'clients/add', component: ClientFormComponent },
  { path: 'clients/:id', component: OneClientComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientsRoutingModule {}
