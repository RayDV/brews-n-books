import { GeoPoint, Timestamp } from 'firebase/firestore';

export interface Cafe {
  id?: string;
  name: string;
  // Google Places specific identifiers
  placeId: string;

  // Basic info (can be populated from Google Places API)
  address: string;
  formattedAddress?: string;
  phoneNumber?: string;
  websiteUrl?: string;

  // Location data
  location?: GeoPoint;

  // Image and description
  imageUrl?: string;
  description?: string;
  
  // Extra fields from Google Places API
  rating?: number;
  userRatingsTotal?: number;
  priceLevel?: number;
  openingHours?: {
    openNow: boolean;
    weekdayText: string[];
  };

  // Amenities for MVP
  hasWifi?: boolean;
  powerOutlets: 'Plenty' | 'Some' | 'Medium' | 'Low' | 'None' | 'Unknown';
  crowdLevel: 'High' | 'Medium' | 'Low' | 'Unknown';

  createdAt?: Timestamp;
  updatedAt?: Timestamp;
}
