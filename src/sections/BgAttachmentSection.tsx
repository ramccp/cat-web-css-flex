import { Section } from '@/components/Section';
import { CodeBlock } from '@/components/CodeBlock';
import { Callout } from '@/components/Callout';
import { motion } from 'framer-motion';

const VALUES = [
  { label: 'scroll', desc: 'Background scrolls with the element. Normal behavior.' },
  { label: 'fixed', desc: 'Background stays fixed relative to the viewport. Creates parallax.' },
  { label: 'local', desc: 'Background scrolls with the element\'s content (for scrollable divs).' },
];

export function BgAttachmentSection() {
  return (
    <Section id="bg-attachment" className="section-gradient-2">
      <h2
        className="text-3xl md:text-[40px] font-semibold leading-tight mb-4"
        style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-primary)' }}
      >
        background-attachment
      </h2>
      <p className="text-base md:text-lg leading-relaxed mb-10 max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
        The <code className="font-mono text-sm px-1.5 py-0.5 rounded" style={{ background: 'var(--bg-elevated)' }}>background-attachment</code> property controls whether the background scrolls with the page or stays fixed in place. Setting it to <code className="font-mono text-sm">fixed</code> creates a stunning parallax effect — the background stays still while your content scrolls over it.
      </p>

      {/* Parallax Demo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        className="relative w-full h-[400px] rounded-2xl overflow-hidden flex items-center justify-center mb-10"
        style={{
          backgroundImage: 'url(/assets/netflix-hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent)' }}
        />
        <div className="relative z-10 text-center">
          <h3 className="text-2xl md:text-[28px] font-semibold text-white mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Parallax in Action
          </h3>
          <p className="text-white/80 text-sm md:text-base">
            Scroll up and down — the background stays fixed while the page moves
          </p>
        </div>
      </motion.div>

      <CodeBlock
        code={`.parallax-section {
  background-image: url('cityscape.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;  /* The magic line! */
  height: 400px;
}`}
      />

      {/* Values Cards */}
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {VALUES.map((v, i) => (
          <motion.div
            key={v.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: i * 0.1 }}
            className="rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-0.5"
            style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border-subtle)' }}
          >
            <h4 className="font-mono text-sm font-medium mb-2 px-2 py-1 rounded inline-block" style={{ color: 'var(--accent-tertiary)', background: 'var(--bg-elevated)' }}>
              {v.label}
            </h4>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {v.desc}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <Callout type="warning">
          <strong style={{ color: 'var(--text-primary)' }}>Performance note</strong>: <code className="font-mono text-sm">background-attachment: fixed</code> can cause performance issues on mobile devices and with large images. Consider using JavaScript-based parallax libraries for production sites with heavy traffic.
        </Callout>
      </motion.div>
    </Section>
  );
}
