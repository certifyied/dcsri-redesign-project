import { motion } from 'framer-motion';

interface FacilityCardProps {
  title: string;
  description: string;
  image: string;
}

const FacilityCard = ({ title, description, image }: FacilityCardProps) => {
  return (
    <motion.div 
      className="bg-card rounded-xl overflow-hidden shadow-card border border-border/50 group"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <motion.img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="absolute bottom-4 left-4 right-4"
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-primary-foreground text-sm">{description}</p>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2 mt-1 md:hidden">{description}</p>
      </div>
    </motion.div>
  );
};

export default FacilityCard;
