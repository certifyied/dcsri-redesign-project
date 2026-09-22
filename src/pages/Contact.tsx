import { useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Linkedin, Instagram } from 'lucide-react';
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
    details: ['+91 92495 02162', '+91 73063 11472'],
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['info@dcsri.org', 'admissions@dcsri.org'],
  },
  {
    icon: Linkedin,
    title: 'LinkedIn',
    details: ['DCSRI Official LinkedIn'],
    link: 'https://www.linkedin.com/company/dynamic-centre-system-research-institute/',
  },
  {
    icon: Instagram,
    title: 'Instagram',
    details: ['@dcs_research_institute'],
    link: 'https://www.instagram.com/dcs_research_institute',
  },
  {
    icon: Clock,
    title: 'Office Hours',
    details: ['Mon - Fri: 9:00 AM - 5:00 PM', 'Sat: 9:00 AM - 1:00 PM'],
  },
];

const Contact = () => {
  useEffect(() => {
    // Update document title
    document.title = 'Contact DCSRI | Best Automation Training in Kochi | Support & Queries';

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Get in touch with DCSRI for automation course details, career guidance, and support. Trusted for the Best Automation Training in Kochi with industry-focused learning.');
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Contact DCSRI | Best Automation Training in Kochi | Support & Queries');
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Get in touch with DCSRI for automation course details, career guidance, and support. Trusted for the Best Automation Training in Kochi with industry-focused learning.');
    }

    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', 'Contact DCSRI | Best Automation Training in Kochi | Support & Queries');
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', 'Get in touch with DCSRI for automation course details, career guidance, and support. Trusted for the Best Automation Training in Kochi with industry-focused learning.');
    }
  }, []);

  return (
    <main className="overflow-hidden">
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with us for any queries or information — your trusted destination for Best Automation Training in Kochi."
      />

      {/* Contact Info & Form */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Contact Cards Grid */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full">
              <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4" staggerDelay={0.08}>
                {contactInfo.map((info, index) => (
                  <StaggerItem key={index}>
                    <motion.div
                      className="bg-card rounded-xl p-5 shadow-card border border-border/50 h-full flex items-center"
                      whileHover={{ y: -3, boxShadow: '0 12px 24px -8px rgba(10, 26, 68, 0.12)' }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center gap-4 w-full">
                        <motion.div
                          className="w-11 h-11 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0"
                          whileHover={{ scale: 1.08 }}
                          transition={{ duration: 0.2 }}
                        >
                          <info.icon className="w-5 h-5 text-accent" />
                        </motion.div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-1">{info.title}</h3>
                          {info.details.map((detail, idx) => {
                            const isPhone = info.title === 'Phone';
                            const isEmail = info.title === 'Email';
                            const isExternalLink = info.title === 'LinkedIn' || info.title === 'Instagram';
                            const phoneNumber = detail.replace(/\s+/g, '');
                            const telLink = isPhone ? (phoneNumber.startsWith('+91') ? `tel:${phoneNumber}` : `tel:+91${phoneNumber}`) : null;

                            if (isEmail) {
                              return (
                                <a
                                  key={idx}
                                  href={`mailto:${detail}`}
                                  className="text-foreground text-sm font-medium hover:text-accent transition-colors block truncate"
                                >
                                  {detail}
                                </a>
                              );
                            }

                            if (isExternalLink && info.link) {
                              return (
                                <a
                                  key={idx}
                                  href={info.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-primary text-sm font-medium hover:text-accent transition-colors block truncate"
                                >
                                  {detail}
                                </a>
                              );
                            }

                            return isPhone && telLink ? (
                              <a
                                key={idx}
                                href={telLink}
                                className="text-foreground text-sm font-medium hover:text-accent transition-colors block"
                              >
                                {detail}
                              </a>
                            ) : (
                              <p key={idx} className="text-foreground text-sm font-medium leading-snug">
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
            </div>

            {/* Right Column: Contact Form */}
            <AnimatedSection animation="slideRight" delay={0.2} className="lg:col-span-7">
              <motion.div
                className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border/50 h-full"
                whileHover={{ y: -2 }}
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
              subtitle="Visit our campus at 52/3105, Near SBI Bank, NH Bypass, Vyttila, Kochi, Kerala 682019"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <motion.div
              className="rounded-2xl overflow-hidden shadow-card border border-border/50"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.606594635048!2d76.3177194!3d9.9666521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08730a57710bd7%3A0xf0c2f13466853ca9!2sIndustrial%20Automation%20Training%20Institute%20%7C%20DCSRI!5e0!3m2!1sen!2sin!4v1790057365420!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
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
