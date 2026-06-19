import { useState } from 'react';
import { Section } from '@/components/Section';
import { CodeBlock } from '@/components/CodeBlock';
import { Callout } from '@/components/Callout';
import { motion } from 'framer-motion';

export function FlexBasisGrowShrinkSection() {
  const [grow1, setGrow1] = useState(1);
  const [grow2, setGrow2] = useState(1);
  const [grow3, setGrow3] = useState(1);
  const [basis1, setBasis1] = useState(100);
  const [basis2, setBasis2] = useState(100);
  const [basis3, setBasis3] = useState(100);
  const [shrink1, setShrink1] = useState(1);
  const [shrink2, setShrink2] = useState(1);

  const totalBasis = basis1 + basis2 + basis3;

  return (
    <Section id="flex-basis-grow-shrink">
      <h2 className="text-3xl md:text-[40px] font-semibold leading-tight mb-4" style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-primary)' }}>
        flex-basis, flex-grow, flex-shrink
      </h2>
      <p className="text-base md:text-lg leading-relaxed mb-8 max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
        These three properties control how flex items <strong>size themselves</strong>. Think of it as a 3-step process: <strong>flex-basis</strong> sets the starting size, <strong>flex-grow</strong> distributes extra space, and <strong>flex-shrink</strong> handles overflow.
      </p>

      {/* ====== flex-basis: Step-by-step visual explanation ====== */}
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        className="rounded-2xl border p-6 md:p-8 mb-10" style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border-subtle)' }}>

        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg text-white" style={{ background: '#F59E0B' }}>Step 1 of 3</span>
          <h3 className="text-xl font-semibold" style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-primary)' }}>flex-basis — The Starting Size</h3>
        </div>

        <p className="text-[15px] leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
          <code className="font-mono text-sm">flex-basis</code> is the <strong style={{ color: 'var(--text-primary)' }}>ideal starting width</strong> of each item before any growing or shrinking happens. Think of it as saying: "I want to start at this size." If there's leftover space after all items take their basis, flex-grow kicks in. If items overflow, flex-shrink kicks in.
        </p>

        {/* Visual: Container with fixed width showing basis allocation */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Container: 600px total</span>
            <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>basis used: {totalBasis}px · leftover: {Math.max(0, 600 - totalBasis)}px</span>
          </div>

          {/* The ruler container */}
          <div className="relative h-[70px] rounded-xl overflow-hidden flex" style={{ background: 'var(--bg-primary)', border: '2px solid var(--border-medium)' }}>
            {/* Ruler marks */}
            <div className="absolute inset-0 flex justify-between px-2 pointer-events-none">
              {[0, 100, 200, 300, 400, 500, 600].map((m) => (
                <div key={m} className="flex flex-col items-center h-full">
                  <div className="w-px h-2" style={{ background: 'var(--border-medium)' }} />
                  <span className="text-[9px] mt-0.5" style={{ color: 'var(--text-muted)' }}>{m}</span>
                </div>
              ))}
            </div>

            {/* Item 1 basis bar */}
            <div className="h-full flex items-center justify-center text-white text-xs font-bold relative z-10 transition-all duration-300 border-r-2 border-white/20"
              style={{ width: `${(basis1 / 600) * 100}%`, background: '#6366F1', minWidth: basis1 > 0 ? '30px' : '0' }}>
              {basis1 > 40 && `A: ${basis1}px`}
            </div>
            {/* Item 2 basis bar */}
            <div className="h-full flex items-center justify-center text-white text-xs font-bold relative z-10 transition-all duration-300 border-r-2 border-white/20"
              style={{ width: `${(basis2 / 600) * 100}%`, background: '#8B5CF6', minWidth: basis2 > 0 ? '30px' : '0' }}>
              {basis2 > 40 && `B: ${basis2}px`}
            </div>
            {/* Item 3 basis bar */}
            <div className="h-full flex items-center justify-center text-white text-xs font-bold relative z-10 transition-all duration-300"
              style={{ width: `${(basis3 / 600) * 100}%`, background: '#06B6D4', minWidth: basis3 > 0 ? '30px' : '0' }}>
              {basis3 > 40 && `C: ${basis3}px`}
            </div>
            {/* Leftover space indicator */}
            {totalBasis < 600 && (
              <div className="h-full flex items-center justify-center relative z-10 transition-all duration-300"
                style={{ width: `${((600 - totalBasis) / 600) * 100}%`, background: 'repeating-linear-gradient(45deg, transparent, transparent 6px, rgba(16,185,129,0.15) 6px, rgba(16,185,129,0.15) 7px)' }}>
                <span className="text-[10px] font-bold" style={{ color: '#10B981' }}>{600 - totalBasis}px free</span>
              </div>
            )}
            {/* Overflow indicator */}
            {totalBasis > 600 && (
              <div className="absolute right-0 top-0 bottom-0 flex items-center px-3 z-20" style={{ background: 'rgba(239,68,68,0.15)' }}>
                <span className="text-[10px] font-bold text-red-500 whitespace-nowrap">{totalBasis - 600}px overflow!</span>
              </div>
            )}
          </div>
        </div>

        {/* Sliders */}
        <div className="grid sm:grid-cols-3 gap-5 mb-6">
          {[
            { val: basis1, set: setBasis1, label: 'Item A flex-basis', color: '#6366F1' },
            { val: basis2, set: setBasis2, label: 'Item B flex-basis', color: '#8B5CF6' },
            { val: basis3, set: setBasis3, label: 'Item C flex-basis', color: '#06B6D4' },
          ].map((item) => (
            <div key={item.label}>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-3 h-3 rounded-sm" style={{ background: item.color }} />
                <label className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>{item.label}</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="range" min="0" max="300" step="10" value={item.val} onChange={(e) => item.set(Number(e.target.value))} className="flex-1 accent-[var(--accent-primary)]" />
                <span className="text-xs font-mono w-12 text-right font-semibold" style={{ color: 'var(--text-primary)' }}>{item.val}px</span>
              </div>
            </div>
          ))}
        </div>

        <CodeBlock code={`.item-a { flex-basis: ${basis1}px; }  /* Starting width: ${basis1}px */
.item-b { flex-basis: ${basis2}px; }  /* Starting width: ${basis2}px */
.item-c { flex-basis: ${basis3}px; }  /* Starting width: ${basis3}px */`} />

        <div className="mt-4 rounded-lg p-4 border" style={{ background: 'rgba(245,158,11,0.06)', borderColor: 'rgba(245,158,11,0.2)' }}>
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
            <strong style={{ color: '#D97706' }}>Think of it this way:</strong> Each item claims its <code className="font-mono text-xs">flex-basis</code> width first. The green striped area is leftover space (goes to flex-grow). The red area means overflow (handled by flex-shrink).
          </p>
        </div>
      </motion.div>

      {/* ====== flex-grow: Step 2 ====== */}
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
        className="rounded-2xl border p-6 md:p-8 mb-10" style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border-subtle)' }}>

        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg text-white" style={{ background: '#10B981' }}>Step 2 of 3</span>
          <h3 className="text-xl font-semibold" style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-primary)' }}>flex-grow — Who Gets the Leftover Space?</h3>
        </div>

        <p className="text-[15px] leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
          After all items take their <code className="font-mono text-sm">flex-basis</code>, there might be extra space. <code className="font-mono text-sm">flex-grow</code> divides that leftover space proportionally. A value of <code className="font-mono text-sm">0</code> means "don't grow." A value of <code className="font-mono text-sm">1</code> or higher means "share the extra space."
        </p>

        <div className="flex gap-2 mb-5 h-[60px] rounded-xl overflow-hidden border" style={{ borderColor: 'var(--border-medium)' }}>
          {[
            { val: grow1, color: '#6366F1', label: 'A' },
            { val: grow2, color: '#8B5CF6', label: 'B' },
            { val: grow3, color: '#06B6D4', label: 'C' },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-center text-white text-sm font-bold transition-all duration-500 relative"
              style={{ flexGrow: item.val, flexBasis: 0, background: item.color }}>
              <span>{item.label}</span>
              <span className="absolute bottom-1 text-[9px] opacity-80">grow: {item.val}</span>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mb-5">
          {[
            { val: grow1, set: setGrow1, label: 'Item A flex-grow', color: '#6366F1' },
            { val: grow2, set: setGrow2, label: 'Item B flex-grow', color: '#8B5CF6' },
            { val: grow3, set: setGrow3, label: 'Item C flex-grow', color: '#06B6D4' },
          ].map((item) => (
            <div key={item.label}>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-3 h-3 rounded-sm" style={{ background: item.color }} />
                <label className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>{item.label}</label>
              </div>
              <input type="range" min="0" max="5" step="1" value={item.val} onChange={(e) => item.set(Number(e.target.value))} className="w-full accent-[var(--accent-primary)]" />
            </div>
          ))}
        </div>

        <CodeBlock code={`.item-a { flex-grow: ${grow1}; }
.item-b { flex-grow: ${grow2}; }
.item-c { flex-grow: ${grow3}; }`} />
      </motion.div>

      {/* ====== flex-shrink: Step 3 ====== */}
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
        className="rounded-2xl border p-6 md:p-8 mb-8" style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border-subtle)' }}>

        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg text-white" style={{ background: '#EF4444' }}>Step 3 of 3</span>
          <h3 className="text-xl font-semibold" style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-primary)' }}>flex-shrink — Who Shrinks When Space is Tight?</h3>
        </div>

        <p className="text-[15px] leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
          When items are too big for the container, <code className="font-mono text-sm">flex-shrink</code> decides who gives up space. A value of <code className="font-mono text-sm">0</code> means "I refuse to shrink!" Higher values mean "I'll shrink more than the others."
        </p>

        {/* Container smaller than items combined */}
        <div className="mb-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Container: 300px (items want 400px total)</span>
            <span className="text-xs font-bold" style={{ color: '#EF4444' }}>100px overflow!</span>
          </div>
          <div className="border-2 border-dashed rounded-lg p-1 flex gap-1" style={{ borderColor: '#EF4444', maxWidth: '300px', background: 'var(--bg-primary)' }}>
            <div className="rounded flex items-center justify-center text-white text-xs font-bold transition-all duration-500 h-[50px]"
              style={{ flexBasis: '200px', flexShrink: shrink1, background: '#6366F1' }}>
              shrink: {shrink1}
            </div>
            <div className="rounded flex items-center justify-center text-white text-xs font-bold transition-all duration-500 h-[50px]"
              style={{ flexBasis: '200px', flexShrink: shrink2, background: '#8B5CF6' }}>
              shrink: {shrink2}
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-5">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-3 h-3 rounded-sm" style={{ background: '#6366F1' }} />
              <label className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>Item 1 flex-shrink: {shrink1}</label>
            </div>
            <input type="range" min="0" max="5" step="1" value={shrink1} onChange={(e) => setShrink1(Number(e.target.value))} className="w-full accent-[var(--accent-primary)]" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-3 h-3 rounded-sm" style={{ background: '#8B5CF6' }} />
              <label className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>Item 2 flex-shrink: {shrink2}</label>
            </div>
            <input type="range" min="0" max="5" step="1" value={shrink2} onChange={(e) => setShrink2(Number(e.target.value))} className="w-full accent-[var(--accent-primary)]" />
          </div>
        </div>

        <CodeBlock code={`.item-1 { flex-shrink: ${shrink1}; flex-basis: 200px; }
.item-2 { flex-shrink: ${shrink2}; flex-basis: 200px; }`} />
      </motion.div>

      {/* Summary */}
      <Callout>
        <strong style={{ color: 'var(--text-primary)' }}>The 3-Step Process:</strong>
        <ol className="mt-2 space-y-1 text-sm" style={{ color: 'var(--text-secondary)' }}>
          <li><strong style={{ color: '#D97706' }}>1. flex-basis</strong> — Each item claims its starting size</li>
          <li><strong style={{ color: '#10B981' }}>2. flex-grow</strong> — Leftover space is divided (0 = don't take any)</li>
          <li><strong style={{ color: '#EF4444' }}>3. flex-shrink</strong> — Overflow is resolved (0 = refuse to shrink)</li>
        </ol>
        <p className="mt-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
          <strong>Shortcut:</strong> <code className="font-mono text-sm">flex: 1</code> = <code className="font-mono text-xs">flex-grow: 1; flex-shrink: 1; flex-basis: 0%</code>. Use this when you want items to share space equally — it skips the basis step entirely!
        </p>
      </Callout>
    </Section>
  );
}
