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
      description="Reliable, end-to-end audit execution support for CPA firms to meet timelines, quality benchmarks, and compliance standards."
      features={[
        {
          icon: FileCheck,
          title: "Audit Workpaper Preparation",
          description:
            "GAAS-compliant audit workpapers aligned with firm-specific methodologies.",
        },
        {
          icon: Search,
          title: "Testing & Sampling",
          description:
            "Substantive testing, walkthroughs, and control testing support.",
        },
        {
          icon: Shield,
          title: "Internal Control Evaluation",
          description:
            "Assessment of ICFR, key controls, and audit risk areas.",
        },
        {
          icon: BookOpen,
          title: "Audit Documentation",
          description:
            "Clear, review-ready, and defensible audit documentation.",
        },
        {
          icon: Users,
          title: "Client & PBC Coordination",
          description:
            "PBC request tracking and audit coordination support.",
        },
        {
          icon: Clock,
          title: "Ongoing Audit Support",
          description:
            "Support across planning, fieldwork, review, and wrap-up stages.",
        },
      ]}
      benefits={[
        "Faster audit turnaround",
        "Improved audit quality & consistency",
        "Scalable audit execution capacity",
        "Lower engagement delivery costs",
        "US GAAS & PCAOB-aligned support",
      ]}
      process={[
        {
          step: "01",
          title: "Engagement Review",
          description: "Understand audit scope, timelines, and tools.",
        },
        {
          step: "02",
          title: "Audit Planning",
          description: "Allocate resources and align on procedures.",
        },
        {
          step: "03",
          title: "Audit Execution",
          description: "Perform testing and prepare documentation.",
        },
        {
          step: "04",
          title: "Completion & Review",
          description: "Finalize workpapers and provide review support.",
        },
      ]}
      ctaTitle="Need Reliable Audit Support?"
    />
  );
};

export default AuditingService;
