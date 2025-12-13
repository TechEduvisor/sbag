import {
  FileText,
  BarChart3,
  Calculator,
  BookOpen,
  TrendingUp,
  Shield,
} from "lucide-react";
import ServiceLayout from "./ServiceLayout";
const FinancialStatementsService = () => {
  return (
    <ServiceLayout
      badgeIcon={FileText}
      badgeText="Advanced Accounting"
      title="Financial Statements &"
      highlight="Complex Accounting"
      description="Expert preparation of financial statements including consolidations and technical accounting."
      features={[
        {
          icon: FileText,
          title: "Statement Preparation",
          description: "Balance sheet, P&L, and cash flow statements.",
        },
        {
          icon: BarChart3,
          title: "Multi-Entity Consolidation",
          description: "Intercompany eliminations & rollups.",
        },
        {
          icon: Calculator,
          title: "Technical Accounting",
          description: "Revenue recognition, leases, complex areas.",
        },
        {
          icon: BookOpen,
          title: "GAAP / IFRS Advisory",
          description: "Accounting standards guidance.",
        },
        {
          icon: TrendingUp,
          title: "Restatement Support",
          description: "Correction of prior-period errors.",
        },
        {
          icon: Shield,
          title: "Year-End Close",
          description: "Audit-ready closing support.",
        },
      ]}
      benefits={[
        "Accurate complex reporting",
        "Reduced audit issues",
        "Expert technical support",
        "Regulatory compliance",
        "Audit confidence",
      ]}
      process={[
        { step: "01", title: "Assessment", description: "Understand complexities." },
        { step: "02", title: "Preparation", description: "Build accurate statements." },
        { step: "03", title: "Review", description: "Technical validation." },
        { step: "04", title: "Finalization", description: "Audit-ready delivery." },
      ]}
      ctaTitle="Need Help With Complex Accounting?"
    />
  );
};

export default FinancialStatementsService;
