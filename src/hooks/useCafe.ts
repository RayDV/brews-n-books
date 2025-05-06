import { useState, useEffect } from 'react';
import { fetchCafesForUI } from '@/services/cafeUIService';
import type { CafeCardProps } from '@/components/CafeCard';

export function useCafes() {
  const [cafes, setCafes] = useState<CafeCardProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadCafes() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchCafesForUI();
        setCafes(data);
      } catch (err) {
        console.error('Error in useCafes hook:', err);
        setError('Failed to load cafes. Please try again later.');
      } finally {
        setLoading(false);
      }
    }

    loadCafes();
  }, []);

  return { cafes, loading, error };
}