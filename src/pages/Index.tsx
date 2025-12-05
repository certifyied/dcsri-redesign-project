import { Link } from 'react-router-dom';
import { GraduationCap, Users, BookOpen, Award, Building, Lightbulb, Target, Heart } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import InfoCard from '@/components/ui/InfoCard';
import CourseCard from '@/components/ui/CourseCard';
import FacilityCard from '@/components/ui/FacilityCard';
import heroCampus from '@/assets/hero-campus.jpg';
import { courses } from '@/data/courses';
import { facilities } from '@/data/facilities';
import { galleryImages } from '@/data/gallery';

const whyChooseUs = [
  {
    title: 'Experienced Faculty',
    description: 'Learn from highly qualified professors with years of industry and academic experience.',
    icon: Users,
  },
  {
    title: 'Modern Curriculum',
    description: 'Updated syllabus aligned with industry requirements and global academic standards.',
    icon: BookOpen,
  },
  {
    title: 'Placement Support',
    description: 'Dedicated placement cell ensuring excellent career opportunities for graduates.',
    icon: Award,
  },
  {
    title: 'State-of-Art Infrastructure',
    description: 'Modern classrooms, labs, and facilities designed for optimal learning environment.',
    icon: Building,
  },
  {
    title: 'Research Opportunities',
    description: 'Encouraging innovation and research through dedicated programs and funding.',
    icon: Lightbulb,
  },
  {
    title: 'Holistic Development',
    description: 'Focus on overall personality development through extracurricular activities.',
    icon: Heart,
  },
];

const Index = () => {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <PageHero
        title="Dynamic Centre for Studies & Research Institute"
        subtitle="Empowering students through academic excellence and value-based education. Join us in shaping a brighter future."
        backgroundImage={heroCampus}
        size="large"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/admission" className="btn-accent">
            Apply for Admission
          </Link>
          <Link to="/about" className="border-2 border-primary-foreground text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary-foreground hover:text-primary transition-all duration-200">
            Explore Programs
          </Link>
        </div>
      </PageHero>

      {/* About Highlight */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">About DCSRI</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Excellence in Education Since Establishment
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Dynamic Centre for Studies & Research Institute (DCSRI) is dedicated to providing quality education 
                that nurtures intellectual growth, ethical values, and professional skills. Our institution combines 
                traditional values with modern teaching methodologies to create future leaders.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                With a focus on holistic development, we offer a wide range of undergraduate and postgraduate programs 
                designed to meet the evolving demands of the industry and society.
              </p>
              <Link to="/about" className="btn-primary inline-flex items-center gap-2">
                Learn More About Us
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-hover">
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80"
                  alt="Students at DCSRI"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-medium">
                <p className="text-4xl font-bold">15+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Our Academic Programs"
            subtitle="Choose from our range of industry-relevant courses designed to shape your future"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                title={course.shortName}
                duration={course.duration}
                eligibility={course.eligibility}
                description={course.description}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/academics" className="btn-outline">
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Why Choose DCSRI?"
            subtitle="Discover what makes us the preferred choice for quality education"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <InfoCard
                key={index}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Preview */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Our Facilities"
            subtitle="World-class infrastructure supporting your academic journey"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.slice(0, 4).map((facility) => (
              <FacilityCard
                key={facility.id}
                title={facility.title}
                description={facility.description}
                image={facility.image}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/facilities" className="btn-outline">
              Explore All Facilities
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Campus Gallery"
            subtitle="A glimpse into life at DCSRI"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.slice(0, 6).map((image, index) => (
              <div
                key={index}
                className="aspect-[4/3] rounded-xl overflow-hidden group"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/gallery" className="btn-outline">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-primary" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>
        <div className="container-custom mx-auto px-4 md:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Take the first step towards a successful career. Apply now and become part of the DCSRI family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admission" className="btn-accent">
              Apply Now
            </Link>
            <Link to="/contact" className="border-2 border-primary-foreground text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary-foreground hover:text-primary transition-all duration-200">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
