import {
  Shield,
  TrendingUp,
  Wallet,
  Briefcase,
  Target,
  Users,
  Clock,
} from "lucide-react";
import ServiceLayout from "./ServiceLayout";
const VirtualCFOService = () => {
  return (
    <ServiceLayout
      badgeIcon={Shield}
      badgeText="Strategic Advisory"
      title="Virtual"
      highlight="CFO"
      description="On-demand senior financial leadership without the cost of a full-time CFO."
      features={[
        {
          icon: TrendingUp,
          title: "Strategic Planning",
          description: "Long-term financial roadmaps.",
        },
        {
          icon: Wallet,
          title: "Cash Flow Management",
          description: "Liquidity and working capital optimization.",
        },
        {
          icon: Briefcase,
          title: "Budgeting & Forecasting",
          description: "Rolling budgets and projections.",
        },
        {
          icon: Target,
          title: "Performance Dashboards",
          description: "Board-ready KPIs and insights.",
        },
        {
          icon: Users,
          title: "Investor Support",
          description: "Fundraising & board presentations.",
        },
        {
          icon: Clock,
          title: "On-Demand CFO",
          description: "Senior expertise when needed.",
        },
      ]}
      benefits={[
        "Executive-level insight",
        "Lower leadership cost",
        "Better strategic decisions",
        "Investor-ready finance",
        "Scalable CFO support",
      ]}
      process={[
        { step: "01", title: "Assessment", description: "Understand business goals." },
        { step: "02", title: "Planning", description: "Build financial strategy." },
        { step: "03", title: "Execution", description: "Ongoing CFO guidance." },
        { step: "04", title: "Optimization", description: "Continuous improvement." },
      ]}
      ctaTitle="Need CFO-Level Guidance?"
    />
  );
};

export default VirtualCFOService;
