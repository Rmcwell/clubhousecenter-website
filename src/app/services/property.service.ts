import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Property, PropertyFeature, AvailableSpace } from '../models/property.model';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  
  private propertyData: Property = {
    name: 'Executive Warehouse Complex',
    description: 'Premium commercial warehouse space in a strategic logistics hub. Modern facilities with exceptional accessibility and professional management.',
    features: [
      { icon: 'square', label: '150,000 SF', desc: 'Total warehouse space' },
      { icon: 'truck', label: '32\' Clear Height', desc: 'High ceiling clearance' },
      { icon: 'zap', label: '480V Power', desc: 'Industrial electrical' },
      { icon: 'shield', label: '24/7 Security', desc: 'Monitored facility' }
    ],
    availableSpaces: [
      { unit: 'Unit A', size: '45,000 SF', rate: '$8.50/SF/Year', status: 'Available Now' },
      { unit: 'Unit B', size: '32,000 SF', rate: '$9.00/SF/Year', status: 'Available Q2 2025' },
      { unit: 'Unit C', size: '73,000 SF', rate: '$8.25/SF/Year', status: 'Available Now' }
    ],
    specifications: {
      totalSize: '150,000 SF',
      clearHeight: '32 feet',
      columnSpacing: '40\' x 50\'',
      construction: 'Tilt-up concrete',
      roof: 'TPO membrane',
      dockDoors: 24,
      gradeDoors: 4
    }
  };

  getProperty(): Observable<Property> {
    return of(this.propertyData);
  }
}