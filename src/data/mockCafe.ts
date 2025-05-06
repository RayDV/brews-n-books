import { CafeCardProps } from "@/components/CafeCard";

const mockCafes: CafeCardProps[] = [
  {
    name: 'Morning Brew Coffee',
    imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', // Example image URL
    hasWifi: true,
    crowdLevel: 'High',
    powerOutlets: 'Medium', // Note: Prop name is powerLevel, values are 'Plenty', 'Some', 'Medium', 'Low', 'None', 'Unknown'
    rating: 4.5,
    distance: '0.3 miles',
  },
  {
    name: 'The Daily Grind',
    imageUrl: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80',
    hasWifi: true,
    crowdLevel: 'Low',
    powerOutlets: 'Plenty',
    rating: 4.8,
    distance: '1.2 miles',
  },
  {
    name: 'Quiet Corner Cafe',
    imageUrl: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80',
    hasWifi: false,
    crowdLevel: 'Medium',
    powerOutlets: 'None',
    rating: 4.1,
    distance: '0.8 miles',
  },
  {
    name: 'Power Up Cafe',
    // No image intentionally
    hasWifi: true,
    crowdLevel: 'Unknown',
    powerOutlets: 'Some',
    // No rating intentionally
    distance: '2.5 miles',
  },
  {
    name: 'New Discovery Cafe',
    imageUrl: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    hasWifi: true,
    crowdLevel: 'Unknown',
    powerOutlets: 'Unknown',
    rating: 4.3,
    distance: '3.1 miles',
  },
];

export default mockCafes;