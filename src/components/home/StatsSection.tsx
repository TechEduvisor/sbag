import { motion } from "framer-motion";
import { CheckCircle, ShieldCheck, Timer, Sparkles } from "lucide-react";

const ValueMatrixSection = () => {
  const values = [
    {
      icon: Sparkles,
      title: "99.6% Accuracy",
      desc: "Multi-level review process ensures industry-leading precision.",
    },
    {
      icon: Timer,
      title: "2–24 hr Turnaround",
      desc: "Consistent delivery timelines without quality compromise.",
    },
    {
      icon: ShieldCheck,
      title: "100% Compliance",
      desc: "GAAP-ready, audit-safe and regulator-compliant reporting.",
    },
    {
      icon: CheckCircle,
      title: "Zero Rework",
      desc: "Automation + expert checks eliminate costly errors.",
    },
  ];

  return (
    <section className="py-10 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            The Value We Deliver
          </h2>
          <p className="text-gray-600 text-lg">
            Measurable outcomes that scale with your business.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div
                  className="
                    h-[250px]
                    bg-white
                    border border-gray-200
                    rounded-3xl
                    p-8
                    shadow-sm
                    transition-all duration-300
                    hover:shadow-xl
                    hover:-translate-y-2
                  "
                >
                  {/* Icon */}
                  <div className="w-14 h-14 mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Spacer */}
                  <div className="flex-grow" />

                 
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueMatrixSection;
