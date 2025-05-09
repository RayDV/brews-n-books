// Import the functions we want to test
import {
  addNewCafe,
  getCafeById,
  getAllCafes,
  updateCafe,
  deleteCafe,
} from '../services/cafeDataBaseService.js';

import { GeoPoint } from 'firebase/firestore';


// Define an async function to run our tests
const runTest = async () => {
  console.log('Starting Cafe Service Tests...');

  // --- Test Data ---
  // Define some sample data for a new cafe
  // Make sure it matches the Omit<...> type expected by the addNewCafe function
  const sampleCafeData = {
    name: 'Test Cafe' + Date.now(), // Add timestamp to make it unique each run
    address: '456 Test Ave, Test City', // Add the required 'address' field
    placeId: 'test-place-id' + Date.now(), // Add timestamp to make it unique each run
    formattedAddress: '456 Test Ave, Test City, TS 12345',
    location: new GeoPoint(40.7128, -74.0060), // Example location (New York City)

    // --- Make sure to inlcude the required fields from yout Cafe interface ---
    imageUrl: 'https://example.com/test-cafe.jpg', // Example image URL (optional)
    description: 'This is a test cafe', // Optional
    rating: 4.5, // Optional
    userRatingsTotal: 15, //Optional example
    priceLevel: 2, // Optional example
    // openingHours - complex object, skipping for basic test, add if needed
    // Required fields based on your interface:
    hasWifi: true, // Optional example (boolean)
    // Required fields based on your interface:
    powerOutlets: 'Plenty' as const, // Must be one of 'plenty'|'some'|'full'|'unknown'|'none'
    crowdLevel: 'Low' as const, // Must be one of 'high'|'medium'|'low'|'unknown'
  };
  // Using 'as const' helps TypeScript confirm we're using one of the allowed literal strings

   // --- Test Logic (Add calls inside try/finally) ---
  try {
    // Test CREATE
    console.log('\n--- Testing addnewCafe ---');
    const newCafe = await addNewCafe(sampleCafeData);
    console.log('New Cafe Added:', newCafe);

    // Test READ (Single Cafe)
    console.log('\n--- Testing getCafeById (after Create) ---');
    const cafeFromId = await getCafeById(newCafe);
    console.log('Cafe from ID:', cafeFromId);

    // Test UPDATE
    console.log('\n--- Testing updateCafe ---');
    await updateCafe(newCafe, {
      name: 'Updated Cafe Name',
    });
    console.log('Updated Cafe:', newCafe);

    // Test READ (Single Cafe after Update)
    console.log('\n--- Testing getCafeById (after Update) ---');
    const cafeFromIdAfterUpdate = await getCafeById(newCafe);
    console.log('Cafe from ID:', cafeFromIdAfterUpdate);

    // Test READ (ALL) - Optional but good to see
    console.log('\n--- Testing getAllCafes ---');
    const allCafes = await getAllCafes();
    console.log('All Cafes:', allCafes);

    // Test DELETE
    console.log('\n--- Testing deleteCafe ---');
    await deleteCafe(newCafe);

    // Test Verify Delete
    console.log('\n--- Testing getCafeById (after Delete) ---');
    const cafeFromIdAfterDelete = await getCafeById(newCafe);
    console.log('Cafe from ID after Delete:', cafeFromIdAfterDelete);
    
  } catch (error) {
    console.error('Error during tests:', error);
  } finally {
    console.log('Tests completed');
  }
  console.log("\nCafe Service Tests Finished.");
};

// Run the tests
runTest();