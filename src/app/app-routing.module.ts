import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomecenterComponent } from './modules/core/components/homecenter/homecenter.component';
import { ContactComponent } from './modules/core/components/contact/contact.component';
import { AboutUsComponent } from './modules/core/components/about-us/about-us.component';
import { TravelPromotionComponent } from './modules/travels/travel-promotion/travel-promotion.component';
import { TravelDetailsComponent } from './modules/travels/travel-details/travel-details.component';
import { SearchTravelComponent } from './modules/travels/search-travel/search-travel.component';
import { TravelFormComponent } from './modules/travels/travel-form/travel-form.component';

const routes: Routes = [
  { path: '', component: HomecenterComponent, pathMatch: 'full' },
  { path: 'contact', component: ContactComponent, title: 'Kontakt' },
  { path: 'about', component: AboutUsComponent, title: 'O nas' },
  {
    path: 'promotions',
    component: TravelPromotionComponent,
    title: 'promocje',
  },
  {
    path: 'travels/add',
    component: TravelFormComponent,
    title: 'Szczegóły podróży',
  },
  {
    path: 'travel/:id',
    component: TravelDetailsComponent,
    title: 'Szczegóły podróży',
  },
  { path: 'search', component: SearchTravelComponent, title: 'Wyszukiwanie' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
