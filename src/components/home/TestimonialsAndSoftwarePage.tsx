/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
// 1. Added ChevronLeft and ChevronRight to imports
import { Sparkles, Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Software {
  name: string;
  logo: string;
  fallbackIcon: string;
  color: any;
}

export default function TestimonialsAndSoftwarePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedSoftware, setSelectedSoftware] = useState<Software | null>(null);

  const googleReviews = [
    {
      name: 'Max Starkman',
      rating: 5,
      date: '2 weeks ago',
      quote:
        "I can't recommend the team enough. From their financial insight and expertise, to the highest degree of professionalism, the team is truly incredible.",
      platform: 'Google',
    },
    {
      name: 'Alan K',
      rating: 5,
      date: '3 weeks ago',
      quote:
        'SBAG is amazing. They are extremely efficient, communicate well and often, and produce clean, detailed financials. I would recommend this group.',
      platform: 'Google',
    },
  ];

  const upworkReviews = [
    {
      name: 'Umendra Singh',
      rating: 5,
      date: '6 months ago',
      quote:
        'Excellent service and professional team. They handle all our accounting needs efficiently.',
      platform: 'Upwork',
    },
    {
      name: 'Sanam Shaikh',
      rating: 5,
      date: '29 Apr 2023',
      quote:
        'Outstanding experience working with SBG & Co. Their attention to detail and expertise in accounting is remarkable.',
      platform: 'Upwork',
    },
  ];

  const allReviews = [...googleReviews, ...upworkReviews];

  // 2. Navigation Functions
  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % allReviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + allReviews.length) % allReviews.length);
  };

  const softwares: Software[] = [
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
      logo: '/image.png',
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
      logo: '/imagecopy.png',
      fallbackIcon: 'UT',
      color: 'from-blue-700 to-blue-800',
    },
    {
      name: 'TurboTax',
      logo: '/image1copy.png',
      fallbackIcon: 'TT',
      color: 'from-red-500 to-red-600',
    },
    {
      name: 'ProConnect',
      logo: '/image5copy.png',
      fallbackIcon: 'PC',
      color: 'from-blue-600 to-blue-700',
    },
    {
      name: 'ADP Payroll',
      logo: '/image3copy.png',
      fallbackIcon: 'ADP',
      color: 'from-red-600 to-red-700',
    },
    {
      name: 'Gusto',
      logo: '/image4opy.png',
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

  useEffect(() => {
    const interval = setInterval(() => {
      nextReview(); // Use the function here
    }, 5000); // Increased to 5s to give time to read with manual nav
    return () => clearInterval(interval);
  }, [allReviews.length]);

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement>,
    fallbackIcon: string,
    color: string
  ) => {
    const parent = e.currentTarget.parentElement;
    if (parent) {
      parent.innerHTML = `
        <div class="w-full h-full flex items-center justify-center bg-gradient-to-br ${color} rounded-2xl">
          <span class="text-white font-bold text-lg">${fallbackIcon}</span>
        </div>
      `;
    }
  };

  const currentReview = allReviews[currentIndex];

  return (
    <div className="min-h-screen mt-10 bg-secondary text-white py-12 relative overflow-hidden">
      {/* Background stays the same */}
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
        {/* Header stays the same */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold tracking-wide text-white/80 uppercase">
              Trusted by global clients
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="text-accent">Clients Say</span>
          </h1>
        </div>

        {/* 3. Review Card Section with Arrows */}
        <div className="mb-16 max-w-4xl mx-auto relative px-12">
           {/* Left Arrow */}
           <button 
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/20 transition-all z-20"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <div className="bg-gradient-to-br from-white/12 to-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/20">
            <h3 className="text-2xl font-bold mb-2">{currentReview.name}</h3>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex gap-1">
                {[...Array(currentReview.rating)].map((_, idx) => (
                  <Star
                    key={idx}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-white/50 text-sm">{currentReview.date}</span>
            </div>

            <p className="text-white/90 text-lg italic min-h-[120px]">
              "{currentReview.quote}"
            </p>

            <div className="mt-6 pt-4 border-t border-white/10">
              <span className="text-accent text-sm font-semibold">
                Verified {currentReview.platform} Review
              </span>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {allReviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentIndex
                      ? 'bg-accent w-8'
                      : 'bg-white/30 hover:bg-white/50 w-2'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button 
            onClick={nextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/20 transition-all z-20"
            aria-label="Next review"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Everything else remains untouched */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Accounting Software <span className="text-accent">We Use</span>
          </h2>
          <p className="text-white/75 max-w-2xl mx-auto text-lg">
            We work on leading global accounting platforms so you don't have to
            worry about tools, versions, or compliance.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {softwares.map((s, i) => (
            <button
              key={i}
              onClick={() => setSelectedSoftware(s)}
              className="bg-white/8 p-6 rounded-xl border border-white/15 backdrop-blur-md hover:bg-white/14 hover:-translate-y-1 transition-all"
            >
              <div className="w-20 h-20 bg-white rounded-2xl mx-auto mb-4 p-3">
                <img
                  src={s.logo}
                  alt={s.name}
                  className="w-full h-full object-contain"
                  onError={(e) =>
                    handleImageError(e, s.fallbackIcon, s.color)
                  }
                />
              </div>
              <p className="font-semibold">{s.name}</p>
              <p className="text-xs text-white/60">
                Cloud-ready • Scalable • Secure
              </p>
            </button>
          ))}
        </div>

        <div className="mt-14 text-center text-xl text-white/50">
          We also support custom ERP integrations and industry-specific finance tools on request.
        </div>
      </div>

      {/* SOFTWARE MODAL (STAYS SAME) */}
      {selectedSoftware && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-secondary text-white rounded-2xl w-[90%] max-w-md p-8 relative shadow-2xl border border-white/15">
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

            <h3 className="text-2xl font-bold text-center mb-3">
              {selectedSoftware.name}
            </h3>

            <p className="text-white/70 text-center mb-6">
              Trusted cloud accounting platform we actively work with.
            </p>

            <button
              onClick={() => setSelectedSoftware(null)}
              className="block w-full bg-accent text-white font-semibold py-3 rounded-xl hover:opacity-90 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}