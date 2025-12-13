import {
  DollarSign,
  Calculator,
  Shield,
  TrendingUp,
  FileCheck,
  Clock,
  Users,
} from "lucide-react";
import ServiceLayout from "./ServiceLayout";
const PayrollService = () => {
  return (
    <ServiceLayout
      badgeIcon={DollarSign}
      badgeText="Essential Service"
      title="Payroll"
      highlight="Services"
      description="Accurate, compliant payroll processing that keeps employees paid on time."
      features={[
        {
          icon: Calculator,
          title: "Payroll Processing",
          description: "Wages, overtime, bonuses, deductions.",
        },
        {
          icon: Shield,
          title: "Tax Withholding",
          description: "Federal, state, and local taxes.",
        },
        {
          icon: TrendingUp,
          title: "Direct Deposit",
          description: "Timely salary payments.",
        },
        {
          icon: FileCheck,
          title: "Payroll Compliance",
          description: "Full regulatory compliance.",
        },
        {
          icon: Clock,
          title: "W-2 & 1099",
          description: "Year-end filings & distribution.",
        },
        {
          icon: Users,
          title: "Employee Self-Service",
          description: "Payslips & tax documents access.",
        },
      ]}
      benefits={[
        "Error-free payroll",
        "100% compliance",
        "Lower admin cost",
        "On-time salaries",
        "Happier employees",
      ]}
      process={[
        { step: "01", title: "Setup", description: "Configure payroll systems." },
        { step: "02", title: "Processing", description: "Run payroll cycles." },
        { step: "03", title: "Compliance", description: "Tax filings & checks." },
        { step: "04", title: "Reporting", description: "Payslips & summaries." },
      ]}
      ctaTitle="Ready for Hassle-Free Payroll?"
    />
  );
};

export default PayrollService;
