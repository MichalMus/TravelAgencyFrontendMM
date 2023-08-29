import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomecenterComponent } from './modules/core/components/homecenter/homecenter.component';
import { ContactComponent } from './modules/core/components/contact/contact.component';
import { AboutUsComponent } from './modules/core/components/about-us/about-us.component';

const routes: Routes = [
  { path: '', component: HomecenterComponent, pathMatch: 'full' },
  { path: 'contact', component: ContactComponent, title: 'Kontakt' },
  { path: 'about', component: AboutUsComponent, title: 'O nas' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
