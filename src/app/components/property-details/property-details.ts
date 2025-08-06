import { Component, OnInit } from '@angular/core';
import { Property } from '../../models/property.model';
import { PropertyService } from '../../services/property.service';
import { CommonModule } from '@angular/common';
import { LucideIconsModule } from '../../lucide.module';
import { MatTab, MatTabsModule } from "@angular/material/tabs";

@Component({
  selector: 'app-property-details',
  standalone: true,
    imports: [
    CommonModule,
    LucideIconsModule,
    MatTab,
    MatTabsModule
],
  templateUrl: './property-details.html',
  styleUrls: ['./property-details.css']
})
export class PropertyDetailsComponent implements OnInit {
  property: Property | null = null;
  activeTabIndex = 0;

  constructor(private propertyService: PropertyService) {}

  ngOnInit(): void {
    this.propertyService.getProperty().subscribe(
      (data: Property) => {
        this.property = data;
      }
    );
  }
}
