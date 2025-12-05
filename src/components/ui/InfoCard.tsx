import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface InfoCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

const InfoCard = ({ title, description, icon: Icon, className = '' }: InfoCardProps) => {
  return (
    <motion.div 
      className={`bg-card rounded-xl p-6 shadow-card border border-border/50 group ${className}`}
      whileHover={{ 
        y: -8,
        boxShadow: '0 20px 40px -12px rgba(10, 26, 68, 0.15)',
      }}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <motion.div 
        className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-5"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.3 }}
      >
        <Icon className="w-7 h-7 text-accent" />
      </motion.div>
      <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default InfoCard;
