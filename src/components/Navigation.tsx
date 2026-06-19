import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import { useActiveSection } from '@/hooks/useActiveSection';

const NAV_ITEMS = [
  { id: 'hero', label: 'Home' },
  { id: 'why-flexbox', label: 'Why Flexbox' },
  { id: 'display-flex', label: 'display: flex' },
  { id: 'flex-direction', label: 'flex-direction' },
  { id: 'axis', label: 'Main vs Cross Axis' },
  { id: 'justify-content', label: 'justify-content' },
  { id: 'align-items', label: 'align-items' },
  { id: 'flex-wrap', label: 'flex-wrap' },
  { id: 'align-content', label: 'align-content' },
  { id: 'flex-basis-grow-shrink', label: 'flex-grow & shrink' },
  { id: 'child-properties', label: 'Child Properties' },
  { id: 'playground', label: 'Playground' },
];

export function Navigation() {
  const { direction, scrollY } = useScrollDirection();
  const activeSection = useActiveSection(NAV_ITEMS.map(i => i.id));
  const [mobileOpen, setMobileOpen] = useState(false);

  const showNav = scrollY > 600;
  const hide = direction === 'down' && scrollY > 700;

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={false}
        animate={{ y: showNav && !hide ? 0 : -100, opacity: showNav && !hide ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="fixed top-0 left-0 right-0 z-[1000] h-16"
        style={{ background: 'rgba(248, 249, 251, 0.92)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}
      >
        <div className="max-w-[1100px] mx-auto px-5 md:px-10 h-full flex items-center justify-between">
          <button onClick={() => handleNavClick('hero')} className="flex items-center gap-2.5">
            <img src="/assets/cat-logo.png" alt="CAT Logo" className="h-8 w-auto object-contain" />
          </button>

          <nav className="hidden lg:flex items-center gap-0.5">
            {NAV_ITEMS.slice(1).map((item) => (
              <button key={item.id} onClick={() => handleNavClick(item.id)}
                className="relative px-2.5 py-2 text-[11px] font-medium rounded-md transition-colors duration-200"
                style={{ color: activeSection === item.id ? 'var(--accent-primary)' : 'var(--text-secondary)' }}>
                {item.label}
                {activeSection === item.id && (
                  <motion.div layoutId="nav-indicator" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full" style={{ background: 'var(--accent-primary)' }} transition={{ type: 'spring', stiffness: 300, damping: 30 }} />
                )}
              </button>
            ))}
          </nav>

          <button onClick={() => setMobileOpen(true)} className="lg:hidden p-2.5 rounded-xl" style={{ color: 'var(--text-primary)', background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)' }}>
            <Menu size={20} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[999] flex flex-col" style={{ background: 'var(--bg-primary)' }}>
            <div className="flex items-center justify-between px-5 h-16">
              <img src="/assets/cat-logo.png" alt="CAT Logo" className="h-8 w-auto object-contain" />
              <button onClick={() => setMobileOpen(false)} style={{ color: 'var(--text-primary)' }}><X size={24} /></button>
            </div>
            <nav className="flex-1 flex flex-col items-center justify-center gap-3">
              {NAV_ITEMS.map((item) => (
                <button key={item.id} onClick={() => handleNavClick(item.id)}
                  className="text-2xl font-semibold transition-colors duration-200"
                  style={{ fontFamily: 'Outfit, sans-serif', color: activeSection === item.id ? 'var(--accent-primary)' : 'var(--text-primary)' }}>
                  {item.label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
