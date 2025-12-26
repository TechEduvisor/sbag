// File: src/pages/WhoWeServePage.jsx
import { useState } from "react";
import { X, CheckCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { industries } from "../../pages/Industries";

export default function WhoWeServePage() {
  const [activeIndustry, setActiveIndustry] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-secondary via-forest-green to-dark-olive text-white py-20 relative overflow-hidden">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/25 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Header */}
        <div className="mb-14">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Who <span className="text-accent">We Serve</span>
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Industry-specific accounting solutions built for clarity, compliance,
            and scale.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {industries.map((item, i) => {
            const Icon = item.icon;

            return (
              <button
                key={i}
                onClick={() => setActiveIndustry(item)}
                className="text-left bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/10 
                  hover:border-accent hover:bg-white/20 transition-all 
                  hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-accent" />
                </div>

                {/* FIXED FIELD */}
                <p className="text-xl font-semibold mb-2">{item.title}</p>
                <p className="text-sm text-white/75">{item.description}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {activeIndustry && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveIndustry(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.25 }}
              className="bg-card text-foreground rounded-2xl max-w-lg w-full p-8 relative shadow-2xl"
            >
              {/* Close */}
              <button
                onClick={() => setActiveIndustry(null)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
              >
                <X />
              </button>

              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <activeIndustry.icon className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">
                  {activeIndustry.title}
                </h2>
              </div>

              {/* Description */}
              <p className="text-gray-800 mb-6">
                {activeIndustry.longDescription}
              </p>

              {/* Highlights */}
              <div className="space-y-3 mb-8">
                {activeIndustry.highlights.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-sm">{point}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => navigate("/contact")}
                className="w-full bg-primary text-white py-3 rounded-xl font-semibold hover:bg-accent transition"
              >
                Talk to an Expert
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
