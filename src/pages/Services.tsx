/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  DollarSign,
  Calculator,
  Shield,
  FileText,
  TrendingDown,
  Zap,
  Globe,
  Sparkles,
  Check,
  ArrowRight,
  Star,
} from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);
  const [activeParticles, setActiveParticles] = useState<any[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    // Generate particles
    const particles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 3,
    }));
    setActiveParticles(particles);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services = [
  {
    icon: BookOpen,
    title: 'Bookkeeping & Accounting',
    path: '/services/bookkeeping',
    description:
      'Comprehensive bookkeeping services to keep your financial records accurate, organized, and up-to-date.',
    features: [
      'General ledger maintenance',
      'Accounts payable & receivable',
      'Bank reconciliation',
      'Monthly financial reporting',
      'Journal entries & adjustments',
    ],
    gradient: 'from-blue-500 via-cyan-500 to-teal-500',
    bgColor: 'bg-blue-500/10',
  },
  {
    icon: DollarSign,
    title: 'Payroll Services',
    path: '/services/payroll',
    description:
      'Efficient payroll processing ensuring timely and compliant employee compensation management.',
    features: [
      'Payroll processing & calculations',
      'Tax withholding & reporting',
      'Direct deposit management',
      'Payroll tax compliance',
      'Year-end W-2 preparation',
    ],
    gradient: 'from-green-500 via-emerald-500 to-teal-500',
    bgColor: 'bg-green-500/10',
  },
  {
    icon: Calculator,
    title: 'Taxation',
    path: '/services/taxation',
    description:
      'Expert tax planning and compliance services to optimize your tax position and minimize liabilities.',
    features: [
      'Tax planning & strategy',
      'Federal & state tax preparation',
      'Tax compliance & filing',
      'Tax audit support',
      'IRS correspondence handling',
    ],
    gradient: 'from-purple-500 via-pink-500 to-rose-500',
    bgColor: 'bg-purple-500/10',
  },
  {
    icon: Shield,
    title: 'US Auditing Support',
    path: '/services/auditing',
    description: 'Professional audit support services helping CPA firms navigate complex auditing requirements.',
    features: [
      'Audit workpaper preparation',
      'Testing & sampling procedures',
      'Internal control evaluation',
      'Audit documentation',
      'Client assistance requests',
    ],
    gradient: 'from-orange-500 via-red-500 to-pink-500',
    bgColor: 'bg-orange-500/10',
  },
  {
    icon: FileText,
    title: 'Financial Reporting',
    path: '/services/financial-reporting',
    description:
      'Preparation of comprehensive financial reports, statements, and compliance documentation for management and investors.',
    features: [
      'Financial statement preparation',
      'Multi-entity consolidations',
      'Complex reporting structures',
      'Technical accounting support',
      'Audit preparation',
    ],
    gradient: 'from-indigo-500 via-blue-500 to-cyan-500',
    bgColor: 'bg-indigo-500/10',
  },
  {
    icon: DollarSign,
    title: 'Virtual CFO',
    path: '/services/virtual-cfo',
    description:
      'Virtual CFO services that provide strategic insights, budgeting, forecasting, and investor reporting.',
    features: [
      'Cash flow management',
      'Budgeting & forecasting',
      'Financial strategy formulation',
      'Performance dashboards',
      'Board reporting & investor insights',
    ],
    gradient: 'from-teal-500 via-emerald-500 to-green-500',
    bgColor: 'bg-teal-500/10',
  },
  {
    icon: Calculator,
    title: 'Financial Modeling',
    path: '/services/financial-modeling',
    description:
      'Custom-built financial models to help your business make data-driven decisions and secure investments.',
    features: [
      '3-statement modeling',
      'Valuation models (DCF, Comparable)',
      'Scenario & sensitivity analysis',
      'Investment projections',
      'Business plan models',
    ],
    gradient: 'from-pink-500 via-rose-500 to-red-500',
    bgColor: 'bg-pink-500/10',
  },
];

  const whyOutsource = [
    {
      icon: TrendingDown,
      title: 'Cost Savings',
      description: 'Reduce overhead costs by up to 60% compared to maintaining an in-house accounting team.',
      gradient: 'from-green-500 to-emerald-500',
      stat: 'Save 60%',
    },
    {
      icon: Zap,
      title: 'Focus on Core Business',
      description: 'Free up time and resources to focus on strategic initiatives and business growth.',
      gradient: 'from-yellow-500 to-orange-500',
      stat: '3x Faster',
    },
    {
      icon: Globe,
      title: 'Scalability',
      description: 'Easily scale services up or down based on your changing business needs.',
      gradient: 'from-blue-500 to-purple-500',
      stat: 'Flexible',
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-background">
      {/* Hero Section */}
      <section className="relative section-padding bg-gradient-to-br from-secondary to-forest-green overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {activeParticles.map((particle) => (
            <div
              key={particle.id}
              className="absolute rounded-full bg-accent/20 animate-particle"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                animationDuration: `${particle.duration}s`,
                animationDelay: `${particle.delay}s`,
              }}
            />
          ))}

          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float-delayed" />

          {/* Cursor glow */}
          <div
            className="absolute w-64 h-64 bg-accent/10 rounded-full blur-3xl transition-all duration-300 pointer-events-none"
            style={{
              left: mousePosition.x - 128,
              top: mousePosition.y - 128,
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div
            className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-accent/20 backdrop-blur-sm rounded-full mb-6 border border-accent/30 animate-pulse-subtle">
              <Sparkles className="text-accent w-5 h-5 animate-spin-slow" />
              <span className="text-accent font-semibold text-sm">Professional Solutions</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
              Our{' '}
              <span className="relative inline-block">
                <span className="text-accent relative z-10">Services</span>
                <span className="absolute inset-0 bg-accent/20 blur-2xl animate-pulse-glow" />
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Comprehensive accounting and financial services tailored to your business needs.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-6 mt-10">
              {[
                { icon: Star, text: '5 Core Services' },
                { icon: Shield, text: '100% Compliant' },
                { icon: Zap, text: 'Fast Turnaround' },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className={`flex items-center gap-2 px-5 py-3 bg-secondary/80 backdrop-blur-sm rounded-full border border-accent/20 hover:border-accent/50 hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-accent/20 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                    <Icon className="text-accent w-5 h-5" />
                    <span className="text-white font-medium text-sm">{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(to right, currentColor 1px, transparent 1px),
                linear-gradient(to bottom, currentColor 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10 space-y-24">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredService === index;
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.title}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
                className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Text Content */}
                <div className={isEven ? '' : 'lg:order-2'}>
                  <div
                    className={`relative inline-block w-20 h-20 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg ${
                      isHovered ? 'scale-110 rotate-6' : ''
                    }`}
                  >
                    <Icon className="text-primary" size={40} />
                    <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity duration-300 ${
                        isHovered ? 'opacity-20' : ''
                      }`}
                    />
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{service.title}</h2>

                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">{service.description}</p>

                  <div className="space-y-3">
                    {service.features.map((feature, fIndex) => (
                      <div
                        key={feature}
                        className={`flex items-start gap-3 group transition-all duration-300 ${
                          isHovered ? 'translate-x-2' : ''
                        }`}
                        style={{ transitionDelay: `${fIndex * 50}ms` }}
                      >
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                          <Check className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                        </div>
                        <span className="text-gray-700 group-hover:text-gray-900 transition-colors font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to={service.path}
                    className="group mt-8 inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-accent transition-all duration-300 hover:shadow-lg hover:scale-105"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Visual Element */}
                <div className={isEven ? '' : 'lg:order-1'}>
                  <div
                    className={`relative bg-secondary p-12 rounded-3xl aspect-square flex flex-col items-center justify-center overflow-hidden shadow-2xl transition-all duration-500 ${
                      isHovered ? 'scale-105 shadow-3xl' : ''
                    }`}
                  >
                    {/* Background gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity duration-700 ${
                        isHovered ? 'opacity-10' : ''
                      }`}
                    />

                    {/* Animated rings */}
                    <div
                      className={`absolute inset-0 border-2 border-accent/20 rounded-3xl transition-all duration-500 ${
                        isHovered ? 'scale-110 opacity-0' : 'scale-100 opacity-100'
                      }`}
                    />
                    <div
                      className={`absolute inset-0 border-2 border-accent/10 rounded-3xl transition-all duration-700 delay-100 ${
                        isHovered ? 'scale-125 opacity-0' : 'scale-100 opacity-100'
                      }`}
                    />

                    {/* Icon */}
                    <div className="relative z-10 mb-8">
                      <Icon
                        className={`text-accent transition-all duration-500 ${
                          isHovered ? 'scale-110 rotate-12' : ''
                        }`}
                        size={120}
                      />
                    </div>

                    {/* Meaningful Data */}
                    <div className="relative z-10 text-center space-y-4 w-full px-4">
                      {index === 0 && (
                        <>
                          <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                            <span className="text-white/80 text-sm">Monthly Reports</span>
                            <span className="text-accent font-bold text-lg">10,000+</span>
                          </div>
                          <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                            <span className="text-white/80 text-sm">Accuracy Rate</span>
                            <span className="text-accent font-bold text-lg">99.9%</span>
                          </div>
                          <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                            <span className="text-white/80 text-sm">Turnaround Time</span>
                            <span className="text-accent font-bold text-lg">24-48hrs</span>
                          </div>
                        </>
                      )}
                      {index === 1 && (
                        <>
                          <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                            <span className="text-white/80 text-sm">Employees Processed</span>
                            <span className="text-accent font-bold text-lg">50,000+</span>
                          </div>
                          <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                            <span className="text-white/80 text-sm">On-Time Rate</span>
                            <span className="text-accent font-bold text-lg">100%</span>
                          </div>
                          <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                            <span className="text-white/80 text-sm">Processing Time</span>
                            <span className="text-accent font-bold text-lg">Same Day</span>
                          </div>
                        </>
                      )}
                      {index === 2 && (
                        <>
                          <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                            <span className="text-white/80 text-sm">Tax Returns Filed</span>
                            <span className="text-accent font-bold text-lg">5,000+</span>
                          </div>
                          <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                            <span className="text-white/80 text-sm">Avg. Tax Savings</span>
                            <span className="text-accent font-bold text-lg">$25K</span>
                          </div>
                          <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                            <span className="text-white/80 text-sm">Compliance Rate</span>
                            <span className="text-accent font-bold text-lg">100%</span>
                          </div>
                        </>
                      )}
                      {index === 3 && (
                        <>
                          <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                            <span className="text-white/80 text-sm">Audits Supported</span>
                            <span className="text-accent font-bold text-lg">1,000+</span>
                          </div>
                          <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                            <span className="text-white/80 text-sm">Pass Rate</span>
                            <span className="text-accent font-bold text-lg">99%</span>
                          </div>
                          <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                            <span className="text-white/80 text-sm">Time Saved</span>
                            <span className="text-accent font-bold text-lg">40%</span>
                          </div>
                        </>
                      )}
                      {index === 4 && (
                        <>
                          <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                            <span className="text-white/80 text-sm">Statements Prepared</span>
                            <span className="text-accent font-bold text-lg">2,50+</span>
                          </div>
                          <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                            <span className="text-white/80 text-sm">Multi-Entity Handled</span>
                            <span className="text-accent font-bold text-lg">500+</span>
                          </div>
                          <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                            <span className="text-white/80 text-sm">Closing Time</span>
                            <span className="text-accent font-bold text-lg">5-7 Days</span>
                          </div>
                        </>
                      )}
                    </div>

                    {/* Floating particles */}
                    {isHovered &&
                      [...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-2 h-2 bg-accent/40 rounded-full animate-float-particle"
                          style={{
                            left: `${20 + i * 10}%`,
                            top: `${20 + (i % 3) * 20}%`,
                            animationDelay: `${i * 0.1}s`,
                          }}
                        />
                      ))}

                    {/* Corner sparkles */}
                    {isHovered && (
                      <>
                        <Sparkles className="absolute top-6 right-6 text-accent w-6 h-6 animate-pulse" />
                        <Sparkles
                          className="absolute bottom-6 left-6 text-accent w-6 h-6 animate-pulse"
                          style={{ animationDelay: '0.5s' }}
                        />
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Outsource Section */}
      <section className="pb-20 bg-cream relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float-delayed" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Sparkles className="text-primary w-5 h-5" />
              <span className="text-primary font-semibold text-sm">Benefits</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Why <span className="text-primary">Outsource?</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Partner with us and experience the benefits of professional outsourcing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyOutsource.map((benefit, index) => {
              const Icon = benefit.icon;
              const isHovered = hoveredBenefit === index;

              return (
                <div
                  key={benefit.title}
                  onMouseEnter={() => setHoveredBenefit(index)}
                  onMouseLeave={() => setHoveredBenefit(null)}
                  className={`group relative p-8 bg-card rounded-3xl shadow-lg hover:shadow-2xl border border-border overflow-hidden cursor-pointer transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0'
                  } ${isHovered ? 'scale-105 -translate-y-2' : ''}`}
                  style={{ transitionDelay: `${300 + index * 150}ms` }}
                >
                  {/* Animated gradient background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}
                  />

                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>

                  {/* Floating orb */}
                  <div
                    className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-20 blur-2xl rounded-full transition-all duration-500 group-hover:scale-150`}
                  />

                  <div className="relative z-10">
                    {/* Icon with stat badge */}
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-2xl">
                        <Icon className="text-primary group-hover:text-white transition-colors duration-300" size={32} />
                      </div>

                      {/* Stat Badge */}
                      <div
                        className={`absolute -top-2 -right-2 px-3 py-1 bg-gradient-to-r ${benefit.gradient} text-white text-xs font-bold rounded-full shadow-lg transform transition-all duration-300 ${
                          isHovered ? 'scale-100 opacity-100 rotate-0' : 'scale-0 opacity-0 rotate-45'
                        }`}
                      >
                        {benefit.stat}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                      {benefit.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                      {benefit.description}
                    </p>

                    {/* Hover indicator */}
                    <div
                      className={`mt-6 flex items-center gap-2 text-primary font-medium transition-all duration-300 ${
                        isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                      }`}
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Bottom decoration */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${benefit.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Corner sparkle */}
                  <div
                    className={`absolute top-6 right-6 transition-all duration-300 ${
                      isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                    }`}
                  >
                    <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes particle {
          0% { transform: translateY(0) scale(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-100vh) scale(1); opacity: 0; }
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(5deg); }
          66% { transform: translate(-20px, 20px) rotate(-5deg); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-30px, 30px) rotate(-5deg); }
          66% { transform: translate(20px, -20px) rotate(5deg); }
        }

        @keyframes float-particle {
          0%, 100% { transform: translateY(0); opacity: 0; }
          50% { opacity: 1; }
        }

        @keyframes pulse-subtle {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.02); opacity: 0.9; }
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; transform: scale(0.95); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-particle {
          animation: particle linear infinite;
        }

        .animate-float {
          animation: float 20s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 25s ease-in-out infinite;
        }

        .animate-float-particle {
          animation: float-particle 3s ease-in-out infinite;
        }

        .animate-pulse-subtle {
          animation: pulse-subtle 3s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Services;
