import { useState, useEffect } from 'react';
import { Briefcase, MapPin, Clock, Upload, Sparkles, ArrowRight, Users, Zap, TrendingUp, Heart, Award, Globe, CheckCircle, Star } from 'lucide-react';

const EnhancedCareers = () => {
  const [cvFile, setCvFile] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredJob, setHoveredJob] = useState(null);
  const [hoveredBenefit, setHoveredBenefit] = useState(null);
  const [activeParticles, setActiveParticles] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    message: '',
  });

  const openings = [
    {
      id: 1,
      title: 'Senior Accountant',
      location: 'Delhi, India',
      type: 'Full-time',
      description: 'Looking for an experienced accountant with 5+ years in US GAAP accounting.',
      salary: '$80K - $120K',
      gradient: 'from-blue-500 to-cyan-500',
      requirements: ['5+ years experience', 'US GAAP expertise', 'CPA preferred'],
    },
    {
      id: 2,
      title: 'Bookkeeping Specialist',
      location: 'Kanpur, India',
      type: 'Full-time',
      description: 'Join our bookkeeping team to handle day-to-day financial operations for clients.',
      salary: '$50K - $80K',
      gradient: 'from-green-500 to-emerald-500',
      requirements: ['3+ years bookkeeping', 'QuickBooks expertise', 'Detail-oriented'],
    },
    {
      id: 3,
      title: 'Tax Consultant',
      location: 'Remote',
      type: 'Contract',
      description: 'Experienced tax professional to support our growing tax preparation practice.',
      salary: '$70K - $110K',
      gradient: 'from-orange-500 to-red-500',
      requirements: ['Tax certification', 'Multi-state experience', 'Problem solver'],
    },
    {
      id: 4,
      title: 'Audit Associate',
      location: 'Delhi, India',
      type: 'Full-time',
      description: 'Support audit engagements and work closely with US CPA firms.',
      salary: '$55K - $90K',
      gradient: 'from-purple-500 to-pink-500',
      requirements: ['Audit experience', 'Client communication', 'Team player'],
    },
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Health Insurance',
      description: 'Comprehensive medical, dental, and vision coverage.',
      gradient: 'from-red-500 to-pink-500',
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Professional development and advancement opportunities.',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Zap,
      title: 'Flexible Hours',
      description: 'Work-life balance with flexible scheduling options.',
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Globe,
      title: 'Remote Options',
      description: 'Work from home opportunities and hybrid arrangements.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Award,
      title: 'Bonuses & Rewards',
      description: 'Performance-based bonuses and recognition programs.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Users,
      title: 'Team Culture',
      description: 'Collaborative environment with exceptional team members.',
      gradient: 'from-indigo-500 to-blue-500',
    },
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const particles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 3,
    }));
    setActiveParticles(particles);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setCvFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Application submitted successfully! We will review your profile and get back to you soon.');
    setCvFile(null);
    setFormData({ name: '', email: '', phone: '', position: '', message: '' });
  };

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
              <span className="text-accent font-semibold text-sm">Join Our Growing Team</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
              Build Your{' '}
              <span className="relative inline-block">
                <span className="text-accent relative z-10">Career</span>
                <span className="absolute inset-0 bg-accent/20 blur-2xl animate-pulse-glow" />
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Join a dynamic team where your growth and development are our priorities.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-6 mt-10">
              {[
                { icon: Users, text: '50+ Team Members', stat: 'Growing Daily' },
                { icon: Star, text: '4.8/5 Rating', stat: 'Great Place to Work' },
                { icon: Briefcase, text: '4 Open Positions', stat: 'Hiring Now' },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className={`flex flex-col items-center gap-1 px-5 py-3 bg-secondary/80 backdrop-blur-sm rounded-full border border-accent/20 hover:border-accent/50 hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-accent/20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                    <Icon className="text-accent w-5 h-5" />
                    <span className="text-white font-medium text-sm">{item.text}</span>
                    <span className="text-white/60 text-xs">{item.stat}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="section-padding bg-cream relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float-delayed" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Sparkles className="text-primary w-5 h-5" />
              <span className="text-primary font-semibold text-sm">Why Choose Us</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Benefits & <span className="text-primary">Perks</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              We invest in our team members with competitive compensation and growth opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              const isHovered = hoveredBenefit === index;
              
              return (
                <div
                  key={benefit.title}
                  onMouseEnter={() => setHoveredBenefit(index)}
                  onMouseLeave={() => setHoveredBenefit(null)}
                  className={`group relative p-8 bg-card rounded-3xl shadow-lg hover:shadow-2xl border border-border overflow-hidden cursor-pointer transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0'} ${isHovered ? 'scale-105 -translate-y-2' : ''}`}
                  style={{ transitionDelay: `${300 + index * 150}ms` }}
                >
                  {/* Animated gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`} />
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>

                  {/* Floating orb */}
                  <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-20 blur-2xl rounded-full transition-all duration-500 group-hover:scale-150`} />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-2xl mb-4">
                      <Icon className="text-primary group-hover:text-white transition-colors duration-300" size={32} />
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
                    <div className={`mt-6 flex items-center gap-2 text-primary font-medium transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Bottom decoration */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${benefit.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

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

      {/* Job Openings */}
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
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Briefcase className="text-primary w-5 h-5" />
              <span className="text-primary font-semibold text-sm">Open Positions</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Current <span className="text-primary">Openings</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Explore opportunities to grow your career with us.
            </p>
          </div>

          <div className="space-y-6">
            {openings.map((job, index) => (
              <div
                key={job.id}
                onMouseEnter={() => setHoveredJob(job.id)}
                onMouseLeave={() => setHoveredJob(null)}
                className={`group relative p-8 bg-card rounded-3xl shadow-lg border border-border hover:shadow-2xl overflow-hidden transition-all duration-500 ${
                  hoveredJob === job.id ? 'scale-[1.02] border-primary/50' : ''
                } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0'}`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                {/* Animated gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${job.gradient} opacity-0 transition-opacity duration-500 ${hoveredJob === job.id ? 'opacity-3' : ''}`} />

                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>

                <div className="relative z-10">
                  <div className="grid lg:grid-cols-3 gap-8 items-start">
                    {/* Job Info */}
                    <div className="lg:col-span-2">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${job.gradient} group-hover:scale-110 transition-transform`}>
                          <Briefcase className="text-white w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                            {job.title}
                          </h3>
                          <div className={`text-gradient-to-r ${job.gradient} font-bold mt-1`}>
                            {job.salary}
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {job.description}
                      </p>

                      <div className="grid sm:grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                          <MapPin className="text-primary w-5 h-5 flex-shrink-0" />
                          <span className="text-gray-700 font-medium">{job.location}</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                          <Clock className="text-primary w-5 h-5 flex-shrink-0" />
                          <span className="text-gray-700 font-medium">{job.type}</span>
                        </div>
                      </div>

                      {/* Requirements */}
                      <div className={`space-y-2 overflow-hidden transition-all duration-300 ${hoveredJob === job.id ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0'}`}>
                        <p className="text-sm font-semibold text-gray-900">Key Requirements:</p>
                        <div className="space-y-1">
                          {job.requirements.map((req) => (
                            <div key={req} className="flex items-center gap-2 text-gray-600">
                              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                              <span className="text-sm">{req}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Apply Button */}
                    <div className="lg:flex lg:flex-col lg:justify-center">
                      <button
                        onClick={() => {
                          setFormData({ ...formData, position: job.title });
                          document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className={`w-full px-6 py-4 rounded-xl font-bold text-white transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 hover:shadow-lg shadow-md group-hover:shadow-xl ${
                          hoveredJob === job.id 
                            ? `bg-gradient-to-r ${job.gradient}` 
                            : 'bg-primary hover:bg-accent'
                        }`}
                      >
                        <ArrowRight className="w-5 h-5" />
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="section-padding bg-cream relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        </div>

        <div className="container mx-auto px-4 relative z-10 max-w-3xl">
          <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0'}`} style={{ transitionDelay: '900ms' }}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Ready to <span className="text-primary">Join Us?</span>
            </h2>
            <p className="text-lg text-gray-600">
              Fill out the form below and we'll review your application.
            </p>
          </div>

          <div className={`bg-card p-8 md:p-12 rounded-3xl shadow-xl border border-border transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0'}`} style={{ transitionDelay: '1000ms' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Full Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Email <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Phone <span className="text-primary">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 123-4567"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Position Applied For <span className="text-primary">*</span>
                </label>
                <select
                  required
                  value={formData.position}
                  onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                >
                  <option value="">Select a position</option>
                  {openings.map((job) => (
                    <option key={job.id} value={job.title}>
                      {job.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Upload CV/Resume <span className="text-primary">*</span>
                </label>
                <div className="relative">
                  <input
                    type="file"
                    required
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    id="cv-upload"
                  />
                  <label
                    htmlFor="cv-upload"
                    className={`flex flex-col items-center justify-center w-full px-4 py-8 border-2 border-dashed rounded-xl cursor-pointer transition-all ${
                      cvFile
                        ? 'border-primary bg-primary/5'
                        : 'border-gray-300 bg-gray-50 hover:border-primary hover:bg-primary/5'
                    }`}
                  >
                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Upload className="text-primary w-6 h-6" />
                      </div>
                      <p className="text-gray-900 font-semibold">
                        {cvFile ? cvFile.name : 'Click to upload your CV'}
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        PDF, DOC, or DOCX (Max 5MB)
                      </p>
                    </div>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Cover Letter / Additional Information
                </label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us why you're a great fit for this position and what makes you stand out..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-bold text-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <Briefcase size={20} />
                Submit Application
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
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

        .hover-lift {
          transition: all 0.3s ease;
        }

        .hover-lift:hover {
          transform: translateY(-8px);
        }

        .text-gradient-to-r {
          background: linear-gradient(to right, var(--tw-gradient-from), var(--tw-gradient-to));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-padding {
          padding: 60px 0;
        }
      `}</style>
    </div>
  );
};

export default EnhancedCareers;