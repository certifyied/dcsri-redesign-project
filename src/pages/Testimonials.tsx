import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedSection from '@/components/animations/AnimatedSection';
import StaggerContainer from '@/components/animations/StaggerContainer';
import StaggerItem from '@/components/animations/StaggerItem';
import basilImage from '@/assets/testimonial/basil.jpeg';
import jeswinImage from '@/assets/testimonial/Jeswin K. Abraham .jpeg';
import georgeImage from '@/assets/testimonial/George Mathew.jpeg';
import jerinImage from '@/assets/testimonial/Jerin Mathew.jpeg';
import jossyImage from '@/assets/testimonial/Jossy Varghese.jpeg';
import nidhinImage from '@/assets/testimonial/Nidhin Niby.jpg';

interface Testimonial {
  id: string;
  name: string;
  designation: string;
  company?: string;
  text: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Basil Varghese',
    designation: 'Electrical Maintenance Supervisor',
    company: 'ALSTEF Group',
    text: 'Responsible for overseeing electrical systems and maintenance operations.',
    rating: 5,
    image: basilImage,
  },
  {
    id: '2',
    name: 'Jeswin K. Abraham',
    designation: 'Automation Engineer',
    company: 'MMT, Ireland',
    text: 'With expertise in industrial automation and control systems.',
    rating: 5,
    image: jeswinImage,
  },
  {
    id: '3',
    name: 'George Mathew',
    designation: 'Engineering Professional',
    company: 'Auburn Engineering, Doha, Qatar',
    text: 'Bringing expertise in engineering and technical solutions.',
    rating: 5,
    image: georgeImage,
  },
  {
    id: '4',
    name: 'Jerin Mathew',
    designation: 'Senior DevOps Engineer',
    company: 'Experion Technologies, Trivandrum',
    text: 'Contributing to high-performance technology platforms and automation.',
    rating: 5,
    image: jerinImage,
  },
  {
    id: '5',
    name: 'Jossy Varghese',
    designation: 'Sales & Automation Engineer',
    company: 'General Tech Services L.L.C., Dubai',
    text: 'Specializing in automation solutions and technical sales initiatives.',
    rating: 5,
    image: jossyImage,
  },
  {
    id: '6',
    name: 'Nidhin Niby',
    designation: 'Assistant Engineer',
    company: 'OEN India Ltd.',
    text: 'Contributing to engineering operations and technical excellence.',
    rating: 5,
    image: nidhinImage,
  },
];

const Testimonials = () => {
  useEffect(() => {
    // Update document title
    document.title = 'Best Automation Training in Kochi | DCSRI Testimonials';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Read real success stories from learners who advanced their careers with DCSRI, recognized for providing the Best Automation Training in Kochi and industry-focused support.');
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Best Automation Training in Kochi | DCSRI Testimonials');
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Read real success stories from learners who advanced their careers with DCSRI, recognized for providing the Best Automation Training in Kochi and industry-focused support.');
    }
    
    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', 'Best Automation Training in Kochi | DCSRI Testimonials');
    }
    
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', 'Read real success stories from learners who advanced their careers with DCSRI, recognized for providing the Best Automation Training in Kochi and industry-focused support.');
    }
  }, []);

  return (
    <main className="overflow-hidden">
      <PageHero
        title="Testimonials"
        subtitle="Hear from our students and professionals who transformed their careers with DCSRI"
      />

      {/* Testimonials Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <AnimatedSection>
            <SectionHeading
              title="What Our Students Say"
              subtitle="Real experiences from professionals who trained with us"
            />
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {testimonials.map((testimonial) => (
              <StaggerItem key={testimonial.id}>
                <motion.div
                  className="bg-card rounded-xl p-6 shadow-card border border-border/50 h-full flex flex-col group"
                  whileHover={{ y: -5, boxShadow: '0 20px 40px -12px rgba(10, 26, 68, 0.15)' }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Profile Image and Quote Icon */}
                  <div className="flex items-start gap-4 mb-4">
                    <motion.div
                      className="relative flex-shrink-0"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-accent/20 group-hover:border-accent transition-colors duration-300"
                      />
                      <div className="absolute -top-1 -right-1 bg-accent rounded-full p-1">
                        <Quote className="w-3 h-3 text-accent-foreground" />
                      </div>
                    </motion.div>
                    <div className="flex-1">
                      <Quote className="w-8 h-8 text-accent/30 mb-2" />
                      {/* Rating */}
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-accent text-accent"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  {/* Author Info */}
                  <div className="border-t border-border/50 pt-4">
                    <h4 className="text-lg font-semibold text-foreground mb-1">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.designation}
                      {testimonial.company && (
                        <span className="text-accent"> • {testimonial.company}</span>
                      )}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Learn, build, and transform your career with DCSRI, the hub for the Best Automation Training in Kochi.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/contact"
                className="btn-primary inline-block"
              >
                Get in Touch
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default Testimonials;

