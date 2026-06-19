import { Section } from '@/components/Section';
import { motion } from 'framer-motion';
import { useState } from 'react';
import type { CSSProperties } from 'react';

const DIRECTIONS = [
  { key: 'row', label: 'row', main: 'Horizontal', mainArrow: '→', cross: 'Vertical', crossArrow: '↓', desc: 'Left to Right', mainStart: 'Left', mainEnd: 'Right', crossStart: 'Top', crossEnd: 'Bottom' },
  { key: 'row-reverse', label: 'row-reverse', main: 'Horizontal', mainArrow: '←', cross: 'Vertical', crossArrow: '↓', desc: 'Right to Left', mainStart: 'Right', mainEnd: 'Left', crossStart: 'Top', crossEnd: 'Bottom' },
  { key: 'column', label: 'column', main: 'Vertical', mainArrow: '↓', cross: 'Horizontal', crossArrow: '→', desc: 'Top to Bottom', mainStart: 'Top', mainEnd: 'Bottom', crossStart: 'Left', crossEnd: 'Right' },
  { key: 'column-reverse', label: 'column-reverse', main: 'Vertical', mainArrow: '↑', cross: 'Horizontal', crossArrow: '→', desc: 'Bottom to Top', mainStart: 'Bottom', mainEnd: 'Top', crossStart: 'Left', crossEnd: 'Right' },
] as const satisfies readonly {
  key: CSSProperties['flexDirection'];
  label: string;
  main: string;
  mainArrow: string;
  cross: string;
  crossArrow: string;
  desc: string;
  mainStart: string;
  mainEnd: string;
  crossStart: string;
  crossEnd: string;
}[];

