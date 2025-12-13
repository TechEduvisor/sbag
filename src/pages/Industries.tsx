/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Building2,
  Rocket,
  ShoppingCart,
  Heart,
  Home,
  Factory,
  Briefcase,
  Store,
  Globe,
  Award,
  TrendingUp,
  ArrowRight,
} from 'lucide-react';
import HeroSection from '@/components/HeroSection';

const Industries = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeParticles, setActiveParticles] = useState<any[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);

    const particles = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 3,
    }));

    setActiveParticles(particles);
  }, []);

  const industries = [
    {
      icon: Briefcase,
      title: 'CPA Firms',
      slug: 'cpa-firms',
      description: 'Specialized support services for accounting firms.',
      stat: '50+ Audits',
    },
    {
      icon: Building2,
      title: 'Small & Medium Enterprises',
      slug: 'sme',
      description: 'End-to-end accounting for SMEs.',
      stat: '50+ Managed',
    },
    {
      icon: Rocket,
      title: 'Startups',
      slug: 'startups',
      description: 'Flexible accounting for high-growth startups.',
      stat: '3× Growth',
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce',
      slug: 'ecommerce',
      description: 'Accounting for online & D2C businesses.',
      stat: '$100M GMV',
    },
    {
      icon: Heart,
      title: 'Healthcare',
      slug: 'healthcare',
      description: 'Healthcare-compliant accounting services.',
      stat: '99% Compliant',
    },
    {
      icon: Home,
      title: 'Real Estate',
      slug: 'real-estate',
      description: 'Property & rental accounting solutions.',
      stat: '1,000+ Units',
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      slug: 'manufacturing',
      description: 'Costing, inventory & manufacturing accounting.',
      stat: '$200M Revenue',
    },
    {
      icon: Store,
      title: 'Retail',
      slug: 'retail',
      description: 'POS, reconciliation & inventory tracking.',
      stat: '50+ Stores',
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-background">
      {/* ================= HERO ================= */}
      <HeroSection
        badgeText="Our Expertise"
        title={
          <>
            Industries We{' '}
            <span className="relative inline-block">
              <span className="text-accent relative z-10">Serve</span>
              <span className="absolute inset-0 bg-accent/20 blur-2xl animate-pulse-glow" />
            </span>
          </>
        }
        subtitle="Deep accounting expertise across diverse industries worldwide."
        achievements={[
          { icon: Globe, text: 'Global Presence', detail: '20+ Countries' },
          { icon: Award, text: 'Industry Trust', detail: 'Top Rated Firm' },
          { icon: TrendingUp, text: 'Proven Growth', detail: '40% YoY' },
        ]}
      />

      {/* ================= GRID ================= */}
      <section className="section-padding bg-background relative overflow-hidden">
        {/* Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {activeParticles.map((p) => (
            <div
              key={p.id}
              className="absolute rounded-full bg-accent/10 animate-particle"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                animationDuration: `${p.duration}s`,
                animationDelay: `${p.delay}s`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              const isHovered = hoveredIndex === index;

              return (
                <div
                  key={industry.slug}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => navigate(`/industries/${industry.slug}`)}
                  className={`group cursor-pointer bg-card border rounded-3xl p-8 transition-all duration-500 shadow-lg
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
                    ${isHovered ? 'scale-105 -translate-y-2 shadow-2xl' : ''}
                  `}
                >
                  {/* Icon */}
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition">
                    <Icon
                      size={30}
                      className="text-primary group-hover:text-white transition"
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {industry.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {industry.description}
                  </p>

                  <div className="flex items-center justify-between">
                    {/* <span className="text-sm font-semibold text-primary">
                      {industry.stat}
                    </span> */}

                    <span className="flex items-center gap-1 text-primary font-medium">
                      Explore <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
