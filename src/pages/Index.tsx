import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import ProductModels from "@/components/ProductModels";
import AluminiumBenefits from "@/components/AluminiumBenefits";
import CustomDesignColors from "@/components/CustomDesignColors";
import Realizations from "@/components/Realizations";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Initialize dataLayer for GTM
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      
      // Page view event
      window.dataLayer.push({
        event: 'page_view',
        page_title: 'Pare-vue aluminium sur mesure Nord-Vaudois, Fribourg, Neuchâtel, Jura',
        page_location: window.location.href
      });
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <Hero />
        <SocialProof />
        <ProductModels />
        <AluminiumBenefits />
        <CustomDesignColors />
        <Realizations />
        <Process />
        <FAQ />
        <QuoteForm />
      </main>

      <Footer />
    </div>
  );
};

export default Index;