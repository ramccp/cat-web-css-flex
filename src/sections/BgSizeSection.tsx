import { Section } from '@/components/Section';
import { CodeBlock } from '@/components/CodeBlock';
import { motion } from 'framer-motion';

export function BgSizeSection() {
  return (
    <Section id="bg-size" className="section-gradient-1">
      <h2
        className="text-3xl md:text-[40px] font-semibold leading-tight mb-4"
        style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-primary)' }}
      >
        background-size
      </h2>
      <p className="text-base md:text-lg leading-relaxed mb-10 max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
        This is the property that confuses beginners the most. <code className="font-mono text-sm px-1.5 py-0.5 rounded" style={{ background: 'var(--bg-elevated)' }}>background-size</code> controls how your image scales to fit its container. The two most important values are <code className="font-mono text-sm">cover</code> and <code className="font-mono text-sm">contain</code> — they do opposite things. Both demos below use the same cat photo in the same-sized container.
      </p>

      {/* Demo Panels - side by side, always showing their own mode */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Cover Panel - always shows cover */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-sm px-3 py-1 rounded-lg font-medium text-white" style={{ background: 'var(--accent-primary)' }}>cover</span>
            <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>Fills container — some parts get cropped</span>
          </div>

          <div
            className="relative w-full aspect-[16/10] rounded-2xl border overflow-hidden mb-4"
            style={{
              backgroundImage: 'url(/assets/bg-demo-cat.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              borderColor: 'var(--border-medium)',
              backgroundColor: 'var(--bg-elevated)',
            }}
          >
            {/* Visual indicators for clipped areas */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-3 left-3 text-[10px] font-mono px-2 py-1 rounded bg-red-500/85 text-white font-medium">CROPPED</div>
              <div className="absolute top-3 right-3 text-[10px] font-mono px-2 py-1 rounded bg-red-500/85 text-white font-medium">CROPPED</div>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[10px] font-mono px-2 py-1 rounded bg-emerald-500/85 text-white font-medium">VISIBLE</div>
              <div className="absolute inset-4 border-2 border-dashed border-red-400/50 rounded-lg" />
            </div>
          </div>

          <CodeBlock
            code={`.container {
  background-image: url('cat.jpg');
  background-size: cover;
  /* Image fills ENTIRE container */
  /* Parts of the image are cropped */
}`}
          />
        </motion.div>

        {/* Contain Panel - always shows contain */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: 0.15 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-sm px-3 py-1 rounded-lg font-medium text-white" style={{ background: 'var(--accent-secondary)' }}>contain</span>
            <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>Whole image visible — may leave empty space</span>
          </div>

          <div
            className="relative w-full aspect-[16/10] rounded-2xl border overflow-hidden mb-4"
            style={{
              backgroundImage: 'url(/assets/bg-demo-cat.jpg)',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              borderColor: 'var(--border-medium)',
              backgroundColor: 'var(--bg-elevated)',
            }}
          >
            {/* Visual indicators for empty space */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-3 left-3 text-[10px] font-mono px-2 py-1 rounded bg-amber-500/85 text-white font-medium">EMPTY SPACE</div>
              <div className="absolute top-3 right-3 text-[10px] font-mono px-2 py-1 rounded bg-amber-500/85 text-white font-medium">EMPTY SPACE</div>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[10px] font-mono px-2 py-1 rounded bg-emerald-500/85 text-white font-medium">FULL IMAGE</div>
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(245,158,11,0.3) 10px, rgba(245,158,11,0.3) 11px)',
                }}
              />
            </div>
          </div>

          <CodeBlock
            code={`.container {
  background-image: url('cat.jpg');
  background-size: contain;
  /* Entire image is visible */
  /* Container has empty space */
}`}
          />
        </motion.div>
      </div>

      {/* Quick Reference Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-12"
      >
        <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-primary)' }}>
          Quick Reference
        </h3>
        <div className="overflow-x-auto rounded-xl border" style={{ borderColor: 'var(--border-subtle)' }}>
          <table className="w-full text-sm" style={{ color: 'var(--text-secondary)' }}>
            <thead>
              <tr className="border-b" style={{ borderColor: 'var(--border-medium)', background: 'var(--bg-elevated)' }}>
                <th className="text-left py-3 px-4 font-semibold" style={{ color: 'var(--text-primary)' }}>Value</th>
                <th className="text-left py-3 px-4 font-semibold" style={{ color: 'var(--text-primary)' }}>What it does</th>
                <th className="text-left py-3 px-4 font-semibold" style={{ color: 'var(--text-primary)' }}>Result</th>
                <th className="text-left py-3 px-4 font-semibold" style={{ color: 'var(--text-primary)' }}>Best For</th>
              </tr>
            </thead>
            <tbody style={{ background: 'var(--bg-secondary)' }}>
              <tr className="border-b" style={{ borderColor: 'var(--border-subtle)' }}>
                <td className="py-3 px-4 font-mono text-xs font-semibold" style={{ color: 'var(--accent-primary)' }}>cover</td>
                <td className="py-3 px-4">Scales to fill the entire container</td>
                <td className="py-3 px-4">Image fills box, edges may be cropped</td>
                <td className="py-3 px-4">Hero sections, banners</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-xs font-semibold" style={{ color: 'var(--accent-secondary)' }}>contain</td>
                <td className="py-3 px-4">Scales so full image is visible</td>
                <td className="py-3 px-4">Entire image shown, empty space appears</td>
                <td className="py-3 px-4">Logos, icons, galleries</td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>
    </Section>
  );
}
