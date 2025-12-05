import { motion, useInView, useSpring, useMotionValue, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';

interface CountUpProps {
  value: number;
  suffix?: string;
  className?: string;
  duration?: number;
}

const CountUp = ({
  value,
  suffix = '',
  className = '',
  duration = 2,
}: CountUpProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0,
  });
  const displayValue = useTransform(springValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  return (
    <motion.span ref={ref} className={className}>
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </motion.span>
  );
};

export default CountUp;
