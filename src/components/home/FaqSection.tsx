import { useEffect, useState } from "react";
import { Sparkles, HelpCircle } from "lucide-react";
import { ApiFaq, listFaqs } from "@/lib/blogApi";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  const [faqs, setFaqs] = useState<ApiFaq[]>([]);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    listFaqs()
      .then((list) =>
        setFaqs(
          list
            .filter((f) => f.isActive)
            .sort((a, b) => a.sortOrder - b.sortOrder || a.id - b.id),
        ),
      )
      .catch(() => {});
  }, []);

  // Nothing to show (none added yet, or the API is unreachable): keep the home page clean.
  if (faqs.length === 0) return null;

  const categories = Array.from(
    new Set(faqs.map((f) => f.category?.trim()).filter((c): c is string => !!c)),
  );
  const visible = category === "All" ? faqs : faqs.filter((f) => f.category?.trim() === category);

  return (
    <section className="relative py-20 bg-background overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full mb-6 border border-primary/20 backdrop-blur-sm">
            <Sparkles className="text-accent w-5 h-5" />
            <span className="text-primary font-semibold text-sm">Got Questions?</span>
            <Sparkles className="text-primary w-5 h-5" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Quick answers to the things clients ask us most.
          </p>
        </div>

        {categories.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {["All", ...categories].map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                  category === c
                    ? "bg-primary text-primary-foreground border-primary shadow-lg"
                    : "bg-card text-foreground border-border hover:border-primary/50"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        )}

        <Accordion type="single" collapsible className="max-w-3xl mx-auto space-y-4">
          {visible.map((f) => (
            <AccordionItem
              key={f.id}
              value={`faq-${f.id}`}
              className="bg-card rounded-2xl border border-border shadow-lg px-6 transition-all duration-300 hover:border-primary/40 data-[state=open]:border-primary/40"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:no-underline">
                <span className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-primary shrink-0" />
                  {f.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-400 leading-relaxed whitespace-pre-line pl-8">
                {f.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
