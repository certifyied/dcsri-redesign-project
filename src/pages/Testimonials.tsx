import { Link } from 'react-router-dom';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedSection from '@/components/animations/AnimatedSection';
import StaggerContainer from '@/components/animations/StaggerContainer';
import StaggerItem from '@/components/animations/StaggerItem';

interface Testimonial {
  id: string;
  name: string;
  designation: string;
  company?: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    designation: 'Automation Engineer',
    company: 'Tech Industries Ltd.',
    text: 'The hands-on training at DCSRI transformed my career. The PLC and SCADA training was exceptional, and I landed my dream job immediately after completing the program.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Priya Sharma',
    designation: 'Industrial Automation Specialist',
    company: 'Automation Solutions Inc.',
    text: 'The 3-month professional program gave me real-world experience with industrial automation systems. The instructors are industry experts who truly care about student success.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Amit Patel',
    designation: 'Control Systems Engineer',
    company: 'Manufacturing Corp.',
    text: 'Best investment in my career! The IoT and embedded systems lab is state-of-the-art. I learned practical skills that I use every day in my job.',
    rating: 5,
  },
  {
    id: '4',
    name: 'Sneha Reddy',
    designation: 'Robotics Engineer',
    company: 'Advanced Robotics Systems',
    text: 'The robotics and control systems training exceeded my expectations. The Saturday lab access was a game-changer for my learning journey.',
    rating: 5,
  },
  {
    id: '5',
    name: 'Vikram Singh',
    designation: 'SCADA Systems Developer',
    company: 'Industrial Automation Group',
    text: 'DCSRI\'s project-based approach helped me build a strong portfolio. The real-time industrial project development facility is outstanding.',
    rating: 5,
  },
  {
    id: '6',
    name: 'Anjali Mehta',
    designation: 'Automation Consultant',
    company: 'Smart Factory Solutions',
    text: 'The comprehensive curriculum and industry-grade equipment made all the difference. I highly recommend DCSRI to anyone serious about automation careers.',
    rating: 5,
  },
];

const Testimonials = () => {
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
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="w-8 h-8 text-accent/30" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-accent text-accent"
                      />
                    ))}
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
              Join hundreds of successful professionals who transformed their careers with DCSRI's industry-focused training programs.
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

