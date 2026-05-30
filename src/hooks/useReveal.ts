import { useEffect } from 'react';
import type { RefObject } from 'react';

export function useReveal(rootRef: RefObject<HTMLElement | null>): void {
  useEffect(() => {
    const root = rootRef.current ?? document.documentElement;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    root.querySelectorAll<Element>('.reveal:not(.in)').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
