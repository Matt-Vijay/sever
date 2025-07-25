'use client';

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { SlidingNumber } from '@/components/ui/sliding-number';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [value, setValue] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (value < 100) {
      const interval = setInterval(() => {
        setValue((prev) => Math.min(prev + 2, 100));
      }, 40); // Slower, more gradual count-up
      return () => clearInterval(interval);
    } else {
      // Pause at 100% for 0.5 seconds before fading out
      const pauseTimeout = setTimeout(() => {
        setIsComplete(true);
        // Notify parent component after fade-out animation completes
        setTimeout(onComplete, 750); // Corresponds to fade-out duration
      }, 500); // 0.5-second pause
      return () => clearTimeout(pauseTimeout);
    }
  }, [value, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isComplete ? 0 : 1 }}
      transition={{ duration: 0.75, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 flex h-screen w-full items-center justify-center bg-background"
    >
      <div className="inline-flex items-center gap-2 font-mono text-4xl text-foreground">
        <SlidingNumber value={value} />%
      </div>
    </motion.div>
  );
}
