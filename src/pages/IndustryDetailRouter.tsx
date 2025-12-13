import CPAFirmsPage from "@/CPAFirmsPage";
import EcommercePage from "@/EcommercePage";
import StartupsPage from "@/StartupsPage";
import SMEPage from "@/SMEPage";
import HealthcarePage from "@/HealthcarePage";
import RetailPage from "@/RetailPage";
import ManufacturingPage from "@/ManufacturingPage";
import RealEstatePage from "@/RealEstatePage";
import { useParams } from "react-router-dom";
// etc

const IndustryDetailRouter = () => {
  const { slug } = useParams();

  const pages = {
    "cpa-firms": <CPAFirmsPage />,
    "ecommerce": <EcommercePage />,
    "startups": <StartupsPage />,
    "sme": <SMEPage />,
    "healthcare": <HealthcarePage />,
    "retail": <RetailPage />,
    "manufacturing": <ManufacturingPage />,
    "real-estate": <RealEstatePage />,
  };

  return pages[slug];
};

export default IndustryDetailRouter;