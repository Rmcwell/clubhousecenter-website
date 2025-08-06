import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Property, Unit, PropertyImage } from '../models/property.model';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private mockProperty: Property = {
    id: 'clubhouse-center',
    name: 'Clubhouse Center',
    address: '300 Clubhouse Road',
    city: 'Hunt Valley',
    state: 'Maryland',
    zipCode: '21030',
    totalSquareFootage: 137500,
    availableUnits: [
      {
        suiteNumber: '100',
        squareFootage: 2500,
        pricePerSqFt: 24,
        availability: 'Available',
        floor: 1,
        description: 'Ground floor suite with excellent visibility'
      },
      {
        suiteNumber: '205',
        squareFootage: 1800,
        pricePerSqFt: 26,
        availability: 'Available',
        floor: 2,
        description: 'Second floor office space with mountain views'
      },
      {
        suiteNumber: '310',
        squareFootage: 3200,
        pricePerSqFt: 28,
        availability: 'Coming Soon',
        floor: 3,
        description: 'Premium corner suite with panoramic views'
      }
    ],
    amenities: [
      'On-site fitness center',
      'Conference facilities',
      'Covered parking',
      'Landscaped courtyards',
      'Food service options',
      '24/7 security',
      'High-speed internet',
      'HVAC systems',
      'Loading dock access',
      'Visitor parking'
    ],
    description: 'Executive Plaza is a four building, 550,000 square foot office complex located in Hunt Valley, Maryland. This unique office complex boasts onsite amenities that are second to none. Located throughout the base of Executive Plaza\'s four buildings, the amenities take convenience and productivity to new heights.',
    images: [
      {
        id: '1',
        url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop',
        alt: 'Executive Plaza IV Exterior',
        category: 'exterior',
        isHero: true
      },
      {
        id: '2',
        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
        alt: 'Modern Office Interior',
        category: 'interior'
      },
      {
        id: '3',
        url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop',
        alt: 'Executive Conference Room',
        category: 'interior'
      },
      {
        id: '4',
        url: 'https://images.unsplash.com/photo-1571624436279-b272adf47f2a?w=800&h=600&fit=crop',
        alt: 'Fitness Center',
        category: 'amenity'
      }
    ],
    coordinates: {
      lat: 39.5098,
      lng: -76.6678
    }
  };

  getProperty(): Observable<Property> {
    return of(this.mockProperty);
  }

  submitContactForm(formData: any): Observable<boolean> {
    // In a real application, this would make an HTTP request
    console.log('Contact form submitted:', formData);
    return of(true);
  }
}