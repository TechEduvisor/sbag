// File: src/pages/AccountingSoftwareDetailsPage.jsx
import {
  Cloud,
  BarChart3,
  FileSpreadsheet,
  Globe2,
  Layers,
  LineChart,
  ShieldCheck,
  Globe,
  Award,
  TrendingUpIcon,
} from "lucide-react";
import HeroSection from "../components/HeroSection";
export default function AccountingSoftwareDetailsPage() {
  const softwares = [
    {
      name: "QuickBooks Online",
      icon: Cloud,
      tag: "SMBs • CPAs • Global",
      description:
        "Cloud-based accounting for small and mid-sized businesses. Ideal for day-to-day bookkeeping, invoicing, and reconciliation.",
      strengths: [
        "Strong ecosystem of apps & integrations",
        "Bank feeds and automated rules",
        "Widely adopted by US and global CPAs",
      ],
    },
    {
      name: "Xero",
      icon: Globe2,
      tag: "Startups • Remote Teams",
      description:
        "Modern, cloud-native platform with great UX. Perfect for distributed teams and multi-currency businesses.",
      strengths: [
        "Excellent multi-currency support",
        "Clean, intuitive interface",
        "Powerful API for automation",
      ],
    },
    {
      name: "NetSuite",
      icon: Layers,
      tag: "Mid–Enterprise • Multi-Entity",
      description:
        "Full-fledged ERP with advanced financials, suitable for growing companies needing deep controls and consolidation.",
      strengths: [
        "Robust multi-entity & consolidation feature set",
        "Advanced reporting & approval workflows",
        "Scalable as business complexity grows",
      ],
    },
    {
      name: "FreshBooks",
      icon: FileSpreadsheet,
      tag: "Freelancers • Agencies",
      description:
        "Client-centric accounting with simple time tracking, invoicing, and expense management.",
      strengths: [
        "Great for service-based businesses",
        "Clean invoicing & expense workflows",
        "Easy for non-finance founders to use",
      ],
    },
    {
      name: "Wave Accounting",
      icon: BarChart3,
      tag: "Bootstrapped • Micro Businesses",
      description:
        "Cost-effective solution for small businesses needing basic accounting, invoicing, and receipt capture.",
      strengths: [
        "Low cost of ownership",
        "Simple UI for basic accounting",
        "Good fit for very small operations",
      ],
    },
    {
      name: "Zoho Books",
      icon: LineChart,
      tag: "SMBs • Zoho Ecosystem",
      description:
        "Part of the Zoho suite. Ideal when you want CRM, billing, and accounting tightly integrated in one stack.",
      strengths: [
        "Deep integration with other Zoho apps",
        "Good automation & workflow features",
        "Strong value for money",
      ],
    },
    {
      name: "Sage Intacct",
      icon: ShieldCheck,
      tag: "US GAAP • Audit-Heavy",
      description:
        "AICPA-preferred system designed for strong internal controls, auditability, and complex reporting.",
      strengths: [
        "Built for strong audit trails",
        "Powerful dimensional reporting",
        "Great for nonprofits and multi-location entities",
      ],
    },
  ];

  return (
    <div className="min-h-screen  bg-background py-20">
      <HeroSection
        badgeText="Accounting Software"
        title={
          <>
            Our Accounting Tech Stack{" "}
            <span className="relative inline-block">
              <span className="text-accent relative z-10">
                Accounting Software
              </span>
              <span className="absolute inset-0 bg-accent/20 blur-2xl animate-pulse-glow" />
            </span>
          </>
        }
        subtitle="Deep accounting expertise across diverse industries worldwide."
        achievements={[
          { icon: Globe, text: "Global Presence", detail: "20+ Countries" },
          { icon: Award, text: "Industry Trust", detail: "Top Rated Firm" },
          { icon: TrendingUpIcon, text: "Proven Growth", detail: "40% YoY" },
        ]}
      />{" "}
      <div className="container mt-20 ">
       

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {softwares.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.name}
                className="relative bg-card border border-border rounded-2xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Icon + title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-foreground">
                      {s.name}
                    </h2>
                    <p className="text-xs uppercase tracking-wide text-primary/80 mt-1">
                      {s.tag}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4">{s.description}</p>

                {/* Strength bullets */}
                <ul className="space-y-1.5 text-sm text-gray-600">
                  {s.strengths.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1 inline-block w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Decorative underline */}
                <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="text-center mt-14 text-sm text-gray-500">
          Need help deciding the right platform? We can perform a quick fitment
          study based on your industry, volume, and reporting needs.
        </div>
      </div>
    </div>
  );
}
