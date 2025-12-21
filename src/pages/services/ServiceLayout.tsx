/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

interface Feature {
  icon: any;
  title: string;
  description: string;
}

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

interface ServiceLayoutProps {
  badgeIcon: any;
  badgeText: string;
  title: string;
  highlight: string;
  description: string;
  features: Feature[];
  benefits: string[];
  process: ProcessStep[];
  ctaTitle: string;
}

const ServiceLayout = ({
  badgeIcon: BadgeIcon,
  badgeText,
  title,
  highlight,
  description,
  features,
  benefits,
  process,
  ctaTitle,
}: ServiceLayoutProps) => {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setVisible(true);
  }, []);

  return (
    <div className="min-h-screen pt-20 bg-background">
      {/* ================= HERO ================= */}
      <section className="relative section-padding bg-gradient-to-br from-secondary to-forest-green overflow-hidden">
        {/* Ambient background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float-delayed" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div
            className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-accent/20 backdrop-blur-sm rounded-full mb-6 border border-accent/30">
              <BadgeIcon className="text-accent w-5 h-5" />
              <span className="text-accent font-semibold text-sm">
                {badgeText}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
              {title}{" "}
              <span className="relative inline-block">
                <span className="text-accent relative z-10">
                  {highlight}
                </span>
                <span className="absolute inset-0 bg-accent/20 blur-2xl animate-pulse-glow" />
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              {description}
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-semibold hover:bg-accent transition-all shadow-lg hover:scale-105"
            >
              Get Started <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => {
            const Icon = f.icon;
            const isHover = hovered === i;

            return (
              <div
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className={`p-8 bg-card rounded-3xl border border-border transition-all duration-300 ${
                  isHover ? "scale-105 -translate-y-2 shadow-2xl" : "shadow-lg"
                }`}
              >
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all ${
                    isHover ? "bg-primary scale-110" : "bg-primary/10"
                  }`}
                >
                  <Icon
                    className={`w-8 h-8 ${
                      isHover ? "text-white" : "text-primary"
                    }`}
                  />
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {f.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {f.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="section-padding bg-cream">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Why Choose Our{" "}
              <span className="text-primary">{highlight}</span>?
            </h2>

            {benefits.map((b, i) => (
              <div key={i} className="flex gap-3 mb-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-gray-700 font-medium">{b}</span>
              </div>
            ))}
          </div>

          <div className="bg-secondary text-white p-10 rounded-3xl shadow-2xl">
            <div className="space-y-4">
              {[
                ["Accuracy Rate", "99.9%"],
                ["On-Time Delivery", "99%"],
                ["Client Satisfaction", "99%"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex justify-between bg-white/10 p-4 rounded-xl"
                >
                  <span>{label}</span>
                  <span className="text-accent font-bold">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

   <section className="section-padding bg-gradient-to-br from-secondary to-forest-green text-white">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center relative">
      {process.map((p, i) => (
        <div key={i} className="relative process-step">
          {/* Step Circle */}
          <div className="w-20 h-20 mx-auto bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 relative z-10">
            {p.step}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold mb-2 text-white">
            {p.title}
          </h3>

          {/* Description */}
          <p className="text-white/80 max-w-xs mx-auto">
            {p.description}
          </p>

          {i !== process.length - 1 && (
            <div className="hidden md:block absolute top-10 right-[-50%] w-full h-px bg-white/30" />
          )}
        </div>
      ))}
    </div>
  </div>
</section>


      <section className="py-14 bg-cream text-center text-gray-900">
  <Sparkles className="w-16 h-16 mx-auto mb-6 text-primary" />

  <h2 className="text-4xl md:text-5xl font-bold mb-6">
    {ctaTitle}
  </h2>

  <Link
    to="/contact"
    className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-semibold hover:bg-accent shadow-lg"
  >
    Contact Us <ArrowRight />
  </Link>
</section>

    </div>
  );
};

export default ServiceLayout;
