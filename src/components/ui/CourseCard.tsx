import { Clock, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface CourseCardProps {
  title: string;
  duration: string;
  eligibility: string;
  description: string;
  image?: string;
  badge?: string;
  prospectusPdf?: string;
}

const CourseCard = ({ title, duration, eligibility, description, image, badge, prospectusPdf }: CourseCardProps) => {
  return (
    <motion.div 
      className="bg-card rounded-xl overflow-hidden shadow-card border border-border/50 group"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: image 
              ? `url(${image})` 
              : 'linear-gradient(135deg, hsl(222 78% 15%) 0%, hsl(222 50% 25%) 100%)',
          }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        />
        <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/30 transition-colors duration-300" />
        <div className="absolute bottom-4 left-4 right-4">
          <motion.span 
            className="inline-block bg-accent text-accent-foreground text-sm font-medium px-3 py-1 rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            {badge || duration}
          </motion.span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{description}</p>
        
        <div className="space-y-2 mb-5">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4 text-accent" />
            <span>Duration: {duration}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <BookOpen className="w-4 h-4 text-accent" />
            <span>Eligibility: {eligibility}</span>
          </div>
        </div>

        {prospectusPdf ? (
          <a 
            href={prospectusPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-medium hover:text-accent transition-colors group/link"
          >
            Learn More
            <motion.svg 
              className="w-4 h-4" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </motion.svg>
          </a>
        ) : (
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 text-primary font-medium hover:text-accent transition-colors group/link"
          >
            Learn More
            <motion.svg 
              className="w-4 h-4" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </motion.svg>
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default CourseCard;
