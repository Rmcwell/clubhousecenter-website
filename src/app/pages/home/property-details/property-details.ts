import { Component, OnInit } from '@angular/core';
import { Property } from '../../../models/property.model';
import { PropertyService } from '../../../services/property.service';
import { CommonModule } from '@angular/common';
import { LucideIconsModule } from '../../../lucide.module';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-property-details',
  standalone: true,
  imports: [
    CommonModule,
    LucideIconsModule,
  ],
  templateUrl: './property-details.html',
  styleUrls: ['./property-details.css'],
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({ height: '0px', opacity: 0, overflow: 'hidden' })),
      state('expanded', style({ height: '*', opacity: 1 })),
      transition('collapsed <=> expanded', animate('300ms ease'))
    ])
  ]
})
export class PropertyDetailsComponent implements OnInit {

  units = [
    {
      floorUnitNumber: "1st Floor - 350 E1",
      use: "Industrial",
      size: 12000,
      rate: 24,
      status: "AVAILABLE",
      rowClass: "table-row available",
      statusClass: "status-available",
      expanded: false
    },
    {
      floorUnitNumber: "1st Floor - Ste J",
      use: "Office",
      size: 45000,
      rate: 13,
      status: "AVAILABLE",
      rowClass: "table-row available",
      statusClass: "status-available",
      expanded: false
    },
    {
      floorUnitNumber: "1st Floor - M",
      use: "Office",
      size: 81000,
      rate: 13,
      status: "COMING SOON",
      rowClass: "table-row available",
      statusClass: "status-coming-soon",
      expanded: false
    },
    {
      floorUnitNumber: "2nd Floor - Ste 227",
      use: "Office",
      size: 45000,
      rate: 13,
      status: "AVAILABLE",
      rowClass: "table-row coming-soon",
      statusClass: "status-available",
      expanded: false
    }
  ]



  property: Property | null = null;

  constructor(private propertyService: PropertyService) { }

  ngOnInit(): void {
    this.propertyService.getProperty().subscribe(property => {
      this.property = property;
    });
  }

  getStatusClass(status: string): string {
    return status.toLowerCase().replace(' ', '-');
  }
}
