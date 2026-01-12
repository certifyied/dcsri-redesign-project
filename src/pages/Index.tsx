import { Link } from 'react-router-dom';
import { Shield, Wrench, Calendar, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import InfoCard from '@/components/ui/InfoCard';
import CourseCard from '@/components/ui/CourseCard';
import FacilityCard from '@/components/ui/FacilityCard';
import AnimatedSection from '@/components/animations/AnimatedSection';
import StaggerContainer from '@/components/animations/StaggerContainer';
import StaggerItem from '@/components/animations/StaggerItem';
import CountUp from '@/components/animations/CountUp';
import heroBackground from '@/assets/DCSRI/banner.jpg';
import aboutDCSRIImage from '@/assets/DCSRI/new1.jpg';
import { courses } from '@/data/courses';
import { facilities } from '@/data/facilities';
import { galleryImages } from '@/data/gallery';

const whyChooseUs = [
  {
    title: 'Authorized Excellence (ISO Certified & Industry Recognized Certification)',
    description: 'DCSRI is your ISO-certified, authorized Mitsubishi Electric channel partner, delivering world-class industrial automation solutions with expert technical support, genuine products, and proven reliability across all sectors.',
    icon: Shield,
  },
  {
    title: 'Live Industrial Project Training',
    description: 'Work on real industrial projects—not just theory—and gain hands-on shop-floor experience with live automation systems, preparing you for immediate industry readiness.',
    icon: Wrench,
  },
  {
    title: 'Flexible Lab Access (Mon–Sat | 10:00 AM – 5:30 PM)',
    description: 'Practice at your own pace with dedicated lab access from Monday to Saturday—master panel wiring techniques and develop IoT-based automation projects with hands-on equipment and real-time guidance.',
    icon: Calendar,
  },
  {
    title: 'Expert Mentorship and Support',
    description: 'Learn from industry professionals with 10+ years of hands-on expertise and receive comprehensive post-training support for career guidance, technical queries, and live project assistance.',
    icon: GraduationCap,
  },
];

const Index = () => {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <PageHero
        title="DCSRI"
        subtitle="Academic excellence meets industrial automation, preparing students for a brighter future with the Best Automation Training in Kochi."
        backgroundImage={heroBackground}
        size="large"
        titleClassName="text-7xl md:text-8xl lg:text-9xl font-extrabold text-primary-foreground mb-6"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link to="/contact" className="btn-accent inline-block">
              Get in Touch
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link to="/about" className="border-2 border-primary-foreground text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary-foreground hover:text-primary transition-all duration-200 inline-block">
              Explore Programs
            </Link>
          </motion.div>
        </div>
      </PageHero>

      {/* About Highlight */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slideLeft">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">About DCSRI</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
              Master the intelligence behind modern machines with the Best Automation Training in Kochi.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
              Ever wondered what truly powers the massive, high-speed machines in today's factories? At DCSRI (Dynamic Control Systems Research Institute), we don't just teach the future of automation—we empower you to build it. Move beyond being a bystander and become an industry-ready expert who understands the intelligent systems driving modern manufacturing through the Best Automation Training in Kochi.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
              As an Authorized Channel Partner of Mitsubishi Electric, we seamlessly bridge the gap between academic theory and hands-on industrial expertise, delivering the Best Automation Training in Kochi for future-focused professionals.
              </p>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link to="/about" className="btn-primary inline-flex items-center gap-2">
                  Learn More
                  <motion.svg 
                    className="w-4 h-4" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    whileHover={{ x: 4 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </motion.svg>
                </Link>
              </motion.div>
            </AnimatedSection>
            <AnimatedSection animation="slideRight" delay={0.2}>
              <div className="relative">
                <motion.div 
                  className="aspect-[4/3] rounded-2xl overflow-hidden shadow-hover"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={aboutDCSRIImage}
                    alt="Industrial Automation Training Facility"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div 
                  className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-medium"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <p className="text-4xl font-bold"><CountUp value={7} suffix="+" /></p>
                  <p className="text-sm">Years of Excellence</p>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto">
          <AnimatedSection>
            <SectionHeading
              title="Our Academic Programs"
              subtitle="Choose from our range of industry-relevant courses crafted to shape your future with the Best Automation Training in Kochi."
            />
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {courses.map((course) => (
              <StaggerItem key={course.id}>
                <CourseCard
                  title={course.title}
                  duration={course.duration}
                  eligibility={course.eligibility}
                  description={course.description}
                  badge={course.badge}
                  image={course.image}
                  prospectusPdf={course.prospectusPdf}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
          <AnimatedSection delay={0.4} className="text-center mt-10">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link to="/academics" className="btn-outline inline-block">
                View All Programs
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <AnimatedSection>
            <SectionHeading
              title="Why Choose DCSRI?"
              subtitle="Discover what makes us the preferred choice for quality education"
            />
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch" staggerDelay={0.08}>
            {whyChooseUs.map((item, index) => (
              <StaggerItem key={index}>
                <InfoCard
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Facilities Preview */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto">
          <AnimatedSection>
            <SectionHeading
              title="Our Facilities"
              subtitle="World-class infrastructure supporting your academic journey through the Best Automation Training in Kochi."
            />
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {facilities.slice(0, 4).map((facility) => (
              <StaggerItem key={facility.id}>
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

      {/* Gallery Preview */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <AnimatedSection>
            <SectionHeading
              title="Campus Gallery"
              subtitle="A glimpse into life at DCSRI with the Best Automation Training in Kochi."
            />
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-4" staggerDelay={0.08}>
            {galleryImages.slice(0, 6).map((image, index) => (
              <StaggerItem key={index} animation="scale">
                <motion.div
                  className="aspect-[4/3] rounded-xl overflow-hidden group"
                  whileHover={{ y: -5 }}
                >
                  <motion.img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <AnimatedSection delay={0.4} className="text-center mt-10">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link to="/gallery" className="btn-outline inline-block">
                View Full Gallery
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-primary" />
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
            animate={{ 
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div 
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
            animate={{ 
              x: [0, -30, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
        <div className="container-custom mx-auto px-4 md:px-8 relative z-10 text-center">
          <AnimatedSection animation="fadeUp">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Begin Your Journey?
            </h2>
          </AnimatedSection>
          <AnimatedSection animation="fadeUp" delay={0.2}>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
              Take the first step towards a successful career. Apply now and become part of the DCSRI family.
            </p>
          </AnimatedSection>
          <AnimatedSection animation="fadeUp" delay={0.4}>
            <div className="flex justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link to="/contact" className="btn-accent inline-block">
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default Index;
