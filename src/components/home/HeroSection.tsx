import { useState } from 'react';
import { ArrowRight, PlayCircle, TrendingUp, Shield, Award, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const stats = [
    { icon: Users, value: '50+', label: 'Clients' },
    { icon: Award, value: '12+', label: 'Years Experience' },
    { icon: TrendingUp, value: '95%', label: 'Success Rate' },
    { icon: Shield, value: '100%', label: 'Confidential' }
  ];
 const navigate = useNavigate();
  return (
    <section className="relative min-h-screen  py-20 sm:pt-2 flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary via-forest-green to-dark-olive">

      {/* Background Grid (Static) */}
      <div className="absolute inset-0 opacity-20"
        style={{ 
          backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=")`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-olive/80 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white pt-20 md:my-20">

        {/* Badge */}
        <div className="inline-block mb-6 px-6 py-2 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30">
          <span className="text-accent font-medium flex items-center gap-2">
            ⭐ Trusted by 50+ Businesses Worldwide
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="block">One Stop Solution For</span>
          <span className="block relative">
            <span className="text-accent relative inline-block">
              Bookkeeping & Accounting
              {/* <span className="absolute bottom-2 left-0 h-1 bg-accent/30 rounded-full w-full" /> */}
            </span>
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
          Outsource bookkeeping, audit support, payroll, and financial reporting with experienced US GAAP professionals.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button 
          onClick={() => navigate("/contact")} className="px-8 py-4 bg-primary text-white rounded-lg font-medium text-lg hover:shadow-xl transition-all flex items-center gap-2">
            Contact Us for Consultation
            <ArrowRight size={20} />
          </button>

          <button  onClick={() => navigate("/services")} className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-medium text-lg border border-white/30 hover:bg-white/20 transition-all flex items-center gap-2">
            <PlayCircle size={20} />
            Our Services
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index}>
                <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all cursor-pointer">
                  <Icon className="w-8 h-8 text-accent mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
