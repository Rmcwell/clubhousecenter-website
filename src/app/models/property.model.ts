export interface Property {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  totalSquareFootage: number;
  availableUnits: Unit[];
  amenities: string[];
  description: string;
  images: PropertyImage[];
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface Unit {
  suiteNumber: string;
  squareFootage: number;
  pricePerSqFt?: number;
  availability: 'Available' | 'Occupied' | 'Coming Soon';
  floor: number;
  description?: string;
}

export interface PropertyImage {
  id: string;
  url: string;
  alt: string;
  category: 'exterior' | 'interior' | 'amenity' | 'location';
  isHero?: boolean;
}

export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  interestedInTour: boolean;
}