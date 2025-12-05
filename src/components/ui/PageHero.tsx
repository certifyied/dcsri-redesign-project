import { ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  children?: ReactNode;
  size?: 'default' | 'large';
}

const PageHero = ({ title, subtitle, backgroundImage, children, size = 'default' }: PageHeroProps) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

  return (
    <section
      className={`relative flex items-center justify-center overflow-hidden ${
        size === 'large' ? 'min-h-[90vh]' : 'min-h-[50vh]'
      }`}
    >
      {/* Background with Parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: backgroundImage
            ? `url(${backgroundImage})`
            : 'linear-gradient(135deg, hsl(222 78% 15%) 0%, hsl(222 50% 25%) 100%)',
          scale,
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/90" />
      
      {/* Decorative Elements with Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
          animate={{ 
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 container-custom mx-auto px-4 md:px-8 text-center"
        style={{ y, opacity }}
      >
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p 
            className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {subtitle}
          </motion.p>
        )}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {children}
          </motion.div>
        )}
      </motion.div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default PageHero;
