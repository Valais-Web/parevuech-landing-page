import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-garden-screen.jpg";
const Hero = () => {
  const scrollToDevis = () => {
    const devisSection = document.getElementById('devis');
    if (devisSection) {
      devisSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{
      backgroundImage: `url(${heroImage})`
    }}>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl text-white fade-in-up">
          
          
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">Intimité et design : vos palissades aluminium sur mesure en Suisse romande</h1>
          
          <p className="text-xl md:text-2xl leading-relaxed mb-8 text-white/90">
            Occultez le vis-à-vis, coupez le vent et valorisez votre extérieur avec des panneaux en aluminium 3 mm, 
            découpés au laser et thermolaqués. Plus de modèles, plus de couleurs, plus de sérénité.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="badge-soft-green">
              <span className="text-sm font-medium">Fabrication sur mesure</span>
            </div>
            <div className="badge-soft-green">
              <span className="text-sm font-medium">Finitions premium</span>
            </div>
            <div className="badge-soft-green">
              <span className="text-sm font-medium">Service installation local</span>
            </div>
          </div>
          
          <Button onClick={scrollToDevis} size="lg" className="btn-primary text-lg px-12 py-4 h-14" data-gtm="cta_devis_click">
            Obtenir mon devis
          </Button>
        </div>
      </div>
    </section>;
};
export default Hero;