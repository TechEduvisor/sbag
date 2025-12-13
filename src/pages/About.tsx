import { useState, useEffect } from 'react';
import { Target, Eye, Heart, Users, Award, TrendingUp, Globe, Shield, Sparkles, ChevronRight } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredValue, setHoveredValue] = useState(null);
  const [hoveredStat, setHoveredStat] = useState(null);
  const [activeParticles, setActiveParticles] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    // Generate particles
    const particles = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 3,
    }));
    setActiveParticles(particles);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To provide exceptional accounting and bookkeeping services that empower businesses to make informed financial decisions and achieve sustainable growth.',
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'To be the most trusted global partner for accounting services, recognized for our excellence, integrity, and innovative solutions.',
      gradient: 'from-purple-500 via-pink-500 to-rose-500',
      bgColor: 'bg-purple-500/10',
    },
    {
      icon: Heart,
      title: 'Values',
      description: 'Integrity, Excellence, Client-Focus, Innovation, Collaboration, and Continuous Improvement guide everything we do.',
      gradient: 'from-orange-500 via-red-500 to-pink-500',
      bgColor: 'bg-orange-500/10',
    },
  ];

  const stats = [
    { value: '50+', label: 'Clients Worldwide', icon: Users, color: 'text-cyan-400' },
    { value: '12+', label: 'Years Experience', icon: Award, color: 'text-yellow-400' },
    { value: '50+', label: 'Team Members', icon: TrendingUp, color: 'text-green-400' },
    { value: '95%', label: 'Client Satisfaction', icon: Shield, color: 'text-purple-400' },
  ];

  const achievements = [
    { icon: Globe, text: 'Global Presence', detail: '20+ Countries' },
    { icon: Award, text: 'Industry Recognition', detail: 'Top Rated Firm' },
    { icon: Shield, text: '100% Compliant', detail: 'US GAAP Standards' },
    { icon: TrendingUp, text: 'Growing Fast', detail: '40% YoY Growth' },
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
          <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0'}`}>
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-accent/20 backdrop-blur-sm rounded-full mb-6 border border-accent/30 animate-pulse-subtle">
              <Sparkles className="text-accent w-5 h-5 animate-spin-slow" />
              <span className="text-accent font-semibold text-sm">Established 2008</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
              About{' '}
              <span className="relative inline-block">
                <span className="text-accent relative z-10">S B A G & Co. LLP</span>
                <span className="absolute inset-0 bg-accent/20 blur-2xl animate-pulse-glow" />
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Your trusted partner for comprehensive bookkeeping, accounting, and audit support services.
            </p>

            {/* Achievement Pills */}
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div
                    key={index}
                    className={`flex items-center gap-3 px-5 py-3 bg-secondary/80 backdrop-blur-sm rounded-full border border-accent/20 hover:border-accent/50 hover:scale-105 hover:rotate-1 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-accent/20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                    <Icon className="text-accent w-5 h-5" />
                    <div className="text-left">
                      <div className="text-sm font-bold text-white">{achievement.text}</div>
                      <div className="text-xs text-white/70">{achievement.detail}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
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

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
                <span className="text-primary font-semibold text-sm">Our Journey</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="text-primary relative">
                  Story
                  <span className="absolute bottom-0 left-0 w-full h-2 bg-primary/20 -z-10" />
                </span>
              </h2>
              
              <div className="space-y-6">
                {[
                  'S B A G & Co. LLP was founded with a clear mission: to provide world-class accounting and bookkeeping services to businesses of all sizes. With over 15 years of experience, we\'ve grown from a small team to a trusted partner serving 50+ clients worldwide.',
                  'Our team of experienced professionals specializes in US GAAP accounting standards and international best practices. We combine traditional accounting expertise with modern technology to deliver efficient, accurate, and timely services.',
                  'What sets us apart is our commitment to understanding each client\'s unique needs. We don\'t just process numbers; we provide insights and strategic guidance that help businesses make informed decisions and achieve their financial goals.'
                ].map((text, index) => (
                  <div
                    key={index}
                    className={`group flex gap-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                    style={{ transitionDelay: `${200 + index * 150}ms` }}
                  >
                    <div className="flex-shrink-0 w-2 h-2 mt-2 bg-primary rounded-full group-hover:scale-150 transition-transform" />
                    <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              {/* <button className="group mt-8 inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-accent transition-all duration-300 hover:shadow-lg hover:scale-105">
                <span>Learn More About Us</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button> */}
            </div>

            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="relative bg-secondary p-8 rounded-3xl shadow-2xl overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-2xl" />
                
                <div className="relative z-10 grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    const isHovered = hoveredStat === index;
                    
                    return (
                      <div
                        key={index}
                        onMouseEnter={() => setHoveredStat(index)}
                        onMouseLeave={() => setHoveredStat(null)}
                        className={`group text-center p-6 bg-background rounded-2xl border border-accent/10 hover:border-accent/30 transition-all duration-300 cursor-pointer ${isHovered ? 'scale-110 shadow-2xl shadow-accent/20' : 'shadow-lg'}`}
                      >
                        <div className="flex justify-center mb-3">
                          <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center group-hover:bg-accent group-hover:rotate-12 transition-all duration-300">
                            <Icon className={`w-6 h-6 ${stat.color} g transition-colors`} />
                          </div>
                        </div>
                        <div className="text-5xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform">
                          {stat.value}
                        </div>
                        <div className=" text-smtransition-colors">
                          {stat.label}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-cream relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float-delayed" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Sparkles className="text-primary w-5 h-5" />
              <span className="text-primary font-semibold text-sm">What Drives Us</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Our Foundation
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Guided by strong principles and a clear vision for the future.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              const isHovered = hoveredValue === index;
              
              return (
                <div
                  key={value.title}
                  onMouseEnter={() => setHoveredValue(index)}
                  onMouseLeave={() => setHoveredValue(null)}
                  className={`group relative p-8 bg-card rounded-3xl mb-10 shadow-lg hover:shadow-2xl border border-border overflow-hidden cursor-pointer transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0'} ${isHovered ? 'scale-105 -translate-y-2' : ''}`}
                  style={{ transitionDelay: `${300 + index * 150}ms` }}
                >
                  {/* Animated gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`} />
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>

                  {/* Floating orb */}
                  <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-20 blur-2xl rounded-full transition-all duration-500 group-hover:scale-150`} />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="relative mb-6">
                      <div className={`w-20 h-20 ${value.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-2xl`}>
                        <Icon className="text-primary group-hover:text-accent transition-colors duration-300" size={36} />
                      </div>
                      
                      {/* Pulsing ring */}
                      <div className={`absolute inset-0 rounded-2xl border-2 border-primary/30 transition-all duration-300 ${isHovered ? 'scale-125 opacity-0' : 'scale-100 opacity-0'}`} />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                      {value.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                      {value.description}
                    </p>

                    {/* Hover indicator */}
                    <div className={`mt-6 flex items-center gap-2 text-primary font-medium transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                      <span>Read More</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Bottom decoration */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  {/* Corner sparkle */}
                  <div className={`absolute top-6 right-6 transition-all duration-300 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
                    <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

  {/* Leadership Team */}
<section className="section-padding bg-background relative overflow-hidden">
  <div className="absolute inset-0 opacity-[0.02]">
    <div
      className="w-full h-full"
      style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
        backgroundSize: "40px 40px",
      }}
    />
  </div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
        <Users className="text-primary w-5 h-5" />
        <span className="text-primary font-semibold text-sm">
          Leadership Team
        </span>
      </div>

      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Our <span className="text-primary">Founders</span>
      </h2>

      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Experienced Chartered Accountants leading the firm with integrity,
        expertise, and global perspective.
      </p>
    </div>

    {/* FOUNDERS */}
    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
      {/* Ankit Gupta */}
      <div className="group text-center">
        <div className="relative mb-6 inline-block">
          <div className="w-52 h-52 rounded-full overflow-hidden border-4 border-accent/30 shadow-xl group-hover:scale-105 transition-all duration-300">
            <img
              src="/photo2.png"
              alt="Ankit Gupta - Founding Partner"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute bottom-3 right-3 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg">
            <Award className="w-6 h-6 text-white" />
          </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-1">
          Ankit Gupta
        </h3>
        <p className="text-primary font-semibold mb-4">
          Founding Partner
        </p>

        <p className="text-gray-600 text-sm leading-relaxed max-w-sm mx-auto">
          Member of the Institute of Chartered Accountants of India with over
          10 years of experience in Accounting and Taxation for Indian, UK,
          and US clients. Holds a Bachelor's degree in Commerce along with a
          Diploma in IFRS. Certified QuickBooks and Xero Advisor.
        </p>
      </div>

      {/* Sudhanshu Bansal */}
      <div className="group text-center">
        <div className="relative mb-6 inline-block">
          <div className="w-52 h-52 rounded-full overflow-hidden border-4 border-accent/30 shadow-xl group-hover:scale-105 transition-all duration-300">
            <img
              src="/photo1.png"
              alt="Sudhanshu Bansal - Co-Founder"
              className="w-full h-full"
            />
          </div>

          <div className="absolute bottom-3 right-3 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg">
            <Award className="w-6 h-6 text-white" />
          </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-1">
          Sudhanshu Bansal
        </h3>
        <p className="text-primary font-semibold mb-4">
          Co-Founder
        </p>

        <p className="text-gray-600 text-sm leading-relaxed max-w-sm mx-auto">
          Qualified Chartered Accountant with strong experience in Auditing
          and Accounting. With years of hands-on experience in Bookkeeping,
          Accounting, and Statutory Audits, he actively supports US-based
          entities in bookkeeping, payroll taxation, and accounting services.
        </p>
      </div>
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

export default About;