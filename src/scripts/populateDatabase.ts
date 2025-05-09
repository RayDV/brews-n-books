import { addNewCafe } from '../services/cafeDataBaseService';
import { GeoPoint } from 'firebase/firestore';

const cafesToAdd = [
  {
    name: 'Caffeine Corner',
    address: '123 Main St, San Francisco, CA',
    placeId: 'place-caffeine-corner',
    formattedAddress: '123 Main St, San Francisco, CA 94105',
    location: new GeoPoint(37.7749, -122.4194),
    imageUrl: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FmZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
    description: 'A cozy corner café with great espresso and fast Wi-Fi',
    rating: 4.7,
    hasWifi: true,
    powerOutlets: 'Plenty' as const,
    crowdLevel: 'Medium' as const
  },
  {
    name: 'Book & Bean',
    address: '456 Park Ave, New York, NY',
    placeId: 'place-book-bean',
    formattedAddress: '456 Park Ave, New York, NY 10022',
    location: new GeoPoint(40.7128, -74.006),
    imageUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3N0b3JlJTIwY2FmZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
    description: 'Bookstore café with literary events and specialty drinks',
    rating: 4.5,
    hasWifi: true,
    powerOutlets: 'Some' as const,
    crowdLevel: 'Low' as const
  },
  {
    name: 'Espresso Express',
    address: '789 Market St, Seattle, WA',
    placeId: 'place-espresso-express',
    formattedAddress: '789 Market St, Seattle, WA 98101',
    location: new GeoPoint(47.6062, -122.3321),
    imageUrl: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FmZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
    description: 'Quick service café with excellent pour-overs',
    rating: 4.2,
    hasWifi: true,
    powerOutlets: 'Low' as const,
    crowdLevel: 'High' as const 
  }
];

async function populateDatabase() {
  console.log('Starting database population...');
  
  try {
    for (const cafe of cafesToAdd) {
      const cafeId = await addNewCafe(cafe);
      console.log(`Added café "${cafe.name}" with ID: ${cafeId}`);
    }
    console.log('Database population complete!');
  } catch (error) {
    console.error('Error populating database:', error);
  }
}

populateDatabase();