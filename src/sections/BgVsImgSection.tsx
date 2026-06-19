import { Section } from '@/components/Section';
import { CodeBlock } from '@/components/CodeBlock';
import { Callout } from '@/components/Callout';
import { motion } from 'framer-motion';

export function BgVsImgSection() {
  return (
    <Section id="bg-vs-img">
      <h2
        className="text-3xl md:text-[40px] font-semibold leading-tight mb-4"
        style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-primary)' }}
      >
        Background vs <code className="font-mono text-[0.8em] px-2 py-1 rounded-md" style={{ background: 'var(--bg-secondary)' }}>&lt;img&gt;</code>
      </h2>
      <p className="text-base md:text-lg leading-relaxed mb-12 max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
        Understanding when to use a CSS background and when to use an HTML image tag is the first step. They serve completely different purposes.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Left: img tag */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="rounded-2xl border p-6 md:p-8 transition-all duration-300 hover:-translate-y-0.5"
          style={{
            background: 'var(--bg-secondary)',
            borderColor: 'var(--border-subtle)',
          }}
        >
          <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-primary)' }}>
            Use <code className="font-mono text-base">&lt;img&gt;</code> when...
          </h3>
          <p className="text-[15px] leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
            The image is part of your content. Think product photos, avatars, illustrations that carry meaning. Screen readers announce these, and they're essential to the page's message.
          </p>
          <div className="rounded-xl overflow-hidden mb-6 border" style={{ borderColor: 'var(--border-subtle)' }}>
            <img
              src="/assets/bg-demo-cat.jpg"
              alt="A cute orange cat on a windowsill"
              className="w-full h-auto"
              style={{ maxHeight: '200px', objectFit: 'cover' }}
            />
            <p className="text-xs px-4 py-2 text-center" style={{ color: 'var(--text-muted)', background: 'var(--bg-elevated)' }}>
              Content image — part of the page's meaning
            </p>
          </div>
          <CodeBlock
            code={`<img src="cat.jpg" alt="A cute orange cat on a windowsill"
     width="300" height="200">`}
          />
        </motion.div>

        {/* Right: background */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="rounded-2xl border p-6 md:p-8 transition-all duration-300 hover:-translate-y-0.5"
          style={{
            background: 'var(--bg-secondary)',
            borderColor: 'var(--border-subtle)',
          }}
        >
          <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-primary)' }}>
            Use <code className="font-mono text-base">background</code> when...
          </h3>
          <p className="text-[15px] leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
            The image is decorative. Think hero backgrounds, textures, patterns, section dividers. These enhance the visual experience but aren't content themselves.
          </p>
          <div
            className="rounded-xl overflow-hidden mb-6 h-[200px] flex items-center justify-center border"
            style={{
              backgroundImage: 'url(/assets/bg-demo-cat.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderColor: 'var(--border-subtle)',
            }}
          >
            <span className="text-white font-semibold text-lg px-4 py-2 rounded-lg" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)', background: 'rgba(0,0,0,0.3)' }}>
              Decorative background
            </span>
          </div>
          <CodeBlock
            code={`.hero-section {
  background-image: url('cat.jpg');
  background-size: cover;
  color: white;
}`}
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <Callout>
          <strong style={{ color: 'var(--text-primary)' }}>Rule of thumb</strong>: If you can remove the image and the page still makes sense, use <code className="font-mono text-sm">background</code>. If removing it breaks the meaning, use <code className="font-mono text-sm">&lt;img&gt;</code>.
        </Callout>
      </motion.div>
    </Section>
  );
}
