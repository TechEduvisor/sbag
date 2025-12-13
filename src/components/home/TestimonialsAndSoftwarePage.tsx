// File: src/pages/TestimonialsAndSoftwarePage.jsx
import { Quote, Sparkles, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TestimonialsAndSoftwarePage() {
  const testimonials = [
    {
      name: 'John Miller',
      company: 'CPA Firm, Texas',
      quote:
        'Their bookkeeping accuracy and turnaround time have transformed our financial management.',
    },
    {
      name: 'Emily Carter',
      company: 'E-Commerce CEO',
      quote:
        'Highly scalable, super responsive team. They helped us grow faster with reliable accounting support.',
    },
    {
      name: 'Raj Mehra',
      company: 'Real Estate Group',
      quote: 'Professional and detail-focused team. Best outsourcing decision we made!',
    },
  ];

  const softwares = [
    {
      name: 'QuickBooks Online',
      logo: 'https://cdn.worldvectorlogo.com/logos/quickbooks-1.svg',
    },
    {
      name: 'Xero',
      logo: 'https://cdn.worldvectorlogo.com/logos/xero-1.svg',
    },
    {
    name: 'NetSuite',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/29/NetSuite_Logo.svg',
  },
  {
    name: 'FreshBooks',
    logo: 'https://cdn.worldvectorlogo.com/logos/freshbooks.svg',
  },
  {
    name: 'Wave Accounting',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Wave_logo.svg',
  },
  {
    name: 'Zoho Books',
    logo: 'https://cdn.worldvectorlogo.com/logos/zoho-books.svg',
  },   
  {
    name: 'Sage Intacct',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/59/Sage_logo.svg',
  },
    {
    name: 'Microsoft Dynamics',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
  },
  ];

  return (
    <div className="min-h-screen mt-20 bg-secondary text-white py-24 relative overflow-hidden">
      {/* Soft background accents */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-32 -left-20 w-80 h-80 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-accent/25 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold tracking-wide text-white/80 uppercase">
              Trusted by global clients
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="text-accent">Clients Say</span>
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Real feedback from businesses who rely on us for accurate, scalable, and compliant
            accounting support.
          </p>
        </div>

        {/* Testimonials Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-24">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative bg-white/8 backdrop-blur-md p-8 rounded-2xl border border-white/15 hover:bg-white/14 transition-all group hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/20"
            >
              {/* Quote icon */}
              <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-accent flex items-center justify-center shadow-lg shadow-black/40">
                <Quote className="w-5 h-5 text-secondary" />
              </div>

              <p className="text-white/90 italic mb-6 text-lg leading-relaxed">
                "{t.quote}"
              </p>
              <div className="flex items-center justify-between mt-6">
                <div>
                  <div className="font-semibold text-accent text-lg">{t.name}</div>
                  <div className="text-white/60 text-sm">{t.company}</div>
                </div>
                <div className="flex gap-1 text-yellow-300">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-yellow-300 text-yellow-300" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>


        {/* Software Section */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Accounting Software <span className="text-accent">We Use</span>
          </h2>
          <p className="text-white/75 max-w-2xl mx-auto text-lg">
            We work on leading global accounting platforms so you don't have to worry about tools,
            versions, or compliance.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {softwares.map((s, i) => (
            <Link
              key={i}
              to="/software-stack"
              className="relative bg-white/8 p-6 md:p-8 rounded-xl border border-white/15 backdrop-blur-md flex flex-col items-center text-center hover:bg-white/14 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 cursor-pointer group"
            >
              <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mb-4 shadow-lg shadow-black/30 p-3 group-hover:scale-105 transition-transform">
                <img 
                  src={s.logo} 
                  alt={`${s.name} logo`}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    // Fallback if image fails to load
                    // e.target..display = 'none';
                    // e.target.parentElement.innerHTML = `<div class="text-2xl font-bold text-secondary">${s.name.charAt(0)}</div>`;
                  }}
                />
              </div>
              <p className="text-lg font-semibold mb-1">{s.name}</p>
              <p className="text-xs text-white/60">
                Cloud-ready • Scalable • Secure
              </p>
            </Link>
          ))}
        </div>

        {/* Tiny footer text */}
        <div className="mt-14 text-center text-xl text-white/50">
          We also support custom ERP integrations and industry-specific finance tools on request.
        </div>
      </div>
    </div>
  );
}