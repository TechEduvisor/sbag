import { Briefcase } from "lucide-react";
import IndustryPageLayout from "./IndustryPageLayout";

export default function CPAFirmsPage() {
  return (
    <IndustryPageLayout
      icon={Briefcase}
      title="CPA Firms"
      description="Audit support, tax preparation, bookkeeping assistance, and financial reporting for accounting firms of all sizes."
    >
      <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
        <p>
          We specialize in offering outsourced accounting and audit support services to CPA firms. 
          Our team helps reduce workload, increase efficiency, and improve turnaround time.
        </p>

        <h2 className="text-2xl font-bold text-primary">Services Provided</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Audit Workpapers & Financial Statement Prep</li>
          <li>Bookkeeping & Bank Reconciliation</li>
          <li>Payroll & Tax Filing Assistance</li>
          <li>AP / AR Support</li>
        </ul>
      </div>
    </IndustryPageLayout>
  );
}
// import IndustryPageLayout from "./IndustryPageLayout";
// import { Briefcase } from "lucide-react";

// export default function CPAFirmsPage() {
//   return (
//     <IndustryPageLayout
//       icon={Briefcase}
//       title="CPA Firms"
//       description="Comprehensive back-office accounting, audit preparation, taxation support, and compliance solutions designed uniquely for Certified Public Accounting firms."
//     >
//       <div className="space-y-10 text-gray-700 leading-relaxed text-lg">

//         {/* SECTION 1 — Overview */}
//         <section>
//           <h2 className="text-3xl font-bold text-primary mb-4">Overview</h2>
//           <p>
//             CPA firms today operate in a demanding environment where clients expect faster turnaround, 
//             transparent deliverables, airtight compliance, and strategic insights. 
//             Our dedicated CPA support team serves as an extension of your in-house workforce—
//             empowering you to handle more clients, deliver higher-quality work, and reduce operational pressure.
//           </p>
//         </section>

//         {/* SECTION 2 — Challenges */}
//         <section>
//           <h3 className="text-2xl font-semibold text-primary mb-3">Industry Challenges We Solve</h3>
//           <ul className="list-disc ml-6 space-y-2">
//             <li>High volume of bookkeeping & audit assignments during peak season</li>
//             <li>Shortage of skilled accountants and audit associates</li>
//             <li>Error-prone manual reconciliation for multi-client operations</li>
//             <li>Time-consuming financial statement preparation</li>
//             <li>Tax compliance bottlenecks & deadlines</li>
//             <li>Client data inconsistency across multiple tools</li>
//           </ul>
//         </section>

//         {/* SECTION 3 — Services */}
//         <section>
//           <h3 className="text-2xl font-semibold text-primary mb-3">Our Specialized Services for CPA Firms</h3>

//           <h4 className="text-xl font-semibold mt-4 mb-2">1. Audit Support</h4>
//           <ul className="list-disc ml-6 space-y-2">
//             <li>Audit workpapers preparation</li>
//             <li>Trial balance & ledger reviews</li>
//             <li>Financial statement preparation (GAAP compliant)</li>
//             <li>Sampling & testing assistance</li>
//             <li>Internal control documentation</li>
//           </ul>

//           <h4 className="text-xl font-semibold mt-4 mb-2">2. Taxation Services</h4>
//           <ul className="list-disc ml-6 space-y-2">
//             <li>Individual & corporate tax return preparation</li>
//             <li>Sales tax computation & filing</li>
//             <li>Payroll tax review</li>
//             <li>Document classification & tax adjustments</li>
//           </ul>

//           <h4 className="text-xl font-semibold mt-4 mb-2">3. Accounting & Bookkeeping</h4>
//           <ul className="list-disc ml-6 space-y-2">
//             <li>Bank & credit card reconciliation</li>
//             <li>General ledger cleanup</li>
//             <li>Accounts payable & receivable management</li>
//             <li>Payroll processing & journal entries</li>
//             <li>Month-end closing support</li>
//           </ul>
//         </section>

//         {/* SECTION 4 — Tools */}
//         <section>
//           <h3 className="text-2xl font-semibold text-primary mb-3">Tools & Platforms</h3>
//           <p>We work with all major accounting & audit platforms including:</p>
//           <ul className="list-disc ml-6 space-y-2">
//             <li>QuickBooks Online & Desktop</li>
//             <li>Xero</li>
//             <li>CaseWare</li>
//             <li>TaxAct, UltraTax, Drake Tax</li>
//             <li>Sage & NetSuite</li>
//           </ul>
//         </section>

//         {/* SECTION 5 — Workflow */}
//         <section>
//           <h3 className="text-2xl font-semibold text-primary mb-3">How We Work</h3>
//           <ol className="list-decimal ml-6 space-y-2">
//             <li>Requirement gathering & client onboarding</li>
//             <li>Secure data transfer setup</li>
//             <li>Dedicated team allocation</li>
//             <li>Daily/weekly reporting cycles</li>
//             <li>Final deliverables with quality review</li>
//           </ol>
//         </section>

//         {/* SECTION 6 — Case Study */}
//         <section>
//           <h3 className="text-2xl font-semibold text-primary mb-3">Case Study</h3>
//           <p>
//             A US-based CPA firm needed scalable audit and tax support during peak season. 
//             We assigned a 12-member offshore team that reduced their turnaround time by 40% 
//             and increased client capacity by 3× within 6 months.
//           </p>
//         </section>

//         {/* SECTION 7 — FAQ */}
//         <section>
//           <h3 className="text-2xl font-semibold text-primary mb-3">Frequently Asked Questions</h3>
//           <ul className="space-y-3">
//             <li>
//               <strong>Q:</strong> Do you follow US GAAP?  
//               <br /><strong>A:</strong> Yes, our team is fully trained in GAAP standards.
//             </li>
//             <li>
//               <strong>Q:</strong> How do you ensure data security?  
//               <br /><strong>A:</strong> Encrypted file transfer, NDAs, and role-based access.
//             </li>
//           </ul>
//         </section>

//         {/* CTA */}
//         <section className="p-6 mt-10 bg-primary/10 rounded-xl border border-primary/20">
//           <h3 className="text-2xl font-semibold text-primary mb-3">Ready to Scale Your CPA Firm?</h3>
//           <p className="mb-4">
//             Contact us for a personalized consultation and see how our CPA support services can help you expand capacity and improve efficiency.
//           </p>
//         </section>

//       </div>
//     </IndustryPageLayout>
//   );
// }
