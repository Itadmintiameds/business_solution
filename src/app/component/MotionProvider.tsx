'use client';

import { MotionConfig } from 'framer-motion';

// Makes every framer-motion animation on the site respect the OS "reduce motion" setting
// (movement is dropped, fades are kept).
const MotionProvider = ({ children }: { children: React.ReactNode }) => (
  <MotionConfig reducedMotion="user">{children}</MotionConfig>
);

export default MotionProvider;
