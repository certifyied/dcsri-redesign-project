import { useEffect } from 'react';
import { Target, Eye, Award, Users, BookOpen, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import InfoCard from '@/components/ui/InfoCard';
import AnimatedSection from '@/components/animations/AnimatedSection';
import StaggerContainer from '@/components/animations/StaggerContainer';
import StaggerItem from '@/components/animations/StaggerItem';
import CountUp from '@/components/animations/CountUp';
import aboutHero from '@/assets/about-hero.jpg';
import sajiImage from '@/assets/saji.jpg';
import christoImage from '@/assets/christo.jpg';
import joeImage from '@/assets/joe.jpg';

const leadership = [
  {
    name: 'Saji K Philip',
    role: 'Founder',
    image: sajiImage,
  },
  {
    name: 'Cristo S Kayyalakam',
    role: 'CEO',
    image: christoImage,
  },
  {
    name: 'Joe',
    role: 'CTO',
    image: joeImage,
  },
];

const values = [
  {
    title: 'Academic Excellence',
    description: 'World-class education through innovative, industry-driven teaching and the Best Automation Training in Kochi',
    icon: Award,
  },
  {
    title: 'Integrity & Ethics',
    description: 'Upholding ethical standards across education and administration',
    icon: Heart,
  },
  {
    title: 'Innovation',
    description: 'Research-driven creativity addressing real-world challenges',
    icon: BookOpen,
  },
  {
    title: 'Inclusivity',
    description: 'A supportive learning environment where every student thrives',
    icon: Users,
  },
];

const About = () => {
  useEffect(() => {
    // Update document title
    document.title = 'About DCSRI Institute | Best Automation Training in Kochi';
<<<<<<< HEAD
    
=======

>>>>>>> 62c9502 (initial commit)
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about DCSRI, a trusted institute offering the Best Automation Training in Kochi with industry-focused courses, expert trainers, and career support.');
    }
<<<<<<< HEAD
    
=======

>>>>>>> 62c9502 (initial commit)
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'About DCSRI Institute | Best Automation Training in Kochi');
    }
<<<<<<< HEAD
    
=======

>>>>>>> 62c9502 (initial commit)
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Learn about DCSRI, a trusted institute offering the Best Automation Training in Kochi with industry-focused courses, expert trainers, and career support.');
    }
<<<<<<< HEAD
    
=======

>>>>>>> 62c9502 (initial commit)
    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', 'About DCSRI Institute | Best Automation Training in Kochi');
    }
<<<<<<< HEAD
    
=======

