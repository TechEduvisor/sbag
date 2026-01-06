import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, FacebookIcon, TerminalSquareIcon, Grid2X2 } from 'lucide-react';

const Footer = () => {
 
 const serviceLinks = [
  { 
    name: 'Bookkeeping & Accounting', 
    path: '/services/bookkeeping',
    
  },
  { 
    name: 'Payroll Services', 
    path: '/services/payroll',

  },
  { 
    name: 'Taxation', 
    path: '/services/taxation',
     },
  { 
    name: 'US Auditing Support', 
    path: '/services/auditing',
  },
  { 
    name: 'Financial Reporting', 
    path: '/services/financial-reporting',
    },
  { 
    name: 'Virtual CFO', 
    path: '/services/virtual-cfo',
   },
  { 
    name: 'Financial Modeling', 
    path: '/services/financial-modeling',
 
  },
];
  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'Blog', path: '/blog' },
    // { name: 'Careers', path: '/careers' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <footer className="bg-secondary text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
             <div className="hidden md:block">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-[140px] h-12 rounded-md"
              />

              <p className="text-xs mb-2 pt-2 ">
                Accounting Excellence
              </p>
            </div>
            <p className="text-white/80 mb-6">
              Your trustedpartner for bookkeeping, accounting, and audit support services with experienced US GAAP professionals.
            </p>
           <div className="flex space-x-4">
  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/company/s-b-a-g-co-llp/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 bg-white rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
  >
    <img
      src="https://img.icons8.com/color/48/linkedin.png"
      alt="LinkedIn"
      className="w-6 h-6"
    />
  </a>
  <a
    href="https://www.instagram.com/sbagllp/" 
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 bg-white rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
  >
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwKLBenCOp313r8BRIkKyQOATrSLe9bksJXw&s"
      alt="Instagram"
      className="w-6 h-6"
    />
  </a>

  {/* Facebook */}
  <a
    href="https://www.facebook.com/sbagllp"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 bg-white rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
  >
    <img
      src="https://img.icons8.com/color/48/facebook-new.png"
      alt="Facebook"
      className="w-6 h-6"
    />
  </a>

  {/* Microsoft Teams */}
  <a
    href="https://teams.microsoft.com/l/chat/0/0?users=sara@sbagllp.com"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 bg-white rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
  >
    <img
      src="https://img.icons8.com/color/48/microsoft-teams.png"
      alt="Microsoft Teams"
      className="w-6 h-6"
    />
  </a>
</div>

          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-6 text-accent">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/80 hover:text-accent transition-colors duration-300 inline-block hover:translate-x-1 transform"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-6 text-accent">Our Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-white/80 hover:text-accent transition-colors duration-300 inline-block hover:translate-x-1 transform"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

       

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-6 text-accent">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone size={20} className="text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/80">(+91) 98998-80973</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={20} className="text-accent mt-1 flex-shrink-0" />
                <div>
                  <a
                    href="mailto:accountants@sbagllp.com"
                    className="text-white/80 hover:text-accent transition-colors"
                  >
                    accountants@sbagllp.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-accent mt-1 flex-shrink-0" />
                <div className="text-white/80">
                  <p className="mb-2">3906/15 1st Floor, Kanhiya Nagar, Tri Nagar Delhi – 110035</p>
                    </div>
              </li> <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-accent mt-1 flex-shrink-0" />
                <div className="text-white/80">
                  <p>Flat 602, Anand Lakshmi Apartment, Shastri Nagar, Kanpur – 208005</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © 2024 S B A G & Co. LLP. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-white/60 hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-white/60 hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
