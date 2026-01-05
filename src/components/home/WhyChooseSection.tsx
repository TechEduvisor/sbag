import { useState, useEffect } from 'react';
import { Users, Zap, Headphones, CheckCircle, MessageCircle, Star, Award, Target, Sparkles } from 'lucide-react';

const WhyChooseSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeParticles, setActiveParticles] = useState([]);

  useEffect(() => {
    setIsVisible(true);
    
    // Generate random particles
    const particles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    }));
    setActiveParticles(particles);
  }, []);

  const features = [
    {
      icon: Users,
      title: 'Experienced Team',
      description: 'Our team comprises seasoned professionals with extensive experience in US GAAP and international accounting standards.',
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      stat: '12+ Experts',
    },
    {
      icon: Zap,
      title: 'Enhanced Efficiency',
      description: 'Streamlined processes and cutting-edge technology ensure faster turnaround times without compromising quality.',
      gradient: 'from-yellow-500 via-orange-500 to-red-500',
      stat: '2x Faster',
    },
    {
      icon: Headphones,
      title: 'Personalized Support',
      description: 'Dedicated account managers provide tailored solutions that align with your unique business needs.',
      gradient: 'from-purple-500 via-pink-500 to-rose-500',
      stat: '24/7 Support',
    },
    {
      icon: CheckCircle,
      title: 'Quality Control',
      description: 'Rigorous quality checks and multi-level reviews guarantee accurate and compliant financial reporting.',
      gradient: 'from-green-500 via-emerald-500 to-teal-500',
      stat: '99.9% Accurate',
    },
    {
      icon: MessageCircle,
      title: 'Flexible Communication',
      description: 'Available across multiple time zones with seamless communication channels for your convenience.',
      gradient: 'from-indigo-500 via-purple-500 to-pink-500',
      stat: 'Global Reach',
    },
  ];

  const stats = [
    { icon: Star, value: '4.9/5', label: 'Client Rating' },
    { icon: Award, value: '12+', label: 'Years Experience' },
    { icon: Target, value: '99%', label: 'Success Rate' },
  ];

  return (
    <section className=" pt-10 bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl animate-float-delayed" />
        
        {/* Floating Particles */}
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

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(to right, currentColor 1px, transparent 1px),
                linear-gradient(to bottom, currentColor 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        {/* Animated Rings */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-primary/10 rounded-full animate-ping-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 border border-accent/10 rounded-full animate-ping-slower" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full mb-6 border border-primary/20 backdrop-blur-sm animate-pulse-subtle">
            <Sparkles className="text-accent w-5 h-5 animate-spin-slow" />
            <span className="text-primary font-semibold text-sm">Why We Stand Out</span>
            <Sparkles className="text-primary w-5 h-5 animate-spin-slow-reverse" />
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Why Choose{' '}
            <span className="relative inline-block">
              <span className="text-primary relative z-10">S B A G & Co.</span>
              <span className="absolute inset-0 bg-primary/10 blur-xl animate-pulse-glow" />
              <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                <path 
                  d="M0 6 Q50 0, 100 6 T200 6" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  fill="none"
                  className="text-primary animate-draw-line"
                />
              </svg>
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            We deliver exceptional accounting services that drive business growth and financial clarity.
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className={`group flex items-center gap-3 px-6 py-4 bg-secondary/90 rounded-2xl border border-accent/20 hover:border-accent/50 hover:scale-105 hover:-rotate-1 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-accent/20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center group-hover:bg-accent group-hover:rotate-12 transition-all duration-300">
                    <Icon className="w-5 h-5 text-accent group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-bold text-white group-hover:text-accent transition-colors">{stat.value}</div>
                    <div className="text-sm text-white/60">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={feature.title}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative p-8 bg-secondary rounded-2xl cursor-pointer overflow-hidden transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0'} ${isHovered ? 'scale-105 -translate-y-2 shadow-2xl' : 'shadow-lg'}`}
                style={{ 
                  transitionDelay: `${700 + index * 100}ms`,
                }}
              >
                {/* Gradient Background Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`} />
                
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                       style={{ 
                         padding: '2px',
                         WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                         WebkitMaskComposite: 'xor',
                         maskComposite: 'exclude',
                       }} 
                  />
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 animate-shine`} />
                </div>

                {/* Floating Orb Background */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 blur-2xl rounded-full transition-all duration-500 group-hover:scale-150`} />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon with Stat Badge */}
                  <div className="relative mb-6 inline-block">
                    <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center group-hover:bg-accent group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-2xl">
                      <Icon className="text-accent group-hover:text-white transition-all duration-300" size={28} />
                    </div>
                    
                    {/* Stat Badge */}
                    <div className={`absolute -top-2 -right-2 px-3 py-1 bg-gradient-to-r ${feature.gradient} text-white text-xs font-bold rounded-full shadow-lg transform transition-all duration-300 ${isHovered ? 'scale-100 opacity-100 rotate-0' : 'scale-0 opacity-0 rotate-45'}`}>
                      {feature.stat}
                    </div>

                    {/* Pulsing Ring */}
                    <div className={`absolute inset-0 rounded-xl border-2 border-accent/50 transition-all duration-300 ${isHovered ? 'scale-150 opacity-0' : 'scale-100 opacity-0'}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-accent mb-3 group-hover:text-white transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/80 leading-relaxed group-hover:text-white/95 transition-colors duration-300">
                    {feature.description}
                  </p>

                  {/* Hover Indicator */}
                  {/* <div className={`mt-4 flex items-center gap-2 text-accent font-medium transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                    <span>Explore</span>
                    <div className="w-0 h-px bg-accent group-hover:w-8 transition-all duration-300" />
                  </div> */}
                </div>

                {/* Bottom Decoration */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Corner Sparkles */}
                <div className={`absolute top-4 right-4 transition-all duration-300 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
                  <Sparkles className="w-4 h-4 text-accent animate-pulse" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust Section */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0'}`}>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full backdrop-blur-sm border border-accent/20">
            <CheckCircle className="w-5 h-5 text-accent animate-pulse" />
            <span className="text-gray-500 font-medium">Trusted by 50+ businesses worldwide</span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-accent fill-accent animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
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

        @keyframes particle {
          0% { transform: translateY(0) scale(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-100vh) scale(1); opacity: 0; }
        }

        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.5); opacity: 0; }
          100% { transform: scale(1); opacity: 0.5; }
        }

        @keyframes ping-slower {
          0% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.3); opacity: 0; }
          100% { transform: scale(1); opacity: 0.3; }
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

        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes draw-line {
          0% { stroke-dasharray: 0 200; }
          100% { stroke-dasharray: 200 0; }
        }

        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .animate-float {
          animation: float 20s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 25s ease-in-out infinite;
        }

        .animate-particle {
          animation: particle linear infinite;
        }

        .animate-ping-slow {
          animation: ping-slow 4s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animate-ping-slower {
          animation: ping-slower 6s cubic-bezier(0, 0, 0.2, 1) infinite;
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

        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 3s linear infinite;
        }

        .animate-draw-line {
          animation: draw-line 2s ease-out forwards;
          stroke-dasharray: 200;
        }

        .animate-shine {
          animation: shine 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseSection;