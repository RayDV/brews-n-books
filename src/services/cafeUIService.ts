import { getAllCafes } from './cafeDataBaseService';
import type { CafeCardProps } from '@/components/CafeCard';

/**
 * Fetches cafes in a format ready for UI components
 * Transforms database models to UI component props
 */
export async function fetchCafesForUI(): Promise<CafeCardProps[]> {
  try {
    // Use the database service to get raw cafe data
    const cafes = await getAllCafes();
    
    // Transform the data for UI consumption
    return cafes.map(cafe => ({
      id: cafe.id,
      name: cafe.name || "Default Name",
      imageUrl: cafe.imageUrl,
      hasWifi: cafe.hasWifi,
      powerOutlets: cafe.powerOutlets,
      crowdLevel: cafe.crowdLevel,
      rating: cafe.rating,
      // Optionally calculate or format additional UI fields
      distance: '' // Could be calculated based on user location in the future
    }));
  } catch (error) {
    console.error('Error fetching cafes for UI:', error);
    throw error;
  }
}

/**
 * You can add more UI-specific service functions here:
 * - fetchCafesWithFilters
 * - getCafeDetailsForUI
 * - searchCafes
 */