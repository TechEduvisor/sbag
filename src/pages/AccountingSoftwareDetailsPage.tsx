// File: src/pages/AccountingSoftwareDetailsPage.jsx
import {
  Globe,
  Award,
  TrendingUpIcon,
} from "lucide-react";
import HeroSection from "../components/HeroSection";

export default function AccountingSoftwareDetailsPage() {
 const softwares = [
  {
    name: "QuickBooks",
    logo: "https://cdn.worldvectorlogo.com/logos/quickbooks-1.svg",
    fallbackIcon: "QB",
    color: "from-green-700 to-emerald-700",
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
    name: "Sage",
    logo: "https://cdn.worldvectorlogo.com/logos/sage-2.svg",
    fallbackIcon: "S",
    color: "from-green-700 to-emerald-700",
    tag: "Mid-Market • Advanced Reporting",
    description:
      "Enterprise-grade accounting with advanced reporting and multi-entity capabilities. Perfect for complex organizational structures.",
    strengths: [
      "Powerful multi-entity consolidation",
      "Advanced financial reporting & analytics",
      "Strong audit trails and compliance features",
    ],
  },
  {
    name: "Xero",
    logo: "https://cdn.worldvectorlogo.com/logos/xero-1.svg",
    fallbackIcon: "X",
    color: "from-blue-500 to-blue-600",
    tag: "Modern • Cloud-First",
    description:
      "Modern, cloud-native platform with beautiful UX. Perfect for distributed teams and businesses prioritizing user experience.",
    strengths: [
      "Excellent multi-currency support",
      "Clean, intuitive interface",
      "Powerful API for automation",
    ],
  },
  {
    name: "Wave",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Wave_Accounting_logo.svg",
    fallbackIcon: "W",
    color: "from-cyan-500 to-blue-500",
    tag: "Freelancers • Micro Businesses",
    description:
      "Free accounting software for freelancers and very small businesses. Simple invoicing, expense tracking, and basic bookkeeping.",
    strengths: [
      "Completely free for core features",
      "Simple UI for basic accounting",
      "Great for solo entrepreneurs",
    ],
  },
  {
    name: "NetSuite",
    logo: "https://cdn.worldvectorlogo.com/logos/netsuite-1.svg",
    fallbackIcon: "NS",
    color: "from-red-600 to-red-700",
    tag: "Enterprise • ERP • Multi-Entity",
    description:
      "Comprehensive cloud ERP with advanced financials. Built for enterprise-scale operations with complex requirements.",
    strengths: [
      "Full ERP suite with financial management",
      "Advanced multi-entity consolidation",
      "Scalable for high-growth companies",
    ],
  },
  {
    name: "Zoho Books",
    logo: "https://cdn.worldvectorlogo.com/logos/zoho-1.svg",
    fallbackIcon: "ZB",
    color: "from-yellow-600 to-orange-600",
    tag: "SMBs • GST Ready • Scalable",
    description:
      "Cloud accounting with GST compliance and automation. Perfect for businesses in the Zoho ecosystem seeking integrated solutions.",
    strengths: [
      "GST-ready with automated compliance",
      "Deep integration with Zoho suite",
      "Strong automation & workflow features",
    ],
  },
  {
    name: "UltraTax",
    logo: "https://cdn.worldvectorlogo.com/logos/thomson-reuters.svg",
    fallbackIcon: "UT",
    color: "from-blue-700 to-blue-800",
    tag: "Tax Pros • Compliance",
    description:
      "Professional tax preparation software for accounting firms. Comprehensive compliance tools for complex tax scenarios.",
    strengths: [
      "Robust tax preparation workflows",
      "Built-in compliance checks",
      "Trusted by tax professionals",
    ],
  },
  {
    name: "TurboTax",
    logo: "https://cdn.worldvectorlogo.com/logos/turbotax.svg",
    fallbackIcon: "TT",
    color: "from-red-500 to-red-600",
    tag: "Individuals • DIY Filing",
    description:
      "User-friendly tax filing for individuals and small businesses. Step-by-step guidance with maximum refund guarantees.",
    strengths: [
      "Intuitive interview-style filing",
      "Accurate calculations with audit support",
      "Import from W-2s and previous returns",
    ],
  },
  {
    name: "ProConnect",
    logo: "https://cdn.worldvectorlogo.com/logos/intuit.svg",
    fallbackIcon: "PC",
    color: "from-blue-600 to-blue-700",
    tag: "CPAs • Tax Preparers",
    description:
      "Professional tax software for CPAs and accounting firms. Cloud-based with seamless QuickBooks integration.",
    strengths: [
      "Seamless Intuit ecosystem integration",
      "Cloud-based for remote work",
      "Built for professional tax preparers",
    ],
  },
  {
    name: "ADP Payroll",
    logo: "https://cdn.worldvectorlogo.com/logos/adp-3.svg",
    fallbackIcon: "ADP",
    color: "from-red-600 to-red-700",
    tag: "Enterprise • Compliance",
    description:
      "Enterprise payroll processing with full compliance management. Scalable solution for businesses of all sizes.",
    strengths: [
      "Comprehensive compliance & tax filing",
      "Scalable for any business size",
      "Full-service HR & benefits administration",
    ],
  },
  {
    name: "Gusto",
    logo: "https://cdn.worldvectorlogo.com/logos/gusto-1.svg",
    fallbackIcon: "G",
    color: "from-orange-500 to-red-500",
    tag: "SMBs • Modern HR",
    description:
      "Simple, modern payroll and HR platform for small businesses. Automated tax filing with employee self-service.",
    strengths: [
      "Beautiful, intuitive interface",
      "Automated payroll & tax compliance",
      "Integrated benefits & HR tools",
    ],
  },
  {
    name: "Paychex",
    logo: "https://cdn.worldvectorlogo.com/logos/paychex.svg",
    fallbackIcon: "PX",
    color: "from-blue-600 to-indigo-600",
    tag: "Full-Service • Workforce Solutions",
    description:
      "Complete payroll and workforce management with dedicated support. Full-service solution for growing businesses.",
    strengths: [
      "Full-service payroll with support",
      "Comprehensive HR & benefits",
      "Time tracking & workforce analytics",
    ],
  },
];

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement>,
    fallbackIcon: string,
    color: string
  ) => {
    const target = e.currentTarget;
    const parent = target.parentElement;
    if (parent) {
      parent.innerHTML = `
        <div class="w-full h-full flex items-center justify-center bg-gradient-to-br ${color} rounded-2xl">
          <span class="text-white font-bold text-lg">${fallbackIcon}</span>
        </div>
      `;
    }
  };

  return (
    <div className="min-h-screen bg-background py-20">
      <HeroSection
        badgeText="Accounting Software"
        title={
          <>
            Our{" "}
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
          { icon: Globe, text: "Global Presence", detail: "5+ Countries" },
          { icon: Award, text: "Industry Trust", detail: "Top Rated Firm" },
          { icon: TrendingUpIcon, text: "Proven Growth", detail: "40% YoY" },
        ]}
      />
      
      <div className="container mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {softwares.map((s) => {
            return (
              <div
                key={s.name}
                className="relative bg-card border border-border rounded-2xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Logo + title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-border flex items-center justify-center flex-shrink-0 p-2 overflow-hidden">
                    <img
                      src={s.logo}
                      alt={`${s.name} logo`}
                      className="w-full h-full object-contain"
                      onError={(e) => handleImageError(e, s.fallbackIcon, s.color)}
                      crossOrigin="anonymous"
                    />
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