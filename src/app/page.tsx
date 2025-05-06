'use client'

import CafeCard from '@/components/CafeCard';
import { useCafes } from '@/hooks/useCafe';

export default function Home() {
  const { cafes, loading, error } = useCafes();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-8 md:p-12 lg:p-24">
      <h1 className="text-3xl font-bold mb-8 text-amber-900">Find Your Brews & Books Spot</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full">
        {cafes.map((cafe) => (
          <CafeCard key={cafe.name} {...cafe} />
        ))}
      </div>
    </main>
  );
}