import { useEffect, useState } from 'react';

export const useIdDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 750) {
      setIsDesktop(false);
    }

    const updateMedia = () => {
      if (window.innerWidth < 750) {
        setIsDesktop(false);
      } else {
        setIsDesktop(true);
      }
    };

    window.addEventListener('resize', updateMedia);

    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  return { isDesktop };
};
