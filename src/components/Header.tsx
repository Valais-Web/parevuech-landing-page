import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToDevis = () => {
    const devisSection = document.getElementById('devis');
    if (devisSection) {
      devisSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-brand-green-light/95 backdrop-blur-sm border-b border-brand-green-light">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/lovable-uploads/logo-pare-vue.png" alt="Pare-Vue.ch Logo" className="w-8 h-8 object-contain" />
          <div className="text-2xl font-bold text-brand-green">
            Pare-Vue.ch
          </div>
        </div>
        
        <Button 
          onClick={scrollToDevis}
          className="bg-brand-green text-white hover:bg-brand-green/90 transition-all duration-300 font-medium px-6 py-2 rounded-full"
          data-gtm="cta_devis_click"
        >
          Obtenir mon devis
        </Button>
      </div>
    </header>
  );
};

export default Header;