import IndustryPageLayout from "./IndustryPageLayout";
import { Building2 } from "lucide-react";

export default function SMEPage() {
  return (
    <IndustryPageLayout
      icon={Building2}
      title="Small & Medium Enterprises"
      description="Accounting services for SMEs that need reliable financial clarity, compliance, and growth readiness."
    >
      <div className="space-y-6 text-gray-700 text-lg">
        <p>
          We help small and medium businesses maintain financial discipline, manage cash flow, and stay compliant.
        </p>

        <h2 className="text-2xl font-bold text-primary">What We Offer</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Monthly Bookkeeping</li>
          <li>Vendor Payments & Reconciliation</li>
          <li>GST, TDS & Payroll Compliance</li>
          <li>Quarterly Business Reviews</li>
        </ul>
      </div>
    </IndustryPageLayout>
  );
}
