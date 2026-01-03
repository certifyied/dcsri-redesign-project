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
    description: 'Commitment to providing the highest quality education through innovative teaching methods.',
    icon: Award,
  },
  {
    title: 'Integrity & Ethics',
    description: 'Upholding moral values and ethical conduct in all aspects of education and administration.',
    icon: Heart,
  },
  {
    title: 'Innovation',
    description: 'Encouraging creative thinking and research to solve real-world challenges.',
    icon: BookOpen,
  },
  {
    title: 'Inclusivity',
    description: 'Creating an inclusive environment where every student can thrive and succeed.',
    icon: Users,
  },
];

const About = () => {
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
                Building Tomorrow's Leaders Today
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Dynamic Centre for Studies & Research Institute (DCSRI) was established with a vision to 
                provide world-class education accessible to all. Over the years, we have grown into a 
                premier institution known for academic rigor, innovative research, and holistic development.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our institution combines the best of traditional values with modern pedagogical approaches. 
                We believe in nurturing not just academically proficient individuals but well-rounded 
                personalities ready to make meaningful contributions to society.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With state-of-the-art facilities, experienced faculty, and a student-centric approach, 
                DCSRI continues to set benchmarks in higher education.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="slideRight" delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                <motion.div 
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div 
                    className="bg-primary text-primary-foreground p-6 rounded-xl"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-4xl font-bold"><CountUp value={7} suffix="+" /></p>
                    <p className="text-sm text-primary-foreground/80">Years of Excellence</p>
                  </motion.div>
                  <motion.div 
                    className="bg-secondary p-6 rounded-xl"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-4xl font-bold text-foreground"><CountUp value={5000} suffix="+" /></p>
                    <p className="text-sm text-muted-foreground">Alumni Network</p>
                  </motion.div>
                </motion.div>
                <motion.div 
                  className="space-y-4 mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <motion.div 
                    className="bg-secondary p-6 rounded-xl"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-4xl font-bold text-foreground"><CountUp value={50} suffix="+" /></p>
                    <p className="text-sm text-muted-foreground">Expert Faculty</p>
                  </motion.div>
                  <motion.div 
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
              <motion.div 
                className="bg-card rounded-2xl p-8 shadow-card border border-border/50 h-full"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Eye className="w-8 h-8 text-primary-foreground" />
                </motion.div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be a leading institution of higher learning recognized globally for academic excellence, 
                  innovative research, and producing graduates who are ethical, socially responsible, and 
                  capable of contributing positively to the advancement of society.
                </p>
              </motion.div>
            </StaggerItem>
            
            {/* Mission */}
            <StaggerItem>
              <motion.div 
                className="bg-card rounded-2xl p-8 shadow-card border border-border/50 h-full"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-6"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Target className="w-8 h-8 text-accent-foreground" />
                </motion.div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <ul className="text-muted-foreground space-y-3">
                  {[
                    'Provide quality education that meets global standards',
                    'Foster innovation and research excellence',
                    'Develop ethical and socially responsible citizens',
                    'Create industry-academia partnerships for practical learning',
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

      {/* Leadership */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <AnimatedSection>
            <SectionHeading
              title="Our Leadership"
              subtitle="Meet the visionaries guiding our institution towards excellence"
            />
          </AnimatedSection>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {leadership.map((person, index) => (
              <StaggerItem key={index} animation="scale">
                <motion.div 
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
          
          {/* Accreditations */}
          <AnimatedSection delay={0.3}>
            <motion.div 
              className="mt-16 bg-card rounded-2xl p-8 shadow-card border border-border/50"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Accreditations & Recognitions</h3>
              <StaggerContainer className="flex flex-wrap justify-center gap-8 items-center" staggerDelay={0.1}>
                {['ISO Certified', 'Mitsubishi Electric Authorized'].map((item, index) => (
                  <StaggerItem key={index} animation="scale">
                    <motion.div 
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
