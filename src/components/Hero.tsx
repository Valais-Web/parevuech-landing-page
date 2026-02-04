import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import heroImage from "@/assets/hero-new.webp";

const Hero = () => {
  const scrollToDevis = () => {
    const devisSection = document.getElementById("devis");
    if (devisSection) {
      devisSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const features = [
    "Fabrication sur mesure",
    "Finitions premium",
    "Service local Suisse romande",
  ];

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden pb-12 md:pb-0">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl text-white fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Intimité et design : vos clôtures en aluminium sur mesure en Suisse romande
          </h1>

          <p className="text-xl md:text-2xl leading-relaxed mb-8 text-white/90">
            Occultez le vis-à-vis, coupez le vent et valorisez votre extérieur avec des panneaux en aluminium 3 mm,
            découpés au laser et thermolaqués. Plus de modèles, plus de couleurs, plus de sérénité.
          </p>

          {/* Prix intégré */}
          <div className="mb-6">
            <p className="text-3xl md:text-4xl font-bold text-white">
              Dès 350 CHF <span className="text-xl font-medium text-white/70">/ mètre linéaire</span>
            </p>
          </div>

          {/* CTA Button */}
          <div className="mb-8">
            <Button
              onClick={scrollToDevis}
              size="lg"
              data-gtm="cta_devis_click"
              className="btn-primary text-lg px-12 py-4 h-14 text-lime-50 bg-green-600 hover:bg-green-500"
            >
              Obtenir mon devis
            </Button>
          </div>

          {/* Features avec checkmarks */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-2 text-white/80">
                <Check className="w-5 h-5 text-green-400" />
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
