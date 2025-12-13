import IndustryPageLayout from "./IndustryPageLayout";
import { Heart } from "lucide-react";

export default function HealthcarePage() {
  return (
    <IndustryPageLayout
      icon={Heart}
      title="Healthcare Accounting"
      description="Medical billing, insurance reconciliation, and financial management for clinics, hospitals, and healthcare providers."
    >
      <div className="space-y-6 text-gray-700 text-lg">
        <p>
          Clinics and healthcare organizations rely on us for accurate, compliant financial handling.
        </p>

        <h2 className="text-2xl font-bold text-primary">Healthcare Services</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Medical Billing Reconciliation</li>
          <li>Insurance Claim Tracking</li>
          <li>Payroll for Healthcare Staff</li>
          <li>Regulatory Compliance</li>
        </ul>
      </div>
    </IndustryPageLayout>
  );
}
