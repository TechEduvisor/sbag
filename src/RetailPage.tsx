import IndustryPageLayout from "./IndustryPageLayout";
import { Store } from "lucide-react";

export default function RetailPage() {
  return (
    <IndustryPageLayout
      icon={Store}
      title="Retail Accounting"
      description="POS reconciliation, store-wise inventory tracking, and financial reporting for retail chains & single outlets."
    >
      <div className="space-y-6 text-gray-700 text-lg">
        <p>
          Retail accounting demands precision. We manage store financials end-to-end.
        </p>

        <h2 className="text-2xl font-bold text-primary">Retail Expertise</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>POS Day-End Reconciliation</li>
          <li>Stock Audits & Inventory Tracking</li>
          <li>Multi-Store Expense Allocation</li>
          <li>Monthly P&L Reports</li>
        </ul>
      </div>
    </IndustryPageLayout>
  );
}
