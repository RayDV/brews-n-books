import React from 'react';
import Image from 'next/image'; // Using next/image for optimization
import { Star, Coffee, Power, Wifi } from 'lucide-react'; // Import icons

export interface CafeCardProps {
  name: string;
  imageUrl?: string;
  hasWifi?: boolean; // Whether WiFi is available
  crowdLevel: 'High' | 'Medium' | 'Low' | 'Unknown'; // How crowded it is (for seating)
  powerLevel: 'Plenty' | 'Some' | 'Medium' | 'Low' | 'None' | 'Unknown'; // Availability of power outlets
  rating?: number; // Star rating (e.g., 4.5)
  distance?: string; // Pre-formatted distance string (e.g., "0.3 miles")
}

// Helper function to determine the Tailwind CSS background color class for indicators
const getIndicatorColor = (level: CafeCardProps['crowdLevel'] | CafeCardProps['powerLevel']): string => {
  switch (level) {
    case 'Low':
    case 'Plenty': // Assuming Plenty maps to green for power
      return 'bg-green-500';
    case 'Medium':
    case 'Some': // Assuming Some maps to orange for power
      return 'bg-orange-500';
    case 'High':
    case 'None': // Assuming None maps to red for power
      return 'bg-red-500';
    default: // Unknown or other values
      return 'bg-gray-400';
  }
};


const CafeCard: React.FC<CafeCardProps> = ({
  name,
  imageUrl,
  hasWifi,
  crowdLevel,
  powerLevel,
  rating,
  distance,
}) => {
  // Helper function to render star icons based on the rating
  const renderStars = () => {
    if (rating === undefined || rating < 0 || rating > 5) return null; // Basic validation

    const fullStars = Math.floor(rating);
    // Simple check for half star - could use a dedicated half-star icon if available
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={`full-${i}`} className="w-4 h-4 text-yellow-400 fill-current" />
        ))}
        {/* Placeholder for half star - could use a different icon or SVG manipulation */}
        {hasHalfStar && (
           <Star key="half" className="w-4 h-4 text-yellow-400 fill-current" /> // For now, rendering as full
        )}
        {[...Array(emptyStars)].map((_, i) => (
          // Using stroke only for empty stars might look better
          <Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" strokeWidth={1.5} />
        ))}
      </div>
    );
  };


  return (
    // Main card container
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-full sm:max-w-xs border border-gray-200 transition-shadow hover:shadow-lg">
      {/* Image Section */}
      {imageUrl && (
        <div className="relative w-full h-32 sm:h-40 bg-gray-200"> {/* Added background color for loading state */}
          <Image
            src={imageUrl}
            alt={`Image of ${name}`} // More descriptive alt text
            layout="fill"
            objectFit="cover"
            priority // Consider making this conditional if many cards load lazily
          />
        </div>
      )}

      {/* Content Section */}
      <div className="p-4 space-y-3">
        {/* Row 1: Name & Distance */}
        <div className="flex justify-between items-baseline gap-2"> {/* Added gap */}
          <h3 className="text-lg font-semibold text-amber-800 truncate">{name}</h3> {/* Added truncate */}
          {distance && (
            <span className="text-sm text-gray-600 whitespace-nowrap flex-shrink-0">{distance}</span>
          )}
        </div>

        {/* Row 2: Rating */}
        {rating !== undefined && (
          <div className="flex items-center">
            {renderStars()}
            <span className="ml-2 text-sm font-medium text-gray-700">{rating.toFixed(1)}</span>
          </div>
        )}

        {/* Row 3: Amenities */}
        <div className="flex flex-col space-y-2 text-sm text-gray-700 pt-1"> {/* Added padding-top */}
          {/* Seats/Crowd */}
          <div className="flex items-center space-x-1.5">
            <Coffee className="w-4 h-4 text-amber-900 flex-shrink-0" />
            <span className={`w-3 h-3 rounded-full ${getIndicatorColor(crowdLevel)} flex-shrink-0`}></span>
            <span>Seats:</span>
            <span className="font-medium">{crowdLevel}</span>
          </div>
          {/* Outlets/Power */}
          <div className="flex items-center space-x-1.5">
            <Power className="w-4 h-4 text-amber-900 flex-shrink-0" />
            <span className={`w-3 h-3 rounded-full ${getIndicatorColor(powerLevel)} flex-shrink-0`}></span>
            <span>Outlets:</span>
            <span className="font-medium">{powerLevel}</span>
          </div>
          {/* WiFi Indicator */}
          {hasWifi !== undefined && (
             <div className="flex items-center space-x-1.5">
               <Wifi className={`w-4 h-4 flex-shrink-0 ${hasWifi ? 'text-blue-500' : 'text-gray-400'}`} />
               <span className={hasWifi ? 'text-blue-600 font-medium' : 'text-gray-500'}>
                 {hasWifi ? 'WiFi Available' : 'No WiFi'}
               </span>
             </div>
           )}
        </div>
      </div>
    </div>
  );
};

export default CafeCard;