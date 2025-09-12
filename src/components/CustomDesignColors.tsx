import { Palette, Ruler, Wrench, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CustomDesignColors = () => {
  const scrollToDevis = () => {
    const devisSection = document.getElementById('devis');
    if (devisSection) {
      devisSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const productTypes = [
    {
      name: "Pare-vues occultants",
      description: "Intimité totale, ligne épurée",
      image: "/lovable-uploads/05078bbc-1a12-4c92-b911-7ce684d33557.png"
    },
    {
      name: "Pare-vues décoratifs", 
      description: "Motifs géométriques et végétaux",
      image: "/lovable-uploads/bb703772-bb6f-4038-ab92-019bd456622b.png"
    },
    {
      name: "Portails & portillons",
      description: "Coordonnés à vos pare-vues",
      image: "/lovable-uploads/c3467b57-7227-4a8f-9394-80a4accfd2ff.png"
    },
    {
      name: "Treillis muraux",
      description: "Support végétation, brise-vue",
      image: "/lovable-uploads/29a8e895-1e1a-4ef7-8301-c8cc90080a5d.png"
    },
    {
      name: "Jardinières & bacs",
      description: "Végétalisation coordonnée",
      image: "/lovable-uploads/43fe775f-2a8d-46d7-abcd-b53673612607.png"
    },
    {
      name: "Luminaires",
      description: "Éclairage décoratif intégré",
      image: "/lovable-uploads/5b312112-5334-485d-8fce-db11d1a55a86.png"
    }
  ];

  const features = [
    {
      icon: Ruler,
      title: "Dimensions sur mesure",
      description: "Hauteurs : 900, 1100, 1450, 1800 mm ou dimensions exactes selon votre projet"
    },
    {
      icon: Palette,
      title: "17 couleurs RAL + nuancier complet",
      description: "Teintes standard fine texture, Futura sablées, ou toute couleur RAL personnalisée"
    },
    {
      icon: Wrench,
      title: "Installation professionnelle incluse",
      description: "Équipe qualifiée, fixation à sceller ou sur platines, accompagnement complet"
    },
    {
      icon: CheckCircle,
      title: "Service clé en main",
      description: "De la conception à la pose : conseil, fabrication, livraison, installation, garantie"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Votre projet, nos solutions sur mesure
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Formats standards pour aller vite, ou dimensions exactes pour votre projet. 
            Motifs décoratifs au catalogue ou création dédiée. Service complet de A à Z.
          </p>
        </div>

        {/* Types de produits */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Découvrez notre gamme complète</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {productTypes.map((product, index) => (
              <div key={product.name} className={`bg-gray-50 p-4 rounded-2xl text-center hover:shadow-lg transition-shadow fade-in-up`} style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-16 h-16 mx-auto mb-3 rounded-xl overflow-hidden bg-white shadow-sm">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold text-sm text-gray-900 mb-1">{product.name}</h4>
                <p className="text-xs text-gray-600">{product.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features principales */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={feature.title} className={`bg-gray-50 p-8 rounded-2xl fade-in-up`} style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-cream rounded-full flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-brand-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to action avec mise en avant du service */}
        <div className="bg-gradient-to-r from-brand-green to-brand-green/80 p-8 rounded-3xl shadow-xl text-center fade-in-up">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Accompagnement personnalisé tout au long de votre projet
            </h3>
            <p className="text-white/90 mb-6 text-lg">
              Notre équipe vous guide de la conception à l'installation. Conseil technique, 
              fabrication sur mesure, pose professionnelle : tout est inclus pour votre sérénité.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <div className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full border border-white/20">
                <span className="text-sm font-medium">✓ Étude technique gratuite</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full border border-white/20">
                <span className="text-sm font-medium">✓ Installation professionnelle</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full border border-white/20">
                <span className="text-sm font-medium">✓ Garantie étendue</span>
              </div>
            </div>
            <Button 
              onClick={scrollToDevis}
              size="lg"
              className="bg-white text-brand-green hover:bg-white/90 text-lg px-12 py-4 h-14 font-semibold"
              data-gtm="cta_custom_devis_click"
            >
              Démarrer mon projet sur mesure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomDesignColors;