/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Send,
  Sparkles,
  ArrowRight,
  MessageSquare,
  Globe,
  Shield,
} from "lucide-react";
import HeroSection from "../components/HeroSection";
const EnhancedContact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredInfo, setHoveredInfo] = useState<number | null>(null);
  const [activeParticles, setActiveParticles] = useState<any[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showThankYou, setShowThankYou] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    countryCode: "+91",
    phone: "",
    message: "",
  });

  const delhiMapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3545.929914062509!2d77.1659869!3d28.679103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0343817f10cd%3A0x2609a9a8695bc7de!2sS%20B%20A%20G%20%26%20CO%20LLP!5e1!3m2!1sen!2sin!4v1764366864183!5m2!1sen!2sin";

  useEffect(() => {
    setIsVisible(true);

    const particles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 3,
    }));
    setActiveParticles(particles);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (formData.phone.replace(/\D/g, "").length < 8) {
      newErrors.phone = "Enter a valid phone number";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setShowThankYou(true);
    setErrors({});

    setFormData({
      name: "",
      email: "",
      company: "",
      countryCode: "+91",
      phone: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "(+91) 98998-80973",
      link: "tel:+919899880973",
      gradient: "from-blue-500 to-cyan-500",
      description: "Call us during business hours",
    },
    {
      icon: Mail,
      title: "Email",
      content: "accountants@sbagllp.com",
      link: "mailto:accountants@sbagllp.com",
      gradient: "from-purple-500 to-pink-500",
      description: "We reply within 24 hours",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      content: "Connect with us",
      link: "https://www.linkedin.com/company/s-b-a-g-co-llp/",
      gradient: "from-blue-600 to-blue-400",
      description: "Follow our updates",
    },
    {
      icon: Globe,
      title: "Business Hours",
      content: "Mon – Fri: 9 AM – 6 PM IST",
      link: null,
      gradient: "from-green-500 to-emerald-500",
      description: "Available for consultations",
    },
  ];

  const offices = [
    {
      city: "Delhi",
      address: "3906/15 1st Floor, Kanhiya Nagar, Tri Nagar",
      postal: "Delhi – 110035",
      gradient: "from-orange-500 to-red-500",
    },
    {
      city: "Kanpur",
      address: "Flat 602, Anand Lakshmi Apartment, Shastri Nagar",
      postal: "Kanpur – 208005",
      gradient: "from-teal-500 to-cyan-500",
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-background">
      <HeroSection
        badgeText="Let's Connect"
        title={
          <>
            Get in{" "}
            <span className="relative inline-block">
              <span className="text-accent relative z-10">Touch</span>
              <span className="absolute inset-0 bg-accent/20 blur-2xl animate-pulse-glow" />
            </span>
          </>
        }
        subtitle="Let's discuss how we can help transform your accounting and bookkeeping operations."
        achievements={[
          { icon: Globe, text: "Global Clients", detail: "5+ Countries" },
          { icon: Shield, text: "Trusted", detail: "100% Compliance" },
        ]}
      />

      <section className="pt-20 bg-background">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12">
          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-card p-[60px] md:p-10 mt-4 rounded-3xl h-fit shadow-xl border space-y-3"
          >
            <h2 className="text-3xl font-bold mb-2">Send us a Message</h2>
            <p className="text-gray-600 mb-6">
              Fill in the details below and our team will get back to you
              shortly.
            </p>

            {/* NAME */}
            <div>
              <input
                placeholder="NAME"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  setErrors({ ...errors, name: "" });
                }}
                className={`w-full px-4 py-3 border rounded-lg transition focus:outline-none focus:ring-2 focus:ring-primary ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
              />
              <div className="min-h-[20px] mt-1">
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
              </div>
            </div>

            {/* EMAIL */}
            <div>
              <input
                type="email"
                placeholder="EMAIL"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  setErrors({ ...errors, email: "" });
                }}
                className={`w-full px-4 py-3 border rounded-lg transition focus:outline-none focus:ring-2 focus:ring-primary ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              <div className="min-h-[20px] mt-1">
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
            </div>

            {/* PHONE */}
            <div>
              <input
                type="tel"
                placeholder="PHONE"
                value={formData.phone}
                onChange={(e) => {
                  setFormData({ ...formData, phone: e.target.value });
                  setErrors({ ...errors, phone: "" });
                }}
                className={`w-full px-4 py-3 border rounded-lg transition focus:outline-none focus:ring-2 focus:ring-primary ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                }`}
              />
              <div className="min-h-[20px] mt-1">
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone}</p>
                )}
              </div>
            </div>

            {/* MESSAGE */}
            <div>
              <textarea
                rows={4}
                placeholder="YOUR MESSAGE"
                value={formData.message}
                onChange={(e) => {
                  setFormData({ ...formData, message: e.target.value });
                  setErrors({ ...errors, message: "" });
                }}
                className={`w-full px-4 py-3 border rounded-lg resize-none transition focus:outline-none focus:ring-2 focus:ring-primary ${
                  errors.message ? "border-red-500" : "border-gray-300"
                }`}
              />
              <div className="min-h-[20px] mt-1">
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
              </div>
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={
                !formData.name ||
                !formData.email ||
                !formData.phone ||
                !formData.message
              }
              className="w-full mt-4 bg-primary text-white py-3 rounded-xl font-semibold
               flex items-center justify-center gap-2
               transition-all duration-300
               hover:shadow-lg hover:scale-[1.01]
               disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>
          </form>

          {/* CONTACT INFO */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 bg-card rounded-2xl border hover:shadow-lg transition space-y-5">
                {/* PHONE */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Phone className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <a
                      href="tel:+919899880973"
                      className="text-gray-600 hover:text-primary transition"
                    >
                      (+91) 98998-80973
                    </a>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <Mail className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a
                      href="mailto:sara@sbagllp.com"
                      className="text-gray-600 hover:text-primary transition"
                    >
                      sara@sbagllp.com
                    </a>
                  </div>
                </div>

                {/* MICROSOFT TEAMS */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-sky-500 flex items-center justify-center">
                    <MessageSquare className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Microsoft Teams
                    </p>
                    <a
                      href="https://teams.microsoft.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary transition"
                    >
                      Connect with us on Teams
                    </a>
                  </div>
                </div>
              </div>

              {/* SOCIAL LINKS */}
              <div className="grid grid-cols-1 gap-4">
                <a
                  href="https://www.linkedin.com/company/s-b-a-g-co-llp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 bg-card rounded-2xl border hover:shadow-lg transition flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center">
                    <Linkedin className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">LinkedIn</p>
                    <p className="text-gray-600 text-sm">
                      Professional updates
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.facebook.com/sbagllp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 bg-card rounded-2xl border hover:shadow-lg transition flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center">
                    <Globe className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Facebook</p>
                    <p className="text-gray-600 text-sm">Community & updates</p>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/sbagllp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 bg-card rounded-2xl border hover:shadow-lg transition flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 via-rose-500 to-orange-500 flex items-center justify-center">
                    <MessageSquare className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Instagram</p>
                    <p className="text-gray-600 text-sm">@sbagllp</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <MapPin /> Our Offices
              </h3>

              {offices.map((o, i) => (
                <div key={i} className="mb-4 p-4 bg-card rounded-xl border">
                  <strong>{o.city}</strong>
                  <p>{o.address}</p>
                  <p>{o.postal}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className=" w-full h-full pointer-events-none p-8 overflow-hidden">
        <iframe
          src={delhiMapSrc}
          className="w-full h-64 rounded-xl border mt-6"
          loading="lazy"
        />
      </div>

      {/* THANK YOU MODAL */}
      {showThankYou && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
          <div className="bg-white p-8 rounded-3xl text-center max-w-md w-full">
            <Sparkles className="mx-auto mb-4 text-primary" size={48} />
            <h3 className="text-2xl font-bold mb-2">
              Thank you for contacting us!
            </h3>
            <p className="text-gray-600 mb-6">
              Our team will reach out to you shortly.
            </p>
            <button
              onClick={() => setShowThankYou(false)}
              className="px-6 py-3 bg-primary text-white rounded-xl font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnhancedContact;
