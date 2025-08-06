import { Component, OnInit } from '@angular/core';
import { Property } from '../../models/property.model';
import { PropertyService } from '../../services/property.service';
import { CommonModule } from '@angular/common';
import { LucideIconsModule } from '../../lucide.module';

@Component({
  selector: 'app-property-details',
  standalone: true,
    imports: [
    CommonModule,
    LucideIconsModule,
],
  templateUrl: './property-details.html',
  styleUrls: ['./property-details.css']
})
export class PropertyDetailsComponent implements OnInit {
  property: Property | null = null;

  constructor(private propertyService: PropertyService) {}

  ngOnInit(): void {
    this.propertyService.getProperty().subscribe(property => {
      this.property = property;
    });
  }

  getStatusClass(status: string): string {
    return status.toLowerCase().replace(' ', '-');
  }
}