>>>>>>> 62c9502 (initial commit)
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', 'Learn about DCSRI, a trusted institute offering the Best Automation Training in Kochi with industry-focused courses, expert trainers, and career support.');
    }
  }, []);

  return (
    <main className="overflow-hidden">
      <PageHero
        title="About Us"
        subtitle="Discover our journey of academic excellence and commitment to shaping future leaders"
        backgroundImage={aboutHero}
      />

      {/* Institution Overview */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slideLeft">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
<<<<<<< HEAD
                Building tomorrow's leaders today with the Best Automation Training in Kochi.
=======
                Building tomorrow's leaders today with the Best Automation Training in Kochi, Kerala
>>>>>>> 62c9502 (initial commit)
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Dynamic Centre for Studies & Research Institute (DCSRI) was founded with a clear vision to deliver world-class education that is accessible, practical, and future-focused. Over the years, DCSRI has evolved into a premier institution recognized for academic excellence, cutting-edge research, and comprehensive skill development.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Blending strong traditional values with modern, industry-oriented teaching methodologies, DCSRI emphasizes both academic mastery and real-world readiness. Our programs are designed to nurture confident, skilled professionals who are prepared to make meaningful contributions to society and the global workforce.
              </p>
              <p className="text-muted-foreground leading-relaxed">
<<<<<<< HEAD
                With state-of-the-art infrastructure, highly experienced faculty, and a student-centric learning environment, DCSRI has earned its reputation as a trusted destination for higher education and professional training. We are especially proud to be recognized for offering the Best Automation Training in Kochi, equipping learners with in-demand skills aligned with current industry standards.
=======
                With state-of-the-art infrastructure, highly experienced faculty, and a student-centric learning environment, DCSRI has earned its reputation as a trusted destination for higher education and professional training. In addition to being recognized for offering the Best Automation Training in Kochi, Kerala, DCSRI also collaborates closely with industry leaders as a Robotics automation company in Kerala and a trusted Factory automation system integrator in Kerala, ensuring that students gain practical exposure to real industrial projects and advanced automation technologies aligned with current industry standards.
>>>>>>> 62c9502 (initial commit)
              </p>
            </AnimatedSection>
            <AnimatedSection animation="slideRight" delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
<<<<<<< HEAD
                <motion.div 
=======
                <motion.div
>>>>>>> 62c9502 (initial commit)
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
<<<<<<< HEAD
                  <motion.div 
=======
                  <motion.div
>>>>>>> 62c9502 (initial commit)
                    className="bg-primary text-primary-foreground p-6 rounded-xl"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-4xl font-bold"><CountUp value={7} suffix="+" /></p>
                    <p className="text-sm text-primary-foreground/80">Years of Excellence</p>
                  </motion.div>
<<<<<<< HEAD
                  <motion.div 
=======
                  <motion.div
>>>>>>> 62c9502 (initial commit)
                    className="bg-secondary p-6 rounded-xl"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-4xl font-bold text-foreground"><CountUp value={1000} suffix="+" /></p>
                    <p className="text-sm text-muted-foreground">Alumni Network</p>
                  </motion.div>
                </motion.div>
<<<<<<< HEAD
                <motion.div 
=======
                <motion.div
>>>>>>> 62c9502 (initial commit)
                  className="space-y-4 mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
<<<<<<< HEAD
                  <motion.div 
=======
                  <motion.div
>>>>>>> 62c9502 (initial commit)
                    className="bg-secondary p-6 rounded-xl"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-4xl font-bold text-foreground"><CountUp value={10} suffix="+" /></p>
                    <p className="text-sm text-muted-foreground">Expert Faculty</p>
                  </motion.div>
<<<<<<< HEAD
                  <motion.div 
=======
                  <motion.div
>>>>>>> 62c9502 (initial commit)
                    className="bg-accent text-accent-foreground p-6 rounded-xl"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-4xl font-bold"><CountUp value={95} suffix="%" /></p>
                    <p className="text-sm">Placement Rate</p>
                  </motion.div>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto">
          <StaggerContainer className="grid md:grid-cols-2 gap-8" staggerDelay={0.15}>
            {/* Vision */}
            <StaggerItem>
<<<<<<< HEAD
              <motion.div 
=======
              <motion.div
>>>>>>> 62c9502 (initial commit)
                className="bg-card rounded-2xl p-8 shadow-card border border-border/50 h-full"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
<<<<<<< HEAD
                <motion.div 
=======
                <motion.div
>>>>>>> 62c9502 (initial commit)
                  className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Eye className="w-8 h-8 text-primary-foreground" />
                </motion.div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become a globally recognized institution of higher learning known for academic excellence, innovative research, and industry-aligned education, while producing ethical, socially responsible graduates. Through a strong focus on advanced technologies and skill-based learning, including delivering the Best Automation Training in Kochi, we aim to empower learners to contribute positively to societal progress and global development.
                </p>
              </motion.div>
            </StaggerItem>
<<<<<<< HEAD
            
            {/* Mission */}
            <StaggerItem>
              <motion.div 
=======

            {/* Mission */}
            <StaggerItem>
              <motion.div
>>>>>>> 62c9502 (initial commit)
                className="bg-card rounded-2xl p-8 shadow-card border border-border/50 h-full"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
<<<<<<< HEAD
                <motion.div 
=======
                <motion.div
>>>>>>> 62c9502 (initial commit)
                  className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-6"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Target className="w-8 h-8 text-accent-foreground" />
                </motion.div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <ul className="text-muted-foreground space-y-3">
                  {[
                    'Deliver high-quality education aligned with global academic and industry standards',
                    'Promote a culture of innovation, research, and continuous learning',
                    'Nurture ethical, socially responsible, and career-ready professionals',
                    'Strengthen industry–academia collaborations to provide hands-on, practical learning experiences, including offering the Best Automation Training in Kochi',
                  ].map((item, index) => (
<<<<<<< HEAD
                    <motion.li 
=======
                    <motion.li
>>>>>>> 62c9502 (initial commit)
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

      {/* Leadership */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <AnimatedSection>
            <SectionHeading
              title="Our Leadership"
              subtitle="Meet the visionaries shaping our journey toward excellence and industry leadership, driven by a passion for innovation and the Best Automation Training in Kochi."
            />
          </AnimatedSection>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {leadership.map((person, index) => (
              <StaggerItem key={index} animation="scale">
<<<<<<< HEAD
                <motion.div 
=======
                <motion.div
>>>>>>> 62c9502 (initial commit)
                  className="bg-card rounded-xl overflow-hidden shadow-card border border-border/50 text-center"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="aspect-square overflow-hidden">
                    <motion.img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-foreground">{person.name}</h3>
                    <p className="text-accent text-sm">{person.role}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto">
          <AnimatedSection>
            <SectionHeading
              title="Our Core Values"
              subtitle="The principles that guide everything we do"
            />
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {values.map((value, index) => (
              <StaggerItem key={index}>
                <InfoCard
                  title={value.title}
                  description={value.description}
                  icon={value.icon}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
<<<<<<< HEAD
          
          {/* Accreditations */}
          <AnimatedSection delay={0.3}>
            <motion.div 
=======

          {/* Accreditations */}
          <AnimatedSection delay={0.3}>
            <motion.div
>>>>>>> 62c9502 (initial commit)
              className="mt-16 bg-card rounded-2xl p-8 shadow-card border border-border/50"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Accreditations & Recognitions</h3>
              <StaggerContainer className="flex flex-wrap justify-center gap-8 items-center" staggerDelay={0.1}>
                {['ISO Certified', 'Mitsubishi Electric Authorized'].map((item, index) => (
                  <StaggerItem key={index} animation="scale">
<<<<<<< HEAD
                    <motion.div 
=======
                    <motion.div
>>>>>>> 62c9502 (initial commit)
                      className="text-center"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={`w-20 h-20 ${index % 2 === 0 ? 'bg-primary/10' : 'bg-accent/10'} rounded-full flex items-center justify-center mx-auto mb-3`}>
                        <Award className={`w-10 h-10 ${index % 2 === 0 ? 'text-primary' : 'text-accent'}`} />
                      </div>
                      <p className="text-sm font-medium text-foreground">{item}</p>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default About;
