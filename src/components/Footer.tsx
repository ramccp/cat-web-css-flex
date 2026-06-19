import { ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-[1100px] mx-auto px-5 md:px-10 text-center">
        <img
          src="/assets/cat-logo.png"
          alt="CAT Logo"
          className="h-10 w-auto object-contain mx-auto mb-4 opacity-70"
        />
        <p className="text-sm mb-2" style={{ color: 'var(--text-muted)' }}>
          CSS Flex — Part of the CSS Course by <strong style={{ color: 'var(--text-secondary)' }}>CAT</strong>
        </p>
        <p className="text-xs mb-6" style={{ color: 'var(--text-muted)' }}>
          Crafted with care by <strong style={{ color: 'var(--text-secondary)' }}>CAT</strong>
        </p>
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 text-[13px] font-medium transition-colors duration-200 hover:text-[var(--accent-primary)]"
          style={{ color: 'var(--text-muted)' }}
        >
          <ArrowUp size={14} />
          Back to top
        </button>
      </div>
    </footer>
  );
}
