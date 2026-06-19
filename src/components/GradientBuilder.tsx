import { useState, useCallback } from 'react';
import { CodeBlock } from './CodeBlock';

interface ColorStop {
  color: string;
  position: number;
}

interface GradientBuilderProps {
  type: 'linear' | 'radial' | 'conic';
}

const PRESET_COLORS = [
  '#6366F1', '#8B5CF6', '#06B6D4', '#EC4899', '#F59E0B',
  '#10B981', '#EF4444', '#3B82F6', '#F97316', '#14B8A6',
  '#0B0C10', '#F0F2F5', '#1A1D23',
];

const DIRECTIONS = [
  { label: 'to top', angle: 0 },
  { label: 'to top right', angle: 45 },
  { label: 'to right', angle: 90 },
  { label: 'to bottom right', angle: 135 },
  { label: 'to bottom', angle: 180 },
  { label: 'to bottom left', angle: 225 },
  { label: 'to left', angle: 270 },
  { label: 'to top left', angle: 315 },
];

const POSITIONS = [
  'top left', 'top center', 'top right',
  'center left', 'center center', 'center right',
  'bottom left', 'bottom center', 'bottom right',
];

const RADIAL_SIZES = ['closest-side', 'farthest-side', 'closest-corner', 'farthest-corner'];

