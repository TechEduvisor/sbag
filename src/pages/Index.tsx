import HeroSection from "../components/home/HeroSection";
import StatsSection from "../components/home/StatsSection";
import WhyChooseSection from "../components/home/WhyChooseSection";
import ServicesOverview from "../components/home/ServicesOverview";
import WhoWeServePage from "../components/home/WhoWeServePage";
import TestimonialsAndSoftwarePage from "../components/home/TestimonialsAndSoftwarePage";
import FaqSection from "../components/home/FaqSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <WhoWeServePage/>
      <WhyChooseSection />
      <TestimonialsAndSoftwarePage/>
      <ServicesOverview />
      <FaqSection />
    </div>
  );
};

export default Index;
