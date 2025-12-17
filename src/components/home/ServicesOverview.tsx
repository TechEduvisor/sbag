import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, DollarSign, FileText, Shield, Calculator, ArrowRight, Sparkles, TrendingUp, Users } from 'lucide-react';

const ServicesOverview = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services = [
  {
    icon: BookOpen,
    title: 'Bookkeeping & Accounting',
    description: 'Comprehensive bookkeeping services to keep your financial records accurate and up-to-date.',
    color: 'from-blue-500 to-cyan-500',
    stats: '10k+ Records',
    path: '/services/bookkeeping',
  },
  {
    icon: DollarSign,
    title: 'Payroll Services',
    description: 'Efficient payroll processing ensuring timely and compliant employee compensation management.',
    color: 'from-green-500 to-emerald-500',
    stats: '12+ Employees',
    path: '/services/payroll',
  },
  {
    icon: Calculator,
    title: 'Taxation',
    description: 'Expert tax planning and compliance services to optimize your tax position and minimize liabilities.',
    color: 'from-purple-500 to-pink-500',
    stats: '99% Accuracy',
    path: '/services/taxation',
  },
  {
    icon: Shield,
    title: 'US Auditing Support',
    description: 'Professional audit support services helping firms navigate complex auditing requirements.',
    color: 'from-orange-500 to-red-500',
    stats: '100% Compliant',
    path: '/services/auditing',
  },
  {
    icon: FileText,
    title: 'Financial Reporting',
    description: 'Detailed preparation of financial statements and reporting for stakeholders and compliance.',
    color: 'from-indigo-500 to-blue-500',
    stats: '1000+ Reports',
    path: '/services/financial-reporting',
  },
  {
    icon: DollarSign,
    title: 'Virtual CFO',
    description: 'Comprehensive virtual CFO services offering financial planning, analysis, and strategic advisory.',
    color: 'from-teal-500 to-green-500',
    stats: '24/7 Insights',
    path: '/services/virtual-cfo',
  },
  {
    icon: Calculator,
    title: 'Financial Modeling',
    description: 'Build accurate financial models for forecasting, budgeting, and business valuation.',
    color: 'from-pink-500 to-rose-500',
    stats: '50+ Models',
    path: '/services/financial-modeling',
  },
];

  const features = [
    { icon: Sparkles, text: 'Expert Team', value: '12+' },
    { icon: TrendingUp, text: 'Success Rate', value: '' },
    { icon: Users, text: 'Happy Clients', value: '50+' },
  ];

  return (
    <section className="relative py-20 bg-secondary/10 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite]"
          style={{ animationDelay: '2s' }}
        />

        {/* Animated Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Cursor Follow Effect */}
        <div
          className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl transition-all duration-500 ease-out pointer-events-none"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/15 rounded-full mb-6 animate-[pulse_3s_ease-in-out_infinite]">
            <Sparkles className="text-primary w-5 h-5 animate-spin-slow" />
            <span className="text-primary font-semibold text-sm">Professional Services</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Our{' '}
            <span className="relative ">
              <span className="text-primary">Services</span>
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Comprehensive accounting and financial services tailored to your business needs.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-primary/10 cursor-pointer ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <Icon className="text-primary w-5 h-5" />
                  <span className="font-semibold text-foreground">{feature.value}</span>
                  <span className="text-gray-400 text-sm">{feature.text}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredIndex === index;

            return (
              <Link
                key={service.title}
                to={service.path}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative p-8 bg-card rounded-2xl shadow-lg hover:shadow-2xl cursor-pointer border border-border overflow-hidden transition-all duration-500 block ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0'
                } ${isHovered ? 'scale-105 -translate-y-2' : ''}`}
                style={{
                  transitionDelay: `${800 + index * 100}ms`,
                }}
              >
                {/* Animated Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>

                {/* Card Content */}
                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${service.color} opacity-10 rounded-2xl absolute -top-2 -left-2 blur-md group-hover:scale-110 transition-transform duration-300`}
                    />
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:rotate-6 group-hover:scale-110 transition-all duration-300 relative">
                      <Icon className="text-primary group-hover:text-white transition-colors duration-300" size={28} />
                    </div>

                    {/* Floating Badge */}
                    <div
                      className={`absolute -top-1 -right-1 px-2 py-1 bg-accent text-white text-xs font-bold rounded-full transform transition-all duration-300 ${
                        isHovered ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                      }`}
                    >
                      {service.stats}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="leading-relaxed mb-4 line-clamp-3 text-gray-400 group-hover:text-foreground/80 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Learn More Link (just visual, card itself is the Link) */}
                  <span className="inline-flex items-center text-primary font-medium group-hover:text-accent transition-all duration-300">
                    <span className="relative">
                      Learn More
                      <span
                        className={`absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-300 ${
                          isHovered ? 'w-full' : 'w-0'
                        }`}
                      />
                    </span>
                    <ArrowRight
                      className={`ml-2 transition-transform duration-300 ${isHovered ? 'translate-x-2' : ''}`}
                      size={18}
                    />
                  </span>
                </div>

                {/* Corner Decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-bl ${service.color} opacity-10 rounded-bl-full`} />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div
          className={`text-center transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0'
          }`}
        >
          {/* Decorative Line */}
          <div className="flex items-center justify-center mb-8">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary/50" />
            <div className="mx-4 w-2 h-2 bg-primary rounded-full animate-pulse" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-primary/50" />
          </div>

          <Link
            to="/services"
            className="group relative inline-flex items-center px-8 py-4 bg-primary text-white rounded-xl font-medium text-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            {/* Button Background Animation */}
            <span className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

            {/* Button Content */}
            <span className="relative flex items-center gap-2">
              View All Services
              <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={20} />
            </span>

            {/* Sparkle Effects */}
            <span className="absolute top-0 right-0 w-4 h-4 bg-white/30 rounded-full blur-sm animate-ping" />
            <span
              className="absolute bottom-0 left-0 w-3 h-3 bg-white/20 rounded-full blur-sm animate-ping"
              style={{ animationDelay: '0.5s' }}
            />
          </Link>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-gray-500">Available 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-gray-500">100% Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-gray-500">Free Consultation</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes expand {
          0% { width: 0; }
          100% { width: 100%; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default ServicesOverview;
