import { Target, Eye, Award, Users, BookOpen, Heart } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import InfoCard from '@/components/ui/InfoCard';
import aboutHero from '@/assets/about-hero.jpg';

const leadership = [
  {
    name: 'Dr. Rajesh Kumar',
    role: 'Chairman',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80',
  },
  {
    name: 'Dr. Priya Sharma',
    role: 'Principal',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80',
  },
  {
    name: 'Prof. Anil Mehta',
    role: 'Dean of Academics',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80',
  },
  {
    name: 'Dr. Sunita Patel',
    role: 'Head of Research',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80',
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
    <main>
      <PageHero
        title="About Us"
        subtitle="Discover our journey of academic excellence and commitment to shaping future leaders"
        backgroundImage={aboutHero}
      />

      {/* Institution Overview */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
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
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-primary text-primary-foreground p-6 rounded-xl">
                  <p className="text-4xl font-bold">15+</p>
                  <p className="text-sm text-primary-foreground/80">Years of Excellence</p>
                </div>
                <div className="bg-secondary p-6 rounded-xl">
                  <p className="text-4xl font-bold text-foreground">5000+</p>
                  <p className="text-sm text-muted-foreground">Alumni Network</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-secondary p-6 rounded-xl">
                  <p className="text-4xl font-bold text-foreground">50+</p>
                  <p className="text-sm text-muted-foreground">Expert Faculty</p>
                </div>
                <div className="bg-accent text-accent-foreground p-6 rounded-xl">
                  <p className="text-4xl font-bold">95%</p>
                  <p className="text-sm">Placement Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be a leading institution of higher learning recognized globally for academic excellence, 
                innovative research, and producing graduates who are ethical, socially responsible, and 
                capable of contributing positively to the advancement of society.
              </p>
            </div>
            
            {/* Mission */}
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
              <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <ul className="text-muted-foreground space-y-3">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span>Provide quality education that meets global standards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span>Foster innovation and research excellence</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span>Develop ethical and socially responsible citizens</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span>Create industry-academia partnerships for practical learning</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Our Leadership"
            subtitle="Meet the visionaries guiding our institution towards excellence"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((person, index) => (
              <div key={index} className="bg-card rounded-xl overflow-hidden shadow-card card-hover border border-border/50 text-center">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-foreground">{person.name}</h3>
                  <p className="text-accent text-sm">{person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditation & Values */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Our Core Values"
            subtitle="The principles that guide everything we do"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <InfoCard
                key={index}
                title={value.title}
                description={value.description}
                icon={value.icon}
              />
            ))}
          </div>
          
          {/* Accreditations */}
          <div className="mt-16 bg-card rounded-2xl p-8 shadow-card border border-border/50">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Accreditations & Recognitions</h3>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-10 h-10 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground">UGC Recognized</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-10 h-10 text-accent" />
                </div>
                <p className="text-sm font-medium text-foreground">NAAC Accredited</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-10 h-10 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground">ISO Certified</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-10 h-10 text-accent" />
                </div>
                <p className="text-sm font-medium text-foreground">AICTE Approved</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
