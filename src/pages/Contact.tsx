import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import ContactForm from '@/components/forms/ContactForm';
import AnimatedSection from '@/components/animations/AnimatedSection';
import StaggerContainer from '@/components/animations/StaggerContainer';
import StaggerItem from '@/components/animations/StaggerItem';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Address',
    details: ['52/3105, Near SBI Bank, NH Bypass, Vyttila', 'Kochi, Ernakulam Dist., Kerala, 682019'],
  },
  {
    icon: Phone,
    title: 'Phone',
    details: ['+91 85473 27855', '94977 07855'],
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['info@dcsri.org', 'admissions@dcsri.org'],
  },
  {
    icon: Clock,
    title: 'Office Hours',
    details: ['Monday - Friday: 9:00 AM - 5:00 PM', 'Saturday: 9:00 AM - 1:00 PM'],
  },
];

const Contact = () => {
  return (
    <main className="overflow-hidden">
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with us for any queries or information"
      />

      {/* Contact Info & Form */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <StaggerContainer className="lg:col-span-1 space-y-6" staggerDelay={0.1}>
              {contactInfo.map((info, index) => (
                <StaggerItem key={index}>
                  <motion.div 
                    className="bg-card rounded-xl p-6 shadow-card border border-border/50"
                    whileHover={{ y: -5, boxShadow: '0 20px 40px -12px rgba(10, 26, 68, 0.15)' }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-start gap-4">
                      <motion.div 
                        className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <info.icon className="w-6 h-6 text-accent" />
                      </motion.div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                        {info.details.map((detail, idx) => {
                          // Make phone numbers clickable
                          const isPhone = info.title === 'Phone';
                          const phoneNumber = detail.replace(/\s+/g, '');
                          const telLink = isPhone ? (phoneNumber.startsWith('+91') ? `tel:${phoneNumber}` : `tel:+91${phoneNumber}`) : null;
                          
                          return isPhone && telLink ? (
                            <a 
                              key={idx} 
                              href={telLink}
                              className="text-muted-foreground text-sm hover:text-accent transition-colors block"
                            >
                              {detail}
                            </a>
                          ) : (
                            <p key={idx} className="text-muted-foreground text-sm">
                              {detail}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Contact Form */}
            <AnimatedSection animation="slideRight" delay={0.2} className="lg:col-span-2">
              <motion.div 
                className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border/50"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-2">Send Us a Message</h3>
                <p className="text-muted-foreground mb-6">
                  Have questions? Fill out the form below and we'll get back to you as soon as possible.
                </p>
                <ContactForm />
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto">
          <AnimatedSection>
            <SectionHeading
              title="Find Us"
              subtitle="Visit our campus and experience the DCSRI environment"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <motion.div 
              className="rounded-2xl overflow-hidden shadow-card border border-border/50"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5956947080564!2d77.58095661482186!3d12.934889090877793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15c8b0b0b0b0%3A0x0!2zMTLCsDU2JzA1LjYiTiA3N8KwMzUnMDEuNiJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="DCSRI Location"
                className="w-full"
              />
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default Contact;
