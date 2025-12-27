import { ClipboardList, FileCheck, CreditCard, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import Timeline from '@/components/ui/Timeline';
import ContactForm from '@/components/forms/ContactForm';
import AnimatedSection from '@/components/animations/AnimatedSection';
import StaggerContainer from '@/components/animations/StaggerContainer';
import StaggerItem from '@/components/animations/StaggerItem';
import { courses } from '@/data/courses';

const admissionSteps = [
  {
    title: 'Online Application',
    description: 'Fill out the online application form with accurate personal and academic details.',
    icon: ClipboardList,
  },
  {
    title: 'Document Submission',
    description: 'Upload required documents including mark sheets, certificates, and ID proof.',
    icon: FileCheck,
  },
  {
    title: 'Fee Payment',
    description: 'Complete the admission fee payment through our secure online payment gateway.',
    icon: CreditCard,
  },
  {
    title: 'Confirmation',
    description: 'Receive admission confirmation and welcome kit with all necessary information.',
    icon: CheckCircle,
  },
];

const Admission = () => {
  return (
    <main className="overflow-hidden">
      <PageHero
        title="Admission"
        subtitle="Begin your journey to success. Apply now and join the DCSRI family."
      />

      {/* Admission Process */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <AnimatedSection>
            <SectionHeading
              title="Admission Process"
              subtitle="Simple steps to secure your seat at DCSRI"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="max-w-3xl mx-auto">
              <Timeline items={admissionSteps} />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Eligibility */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto">
          <AnimatedSection>
            <SectionHeading
              title="Eligibility Criteria"
              subtitle="Check if you meet the requirements for your desired program"
            />
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
            {courses.map((course) => (
              <StaggerItem key={course.id}>
                <motion.div 
                  className="bg-card rounded-xl p-6 shadow-card border border-border/50"
                  whileHover={{ y: -5, boxShadow: '0 20px 40px -12px rgba(10, 26, 68, 0.15)' }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold text-foreground mb-3">{course.shortName}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{course.title}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Duration:</strong> {course.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Eligibility:</strong> {course.eligibility}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Application Form */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection animation="slideLeft">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Apply Now</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Start Your Application
              </h2>
              <p className="text-muted-foreground mb-6">
                Fill out the form to begin your admission process. Our admissions team will 
                contact you within 24-48 hours to guide you through the next steps.
              </p>
              <div className="space-y-4">
                {[
                  'Quick and easy application process',
                  'Dedicated support throughout admission',
                  'Scholarship opportunities available',
                  'Flexible payment options',
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="text-muted-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slideRight" delay={0.2}>
              <motion.div 
                className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border/50"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold text-foreground mb-6">Application Form</h3>
                <ContactForm showCourse={true} />
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Admission;
