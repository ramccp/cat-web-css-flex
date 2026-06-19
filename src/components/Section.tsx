import { useRef, type ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';

interface SectionProps {
  children: ReactNode;
  id: string;
  className?: string;
}

export function Section({ children, id, className = '' }: SectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`py-16 md:py-24 ${className}`}
    >
      <div className="max-w-[1100px] mx-auto px-5 md:px-10">
        {children}
      </div>
    </motion.section>
  );
}
