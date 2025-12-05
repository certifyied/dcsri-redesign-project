import { ClipboardList, FileCheck, CreditCard, CheckCircle } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import Timeline from '@/components/ui/Timeline';
import ContactForm from '@/components/forms/ContactForm';
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

const feeStructure = [
  { course: 'B.Com (Bachelor of Commerce)', tuition: '₹35,000', other: '₹5,000', total: '₹40,000' },
  { course: 'BBA (Bachelor of Business Administration)', tuition: '₹45,000', other: '₹5,000', total: '₹50,000' },
  { course: 'BCA (Bachelor of Computer Applications)', tuition: '₹50,000', other: '₹5,000', total: '₹55,000' },
  { course: 'M.Com (Master of Commerce)', tuition: '₹40,000', other: '₹5,000', total: '₹45,000' },
];

const Admission = () => {
  return (
    <main>
      <PageHero
        title="Admission"
        subtitle="Begin your journey to success. Apply now and join the DCSRI family."
      />

      {/* Admission Process */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Admission Process"
            subtitle="Simple steps to secure your seat at DCSRI"
          />
          <div className="max-w-3xl mx-auto">
            <Timeline items={admissionSteps} />
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Eligibility Criteria"
            subtitle="Check if you meet the requirements for your desired program"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {courses.map((course) => (
              <div key={course.id} className="bg-card rounded-xl p-6 shadow-card border border-border/50">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Fee Structure"
            subtitle="Transparent and affordable fee structure for all programs"
          />
          <div className="overflow-x-auto">
            <table className="w-full bg-card rounded-xl shadow-card border border-border/50 overflow-hidden">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="px-6 py-4 text-left font-semibold">Course</th>
                  <th className="px-6 py-4 text-center font-semibold">Tuition Fee</th>
                  <th className="px-6 py-4 text-center font-semibold">Other Fees</th>
                  <th className="px-6 py-4 text-center font-semibold">Total (Per Year)</th>
                </tr>
              </thead>
              <tbody>
                {feeStructure.map((fee, index) => (
                  <tr key={index} className="border-t border-border">
                    <td className="px-6 py-4 text-foreground font-medium">{fee.course}</td>
                    <td className="px-6 py-4 text-center text-muted-foreground">{fee.tuition}</td>
                    <td className="px-6 py-4 text-center text-muted-foreground">{fee.other}</td>
                    <td className="px-6 py-4 text-center text-accent font-bold">{fee.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4 text-center">
            * Fees are subject to change. Scholarships available for meritorious students.
          </p>
        </div>
      </section>

      {/* Application Form */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Apply Now</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Start Your Application
              </h2>
              <p className="text-muted-foreground mb-6">
                Fill out the form to begin your admission process. Our admissions team will 
                contact you within 24-48 hours to guide you through the next steps.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-muted-foreground">Quick and easy application process</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-muted-foreground">Dedicated support throughout admission</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-muted-foreground">Scholarship opportunities available</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-muted-foreground">Flexible payment options</span>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border/50">
              <h3 className="text-xl font-bold text-foreground mb-6">Application Form</h3>
              <ContactForm showCourse={true} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Admission;
