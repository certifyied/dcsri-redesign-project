interface FacilityCardProps {
  title: string;
  description: string;
  image: string;
}

const FacilityCard = ({ title, description, image }: FacilityCardProps) => {
  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-card card-hover border border-border/50 group">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm line-clamp-2">{description}</p>
      </div>
    </div>
  );
};

export default FacilityCard;
