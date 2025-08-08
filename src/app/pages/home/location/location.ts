import { Component, OnInit } from '@angular/core';
import { Property } from '../../../models/property.model';
import { PropertyService } from '../../../services/property.service';
import { CommonModule } from '@angular/common';
import { LucideIconsModule } from '../../../lucide.module';

@Component({
  selector: 'app-location',
  standalone: true,
    imports: [
    CommonModule,
    LucideIconsModule
  ],
  templateUrl: './location.html',
  styleUrls: ['./location.css']
})
export class LocationComponent implements OnInit {
  property: Property | null = null;

  constructor(private propertyService: PropertyService) {}

  ngOnInit(): void {
    this.propertyService.getProperty().subscribe(
      (data: Property) => {
        this.property = data;
      }
    );
  }
}