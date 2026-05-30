import { useState, useEffect } from 'react';

export function ScrollProgress() {
  const [w, setW] = useState<number>(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setW(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return <div id="progress" style={{ width: w + '%' }} />;
}
