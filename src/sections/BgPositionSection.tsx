import { useState } from 'react';
import { Section } from '@/components/Section';
import { CodeBlock } from '@/components/CodeBlock';
import { Callout } from '@/components/Callout';
import { motion } from 'framer-motion';

const POSITIONS = [
  'top left', 'top center', 'top right',
  'center left', 'center center', 'center right',
  'bottom left', 'bottom center', 'bottom right',
];

export function BgPositionSection() {
  const [activePos, setActivePos] = useState('center center');

  return (
    <Section id="bg-position">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left: Interactive Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <div
            className="w-[300px] h-[300px] rounded-2xl border overflow-hidden grid grid-cols-3 grid-rows-3"
            style={{
              backgroundImage: 'url(/assets/bg-demo-cat.jpg)',
              backgroundSize: '50%',
              backgroundPosition: activePos,
              backgroundRepeat: 'no-repeat',
              backgroundColor: 'var(--bg-elevated)',
              borderColor: 'var(--border-subtle)',
              transition: 'background-position 0.3s ease',
            }}
          >
            {POSITIONS.map((pos) => (
              <button
                key={pos}
                onClick={() => setActivePos(pos)}
                className="relative transition-all duration-200"
                style={{
                  background: activePos === pos ? 'rgba(99, 102, 241, 0.15)' : 'transparent',
                  border: activePos === pos ? '1px solid var(--accent-primary)' : '1px solid var(--border-subtle)',
                }}
                title={pos}
              />
            ))}
          </div>
          <p className="text-xs font-mono mt-4 px-4 py-2 rounded-lg" style={{ color: 'var(--accent-tertiary)', background: 'var(--bg-secondary)' }}>
            background-position: {activePos};
          </p>
          <p className="text-xs mt-3" style={{ color: 'var(--text-muted)' }}>
            Click a cell to change the position
          </p>
        </motion.div>

        {/* Right: Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <h2
            className="text-3xl md:text-[40px] font-semibold leading-tight mb-4"
            style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-primary)' }}
          >
            background-position
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
            After sizing, you need to position your background image. <code className="font-mono text-sm px-1.5 py-0.5 rounded" style={{ background: 'var(--bg-elevated)' }}>background-position</code> uses keywords or percentage values to place the image within the container. Click the grid to explore each position.
          </p>

          <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-primary)' }}>
            How It Works
          </h3>
          <p className="text-[15px] leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
            You can use keywords (top, bottom, left, right, center) or percentage values. The first value is horizontal (X), the second is vertical (Y).
          </p>

          <CodeBlock
            code={`/* Keywords */
background-position: top right;
background-position: center center;
background-position: bottom left;

/* Percentages (X, Y) */
background-position: 50% 50%;   /* Same as center */
background-position: 100% 0%;   /* Same as top right */
background-position: 20% 80%;   /* Custom position */`}
          />

          <Callout>
            Combine with <code className="font-mono text-sm">background-size: cover</code> and <code className="font-mono text-sm">background-position: center</code> for perfectly centered hero images that fill the container. This is the most common pattern in modern web design.
          </Callout>
        </motion.div>
      </div>
    </Section>
  );
}
