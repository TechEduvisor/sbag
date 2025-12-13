import {
  FileText,
  BarChart3,
  PieChart,
  Calendar,
  Layers,
} from "lucide-react";
import ServiceLayout from "./ServiceLayout";
const FinancialReportingService = () => {
  return (
    <ServiceLayout
      badgeIcon={FileText}
      badgeText="Reporting Services"
      title="Financial"
      highlight="Reporting"
      description="Accurate, audit-ready financial reports that give stakeholders confidence."
      features={[
        {
          icon: FileText,
          title: "Financial Statements",
          description: "GAAP/IFRS-compliant statements.",
        },
        {
          icon: BarChart3,
          title: "Management Reporting",
          description: "KPI-driven performance reports.",
        },
        {
          icon: PieChart,
          title: "Group Consolidation",
          description: "Multi-entity consolidation support.",
        },
        {
          icon: Calendar,
          title: "Month & Year-End Close",
          description: "Timely close and reporting cycles.",
        },
        {
          icon: Layers,
          title: "Compliance Reporting",
          description: "Statutory and regulatory reporting.",
        },
      ]}
      benefits={[
        "Clear financial visibility",
        "Audit-ready reports",
        "Faster close cycles",
        "Improved decision-making",
        "Stakeholder confidence",
      ]}
      process={[
        { step: "01", title: "Data Collection", description: "Gather financial data." },
        { step: "02", title: "Processing", description: "Prepare reports & schedules." },
        { step: "03", title: "Review", description: "Validation & quality checks." },
        { step: "04", title: "Delivery", description: "Finalize and share reports." },
      ]}
      ctaTitle="Want Reports You Can Trust?"
    />
  );
};

export default FinancialReportingService;
