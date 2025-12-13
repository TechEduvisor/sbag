import { motion } from "framer-motion";
import { CheckCircle, ShieldCheck, Timer, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

const ValueMatrixSection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const values = [
    {
      icon: Sparkles,
      title: "99.6% Accuracy",
      desc: "Industry-leading precision with triple-layer review.",
      glow: "from-accent/30 to-primary/20",
    },
    {
      icon: Timer,
      title: "2–24 hr TAT",
      desc: "Fastest turnaround time with consistent reliability.",
      glow: "from-primary/30 to-accent/20",
    },
    {
      icon: ShieldCheck,
      title: "100% Compliance",
      desc: "GAAP-ready reports with audit-proof documentation.",
      glow: "from-emerald-400/20 to-accent/20",
    },
    {
      icon: CheckCircle,
      title: "Error-Free Delivery",
      desc: "Multi-step automation ensures maximum accuracy.",
      glow: "from-primary/40 to-emerald-300/20",
    },
  ];

  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-br from-secondary via-forest-green to-dark-olive">
      
      {/* Parallax Orbs */}
      <div
        className="absolute -top-10 left-10 w-80 h-80 bg-primary/20 blur-[110px] rounded-full"
        style={{
          transform: `translate(${mousePos.x * 0.07}px, ${mousePos.y * 0.07}px)`
        }}
      />
      <div
        className="absolute bottom-0 right-20 w-96 h-96 bg-accent/20 blur-[130px] rounded-full"
        style={{
          transform: `translate(${-mousePos.x * 0.05}px, ${-mousePos.y * 0.05}px)`
        }}
      />

      {/* Matrix Container */}
      <div className="container-custom relative z-10">
       
        {/* Value Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {values.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative cursor-pointer"
              style={{
                transform: `translate(${mousePos.x * 0.01}px, ${mousePos.y * 0.01}px)`
              }}
            >
              <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl
                transition-all duration-300 group-hover:scale-[1.04] group-hover:border-primary/40 relative overflow-hidden">
                
                {/* Glow Ribbon */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-40 transition-all duration-500 
                  bg-gradient-to-br ${item.glow} blur-2xl`}
                />

                {/* Icon */}
                <div className="relative mb-6 flex items-center justify-center">
                  <item.icon className="w-12 h-12 text-accent group-hover:scale-110 transition-transform" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-white/70">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ValueMatrixSection;
