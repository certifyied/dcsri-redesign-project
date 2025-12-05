import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const quickLinks = [
  { name: 'About Us', path: '/about' },
  { name: 'Academics', path: '/academics' },
  { name: 'Admission', path: '/admission' },
  { name: 'Facilities', path: '/facilities' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

const courses = [
  { name: 'B.Com', path: '/academics' },
  { name: 'BBA', path: '/academics' },
  { name: 'BCA', path: '/academics' },
  { name: 'M.Com', path: '/academics' },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xl">D</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">DCSRI</h3>
                <p className="text-sm text-primary-foreground/70">Excellence in Education</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Dynamic Centre for Studies & Research Institute is committed to providing quality education 
              and nurturing future leaders through academic excellence and value-based learning.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Courses</h4>
            <ul className="space-y-3">
              {courses.map((course) => (
                <li key={course.name}>
                  <Link
                    to={course.path}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80 text-sm">
                  123 Education Street, Academic City, State - 123456
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">+91 98765 43210</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">info@dcsri.org</span>
              </li>
              <li className="flex gap-3">
                <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">Mon - Sat: 9:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom mx-auto px-4 md:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© {new Date().getFullYear()} DCSRI. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
