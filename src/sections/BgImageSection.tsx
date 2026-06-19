import { Section } from '@/components/Section';
import { CodeBlock } from '@/components/CodeBlock';
import { Callout } from '@/components/Callout';
import { motion } from 'framer-motion';

export function BgImageSection() {
  return (
    <Section id="bg-image" className="section-gradient-1">
      <div className="grid lg:grid-cols-[45%_55%] gap-12 items-start">
        {/* Left: Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2
            className="text-3xl md:text-[40px] font-semibold leading-tight mb-4"
            style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-primary)' }}
          >
            background-image
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
            The <code className="font-mono text-sm px-1.5 py-0.5 rounded" style={{ background: 'var(--bg-elevated)' }}>background-image</code> property sets an image as the background of an element. It's the starting point for everything we'll learn.
          </p>

          <div className="mb-6">
            <span className="text-xs font-medium uppercase tracking-[0.05em] mb-3 block" style={{ color: 'var(--text-muted)', fontFamily: 'Outfit, sans-serif' }}>
              Syntax
            </span>
            <CodeBlock
              code={`selector {
  background-image: url('path/to/image.jpg');
}`}
            />
          </div>

          <p className="text-[15px] leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
            The <code className="font-mono text-sm">url()</code> function points to your image file. It can be a relative path, absolute path, or even a data URL.
          </p>

          <Callout>
            You can also use <code className="font-mono text-sm">background-image</code> with a color fallback: set a <code className="font-mono text-sm">background-color</code> before <code className="font-mono text-sm">background-image</code>. If the image fails to load, the color shows instead.
          </Callout>
        </motion.div>

        {/* Right: Demo */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="flex flex-col items-center"
        >
          <div
            className="w-full max-w-[400px] aspect-[4/3] rounded-2xl border overflow-hidden"
            style={{
              backgroundImage: 'url(/assets/bg-demo-cat.jpg)',
              backgroundColor: 'var(--bg-elevated)',
              borderColor: 'var(--border-subtle)',
            }}
          />
          <p className="text-xs font-medium uppercase tracking-wider mt-4 text-center" style={{ color: 'var(--text-muted)' }}>
            Default behavior — image appears at natural size
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
