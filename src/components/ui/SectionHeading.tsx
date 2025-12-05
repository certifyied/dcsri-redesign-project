interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
  className?: string;
}

const SectionHeading = ({ title, subtitle, alignment = 'center', className = '' }: SectionHeadingProps) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <div className={`max-w-3xl mb-12 ${alignmentClasses[alignment]} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg">
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-20 bg-accent rounded-full ${
        alignment === 'center' ? 'mx-auto' : alignment === 'right' ? 'ml-auto' : ''
      }`} />
    </div>
  );
};

export default SectionHeading;
