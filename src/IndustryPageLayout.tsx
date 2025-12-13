import { ArrowRight } from "lucide-react";

export default function IndustryPageLayout({ icon: Icon, title, description, children }) {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-background">

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-secondary to-forest-green text-white overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center gap-6 mb-6">
            <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center shadow-xl backdrop-blur-md">
              <Icon className="w-12 h-12 text-accent" />
            </div>
            <h1 className="text-5xl font-bold">{title}</h1>
          </div>

          <p className="text-xl text-white/90 max-w-3xl leading-relaxed">
            {description}
          </p>
        </div>
      </section>

      {/* Body Content */}
      <section className="container mx-auto px-6 mt-16">
        {children}
      </section>

    </div>
  );
}
