import IndustryPageLayout from "./IndustryPageLayout";
import { ShoppingCart } from "lucide-react";

export default function EcommercePage() {
  return (
    <IndustryPageLayout
      icon={ShoppingCart}
      title="E-Commerce Accounting"
      description="Complete financial management for online brands, marketplaces, and multichannel sellers."
    >
      <div className="space-y-6 text-gray-700 text-lg">
        <p>
          We provide specialized accounting solutions for fast-moving e-commerce businesses selling across multiple platforms.
        </p>

        <h2 className="text-2xl font-bold text-primary">Our Expertise</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Marketplace Reconciliation (Amazon, Shopify, Flipkart)</li>
          <li>Inventory Valuation & COGS Tracking</li>
          <li>Return & Refund Accounting</li>
          <li>GST & Sales Tax Filing</li>
        </ul>
      </div>
    </IndustryPageLayout>
  );
}
