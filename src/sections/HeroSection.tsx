import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #FEF3C7 0%, #F8F9FB 40%, #DBEAFE 70%, #F8F9FB 100%)',
      }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[600px] h-[600px] rounded-full opacity-40" style={{ filter: 'blur(120px)', top: '-100px', left: '-100px', background: 'radial-gradient(circle, #FCD34D, transparent 70%)', animation: 'blob-drift-1 20s linear infinite' }} />
        <div className="absolute w-[500px] h-[500px] rounded-full opacity-30" style={{ filter: 'blur(120px)', top: '30%', right: '-100px', background: 'radial-gradient(circle, #93C5FD, transparent 70%)', animation: 'blob-drift-2 25s ease-in-out infinite' }} />
        <div className="absolute w-[400px] h-[400px] rounded-full opacity-30" style={{ filter: 'blur(120px)', bottom: '10%', left: '30%', background: 'radial-gradient(circle, #C4B5FD, transparent 70%)', animation: 'blob-drift-3 22s ease-in-out infinite' }} />
      </div>

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10 max-w-[700px] mx-auto px-5 text-center">
        <motion.div variants={itemVariants} className="mb-8 flex justify-center">
          <img src="/assets/cat-logo.png" alt="CAT Logo" className="h-14 w-auto object-contain opacity-90" />
        </motion.div>
        <motion.p variants={itemVariants} className="text-xs font-medium uppercase tracking-[0.15em] mb-6" style={{ color: '#D97706', fontFamily: 'Inter, sans-serif' }}>
          CAT STUDIO
        </motion.p>
        <motion.h1 variants={itemVariants} className="text-4xl md:text-[56px] font-bold leading-[1.1] tracking-tight mb-6" style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-primary)' }}>
          Master CSS <span className="text-[#6366F1]">Flexbox</span> Layout
        </motion.h1>
        <motion.p variants={itemVariants} className="text-lg leading-relaxed max-w-[600px] mx-auto" style={{ color: 'var(--text-secondary)' }}>
          Flexbox is the most powerful layout system in CSS. It lets you align, distribute, and control elements along a single axis — making responsive layouts effortless.
        </motion.p>
        <motion.div variants={itemVariants} className="mt-16 flex flex-col items-center">
          <ChevronDown size={20} className="animate-[bounce-gentle_2s_ease-in-out_infinite]" style={{ color: 'var(--text-muted)' }} />
          <span className="text-xs mt-2 font-medium uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Scroll to explore</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
