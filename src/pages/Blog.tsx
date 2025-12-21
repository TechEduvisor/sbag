import { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  Search,
  Filter,
  TrendingUp,
  BookOpen,
  CheckCircle,
  BarChart3,
  FileText,
  Briefcase,
  DollarSign,
  PieChart,
  Users,
} from "lucide-react";

const EnhancedBlog = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeParticles, setActiveParticles] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Bookkeeping Best Practices for Small Businesses",
      excerpt:
        "Learn essential bookkeeping practices that can save your small business time and money while ensuring accurate financial records.",
      icon: BarChart3,
      category: "Bookkeeping",
      date: "2024-01-15",
      readTime: "5 min read",
      views: "2.3K",
      likes: "340",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      id: 2,
      title:
        "Understanding US GAAP: A Complete Guide for International Businesses",
      excerpt:
        "A comprehensive overview of US GAAP principles and how international companies can navigate American accounting standards.",
      icon: FileText,
      category: "Accounting Standards",
      date: "2024-01-10",
      readTime: "8 min read",
      views: "3.1K",
      likes: "520",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      id: 3,
      title: "The Benefits of Outsourcing Your Accounting Functions",
      excerpt:
        "Discover how outsourcing accounting can reduce costs, improve accuracy, and allow you to focus on growing your business.",
      icon: Briefcase,
      category: "Business Strategy",
      date: "2024-01-05",
      readTime: "6 min read",
      views: "1.8K",
      likes: "280",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/20 to-emerald-500/20",
    },
    {
      id: 4,
      title: "Tax Planning Strategies for 2024",
      excerpt:
        "Essential tax planning tips and strategies to help you minimize tax liability and maximize deductions in the upcoming year.",
      icon: DollarSign,
      category: "Taxation",
      date: "2023-12-28",
      readTime: "7 min read",
      views: "4.2K",
      likes: "680",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-500/20 to-red-500/20",
    },
    {
      id: 5,
      title:
        "Financial Statement Analysis: Key Metrics Every Business Owner Should Know",
      excerpt:
        "Learn how to read and interpret financial statements to make informed business decisions and track your company's performance.",
      icon: PieChart,
      category: "Financial Analysis",
      date: "2023-12-20",
      readTime: "10 min read",
      views: "2.9K",
      likes: "450",
      gradient: "from-indigo-500 to-blue-500",
      bgGradient: "from-indigo-500/20 to-blue-500/20",
    },
    {
      id: 6,
      title: "Payroll Compliance: Avoiding Common Mistakes",
      excerpt:
        "Common payroll mistakes that can cost your business and how to avoid them with proper processes and controls.",
      icon: Users,
      category: "Payroll",
      date: "2023-12-15",
      readTime: "5 min read",
      views: "1.5K",
      likes: "220",
      gradient: "from-teal-500 to-cyan-500",
      bgGradient: "from-teal-500/20 to-cyan-500/20",
    },
  ];

  const categories = [
    "All",
    "Bookkeeping",
    "Accounting Standards",
    "Business Strategy",
    "Taxation",
    "Financial Analysis",
    "Payroll",
  ];

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

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-20 bg-background">
      {/* Hero Section */}
      <section className="relative -padding py-20 bg-gradient-to-br from-secondary to-forest-green overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {activeParticles.map((particle) => (
            <div
              key={particle.id}
              className="absolute rounded-full bg-accent/20 animate-particle"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                animationDuration: `${particle.duration}s`,
                animationDelay: `${particle.delay}s`,
              }}
            />
          ))}

          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float-delayed" />

          <div
            className="absolute w-64 h-64 bg-accent/10 rounded-full blur-3xl transition-all duration-300 pointer-events-none"
            style={{
              left: mousePosition.x - 128,
              top: mousePosition.y - 128,
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div
            className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-100 translate-y-0"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-accent/20 backdrop-blur-sm rounded-full mb-6 border border-accent/30 animate-pulse-subtle">
              <Sparkles className="text-accent w-5 h-5 animate-spin-slow" />
              <span className="text-accent font-semibold text-sm">
                Expert Insights
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
              Our{" "}
              <span className="relative inline-block">
                <span className="text-accent relative z-10">Blog</span>
                <span className="absolute inset-0 bg-accent/20 blur-2xl animate-pulse-glow" />
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Insights, tips, and best practices from accounting experts.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-6 mt-10">
              {[
                {
                  icon: BookOpen,
                  text: "50+ Articles",
                  stat: "100% Expert Written",
                },
                { icon: TrendingUp, text: "50K+ Readers", stat: "Monthly" },
                { icon: CheckCircle, text: "5 Categories", stat: "Covered" },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className={`flex flex-col items-center gap-1 px-5 py-3 bg-secondary/80 backdrop-blur-sm rounded-full border border-accent/20 hover:border-accent/50 hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-accent/20 ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                    <Icon className="text-accent w-5 h-5" />
                    <span className="text-white font-medium text-sm">
                      {item.text}
                    </span>
                    <span className="text-white/60 text-xs">{item.stat}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-12 bg-background border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Search Bar */}
          <div
            className={`mb-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-100 translate-y-0"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400  w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-card hover:border-primary/50 focus:border-primary focus:outline-none transition-all duration-300 shadow-lg hover:shadow-xl"
              />
            </div>
          </div>

          {/* Categories Filter */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-100 translate-y-0"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 border flex items-center gap-2 ${
                    selectedCategory === category
                      ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                      : "bg-card border-border hover:bg-primary hover:text-white hover:border-primary"
                  }`}
                >
                  {selectedCategory === category && (
                    <CheckCircle className="w-4 h-4" />
                  )}
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-cream relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" />
          <div className="absolute top-40 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float-delayed" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {filteredPosts.length > 0 ? (
            <>
              <div
                className={`mb-8 transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-100 translate-y-0"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                <p className="text-center text-gray-600 font-medium">
                  Showing{" "}
                  <span className="text-primary font-bold">
                    {filteredPosts.length}
                  </span>{" "}
                  article{filteredPosts.length !== 1 ? "s" : ""}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <div
                    key={post.id}
                    onMouseEnter={() => setHoveredCard(post.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className={`group relative bg-card rounded-3xl shadow-lg overflow-hidden border border-border hover-lift cursor-pointer transition-all duration-700 ${
                      hoveredCard === post.id ? "scale-105 shadow-2xl" : ""
                    } ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-100 translate-y-0"
                    }`}
                    style={{ transitionDelay: `${700 + index * 75}ms` }}
                  >
                    {/* Animated gradient overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${
                        post.gradient
                      } opacity-0 transition-opacity duration-500 ${
                        hoveredCard === post.id ? "opacity-5" : ""
                      }`}
                    />

                    {/* Image Section with Icon */}
                    <div
                      className={`relative h-48 bg-gradient-to-br ${post.bgGradient} flex items-center justify-center overflow-hidden`}
                    >
                      <div
                        className={`transition-all duration-500 ${
                          hoveredCard === post.id
                            ? "scale-125 rotate-12"
                            : "scale-100"
                        }`}
                      >
                        {post.icon && (
                          <post.icon
                            className={`w-24 h-24 bg-gradient-to-br ${post.gradient} bg-clip-text text-transparent opacity-80 group-hover:opacity-100 transition-opacity`}
                            strokeWidth={1.5}
                          />
                        )}
                      </div>

                      {/* Floating particles on hover */}
                      {hoveredCard === post.id &&
                        [...Array(6)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-2 h-2 bg-accent/60 rounded-full animate-float-particle"
                            style={{
                              left: `${30 + i * 10}%`,
                              top: `${30 + (i % 3) * 15}%`,
                              animationDelay: `${i * 0.1}s`,
                            }}
                          />
                        ))}

                      {/* Shine effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 relative z-10">
                      {/* Category & Meta */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${post.gradient} text-white`}
                          >
                            {post.category}
                          </span>
                        </div>
                        <div
                          className={`flex items-center text-xs text-gray-400  font-medium transition-all duration-300 ${
                            hoveredCard === post.id
                              ? "opacity-100"
                              : "opacity-70"
                          }`}
                        >
                          <Clock size={12} className="mr-1" />
                          {post.readTime}
                        </div>
                      </div>

                      {/* Title */}
                      <h3
                        className={`text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2 ${
                          hoveredCard === post.id ? "line-clamp-none" : ""
                        }`}
                      >
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-400 mb-4 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex items-center text-xs text-gray-400 ">
                          <Calendar size={12} className="mr-1" />
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </div>
                        {/* <button className="inline-flex items-center text-primary font-medium group-hover:text-accent transition-all duration-300 hover:gap-3 gap-2">
                          Read
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button> */}
                      </div>
                    </div>

                    {/* Corner sparkle */}
                    {hoveredCard === post.id && (
                      <>
                        <Sparkles className="absolute top-4 right-4 text-accent w-5 h-5 animate-pulse" />
                        <Sparkles
                          className="absolute bottom-4 left-4 text-primary w-5 h-5 animate-pulse"
                          style={{ animationDelay: "0.5s" }}
                        />
                      </>
                    )}
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <BookOpen className="w-16 h-16 text-gray-400  mx-auto mb-4 opacity-50" />
              <p className="text-xl text-gray-400  font-medium">
                No articles found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchTerm("");
                }}
                className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-accent transition-all duration-300"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding  bg-gradient-to-r from-secondary to-forest-green text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-accent via-transparent to-primary" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div
            className={`text-center max-w-3xl mx-auto transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-100 translate-y-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Want to Stay Updated?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Subscribe to our newsletter for the latest accounting insights and
              best practices delivered to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="px-8 py-3 bg-accent hover:bg-white text-secondary font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
{/* ==================== GALLERY SECTION ==================== */}
<section className="section-padding bg-background relative overflow-hidden">
  {/* Background glow */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
    <div className="absolute bottom-10 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float-delayed" />
  </div>

  <div className="container mx-auto px-4 relative z-10">
    {/* Header */}
    <div className="text-center max-w-3xl mx-auto mb-16">
      <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary/10 rounded-full mb-6">
        <Sparkles className="text-primary w-5 h-5" />
        <span className="text-primary font-semibold text-sm">
          Our Gallery
        </span>
      </div>

      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Life at <span className="text-primary">S B A G & Co. LLP</span>
      </h2>
      <p className="text-lg text-gray-600">
        A glimpse into our culture, people, and professional journey.
      </p>
    </div>

    {/* Gallery Grid */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
      {[
        {
          title: "Team Collaboration",
          subtitle: "Working together",
        },
        {
          title: "Client Meetings",
          subtitle: "Building trust",
        },
        {
          title: "Office Workspace",
          subtitle: "Professional environment",
        },
        {
          title: "Training Sessions",
          subtitle: "Continuous learning",
        },
        {
          title: "Leadership Discussions",
          subtitle: "Strategic planning",
        },
        {
          title: "Celebrations",
          subtitle: "Moments that matter",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="group relative rounded-xl overflow-hidden shadow-lg border border-border hover:shadow-2xl transition-all duration-500"
        >
          {/* Placeholder Image */}
          <div className="h-64 bg-gradient-to-br from-secondary to-forest-green flex items-center justify-center">
            <Users className="w-20 h-20 text-white/60 group-hover:scale-110 transition-transform duration-500" />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Content */}
          <div className="absolute bottom-0 p-6 translate-y-6 group-hover:translate-y-0 transition-all duration-500">
            <h3 className="text-white text-xl font-bold">
              {item.title}
            </h3>
            <p className="text-white/80 text-sm">
              {item.subtitle}
            </p>
          </div>

          {/* Corner sparkle */}
          <Sparkles className="absolute top-4 right-4 text-accent w-5 h-5 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity" />
        </div>
      ))}
    </div>
  </div>
</section>

      <style>{`
        @keyframes particle {
          0% { transform: translateY(0) scale(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-100vh) scale(1); opacity: 0; }
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(5deg); }
          66% { transform: translate(-20px, 20px) rotate(-5deg); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-30px, 30px) rotate(-5deg); }
          66% { transform: translate(20px, -20px) rotate(5deg); }
        }

        @keyframes float-particle {
          0%, 100% { transform: translateY(0); opacity: 0; }
          50% { opacity: 1; }
        }

        @keyframes pulse-subtle {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.02); opacity: 0.9; }
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; transform: scale(0.95); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-particle {
          animation: particle linear infinite;
        }

        .animate-float {
          animation: float 20s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 25s ease-in-out infinite;
        }

        .animate-float-particle {
          animation: float-particle 3s ease-in-out infinite;
        }

        .animate-pulse-subtle {
          animation: pulse-subtle 3s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .hover-lift {
          transition: all 0.3s ease;
        }

        .hover-lift:hover {
          transform: translateY(-8px);
        }
      `}</style>
    </div>
  );
};

export default EnhancedBlog;
