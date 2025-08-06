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
  isMobileMenuOpen = false;

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
