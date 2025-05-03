import CafeCard, { CafeCardProps } from '@/components/CafeCard'; // Adjust path if needed

// Define mock data conforming to CafeCardProps
const mockCafes: CafeCardProps[] = [
  {
    name: 'Morning Brew Coffee',
    imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', // Example image URL
    hasWifi: true,
    crowdLevel: 'High',
    powerLevel: 'Medium', // Note: Prop name is powerLevel, values are 'Plenty', 'Some', 'Medium', 'Low', 'None', 'Unknown'
    rating: 4.5,
    distance: '0.3 miles',
  },
  {
    name: 'The Daily Grind',
    imageUrl: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80',
    hasWifi: true,
    crowdLevel: 'Low',
    powerLevel: 'Plenty',
    rating: 4.8,
    distance: '1.2 miles',
  },
  {
    name: 'Quiet Corner Cafe',
    imageUrl: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80',
    hasWifi: false,
    crowdLevel: 'Medium',
    powerLevel: 'None',
    rating: 4.1,
    distance: '0.8 miles',
  },
  {
    name: 'Power Up Cafe',
    // No image intentionally
    hasWifi: true,
    crowdLevel: 'Unknown',
    powerLevel: 'Some',
    // No rating intentionally
    distance: '2.5 miles',
  },
];


export default function Home() {
  return (
    // Main container for the page
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-8 md:p-12 lg:p-24">
      <h1 className="text-3xl font-bold mb-8 text-amber-900">Find Your Brews & Books Spot</h1>

      {/* Grid layout for the cafe cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full">
        {mockCafes.map((cafe) => (
          <CafeCard
            key={cafe.name} // Use a unique key, cafe name is okay for mock data
            name={cafe.name}
            imageUrl={cafe.imageUrl}
            hasWifi={cafe.hasWifi}
            crowdLevel={cafe.crowdLevel}
            powerLevel={cafe.powerLevel}
            rating={cafe.rating}
            distance={cafe.distance}
          />
          // Alternatively, using spread props:
          // <CafeCard key={cafe.name} {...cafe} />
        ))}
      </div>
    </main>
  );
}