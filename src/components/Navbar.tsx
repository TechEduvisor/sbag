import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  BookOpen,
  DollarSign,
  Calculator,
  Shield,
  FileText,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Industries", path: "/industries" },
    { name: "Blog & Insights", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const serviceLinks = [
    {
      name: "Bookkeeping & Accounting",
      path: "/services/bookkeeping",
      icon: BookOpen,
      description: "Comprehensive financial record management",
    },
    {
      name: "Payroll Services",
      path: "/services/payroll",
      icon: DollarSign,
      description: "Efficient payroll processing & compliance",
    },
    {
      name: "Taxation",
      path: "/services/taxation",
      icon: Calculator,
      description: "Expert tax planning & compliance",
    },
    {
      name: "US Auditing Support",
      path: "/services/auditing",
      icon: Shield,
      description: "Professional audit support services",
    },
    {
      name: "Financial Reporting",
      path: "/services/financial-reporting",
      icon: FileText,
      description: "Comprehensive financial reporting solutions",
    },
    {
      name: "Virtual CFO",
      path: "/services/virtual-cfo",
      icon: FileText,
      description: "Strategic CFO services for financial leadership",
    },
    {
      name: "Financial Modeling",
      path: "/services/financial-modeling",
      icon: Calculator,
      description: "Data-driven models for business forecasting",
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card shadow-xl shadow-black/5 backdrop-blur-xl"
          : "bg-card/80 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* LOGO */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className=" md:block p-2">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-[120px] h-9 rounded-md"
              />

              <p className="text-xs pt-1 ">Accounting Excellence</p>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden lg:flex items-center space-x-2">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg relative font-medium transition-all duration-300 group ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-1 left-0 w-full h-0.5 bg-primary transition-transform duration-300 origin-left ${
                    location.pathname === link.path
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ))}

            {/* Services Dropdown */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className={`px-4 py-2 rounded-lg relative font-medium transition-all duration-300 group flex items-center gap-1 ${
                  location.pathname.startsWith("/services")
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
                <span
                  className={`absolute bottom-1 left-0 w-full h-0.5 bg-primary transition-transform duration-300 origin-left ${
                    location.pathname.startsWith("/services")
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 sm:w-[400px] bg-card rounded-2xl shadow-2xl border border-border overflow-hidden"
                  >
                    <div className="p-2 grid grid-cols-2">
                      {serviceLinks.map((service, index) => {
                        const Icon = service.icon;
                        return (
                          <Link
                            key={service.path}
                            to={service.path}
                            className="flex items-start gap-3 p-3 rounded-xl hover:bg-primary/5 transition-all duration-200 group"
                          >
                            <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-200">
                              <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm">
                                {service.name}
                              </h3>
                              <p className="text-xs text-gray-500 mt-0.5">
                                {service.description}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                    <div className="mt-2 pt-2 border-t border-border">
                      <Link
                        to="/services"
                        className="block p-3 text-center text-primary font-semibold text-sm hover:bg-primary/5 rounded-xl transition-all duration-200"
                      >
                        View All Services →
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg relative font-medium transition-all duration-300 group ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-1 left-0 w-full h-0.5 bg-primary transition-transform duration-300 origin-left ${
                    location.pathname === link.path
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ))}
          </div>
          {/* COUNTRY FLAGS */}
          <div className="hidden lg:flex items-center ml-3">
            {[
              { code: "us", label: "USA" },
              { code: "gb", label: "UK" },
              { code: "ca", label: "Canada" },
              { code: "au", label: "Australia" },
            ].map((c, index) => (
              <div
                key={c.code}
                className={`
        h-6 w-9
        border border-white/30
        rounded-[2px]
        overflow-hidden
        bg-white
        shadow-sm
        ${index !== 0 ? "-ml-2" : ""}
      `}
                title={c.label}
              >
                <img
                  src={`https://flagcdn.com/w40/${c.code}.png`}
                  alt={c.label}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* CTA */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/contact"
              className="hidden lg:block px-6 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-accent transition-all duration-300 shadow-md hover:shadow-xl"
            >
              Get Started
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-card border-t border-border shadow-lg"
          >
            {/* MOBILE COUNTRY FLAGS */}
            <div className="flex items-center px-4 pb-3">
              {[
                { code: "us", label: "USA" },
                { code: "gb", label: "UK" },
                { code: "in", label: "India" },
                { code: "ca", label: "Canada" },
                { code: "au", label: "Australia" },
              ].map((c, index) => (
                <div
                  key={c.code}
                  className={`
        h-6 w-9
        border border-border
        rounded-[2px]
        overflow-hidden
        bg-white
        shadow-sm
        ${index !== 0 ? "-ml-2" : ""}
      `}
                >
                  <img
                    src={`https://flagcdn.com/w40/${c.code}.png`}
                    alt={c.label}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="container mx-auto px-4 py-4 space-y-2">
              {navLinks.slice(0, 2).map((link) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={link.path}
                    className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                      location.pathname === link.path
                        ? "bg-primary text-white shadow-md"
                        : "text-foreground hover:bg-primary/10 hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-all"
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 mt-2 space-y-1"
                    >
                      {serviceLinks.map((service) => {
                        const Icon = service.icon;
                        return (
                          <Link
                            key={service.path}
                            to={service.path}
                            className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-gray-600 hover:bg-primary/5 hover:text-primary transition-all"
                          >
                            <Icon className="w-4 h-4" />
                            <span>{service.name}</span>
                          </Link>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.slice(2).map((link) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={link.path}
                    className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                      location.pathname === link.path
                        ? "bg-primary text-white shadow-md"
                        : "text-foreground hover:bg-primary/10 hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <Link
                  to="/contact"
                  className="block px-4 py-3 mt-3 bg-primary text-white text-center rounded-lg font-medium hover:bg-accent transition-all"
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
