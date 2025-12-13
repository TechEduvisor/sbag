import {
  BookOpen,
  FileCheck,
  TrendingUp,
  BarChart3,
  Calculator,
  Clock,
  Shield,
} from "lucide-react";
import ServiceLayout from "./ServiceLayout";

const BookkeepingService = () => {
  return (
    <ServiceLayout
      badgeIcon={BookOpen}
      badgeText="Core Service"
      title="Bookkeeping &"
      highlight="Accounting"
      description="Accurate, organized bookkeeping that keeps your financial records clean and compliant."
      features={[
        {
          icon: FileCheck,
          title: "General Ledger Maintenance",
          description: "Accurate transaction recording and classification.",
        },
        {
          icon: TrendingUp,
          title: "Accounts Payable & Receivable",
          description: "Efficient management of cash inflows and outflows.",
        },
        {
          icon: BarChart3,
          title: "Bank Reconciliation",
          description: "Regular reconciliation to identify discrepancies early.",
        },
        {
          icon: Calculator,
          title: "Monthly Financial Reports",
          description: "Clear, decision-ready financial reporting.",
        },
        {
          icon: Clock,
          title: "Journal Entries & Adjustments",
          description: "Period-end adjustments for accurate books.",
        },
        {
          icon: Shield,
          title: "Compliance Management",
          description: "Adherence to accounting and regulatory standards.",
        },
      ]}
      benefits={[
        "Save operational costs",
        "Reduce accounting errors",
        "Real-time financial visibility",
        "Scalable bookkeeping support",
        "Regulatory compliance",
      ]}
      process={[
        { step: "01", title: "Assessment", description: "Understand your books and needs." },
        { step: "02", title: "Setup", description: "Configure systems and workflows." },
        { step: "03", title: "Ongoing Support", description: "Monthly bookkeeping and reporting." },
        { step: "04", title: "Optimization", description: "Continuous improvements." },
      ]}
      ctaTitle="Ready to Simplify Your Bookkeeping?"
    />
  );
};

export default BookkeepingService;
