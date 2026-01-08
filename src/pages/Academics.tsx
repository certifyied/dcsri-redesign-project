import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Download, BookOpen, Users, Award, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import InfoCard from '@/components/ui/InfoCard';
import AnimatedSection from '@/components/animations/AnimatedSection';
import StaggerContainer from '@/components/animations/StaggerContainer';
import StaggerItem from '@/components/animations/StaggerItem';
import academicsHero from '@/assets/academics-hero.jpg';
import { courses } from '@/data/courses';

const academicApproach = [
  {
    title: 'Industry-Aligned Curriculum',
    description: 'Developed with industry experts for strong employability',
    icon: BookOpen,
  },
  {
    title: 'Experienced Faculty',
    description: 'Highly qualified professors with real-world expertise',
    icon: Users,
  },
  {
    title: 'Research Focus',
    description: 'Opportunities for academic research and publications',
    icon: Lightbulb,
  },
  {
    title: 'Skill Development',
    description: 'Hands-on training, workshops, and soft-skill enhancement',
    icon: Award,
  },
];

const Academics = () => {
  useEffect(() => {
    // Update document title
    document.title = 'Academics at DCSRI | Best Automation Training in Kochi';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore DCSRI\'s academic programs, industry-aligned courses, and expert faculty while experiencing the best automation training in Kochi for career success.');
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Academics at DCSRI | Best Automation Training in Kochi');
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Explore DCSRI\'s academic programs, industry-aligned courses, and expert faculty while experiencing the best automation training in Kochi for career success.');
    }
    
    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', 'Academics at DCSRI | Best Automation Training in Kochi');
    }
    
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', 'Explore DCSRI\'s academic programs, industry-aligned courses, and expert faculty while experiencing the best automation training in Kochi for career success.');
    }
  }, []);

  return (
    <main className="overflow-hidden">
      <PageHero
        title="Academics"
        subtitle="Discover our comprehensive range of programs designed to prepare you for success"
        backgroundImage={academicsHero}
      />

      {/* Programs Overview */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Programs</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Explore career-focused programs with the Best Automation Training in Kochi for a successful future.
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-6">
              Shaping Careers Through Quality Education
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              DCSRI offers a diverse range of undergraduate and postgraduate programs with a strong focus on industry relevance, delivering the Best Automation Training in Kochi through a blend of in-depth theoretical knowledge and hands-on practical skills.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Courses List */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto">
          <AnimatedSection>
            <SectionHeading
              title="Our Courses"
              subtitle="Choose the right program to launch your career"
            />
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-2 gap-8" staggerDelay={0.15}>
            {courses.map((course) => (
              <StaggerItem key={course.id}>
                <motion.div 
                  className="bg-card rounded-xl p-6 shadow-card border border-border/50"
                  whileHover={{ y: -5, boxShadow: '0 20px 40px -12px rgba(10, 26, 68, 0.15)' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start gap-4">
                    <motion.div 
                      className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <BookOpen className="w-8 h-8 text-accent" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2">{course.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{course.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
                          Duration: {course.duration}
                        </span>
                        <span className="bg-accent/10 text-accent px-3 py-1 rounded-full">
                          Eligibility: {course.eligibility}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Academic Approach */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <AnimatedSection>
            <SectionHeading
              title="Our Academic Approach"
              subtitle="What sets our education apart"
            />
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {academicApproach.map((item, index) => (
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

      {/* Academic Calendar & Syllabus */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto">
          <AnimatedSection>
            <motion.div 
              className="bg-card rounded-2xl p-8 md:p-12 shadow-card border border-border/50"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <AnimatedSection animation="slideLeft">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Download Academic Resources
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Access our detailed syllabus, academic calendar, and essential resources to plan your academic journey with the Best Automation Training in Kochi.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <motion.button 
                      className="btn-primary inline-flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Download className="w-5 h-5" />
                      Download Syllabus
                    </motion.button>
                    <motion.button 
                      className="btn-outline inline-flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Download className="w-5 h-5" />
                      Academic Calendar
                    </motion.button>
                  </div>
                </AnimatedSection>
                <AnimatedSection animation="slideRight" delay={0.2}>
                  <div className="bg-primary/5 rounded-xl p-6">
                    <h4 className="font-semibold text-foreground mb-4">Quick Information</h4>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      {[
                        { label: 'Academic Year Begins', value: 'July' },
                        { label: 'First Semester Exams', value: 'November' },
                        { label: 'Second Semester Exams', value: 'April' },
                        { label: 'Summer Vacation', value: 'May - June' },
                      ].map((item, index) => (
                        <motion.li 
                          key={index}
                          className="flex justify-between"
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <span>{item.label}</span>
                          <span className="text-foreground font-medium">{item.value}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary relative overflow-hidden">
        <motion.div 
          className="absolute top-0 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="container-custom mx-auto px-4 md:px-8 text-center relative z-10">
          <AnimatedSection animation="fadeUp">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Ready to Start Your Academic Journey?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Join DCSRI and take the first step towards a successful career in your chosen field.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link to="/contact" className="btn-accent inline-block">
                Contact Us
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default Academics;
