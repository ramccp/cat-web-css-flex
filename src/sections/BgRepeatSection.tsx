import { Section } from '@/components/Section';
import { CodeBlock } from '@/components/CodeBlock';
import { Callout } from '@/components/Callout';
import { motion } from 'framer-motion';
import type { CSSProperties } from 'react';

const REPEAT_MODES: { label: CSSProperties['backgroundRepeat']; desc: string; css: string }[] = [
  {
    label: 'repeat',
    desc: 'tiles in both directions (default)',
    css: 'background-repeat: repeat;',
  },
  {
    label: 'no-repeat',
    desc: 'shows image once only',
    css: 'background-repeat: no-repeat;',
  },
  {
    label: 'repeat-x',
    desc: 'tiles left to right only',
    css: 'background-repeat: repeat-x;',
  },
  {
    label: 'repeat-y',
    desc: 'tiles top to bottom only',
    css: 'background-repeat: repeat-y;',
  },
];

export function BgRepeatSection() {
  return (
    <Section id="bg-repeat">
      <h2
        className="text-3xl md:text-[40px] font-semibold leading-tight mb-4"
        style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-primary)' }}
      >
        background-repeat
      </h2>
      <p className="text-base md:text-lg leading-relaxed mb-10 max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
        By default, background images tile to fill the entire element — like bathroom tiles. The <code className="font-mono text-sm px-1.5 py-0.5 rounded" style={{ background: 'var(--bg-elevated)' }}>background-repeat</code> property lets you control this tiling behavior.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {REPEAT_MODES.map((mode, i) => (
          <motion.div
            key={mode.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: i * 0.1 }}
            className="rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border-subtle)' }}
          >
            {/* Visual demo container - shows actual tiling behavior */}
            <div
              className="w-full aspect-square rounded-xl border overflow-hidden mb-4"
              style={{
                backgroundImage: 'url(/assets/repeat-flower.png)',
                backgroundRepeat: mode.label,
                backgroundPosition: 'top left',
                backgroundSize: '64px 64px',
                backgroundColor: 'var(--bg-primary)',
                borderColor: 'var(--border-medium)',
              }}
            />
            <h4 className="font-semibold text-sm mb-1" style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-primary)' }}>
              {mode.label}
            </h4>
            <p className="text-xs mb-4" style={{ color: 'var(--text-muted)' }}>
              {mode.desc}
            </p>
            <CodeBlock code={mode.css} />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <Callout>
          Use <code className="font-mono text-sm">no-repeat</code> for hero backgrounds and single images. Use <code className="font-mono text-sm">repeat</code> with seamless patterns for textures. <code className="font-mono text-sm">repeat-x</code> and <code className="font-mono text-sm">repeat-y</code> are great for decorative borders and lines.
        </Callout>
      </motion.div>
    </Section>
  );
}