export function AxisSection() {
  const [dirIdx, setDirIdx] = useState(0);
  const dir = DIRECTIONS[dirIdx];
  const isRow = dir.key === 'row' || dir.key === 'row-reverse';
  const isReverse = dir.key === 'row-reverse' || dir.key === 'column-reverse';
  const mainLine = isRow
    ? { x1: isReverse ? 88 : 14, y1: 17, x2: isReverse ? 14 : 88, y2: 17 }
    : { x1: 11, y1: isReverse ? 84 : 24, x2: 11, y2: isReverse ? 24 : 84 };
  const crossLine = isRow
    ? { x1: 9, y1: 28, x2: 9, y2: 84 }
    : { x1: 22, y1: 16, x2: 90, y2: 16 };

  return (
    <Section id="axis" className="section-gradient-1">
      <h2 className="text-3xl md:text-[40px] font-semibold leading-tight mb-4" style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-primary)' }}>
        Main Axis vs Cross Axis
      </h2>
      <p className="text-base md:text-lg leading-relaxed mb-8 max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
        This is the most important concept in Flexbox. Every flex container has <strong>two axes</strong>. The <strong>Main Axis</strong> is where items flow (set by <code className="font-mono text-sm">flex-direction</code>). The <strong>Cross Axis</strong> is always perpendicular. <code className="font-mono text-sm">justify-content</code> always controls the Main Axis. <code className="font-mono text-sm">align-items</code> always controls the Cross Axis.
      </p>

      {/* Direction Toggle */}
      <div className="flex flex-wrap gap-2 mb-8">
        {DIRECTIONS.map((d, i) => (
          <button key={d.key} onClick={() => setDirIdx(i)}
            className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300"
            style={{
              background: dirIdx === i ? 'var(--accent-primary)' : 'var(--bg-secondary)',
              color: dirIdx === i ? 'white' : 'var(--text-secondary)',
              border: dirIdx === i ? 'none' : '1px solid var(--border-subtle)',
              boxShadow: dirIdx === i ? '0 4px 14px rgba(99,102,241,0.3)' : 'none',
            }}>
            {d.label}
          </button>
        ))}
      </div>

      {/* Big Visual Diagram */}
      <motion.div key={dir.key} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
        className="axis-card mb-10">
        <div className="axis-summary-grid">
          <div className="axis-summary axis-summary-main">
            <span className="axis-summary-kicker">Main axis</span>
            <strong>{dir.mainArrow} Items flow {dir.desc.toLowerCase()}</strong>
            <span>justify-content moves items on this line</span>
          </div>
          <div className="axis-summary axis-summary-cross">
            <span className="axis-summary-kicker">Cross axis</span>
            <strong>{dir.crossArrow} Perpendicular to the flow</strong>
            <span>align-items moves items across this line</span>
          </div>
        </div>

        <div className="axis-stage" data-orientation={isRow ? 'row' : 'column'}>
          <svg className="axis-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <marker id={`main-arrow-${dir.key}`} markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                <path d="M 0 0 L 8 4 L 0 8 z" fill="var(--accent-primary)" />
              </marker>
              <marker id={`cross-arrow-${dir.key}`} markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                <path d="M 0 0 L 8 4 L 0 8 z" fill="#EC4899" />
              </marker>
            </defs>
            <line
              className="axis-svg-line axis-svg-line-main"
              x1={mainLine.x1}
              y1={mainLine.y1}
              x2={mainLine.x2}
              y2={mainLine.y2}
              markerEnd={`url(#main-arrow-${dir.key})`}
            />
            <line
              className="axis-svg-line axis-svg-line-cross"
              x1={crossLine.x1}
              y1={crossLine.y1}
              x2={crossLine.x2}
              y2={crossLine.y2}
              markerEnd={`url(#cross-arrow-${dir.key})`}
            />
          </svg>

          <div className={`axis-chip axis-chip-main ${isRow ? 'axis-chip-main-row' : 'axis-chip-main-column'}`}>
            <span>{dir.mainArrow}</span>
            <strong>Main axis</strong>
            <small>{dir.mainStart} start → {dir.mainEnd} end</small>
          </div>
          <div className={`axis-chip axis-chip-cross ${isRow ? 'axis-chip-cross-row' : 'axis-chip-cross-column'}`}>
            <span>{dir.crossArrow}</span>
            <strong>Cross axis</strong>
            <small>{dir.crossStart} → {dir.crossEnd}</small>
          </div>

          <div
            className={`axis-flex-container ${isRow ? 'axis-flex-row' : 'axis-flex-column'}`}
            style={{ flexDirection: dir.key }}
          >
            {[1, 2, 3].map((n) => (
              <div key={n} className="axis-demo-item"
                style={{ background: ['#6366F1', '#8B5CF6', '#06B6D4'][n - 1] }}>
                <span>{n}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Property mapping cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          className="rounded-2xl border p-6" style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border-subtle)', borderLeft: '5px solid var(--accent-primary)' }}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold" style={{ background: 'var(--accent-primary)' }}>J</div>
            <div>
              <h3 className="text-base font-semibold" style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--accent-primary)' }}>justify-content</h3>
              <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Controls the Main Axis</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            With <code className="font-mono text-xs px-1 py-0.5 rounded" style={{ background: 'var(--bg-elevated)' }}>flex-direction: {dir.label}</code>, this controls <strong style={{ color: 'var(--text-primary)' }}>{dir.main.toLowerCase()}</strong> alignment — items move {dir.desc.toLowerCase()}.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="rounded-2xl border p-6" style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border-subtle)', borderLeft: '5px solid #EC4899' }}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold" style={{ background: '#EC4899' }}>A</div>
            <div>
              <h3 className="text-base font-semibold" style={{ fontFamily: 'Outfit, sans-serif', color: '#EC4899' }}>align-items</h3>
              <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Controls the Cross Axis</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            With <code className="font-mono text-xs px-1 py-0.5 rounded" style={{ background: 'var(--bg-elevated)' }}>flex-direction: {dir.label}</code>, this controls <strong style={{ color: 'var(--text-primary)' }}>{dir.cross.toLowerCase()}</strong> alignment — perpendicular to the main flow.
          </p>
        </motion.div>
      </div>

      {/* All 4 directions at a glance */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
        <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-primary)' }}>
          All Directions at a Glance
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {DIRECTIONS.map((d) => (
            <div key={d.key} className="rounded-xl border p-4 text-center" style={{ background: 'var(--bg-secondary)', borderColor: d.key === dir.key ? 'var(--accent-primary)' : 'var(--border-subtle)', boxShadow: d.key === dir.key ? '0 0 0 2px var(--accent-primary)' : 'none' }}>
              <span className="font-mono text-xs font-semibold px-2 py-1 rounded mb-3 inline-block" style={{ color: 'var(--accent-primary)', background: 'var(--bg-elevated)' }}>{d.label}</span>
              <div className="flex gap-1 justify-center mb-2" style={{ flexDirection: d.key }}>
                {[1, 2].map((n) => (
                  <div key={n} className="w-8 h-8 rounded flex items-center justify-center text-white text-xs font-bold" style={{ background: ['#6366F1', '#8B5CF6'][n - 1] }}>{n}</div>
                ))}
              </div>
              <p className="text-[10px]" style={{ color: 'var(--text-muted)' }}>{d.main}: {d.mainArrow} · {d.cross}: {d.crossArrow}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
