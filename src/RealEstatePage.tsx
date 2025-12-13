import IndustryPageLayout from "./IndustryPageLayout";
import { Home } from "lucide-react";

export default function RealEstatePage() {
  return (
    <IndustryPageLayout
      icon={Home}
      title="Real Estate Accounting"
      description="Property rental tracking, investor reporting, and maintenance cost allocation for real estate firms."
    >
      <div className="space-y-6 text-gray-700 text-lg">
        <p>
          Real estate companies rely on accurate property-level reporting to stay profitable.
        </p>

        <h2 className="text-2xl font-bold text-primary">Real Estate Services</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Rent Roll Management</li>
          <li>Tenant Ledger Reconciliation</li>
          <li>Maintenance Cost Allocation</li>
          <li>Property-Level Reporting</li>
        </ul>
      </div>
    </IndustryPageLayout>
  );
}
