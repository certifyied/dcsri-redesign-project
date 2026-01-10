import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import dcsriLogo from '@/assets/dcsri_logo.png';

const quickLinks = [
  { name: 'About Us', path: '/about' },
  { name: 'Academics', path: '/academics' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

const Footer = () => {
  return (
    <footer className="bg-white text-blue-700">
      {/* Main Footer */}
      <div className="container-custom mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* About Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Link to="/" className="flex items-center">
                <img 
                  src={dcsriLogo}
                  alt="DCSRI Logo"
                  className="w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 object-contain scale-110"
                />
              </Link>
            </div>
            <p className="text-blue-600 text-sm leading-relaxed">
              Dynamic Centre for Studies & Research Institute is committed to providing quality education 
              and nurturing future leaders through academic excellence and value-based learning.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-all duration-200 text-blue-700">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-all duration-200 text-blue-700">
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/dcs_research_institute?igsh=MTV3bXdha3k1dnljeA==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-all duration-200 text-blue-700"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/110916597/admin/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B4zfSZZBgR6ub8Fnn0osTMw%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-all duration-200 text-blue-700"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-700">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-700">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-blue-600 text-sm">
                  52/3105, Near SBI Bank, NH Bypass, Vyttila, Kochi, Ernakulam Dist., Kerala, 682019
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+918547327855" className="text-blue-600 text-sm hover:text-blue-800 transition-colors">
                    +91 85473 27855
                  </a>
                  <a href="tel:+919497707855" className="text-blue-600 text-sm hover:text-blue-800 transition-colors">
                    94977 07855
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-blue-600 text-sm">info@dcsri.org</span>
              </li>
              <li className="flex gap-3">
                <Clock className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-blue-600 text-sm">Mon - Sat: 9:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-blue-200">
        <div className="container-custom mx-auto px-4 md:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-500">
            <p>© {new Date().getFullYear()} DCSRI. All rights reserved. Designed and developed by Fawas A Shemeer</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-blue-700 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-700 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
