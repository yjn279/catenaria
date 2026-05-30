import { useRef, useEffect } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export function catenaryPath(W: number, H: number, tautness: number, N: number): string {
  const hw = W / 2;
  const a = hw * tautness;
  const denom = Math.cosh(hw / a) - 1;
  let d = '';
  for (let i = 0; i <= N; i++) {
    const x = -hw + (W * i / N);
    const y = H * (Math.cosh(x / a) - 1) / denom;
    d += (i === 0 ? 'M' : 'L') + (x + hw).toFixed(2) + ' ' + y.toFixed(2) + ' ';
  }
  return d.trim();
}

// eslint-disable-next-line react-refresh/only-export-components
export const CATENARY_D = catenaryPath(100, 120, 0.33, 140);

interface CatenaryMarkProps {
  width?: number;
  stroke?: string;
  apex?: boolean;
  className?: string;
}

export function CatenaryMark({ width = 26, stroke = 'var(--text)', apex = true, className }: CatenaryMarkProps) {
  return (
    <svg
      viewBox="0 0 100 120"
      aria-hidden="true"
      className={className}
      style={{ width, height: 'auto', display: 'block' }}
    >
      <path d={CATENARY_D} fill="none" stroke={stroke} strokeWidth="1.4" vectorEffect="non-scaling-stroke" />
      {apex && <circle cx="50" cy="0" r="2.6" fill="var(--accent)" />}
    </svg>
  );
}

export function HeroMotif() {
  const pathRef = useRef<SVGPathElement>(null);
  const apexRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const hp = pathRef.current;
    const apex = apexRef.current;
    if (!hp || !apex) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      apex.style.opacity = '1';
      return;
    }

    const len = hp.getTotalLength();
    if (!len) {
      apex.style.opacity = '1';
      return;
    }

    hp.style.strokeDasharray = String(len);
    hp.style.strokeDashoffset = String(len);
    hp.style.transition = 'stroke-dashoffset 2.4s cubic-bezier(0.2,0.7,0.2,1)';

    const r1 = requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        hp.style.strokeDashoffset = '0';
        setTimeout(() => {
          apex.style.transition = 'opacity 1.1s ease';
          apex.style.opacity = '1';
        }, 1700);
      })
    );

    return () => cancelAnimationFrame(r1);
  }, []);

  return (
    <svg className="hero-motif" viewBox="0 0 100 120" aria-hidden="true">
      <path ref={pathRef} className="cat-path" d={CATENARY_D} />
      <circle ref={apexRef} className="hero-apex" cx="50" cy="0" r="2.4" />
    </svg>
  );
}
