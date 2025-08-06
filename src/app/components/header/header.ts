import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideIconsModule } from '../../lucide.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    LucideIconsModule
  ],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {
  mobileMenuOpen = false;

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}
