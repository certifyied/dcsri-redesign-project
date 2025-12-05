import { motion } from 'framer-motion';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import FacilityCard from '@/components/ui/FacilityCard';
import AnimatedSection from '@/components/animations/AnimatedSection';
import StaggerContainer from '@/components/animations/StaggerContainer';
import StaggerItem from '@/components/animations/StaggerItem';
import { facilities } from '@/data/facilities';

const Facilities = () => {
  return (
    <main className="overflow-hidden">
      <PageHero
        title="Facilities"
        subtitle="State-of-the-art infrastructure designed to support your academic success"
      />

      {/* Facilities Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <AnimatedSection>
            <SectionHeading
              title="Our Campus Facilities"
              subtitle="Everything you need for an enriching educational experience"
            />
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.08}>
            {facilities.map((facility) => (
              <StaggerItem key={facility.id} animation="scale">
                <FacilityCard
                  title={facility.title}
                  description={facility.description}
                  image={facility.image}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Additional Info */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto">
          <StaggerContainer className="grid md:grid-cols-2 gap-8" staggerDelay={0.15}>
            <StaggerItem>
              <motion.div 
                className="bg-card rounded-2xl p-8 shadow-card border border-border/50 h-full"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-4">Campus Highlights</h3>
                <ul className="space-y-3 text-muted-foreground">
                  {[
                    '10-acre green campus with modern architecture',
                    'Wi-Fi enabled campus for seamless connectivity',
                    '24/7 security with CCTV surveillance',
                    'Medical facility available on campus',
                    'Amphitheater for cultural events',
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </StaggerItem>
            <StaggerItem>
              <motion.div 
                className="bg-card rounded-2xl p-8 shadow-card border border-border/50 h-full"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-4">Student Services</h3>
                <ul className="space-y-3 text-muted-foreground">
                  {[
                    'Career counseling and placement assistance',
                    'Academic mentorship programs',
                    'Financial aid and scholarship guidance',
                    'International student support',
                    'Alumni network and industry connections',
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>
    </main>
  );
};

export default Facilities;
