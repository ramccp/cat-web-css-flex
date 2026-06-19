import { useState, useEffect, useRef } from 'react';

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState('');
  const observersRef = useRef<IntersectionObserver[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.2 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    observersRef.current = observers;

    return () => {
      observers.forEach((o) => o.disconnect());
    };
  }, [sectionIds]);

  return activeSection;
}
