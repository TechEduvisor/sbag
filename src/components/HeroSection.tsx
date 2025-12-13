/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

interface Achievement {
  icon: any;
  text: string;
  detail: string;
}

interface HeroSectionProps {
  badgeText: string;
  title: React.ReactNode;
  subtitle: string;
  achievements?: Achievement[];
}

const HeroSection = ({
  badgeText,
  title,
  subtitle,
  achievements = [],
}: HeroSectionProps) => {
  const [particles, setParticles] = useState<any[]>([]);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const p = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 3,
    }));
    setParticles(p);

    const move = (e: MouseEvent) =>
      setMouse({ x: e.clientX, y: e.clientY });

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section className="relative section-padding bg-gradient-to-br from-secondary to-forest-green overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-accent/20 animate-particle"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}

        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 blur-3xl animate-float-delayed" />

        {/* Cursor Glow */}
        <div
          className="absolute w-64 h-64 bg-accent/10 blur-3xl transition-all duration-300"
          style={{
            left: mouse.x - 128,
            top: mouse.y - 128,
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 px-5 py-2 bg-accent/20 backdrop-blur-sm rounded-full mb-6 border border-accent/30 animate-pulse-subtle">
          <Sparkles className="text-accent w-5 h-5 animate-spin-slow" />
          <span className="text-accent font-semibold text-sm">
            {badgeText}
          </span>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
          {title}
        </h1>

        <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
          {subtitle}
        </p>

        {/* ACHIEVEMENTS */}
        {achievements.length > 0 && (
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {achievements.map((a, i) => {
              const Icon = a.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-3 px-5 py-3 bg-secondary/80 backdrop-blur-sm rounded-full border border-accent/20 hover:border-accent/50 hover:scale-105 hover:rotate-1 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-accent/20"
                >
                  <Icon className="text-accent w-5 h-5" />
                  <div className="text-left">
                    <div className="text-sm font-bold text-white">
                      {a.text}
                    </div>
                    <div className="text-xs text-white/70">
                      {a.detail}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
