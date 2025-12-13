import IndustryPageLayout from "./IndustryPageLayout";
import { Rocket } from "lucide-react";

export default function StartupsPage() {
  return (
    <IndustryPageLayout
      icon={Rocket}
      title="Startup Accounting"
      description="Flexible financial services designed for early-stage and high-growth startups."
    >
      <div className="space-y-6 text-gray-700 text-lg">
        <p>
          Startups need agile financial systems. We offer bookkeeping, investor reporting, compliance, and CFO advisory.
        </p>

        <h2 className="text-2xl font-bold text-primary">Startup Solutions</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Pitch Deck & Investor-Ready Financials</li>
          <li>Burn Rate Tracking & Forecasting</li>
          <li>Payroll Setup & ESOP Accounting</li>
          <li>Monthly Accounting & Compliance</li>
        </ul>
      </div>
    </IndustryPageLayout>
  );
}
