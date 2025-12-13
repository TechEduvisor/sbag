import {
  Calculator,
  LineChart,
  BarChart3,
  Layers,
  Activity,
  FileSpreadsheet,
} from "lucide-react";
import ServiceLayout from "./ServiceLayout";
const FinancialModelingService = () => {
  return (
    <ServiceLayout
      badgeIcon={Calculator}
      badgeText="Financial Modeling"
      title="Financial"
      highlight="Modeling"
      description="Data-driven financial models that support growth, fundraising, and strategic planning."
      features={[
        {
          icon: Calculator,
          title: "3-Statement Financial Models",
          description:
            "Integrated income statement, balance sheet, and cash flow models.",
        },
        {
          icon: LineChart,
          title: "Forecasting & Projections",
          description:
            "Driver-based forecasts for revenue, costs, and cash flows.",
        },
        {
          icon: BarChart3,
          title: "Scenario & Sensitivity Analysis",
          description:
            "Best, base, and worst-case scenarios to assess risk and upside.",
        },
        {
          icon: Layers,
          title: "Valuation Models",
          description:
            "DCF, comparable company, and transaction-based valuation models.",
        },
        {
          icon: FileSpreadsheet,
          title: "Investor-Ready Models",
          description:
            "Clean, well-structured models ready for investors and lenders.",
        },
        {
          icon: Activity,
          title: "Ongoing Model Updates",
          description:
            "Continuous updates as business data and strategies evolve.",
        },
      ]}
      benefits={[
        "Improve decision-making confidence",
        "Support fundraising & debt raises",
        "Understand cash flow clearly",
        "Stress-test business assumptions",
        "Board & investor-ready outputs",
        "Reduce strategic uncertainty",
      ]}
      process={[
        {
          step: "01",
          title: "Requirement Discovery",
          description: "Understand business goals and use-cases.",
        },
        {
          step: "02",
          title: "Model Build",
          description: "Develop robust and transparent financial models.",
        },
        {
          step: "03",
          title: "Review & Validation",
          description: "Stress-test assumptions and outputs.",
        },
        {
          step: "04",
          title: "Delivery & Support",
          description: "Handover with walkthrough and ongoing updates.",
        },
      ]}
      ctaTitle="Need a Model You Can Trust?"
    />
  );
};

export default FinancialModelingService;
