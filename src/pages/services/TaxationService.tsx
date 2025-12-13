import {
  Calculator,
  FileText,
  BookOpen,
  Shield,
  Users,
  Clock,
  TrendingDown,
} from "lucide-react";
import ServiceLayout from "./ServiceLayout";
const TaxationService = () => {
  return (
    <ServiceLayout
      badgeIcon={Calculator}
      badgeText="Tax Services"
      title="Taxation"
      highlight="Services"
      description="Strategic tax planning and compliance to minimize risk and optimize savings."
      features={[
        {
          icon: FileText,
          title: "Tax Planning",
          description: "Proactive tax optimization strategies.",
        },
        {
          icon: BookOpen,
          title: "Return Preparation",
          description: "Federal & state tax filings.",
        },
        {
          icon: Shield,
          title: "Tax Compliance",
          description: "Timely, accurate submissions.",
        },
        {
          icon: Users,
          title: "Audit Support",
          description: "IRS and state audit assistance.",
        },
        {
          icon: Clock,
          title: "IRS Correspondence",
          description: "Handling tax authority notices.",
        },
        {
          icon: TrendingDown,
          title: "Tax Optimization",
          description: "Credits, deductions, savings.",
        },
      ]}
      benefits={[
        "Lower tax burden",
        "Reduced compliance risk",
        "Expert representation",
        "Peace of mind",
        "Long-term savings",
      ]}
      process={[
        { step: "01", title: "Review", description: "Analyze tax position." },
        { step: "02", title: "Planning", description: "Optimize strategy." },
        { step: "03", title: "Filing", description: "Prepare & submit returns." },
        { step: "04", title: "Support", description: "Ongoing assistance." },
      ]}
      ctaTitle="Need Smarter Tax Solutions?"
    />
  );
};

export default TaxationService;
