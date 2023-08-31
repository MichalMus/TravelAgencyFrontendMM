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
import { TravelPromotionComponent } from './modules/core/components/travel-promotion/travel-promotion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { TravelDetailsComponent } from './modules/core/components/travel-details/travel-details.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
