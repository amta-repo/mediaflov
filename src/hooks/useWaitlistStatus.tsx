import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const useWaitlistStatus = () => {
  const [isLaunched, setIsLaunched] = useState(false);
  const [waitlistCount, setWaitlistCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkWaitlistStatus();
  }, []);

  const checkWaitlistStatus = async () => {
    try {
      const { count, error } = await supabase
        .from('waitlist')
        .select('*', { count: 'exact', head: true });

      if (error) throw error;

      const currentCount = count || 0;
      setWaitlistCount(currentCount);
      setIsLaunched(currentCount >= 100);
    } catch (error) {
      console.error('Error checking waitlist status:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLaunched, waitlistCount, isLoading, refreshStatus: checkWaitlistStatus };
};