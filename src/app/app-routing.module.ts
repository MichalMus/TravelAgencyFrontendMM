import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomecenterComponent } from './modules/core/components/homecenter/homecenter.component';
import { ContactComponent } from './modules/core/components/contact/contact.component';
import { AboutUsComponent } from './modules/core/components/about-us/about-us.component';
import { TravelPromotionComponent } from './modules/core/components/travel-promotion/travel-promotion.component';
import { TravelDetailsComponent } from './modules/core/components/travel-details/travel-details.component';
import { SearchTravelComponent } from './modules/core/components/search-travel/search-travel.component';


const routes: Routes = [
  { path: '', component: HomecenterComponent, pathMatch: 'full' },
  { path: 'contact', component: ContactComponent, title: 'Kontakt' },
  { path: 'about', component: AboutUsComponent, title: 'O nas' },
  { path: 'promotions', component: TravelPromotionComponent, title: 'promocje' },
  { path: 'travel/:id', component: TravelDetailsComponent, title: 'Szczegóły podróży' },
  { path: 'search', component: SearchTravelComponent, title: 'Wyszukiwanie' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
