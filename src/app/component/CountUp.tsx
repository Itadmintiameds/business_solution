'use client';

import { animate, useInView, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface Props {
  value: number;
  duration?: number;
  className?: string;
}

// Counts up from 0 to `value` the first time the number scrolls into view.
// The server renders the final value, so no-JS users, crawlers and people who
// prefer reduced motion always see the real figure.
const CountUp = ({ value, duration = 1.6, className }: Props) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(value);
  const [armed, setArmed] = useState(false);

  // Once on the client (and only when motion is allowed), drop to 0 so the count has somewhere to start from.
  useEffect(() => {
    if (reduceMotion) return;
    setDisplay(0);
    setArmed(true);
  }, [reduceMotion]);

  useEffect(() => {
    if (!armed || !inView) return;
    const controls = animate(0, value, {
      duration,
      ease: 'easeOut',
      onUpdate: (latest) => setDisplay(Math.round(latest)),
      onComplete: () => setDisplay(value),
    });
    return () => controls.stop();
  }, [armed, inView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
};

export default CountUp;
