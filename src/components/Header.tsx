import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToDevis = () => {
    const devisSection = document.getElementById('devis');
    if (devisSection) {
      devisSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-2xl font-bold text-brand-green">
            Pare-Vue.ch
          </div>
        </div>
        
        <Button 
          onClick={scrollToDevis}
          className="btn-primary"
          data-gtm="cta_devis_click"
        >
          Obtenir mon devis
        </Button>
      </div>
    </header>
  );
};

export default Header;