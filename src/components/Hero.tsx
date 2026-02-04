import { Button } from "@/components/ui/button";
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
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
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

          {/* Prix mis en évidence */}
          <div className="mb-6">
            <div className="inline-flex items-center gap-3 bg-white/95 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg border border-white/20">
              <div className="bg-brand-green text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                Prix
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-brand-green">
                  Dès 350 CHF <span className="text-lg font-medium text-gray-600"> / mètre</span>
                </p>
                <p className="text-sm text-gray-500">Installation professionnelle incluse</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mb-8">
            <div className="backdrop-blur-sm text-green-900 px-4 py-2 rounded-full border border-green-300 bg-green-100">
              <span className="text-sm font-medium">Fabrication sur mesure</span>
            </div>
            <div className="backdrop-blur-sm text-green-900 px-4 py-2 rounded-full border border-green-300 bg-green-100">
              <span className="text-sm font-medium">Finitions premium</span>
            </div>
            <div className="backdrop-blur-sm text-green-900 px-4 py-2 rounded-full border border-green-300 bg-green-100">
              <span className="text-sm font-medium">Service local Suisse romande</span>
            </div>
          </div>

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
        </div>
      </div>
    </section>
  );
};
export default Hero;
