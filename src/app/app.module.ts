import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/core/components/header/header.component';
import { FooterComponent } from './modules/core/components/footer/footer.component';
import { HomecenterComponent } from './modules/core/components/homecenter/homecenter.component';
import { AboutUsComponent } from './modules/core/components/about-us/about-us.component';
import { ContactComponent } from './modules/core/components/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { TravelPromotionComponent } from './modules/travels/travel-promotion/travel-promotion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TravelDetailsComponent } from './modules/travels/travel-details/travel-details.component';
import { SearchTravelComponent } from './modules/travels/search-travel/search-travel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './modules/shared/material/material.module';
import { AuthModule } from './modules/auth/auth.module';
import { ClientsModule } from './modules/clients/clients.module';
import { HotelsModule } from './modules/hotels/one-hotel/hotels.module';
import { SharedModule } from './modules/shared/shared.module';
import { TravelFormComponent } from './modules/travels/travel-form/travel-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomecenterComponent,
    AboutUsComponent,
    ContactComponent,
    TravelPromotionComponent,
    TravelDetailsComponent,
    SearchTravelComponent,
    TravelFormComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    AuthModule,
    ClientsModule,
    HotelsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class AppModule {}
