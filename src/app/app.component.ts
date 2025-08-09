import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { HeroComponent } from './pages/home/hero/hero';
import { GalleryComponent } from './pages/home/gallery/gallery';
import { ContactComponent } from './pages/home/contact/contact'
import { PropertyDetailsComponent } from './pages/home/property-details/property-details';
import { LocationComponent } from './pages/home/location/location';
import { FooterComponent } from './components/footer/footer';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { LucideIconsModule } from './lucide.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    PropertyDetailsComponent,
    LocationComponent,
    FooterComponent,
    GalleryComponent,
    ContactComponent,
    CommonModule,
    RouterModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    LucideIconsModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
