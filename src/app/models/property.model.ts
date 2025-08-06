export interface PropertyFeature {
  icon: string;
  label: string;
  desc: string;
}

export interface AvailableSpace {
  unit: string;
  size: string;
  rate: string;
  status: 'Available Now' | 'Available Q2 2025' | 'Leased';
}

export interface Property {
  name: string;
  description: string;
  features: PropertyFeature[];
  availableSpaces: AvailableSpace[];
  specifications: {
    totalSize: string;
    clearHeight: string;
    columnSpacing: string;
    construction: string;
    roof: string;
    dockDoors: number;
    gradeDoors: number;
  };
}