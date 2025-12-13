import IndustryPageLayout from "./IndustryPageLayout";
import { Factory } from "lucide-react";

export default function ManufacturingPage() {
  return (
    <IndustryPageLayout
      icon={Factory}
      title="Manufacturing Accounting"
      description="Inventory costing, job costing, production tracking & variance analysis for manufacturing units."
    >
      <div className="space-y-6 text-gray-700 text-lg">
        <p>
          We help manufacturers track cost efficiency and production-level financial insights.
        </p>

        <h2 className="text-2xl font-bold text-primary">Manufacturing Support</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Raw Material & FG Inventory Accounting</li>
          <li>Job Costing Reports</li>
          <li>Production Variance Analysis</li>
          <li>Factory Expense Allocation</li>
        </ul>
      </div>
    </IndustryPageLayout>
  );
}
