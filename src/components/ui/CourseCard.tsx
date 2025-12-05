import { Clock, Users, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CourseCardProps {
  title: string;
  duration: string;
  eligibility: string;
  description: string;
  image?: string;
}

const CourseCard = ({ title, duration, eligibility, description, image }: CourseCardProps) => {
  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-card card-hover border border-border/50 group">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{
            backgroundImage: image 
              ? `url(${image})` 
              : 'linear-gradient(135deg, hsl(222 78% 15%) 0%, hsl(222 50% 25%) 100%)',
          }}
        />
        <div className="absolute inset-0 bg-primary/40" />
        <div className="absolute bottom-4 left-4 right-4">
          <span className="inline-block bg-accent text-accent-foreground text-sm font-medium px-3 py-1 rounded-full">
            {duration}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
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

        <Link 
          to="/admission"
          className="inline-flex items-center gap-2 text-primary font-medium hover:text-accent transition-colors"
        >
          Learn More
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
