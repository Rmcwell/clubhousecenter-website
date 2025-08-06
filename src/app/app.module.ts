import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, Menu, X, Phone, Mail, MapPin, Square, Truck, Zap, Shield, Star, ArrowRight } from 'lucide-angular';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header';
import { HeroComponent } from './components/hero/hero';
import { PropertyDetailsComponent } from './components/property-details/property-details';
import { SidebarComponent} from './components/sidebar/sidebar';
import { FooterComponent } from './components/footer/footer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    PropertyDetailsComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    RouterModule.forRoot([]),
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    LucideAngularModule.pick({ Menu, X, Phone, Mail, MapPin, Square, Truck, Zap, Shield, Star, ArrowRight })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }