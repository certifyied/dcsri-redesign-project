import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import FacilityCard from '@/components/ui/FacilityCard';
import { facilities } from '@/data/facilities';

const Facilities = () => {
  return (
    <main>
      <PageHero
        title="Facilities"
        subtitle="State-of-the-art infrastructure designed to support your academic success"
      />

      {/* Facilities Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Our Campus Facilities"
            subtitle="Everything you need for an enriching educational experience"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility) => (
              <FacilityCard
                key={facility.id}
                title={facility.title}
                description={facility.description}
                image={facility.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
              <h3 className="text-2xl font-bold text-foreground mb-4">Campus Highlights</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span>10-acre green campus with modern architecture</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span>Wi-Fi enabled campus for seamless connectivity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span>24/7 security with CCTV surveillance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span>Medical facility available on campus</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span>Amphitheater for cultural events</span>
                </li>
              </ul>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
              <h3 className="text-2xl font-bold text-foreground mb-4">Student Services</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span>Career counseling and placement assistance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span>Academic mentorship programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span>Financial aid and scholarship guidance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span>International student support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span>Alumni network and industry connections</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Facilities;
