import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

type AnimationType = 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scale';

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  animation?: AnimationType;
}

const animations: Record<AnimationType, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      }
    },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      }
    },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      }
    },
  },
  slideRight: {
    hidden: { opacity: 0, x: 40 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      }
    },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      }
    },
  },
};

const StaggerItem = ({
  children,
  className = '',
  animation = 'fadeUp',
}: StaggerItemProps) => {
  return (
    <motion.div
      variants={animations[animation]}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default StaggerItem;
