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
      {/* HERO */}
      <section className="relative section-padding bg-gradient-to-br from-secondary to-forest-green overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-300 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl animate-float-delayed" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div
            className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
              visible ? "opacity-100 translate-y-0" : ""
            }`}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6 border border-white/30">
              <BadgeIcon className="text-white w-5 h-5" />
              <span className="text-white font-semibold text-sm">{badgeText}</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
              {title}{" "}
              <span className="relative inline-block">
                <span className="text-yellow-300 relative z-10">{highlight}</span>
                <span className="absolute inset-0 bg-yellow-300/20 blur-2xl" />
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8">
              {description}
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-400 text-gray-900 rounded-xl font-semibold hover:bg-yellow-300 transition-all shadow-lg hover:scale-105"
            >
              Get Started <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section-padding bg-cream">
        <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => {
            const Icon = f.icon;
            const isHover = hovered === i;

            return (
              <div
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className={`p-8 bg-card rounded-2xl border transition-all duration-300 ${
                  isHover ? "scale-105 -translate-y-2 shadow-2xl" : "shadow-lg"
                }`}
              >
                <div
                  className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
                    isHover ? "bg-green-600" : "bg-green-50"
                  }`}
                >
                  <Icon
                    className={`w-8 h-8 ${
                      isHover ? "text-white" : "text-green-600"
                    }`}
                  />
                </div>

                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-gray-600">{f.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section-padding bg-background">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose Our{" "}
              <span className="text-green-600">{highlight}</span>?
            </h2>

            {benefits.map((b, i) => (
              <div key={i} className="flex gap-3 mb-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-gray-700 font-medium">{b}</span>
              </div>
            ))}
          </div>

          <div className="bg-green-700 text-white p-10 rounded-3xl shadow-2xl">
            <div className="space-y-4">
              <div className="flex justify-between bg-white/10 p-4 rounded-xl">
                <span>Accuracy Rate</span>
                <span className="text-yellow-300 font-bold">99.9%</span>
              </div>
              <div className="flex justify-between bg-white/10 p-4 rounded-xl">
                <span>On-Time Delivery</span>
                <span className="text-yellow-300 font-bold">95%</span>
              </div>
              <div className="flex justify-between bg-white/10 p-4 rounded-xl">
                <span>Client Satisfaction</span>
                <span className="text-yellow-300 font-bold">97%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-padding bg-cream">
        <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {process.map((p, i) => (
            <div key={i}>
              <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-yellow-400 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                {p.step}
              </div>
              <h3 className="text-xl font-bold mb-2">{p.title}</h3>
              <p className="text-gray-600">{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-green-700 to-emerald-800 text-white text-center">
        <Sparkles className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
        <h2 className="text-4xl md:text-5xl font-bold mb-6">{ctaTitle}</h2>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-400 text-gray-900 rounded-xl font-semibold hover:bg-yellow-300 shadow-lg"
        >
          Contact Us <ArrowRight />
        </Link>
      </section>
    </div>
  );
};

export default ServiceLayout;
