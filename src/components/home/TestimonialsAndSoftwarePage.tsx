import { Quote, Sparkles, Star } from 'lucide-react';
import { useState } from 'react';

interface Software {
  name: string;
  logo: string;
  fallbackIcon: string;
  color: string;
}

export default function TestimonialsAndSoftwarePage() {
  const clientTestimonials = [
    {
      name: 'John Miller',
      company: 'CPA Firm, Texas',
      quote: 'Their bookkeeping accuracy and turnaround time have transformed our financial management.',
    },
    {
      name: 'Emily Carter',
      company: 'E-Commerce CEO',
      quote: 'Highly scalable, super responsive team. They helped us grow faster with reliable accounting support.',
    },
    {
      name: 'Raj Mehra',
      company: 'Real Estate Group',
      quote: 'Professional and detail-focused team. Best outsourcing decision we made!',
    },
  ];

  const googleReviews = [
    {
      name: 'Umendra Singh',
      rating: 5,
      date: '6 months ago',
      quote: 'Excellent service and professional team. They handle all our accounting needs efficiently.',
      platform: 'Google',
    },
    {
      name: 'Sanam Shaikh',
      rating: 5,
      date: '29 Apr 2023',
      quote: 'Outstanding experience working with SBG & Co. Their attention to detail and expertise in accounting is remarkable.',
      platform: 'Google',
    },
  ];

  const softwares = [
    {
      name: 'QuickBooks',
      fallbackIcon: 'QB',
      color: 'from-green-700 to-emerald-700',
      logo: 'https://cdn.worldvectorlogo.com/logos/quickbooks-1.svg',
    },
    {
      name: 'Sage',
      fallbackIcon: 'S',
      color: 'from-green-700 to-emerald-700',
      logo: 'https://cdn.worldvectorlogo.com/logos/sage-2.svg',
    },
    {
      name: 'Xero',
      fallbackIcon: 'X',
      color: 'from-blue-500 to-blue-600',
      logo: 'https://cdn.worldvectorlogo.com/logos/xero-1.svg',
    },
    {
      name: 'Wave',
      fallbackIcon: 'W',
      color: 'from-cyan-500 to-blue-500',
      logo: 'https://cdn.worldvectorlogo.com/logos/wave-1.svg',
    },
    {
      name: 'NetSuite',
      logo: 'https://cdn.worldvectorlogo.com/logos/netsuite-1.svg',
      fallbackIcon: 'NS',
      color: 'from-red-600 to-red-700',
    },
    {
      name: 'Zoho Books',
      logo: 'https://cdn.worldvectorlogo.com/logos/zoho-1.svg',
      fallbackIcon: 'ZB',
      color: 'from-yellow-600 to-orange-600',
    },
    {
      name: 'UltraTax',
      logo: 'https://cdn.worldvectorlogo.com/logos/thomson-reuters.svg',
      fallbackIcon: 'UT',
      color: 'from-blue-700 to-blue-800',
    },
    {
      name: 'TurboTax',
      logo: 'https://cdn.worldvectorlogo.com/logos/turbotax.svg',
      fallbackIcon: 'TT',
      color: 'from-red-500 to-red-600',
    },
    {
      name: 'ProConnect',
      logo: 'https://cdn.worldvectorlogo.com/logos/intuit.svg',
      fallbackIcon: 'PC',
      color: 'from-blue-600 to-blue-700',
    },
    {
      name: 'ADP Payroll',
      logo: 'https://cdn.worldvectorlogo.com/logos/adp-3.svg',
      fallbackIcon: 'ADP',
      color: 'from-red-600 to-red-700',
    },
    {
      name: 'Gusto',
      logo: 'https://cdn.worldvectorlogo.com/logos/gusto-1.svg',
      fallbackIcon: 'G',
      color: 'from-orange-500 to-red-500',
    },
    {
      name: 'Paychex',
      logo: 'https://cdn.worldvectorlogo.com/logos/paychex.svg',
      fallbackIcon: 'PX',
      color: 'from-blue-600 to-indigo-600',
    },
  ];

  const [selectedSoftware, setSelectedSoftware] = useState<Software | null>(null);

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement>,
    fallbackIcon: string,
    color: string
  ) => {
    const target = e.currentTarget;
    const parent = target.parentElement;
    if (parent) {
      parent.innerHTML = `
        <div class="w-full h-full flex items-center justify-center bg-gradient-to-br ${color} rounded-2xl">
          <span class="text-white font-bold text-lg">${fallbackIcon}</span>
        </div>
      `;
    }
  };

  return (
    <div className="min-h-screen mt-10 bg-secondary text-white py-12 relative overflow-hidden">
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
        <div className="text-center mb-8">
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

        {/* Google Reviews Section */}
        <div className="mb-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20 mb-6">
              <img
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                alt="Google"
                className="h-7"
              />
              <div className="text-left border-l border-white/30 pl-4">
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold">4.3</span>
                  <div className="flex gap-0.5">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                    <Star className="w-5 h-5 fill-gray-400 text-gray-400" />
                  </div>
                </div>
                <p className="text-white/60 text-sm">Based on 3 reviews</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
            {googleReviews.map((review, i) => (
              <div
                key={i}
                className="relative bg-gradient-to-br from-white/12 to-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/20 hover:border-accent/50 transition-all hover:scale-105 hover:shadow-2xl"
              >
                {/* <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl">
                  <img
                    src="https://www.google.com/favicon.ico"
                    alt="Google"
                    className="w-8 h-8"
                  />
                </div> */}

                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-1">{review.name}</h3>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, idx) => (
                        <Star key={idx} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-white/50 text-sm">{review.date}</span>
                  </div>
                </div>

                <p className="text-white/90 text-base leading-relaxed italic">
                  "{review.quote}"
                </p>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <span className="text-accent text-sm font-semibold">Verified Google Review</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://www.google.com/search?q=sbag+%26co+review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-bold rounded-xl hover:bg-accent hover:text-white transition-all hover:scale-105 shadow-lg"
            >
              <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
              View All Google Reviews
            </a>
          </div>
        </div>

        {/* Client Testimonials Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Client <span className="text-accent">Testimonials</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {clientTestimonials.map((t, i) => (
              <div
                key={i}
                className="relative bg-white/8 backdrop-blur-md p-8 rounded-2xl border border-white/15 hover:bg-white/14 transition-all group hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/20"
              >
                <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center shadow-lg shadow-black/40">
                  <Quote className="w-5 h-5 text-white" />
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
            <button
              key={i}
              onClick={() => setSelectedSoftware(s)}
              className="relative bg-white/8 p-6 md:p-8 rounded-xl border border-white/15 backdrop-blur-md flex flex-col items-center text-center hover:bg-white/14 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 cursor-pointer group"
            >
              <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mb-4 shadow-lg shadow-black/30 p-3 group-hover:scale-105 transition-transform overflow-hidden">
                <img
                  src={s.logo}
                  alt={`${s.name} logo`}
                  className="w-full h-full object-contain"
                  onError={(e) => handleImageError(e, s.fallbackIcon, s.color)}
                  crossOrigin="anonymous"
                />
              </div>
              <p className="text-lg font-semibold mb-1">{s.name}</p>
              <p className="text-xs text-white/60">Cloud-ready • Scalable • Secure</p>
            </button>
          ))}
        </div>

        <div className="mt-14 text-center text-xl text-white/50">
          We also support custom ERP integrations and industry-specific finance tools on request.
        </div>
      </div>

      {selectedSoftware && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-gray-900 text-white rounded-2xl w-[90%] max-w-md p-8 relative shadow-2xl border border-white/15">
            <button
              onClick={() => setSelectedSoftware(null)}
              className="absolute top-4 right-4 text-white/70 hover:text-white text-xl"
            >
              ×
            </button>

            <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-white flex items-center justify-center p-4 shadow-lg">
              <img
                src={selectedSoftware.logo}
                alt={selectedSoftware.name}
                className="w-full h-full object-contain"
              />
            </div>

            <h3 className="text-2xl font-bold text-center mb-3">{selectedSoftware.name}</h3>

            <p className="text-white/70 text-center mb-6">
              Trusted cloud accounting platform we actively work with.
            </p>

            <button
              onClick={() => setSelectedSoftware(null)}
              className="block w-full bg-blue-600 text-center text-white hover:bg-blue-500 font-semibold py-3 rounded-xl transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}