import { LucideIcon } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface TimelineItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline = ({ items }: TimelineProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div className="relative" ref={ref}>
      {/* Vertical Line */}
      <motion.div 
        className="absolute left-6 top-0 bottom-0 w-0.5 bg-border hidden md:block origin-top"
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      />
      
      <div className="space-y-8">
        {items.map((item, index) => (
          <motion.div 
            key={index} 
            className="relative flex gap-6 items-start"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.15,
              ease: [0.25, 0.1, 0.25, 1]
            }}
          >
            {/* Icon */}
            <motion.div 
              className="relative z-10 w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0 shadow-medium"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <item.icon className="w-6 h-6 text-accent-foreground" />
            </motion.div>
            
            {/* Content */}
            <motion.div 
              className="flex-1 bg-card rounded-xl p-5 shadow-card border border-border/50"
              whileHover={{ y: -3, boxShadow: '0 15px 30px -10px rgba(10, 26, 68, 0.12)' }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-primary text-primary-foreground text-xs font-semibold px-2.5 py-1 rounded-full">
                  Step {index + 1}
                </span>
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
