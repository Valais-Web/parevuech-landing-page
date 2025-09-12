import { Button } from "@/components/ui/button";

const ColorsFinishes = () => {
  const scrollToDevis = () => {
    const devisSection = document.getElementById('devis');
    if (devisSection) {
      devisSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const standardColors = [
    { name: "Anthracite", code: "RAL 7016", hex: "#383e42" },
    { name: "Blanc pur", code: "RAL 9010", hex: "#f1f0ea" },
    { name: "Noir profond", code: "RAL 9005", hex: "#0e0e10" },
    { name: "Gris clair", code: "RAL 7035", hex: "#d7d7d7" },
    { name: "Vert sapin", code: "RAL 6005", hex: "#114232" },
  ];

  const futuraColors = [
    { name: "Sable doré", finish: "Futura", hex: "#d4b896" },
    { name: "Bronze antique", finish: "Futura", hex: "#8b6914" },
    { name: "Cuivre rosé", finish: "Futura", hex: "#b87333" },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            17 teintes RAL fine texture et 6 Futura sablées
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sélectionnez une teinte standard pour aller vite, ou demandez la couleur exacte de votre projet. 
            Et tout le nuancier RAL sur demande.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-12">
          <div className="fade-in-up">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Couleurs RAL Standard</h3>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
              {standardColors.map((color, index) => (
                <div key={color.name} className="text-center group cursor-pointer" style={{animationDelay: `${index * 0.1}s`}}>
                  <div 
                    className="w-16 h-16 rounded-full mx-auto mb-3 border-2 border-gray-200 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: color.hex }}
                  ></div>
                  <p className="text-sm font-medium text-gray-900">{color.name}</p>
                  <p className="text-xs text-gray-500">{color.code}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="fade-in-up" style={{animationDelay: '0.2s'}}>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Finitions Futura</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {futuraColors.map((color, index) => (
                <div key={color.name} className="text-center group cursor-pointer">
                  <div 
                    className="w-16 h-16 rounded-full mx-auto mb-3 border-2 border-gray-200 transition-transform duration-300 group-hover:scale-110"
                    style={{ 
                      backgroundColor: color.hex,
                      backgroundImage: 'radial-gradient(circle at 50% 30%, rgba(255,255,255,0.2), transparent 70%)'
                    }}
                  ></div>
                  <p className="text-sm font-medium text-gray-900">{color.name}</p>
                  <p className="text-xs text-gray-500">{color.finish}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-brand-cream rounded-2xl p-8 text-center fade-in-up">
          <h3 className="text-2xl font-bold text-brand-green mb-4">
            Plus de 200 couleurs RAL disponibles
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Nous pouvons vous conseiller sur l'harmonie teinte/motif. 
            Demandez la couleur exacte qui correspond à votre projet architectural.
          </p>
          
          <Button 
            onClick={scrollToDevis}
            className="btn-primary"
            data-gtm="cta_devis_click"
          >
            Voir toutes les couleurs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ColorsFinishes;