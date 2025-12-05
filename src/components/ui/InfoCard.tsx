import { LucideIcon } from 'lucide-react';

interface InfoCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

const InfoCard = ({ title, description, icon: Icon, className = '' }: InfoCardProps) => {
  return (
    <div className={`bg-card rounded-xl p-6 shadow-card card-hover border border-border/50 ${className}`}>
      <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-5">
        <Icon className="w-7 h-7 text-accent" />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};

export default InfoCard;
