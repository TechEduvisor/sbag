import {
  Shield,
  FileCheck,
  Search,
  Users,
  BookOpen,
  Clock,
} from "lucide-react";
import ServiceLayout from "./ServiceLayout";

const AuditingService = () => {
  return (
    <ServiceLayout
      badgeIcon={Shield}
      badgeText="Audit Support Services"
      title="US Auditing"
      highlight="Support"
      description="End-to-end audit execution support for CPA firms to meet deadlines and quality standards."
      features={[
        {
          icon: FileCheck,
          title: "Audit Workpaper Preparation",
          description: "GAAS-compliant audit workpapers aligned to firm methodology.",
        },
        {
          icon: Search,
          title: "Testing & Sampling",
          description: "Substantive testing and control testing support.",
        },
        {
          icon: Shield,
          title: "Internal Control Evaluation",
          description: "Assessment of ICFR and audit risk areas.",
        },
        {
          icon: BookOpen,
          title: "Audit Documentation",
          description: "Clear, defensible audit documentation.",
        },
        {
          icon: Users,
          title: "Client Coordination",
          description: "PBC tracking and audit coordination.",
        },
        {
          icon: Clock,
          title: "Ongoing Audit Support",
          description: "Support across planning, fieldwork, and wrap-up.",
        },
      ]}
      benefits={[
        "Faster audit turnaround",
        "Improved audit quality",
        "Scalable audit capacity",
        "Lower engagement costs",
        "US GAAS & PCAOB alignment",
      ]}
      process={[
        { step: "01", title: "Engagement Review", description: "Understand audit scope & tools." },
        { step: "02", title: "Planning", description: "Allocate audit resources." },
        { step: "03", title: "Execution", description: "Perform audit procedures." },
        { step: "04", title: "Completion", description: "Finalize documentation & support." },
      ]}
      ctaTitle="Need Reliable Audit Support?"
    />
  );
};

export default AuditingService;