export function GradientBuilder({ type }: GradientBuilderProps) {
  const [colorStops, setColorStops] = useState<ColorStop[]>(() => {
    if (type === 'linear') return [
      { color: '#6366F1', position: 0 },
      { color: '#8B5CF6', position: 50 },
      { color: '#06B6D4', position: 100 },
    ];
    if (type === 'radial') return [
      { color: '#6366F1', position: 0 },
      { color: '#0B0C10', position: 100 },
    ];
    return [
      { color: '#6366F1', position: 0 },
      { color: '#8B5CF6', position: 90 },
      { color: '#06B6D4', position: 180 },
      { color: '#6366F1', position: 360 },
    ];
  });

  const [direction, setDirection] = useState(type === 'linear' ? 135 : 0);
  const [selectedDir, setSelectedDir] = useState(3);
  const [shape, setShape] = useState<'circle' | 'ellipse'>('circle');
  const [radialSize, setRadialSize] = useState('farthest-corner');
  const [position, setPosition] = useState('center center');
  const [showColorPicker, setShowColorPicker] = useState<number | null>(null);

  const addStop = useCallback(() => {
    setColorStops(prev => {
      const last = prev[prev.length - 1];
      const pos = type === 'conic' ? Math.min(last.position + 60, 360) : Math.min(last.position + 25, 100);
      return [...prev, { color: PRESET_COLORS[Math.floor(Math.random() * PRESET_COLORS.length)], position: pos }];
    });
  }, [type]);

  const removeStop = useCallback((index: number) => {
    setColorStops(prev => prev.filter((_, i) => i !== index));
  }, []);

  const updateStop = useCallback((index: number, updates: Partial<ColorStop>) => {
    setColorStops(prev => prev.map((s, i) => i === index ? { ...s, ...updates } : s));
  }, []);

  const getGradientCSS = useCallback(() => {
    const stops = colorStops.map(s => `${s.color} ${s.position}${type === 'conic' ? 'deg' : '%'}`).join(', ');

    if (type === 'linear') {
      return `background: linear-gradient(${direction}deg, ${stops});`;
    }
    if (type === 'radial') {
      return `background: radial-gradient(${shape} ${radialSize} at ${position}, ${stops});`;
    }
    return `background: conic-gradient(from ${direction}deg at ${position}, ${stops});`;
  }, [colorStops, direction, shape, radialSize, position, type]);

  const getPreviewStyle = useCallback(() => {
    const stops = colorStops.map(s => `${s.color} ${s.position}${type === 'conic' ? 'deg' : '%'}`).join(', ');

    if (type === 'linear') {
      return { background: `linear-gradient(${direction}deg, ${stops})` };
    }
    if (type === 'radial') {
      return { background: `radial-gradient(${shape} ${radialSize} at ${position}, ${stops})` };
    }
    return {
      background: `conic-gradient(from ${direction}deg at ${position}, ${stops})`,
      borderRadius: '50%',
    };
  }, [colorStops, direction, shape, radialSize, position, type]);

  return (
    <div className="mt-8 rounded-2xl overflow-hidden border" style={{ borderColor: 'var(--border-subtle)', background: 'var(--bg-secondary)' }}>
      <div className="flex flex-col lg:flex-row">
        {/* Controls Panel */}
        <div className="lg:w-[35%] p-5 md:p-6 border-b lg:border-b-0 lg:border-r overflow-y-auto max-h-[600px]" style={{ borderColor: 'var(--border-subtle)' }}>
          {/* Direction for linear/conic */}
          {(type === 'linear' || type === 'conic') && (
            <div className="mb-5">
              <label className="block text-xs font-medium uppercase tracking-wider mb-3" style={{ color: 'var(--text-muted)', fontFamily: 'Outfit, sans-serif' }}>
                {type === 'conic' ? 'From Angle' : 'Direction'}
              </label>
              {type === 'linear' ? (
                <>
                  <div className="grid grid-cols-4 gap-1.5 mb-3">
                    {DIRECTIONS.map((d, i) => (
                      <button
                        key={d.label}
                        onClick={() => { setSelectedDir(i); setDirection(d.angle); }}
                        className="p-2 rounded-lg text-xs transition-all duration-200"
                        style={{
                          background: selectedDir === i ? 'var(--accent-primary)' : 'var(--bg-elevated)',
                          color: selectedDir === i ? 'white' : 'var(--text-secondary)',
                        }}
                      >
                        {d.label.replace('to ', '')}
                      </button>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="range"
                      min="0"
                      max="360"
                      value={direction}
                      onChange={(e) => { setDirection(Number(e.target.value)); setSelectedDir(-1); }}
                      className="flex-1 accent-[var(--accent-primary)]"
                    />
                    <span className="text-sm font-mono w-12 text-right" style={{ color: 'var(--text-secondary)' }}>{direction}&deg;</span>
                  </div>
                </>
              ) : (
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="0"
                    max="360"
                    value={direction}
                    onChange={(e) => setDirection(Number(e.target.value))}
                    className="flex-1 accent-[var(--accent-primary)]"
                  />
                  <span className="text-sm font-mono w-12 text-right" style={{ color: 'var(--text-secondary)' }}>{direction}&deg;</span>
                </div>
              )}
            </div>
          )}

          {/* Shape for radial */}
          {type === 'radial' && (
            <div className="mb-5">
              <label className="block text-xs font-medium uppercase tracking-wider mb-3" style={{ color: 'var(--text-muted)', fontFamily: 'Outfit, sans-serif' }}>Shape</label>
              <div className="flex gap-2">
                {(['circle', 'ellipse'] as const).map(s => (
                  <button
                    key={s}
                    onClick={() => setShape(s)}
                    className="flex-1 py-2 px-4 rounded-lg text-sm capitalize transition-all duration-200"
                    style={{
                      background: shape === s ? 'var(--accent-primary)' : 'var(--bg-elevated)',
                      color: shape === s ? 'white' : 'var(--text-secondary)',
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Size for radial */}
          {type === 'radial' && (
            <div className="mb-5">
              <label className="block text-xs font-medium uppercase tracking-wider mb-3" style={{ color: 'var(--text-muted)', fontFamily: 'Outfit, sans-serif' }}>Size</label>
              <div className="grid grid-cols-2 gap-1.5">
                {RADIAL_SIZES.map(s => (
                  <button
                    key={s}
                    onClick={() => setRadialSize(s)}
                    className="py-2 px-3 rounded-lg text-xs transition-all duration-200"
                    style={{
                      background: radialSize === s ? 'var(--accent-primary)' : 'var(--bg-elevated)',
                      color: radialSize === s ? 'white' : 'var(--text-secondary)',
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Position */}
          {(type === 'radial' || type === 'conic') && (
            <div className="mb-5">
              <label className="block text-xs font-medium uppercase tracking-wider mb-3" style={{ color: 'var(--text-muted)', fontFamily: 'Outfit, sans-serif' }}>Position</label>
              <div className="grid grid-cols-3 gap-1 w-[140px]">
                {POSITIONS.map(p => (
                  <button
                    key={p}
                    onClick={() => setPosition(p)}
                    className="h-9 rounded transition-all duration-200"
                    style={{
                      background: position === p ? 'var(--accent-primary)' : 'var(--bg-elevated)',
                      border: position === p ? 'none' : '1px solid var(--border-subtle)',
                    }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Color Stops */}
          <div className="mb-4">
            <label className="block text-xs font-medium uppercase tracking-wider mb-3" style={{ color: 'var(--text-muted)', fontFamily: 'Outfit, sans-serif' }}>Color Stops</label>
            <div className="space-y-2">
              {colorStops.map((stop, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="relative">
                    <button
                      onClick={() => setShowColorPicker(showColorPicker === i ? null : i)}
                      className="w-8 h-8 rounded-lg border-2 transition-transform hover:scale-110"
                      style={{ background: stop.color, borderColor: 'var(--border-medium)' }}
                    />
                    {showColorPicker === i && (
                      <div className="absolute top-10 left-0 z-20 p-3 rounded-xl border grid grid-cols-5 gap-1.5" style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border-medium)', width: '180px' }}>
                        {PRESET_COLORS.map(c => (
                          <button
                            key={c}
                            onClick={() => { updateStop(i, { color: c }); setShowColorPicker(null); }}
                            className="w-6 h-6 rounded transition-transform hover:scale-110"
                            style={{ background: c, border: '1px solid var(--border-subtle)' }}
                          />
                        ))}
                        <input
                          type="text"
                          value={stop.color}
                          onChange={(e) => updateStop(i, { color: e.target.value })}
                          className="col-span-5 mt-1 px-2 py-1 rounded text-xs font-mono bg-[var(--bg-elevated)] border outline-none focus:border-[var(--accent-primary)]"
                          style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-primary)' }}
                        />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 flex items-center gap-2">
                    <input
                      type="range"
                      min="0"
                      max={type === 'conic' ? 360 : 100}
                      value={stop.position}
                      onChange={(e) => updateStop(i, { position: Number(e.target.value) })}
                      className="flex-1 accent-[var(--accent-primary)]"
                    />
                    <span className="text-xs font-mono w-10 text-right" style={{ color: 'var(--text-muted)' }}>
                      {stop.position}{type === 'conic' ? 'deg' : '%'}
                    </span>
                  </div>
                  {colorStops.length > 2 && (
                    <button
                      onClick={() => removeStop(i)}
                      className="text-xs px-2 py-1 rounded hover:bg-red-500/20 hover:text-red-400 transition-colors"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      &times;
                    </button>
                  )}
                </div>
              ))}
            </div>
            <button
              onClick={addStop}
              className="mt-3 text-sm py-1.5 px-4 rounded-lg transition-all duration-200 hover:opacity-80"
              style={{ color: 'var(--accent-primary)', background: 'rgba(99,102,241,0.1)' }}
            >
              + Add color stop
            </button>
          </div>

          {/* CSS Output */}
          <div className="mt-5">
            <CodeBlock code={getGradientCSS()} />
          </div>
        </div>

        {/* Preview Panel */}
        <div className="lg:w-[65%] p-5 md:p-8 flex items-center justify-center min-h-[300px] lg:min-h-0" style={{ background: 'var(--bg-primary)' }}>
          <div
            className="w-full h-full min-h-[280px] rounded-xl transition-all duration-300"
            style={getPreviewStyle()}
          />
        </div>
      </div>
    </div>
  );
}
