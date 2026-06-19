import { useState, useEffect } from 'react';

export function useScrollDirection() {
  const [direction, setDirection] = useState<'up' | 'down'>('up');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateDirection = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setDirection('down');
      } else {
        setDirection('up');
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', updateDirection, { passive: true });
    return () => window.removeEventListener('scroll', updateDirection);
  }, []);

  return { direction, scrollY };
}
