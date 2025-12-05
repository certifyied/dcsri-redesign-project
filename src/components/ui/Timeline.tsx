import { LucideIcon } from 'lucide-react';

interface TimelineItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline = ({ items }: TimelineProps) => {
  return (
    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
      
      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={index} className="relative flex gap-6 items-start">
            {/* Icon */}
            <div className="relative z-10 w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0 shadow-medium">
              <item.icon className="w-6 h-6 text-accent-foreground" />
            </div>
            
            {/* Content */}
            <div className="flex-1 bg-card rounded-xl p-5 shadow-card border border-border/50">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-primary text-primary-foreground text-xs font-semibold px-2.5 py-1 rounded-full">
                  Step {index + 1}
                </span>
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
