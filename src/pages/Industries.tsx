/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
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
  X,
  CheckCircle2,
} from "lucide-react";
import HeroSection from "../components/HeroSection";

type Industry = {
  icon: any;
  title: string;
  description: string;
  stat: string;
  longDescription: string;
  highlights: string[];
  services: string[];
};

const Industries = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [openIndustry, setOpenIndustry] = useState<Industry | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Close modal on ESC
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndustry(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const industries: Industry[] = [
    {
      icon: Briefcase,
      title: "CPA Firms",
      description: "Specialized audit & accounting support for CPA firms.",
      stat: "5+ Audits",
      longDescription:
        "We partner with CPA firms to deliver reliable audit execution support, including workpapers, testing, documentation, and PBC coordination—helping firms meet deadlines without compromising quality.",
      highlights: [
        "GAAS-aligned workpapers",
        "Testing & sampling support",
        "PBC coordination",
        "Clean documentation",
      ],
      services: [
        "Audit workpaper preparation",
        "Testing & sampling",
        "ICFR evaluation support",
        "Client coordination",
        "Wrap-up documentation",
      ],
    },
    {
      icon: Building2,
      title: "SMEs",
      description: "End-to-end accounting for growing businesses.",
      stat: "12+ Managed",
      longDescription:
        "We support SMEs with reliable bookkeeping, reconciliations, reporting, and compliance—giving business owners clarity and control over finances.",
      highlights: [
        "Monthly bookkeeping",
        "Cashflow visibility",
        "Compliance-ready books",
        "Scalable support",
      ],
      services: [
        "Bookkeeping & GL",
        "AR / AP management",
        "Bank reconciliation",
        "Monthly reporting",
        "Compliance support",
      ],
    },
    {
      icon: Rocket,
      title: "Startups",
      description: "Finance support for high-growth startups.",
      stat: "3× Growth",
      longDescription:
        "We help startups build strong financial foundations—accounting setup, runway reporting, investor metrics, and scalable finance operations.",
      highlights: [
        "Runway & burn analysis",
        "Investor-ready reports",
        "Fast close",
        "Scalable systems",
      ],
      services: [
        "Accounting setup",
        "Monthly close",
        "Forecasting support",
        "Investor reporting",
        "Process automation",
      ],
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "Accounting for D2C & marketplace sellers.",
      stat: "$1000 GMV",
      longDescription:
        "We manage payouts, reconciliations, inventory, and margin tracking—so your ecommerce numbers match reality.",
      highlights: [
        "Payout reconciliation",
        "Inventory accuracy",
        "Returns tracking",
        "Margin analysis",
      ],
      services: [
        "Marketplace reconciliation",
        "COGS & inventory accounting",
        "Sales tax support",
        "Monthly KPIs",
      ],
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Compliance-first healthcare accounting.",
      stat: "99% Compliant",
      longDescription:
        "We provide compliant accounting, reporting, and payroll support for healthcare organizations with strong internal controls.",
      highlights: [
        "Compliance focus",
        "Audit-ready records",
        "Accurate payroll",
      ],
      services: [
        "Bookkeeping",
        "Payroll support",
        "Financial reporting",
        "Audit preparation",
      ],
    },
    {
      icon: Home,
      title: "Real Estate",
      description: "Property-level accounting & reporting.",
      stat: "80+ Units",
      longDescription:
        "We support real estate businesses with rent roll reconciliation, property-level P&L, and timely close.",
      highlights: [
        "Property-wise reporting",
        "Rent reconciliation",
        "Timely close",
      ],
      services: [
        "Rent roll reconciliation",
        "Property P&L",
        "Owner reporting",
        "Audit prep",
      ],
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Costing & inventory accounting.",
      stat: "$2000 Revenue",
      longDescription:
        "Manufacturing accounting requires precision. We support costing, inventory reconciliation, and margin reporting.",
      highlights: [
        "COGS accuracy",
        "Inventory control",
        "Margin visibility",
      ],
      services: [
        "Inventory reconciliation",
        "Costing support",
        "Operational reporting",
      ],
    },
    {
      icon: Store,
      title: "Retail",
      description: "POS & inventory accounting.",
      stat: "12+ Stores",
      longDescription:
        "We help retail businesses with POS reconciliation, inventory tracking, and store-level financial reporting.",
      highlights: [
        "POS reconciliation",
        "Store-wise P&L",
        "Inventory clarity",
      ],
      services: [
        "POS reconciliation",
        "Inventory tracking",
        "Monthly reporting",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-background">
      {/* HERO */}
      <HeroSection
        badgeText="Our Expertise"
        title={
          <>
            Industries We{" "}
            <span className="relative inline-block">
              <span className="text-accent relative z-10">Serve</span>
              <span className="absolute inset-0 bg-accent/20 blur-2xl" />
            </span>
          </>
        }
        subtitle="Deep accounting expertise across diverse industries worldwide."
        achievements={[
          { icon: Globe, text: "Global Presence", detail: "5+ Countries" },
          { icon: Award, text: "Industry Trust", detail: "Top Rated Firm" },
          { icon: TrendingUp, text: "Proven Growth", detail: "40% YoY" },
        ]}
      />

      {/* GRID */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={industry.title}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setOpenIndustry(industry)}
                className={`cursor-pointer bg-card border rounded-3xl p-8 shadow-lg transition-all duration-300
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
                  ${isHovered ? "scale-105 -translate-y-2 shadow-2xl" : ""}
                `}
              >
                <div className="w-16 h-16 mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Icon size={30} className="text-primary" />
                </div>

                <h3 className="text-xl font-bold mb-2">{industry.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{industry.description}</p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 font-semibold">
                    {industry.stat}
                  </span>
                  <span className="flex items-center gap-1 text-primary font-medium">
                    Explore <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* MODAL */}
      {openIndustry && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpenIndustry(null)}
          />

          <div className="relative bg-card rounded-3xl max-w-3xl w-full shadow-2xl overflow-hidden">
            <div className="p-6 border-b flex justify-between">
              <h3 className="text-2xl font-bold">{openIndustry.title}</h3>
              <button onClick={() => setOpenIndustry(null)}>
                <X />
              </button>
            </div>

            <div className="p-6 space-y-6 max-h-[70vh] overflow-auto">
              <p className="text-gray-700">{openIndustry.longDescription}</p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-3">Highlights</h4>
                  {openIndustry.highlights.map((h) => (
                    <div key={h} className="flex gap-2 mb-2">
                      <CheckCircle2 className="text-primary w-5 h-5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div>
                  <h4 className="font-bold mb-3">Services</h4>
                  {openIndustry.services.map((s) => (
                    <div key={s} className="flex gap-2 mb-2">
                      <CheckCircle2 className="text-primary w-5 h-5" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 border-t text-right">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-accent"
              >
                Contact Us <ArrowRight />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Industries;
