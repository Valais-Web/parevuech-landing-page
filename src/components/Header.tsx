import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import headerBackground from "@/assets/header-background.jpg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToDevis = () => {
    const devisSection = document.getElementById('devis');
    if (devisSection) {
      devisSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`sticky top-0 z-50 border-b border-gray-200 relative ${isScrolled ? 'bg-[rgba(180,204,153,0.9)]' : ''}`}>
      {!isScrolled && (
        <>
          <div className="absolute inset-0 bg-cover bg-center" style={{
            backgroundImage: `url(${headerBackground})`
          }}></div>
          <div className="absolute inset-0 bg-black/50"></div>
        </>
      )}
      <div className="container mx-auto px-6 h-16 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-3">
          <img src="/lovable-uploads/logo-pare-vue.png" alt="Pare-Vue.ch Logo" className="w-8 h-8 object-contain" />
          <div className={`text-2xl font-bold ${isScrolled ? 'text-brand-green' : 'text-white'}`}>
            Pare-Vue.ch
          </div>
        </div>
        
        <Button 
          onClick={scrollToDevis}
          className={`btn-primary ${!isScrolled ? 'bg-white text-brand-green hover:bg-white/90' : ''}`}
          data-gtm="cta_devis_click"
        >
          Obtenir mon devis
        </Button>
      </div>
    </header>
  );
};

export default Header;