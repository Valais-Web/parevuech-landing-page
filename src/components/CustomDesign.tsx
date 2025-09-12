import { Button } from "@/components/ui/button";
import { Ruler, Palette, Wrench, Award } from "lucide-react";

const CustomDesign = () => {
  const scrollToDevis = () => {
    const devisSection = document.getElementById('devis');
    if (devisSection) {
      devisSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      icon: Ruler,
      title: "Vos dimensions exactes",
      description: "Formats standards pour accélérer, ou cotes sur mesure pour votre projet spécifique."
    },
    {
      icon: Palette,
      title: "Motifs personnalisés", 
      description: "Catalogue de motifs décoratifs ou création dédiée selon vos envies."
    },
    {
      icon: Wrench,
      title: "Options techniques",
      description: "Fixations adaptées, treillis, portillons, luminaires, tout coordonné."
    },
    {
      icon: Award,
      title: "Qualité Brand Conception",
      description: "Revendeur officiel, garantie fabricant, expertise reconnue."
    }
  ];

  const heights = ["900", "1100", "1450", "1800"];
  const options = [
    "Treillis décoratifs",
    "Bandeaux de finition", 
    "Portillons coordonnés",
    "Cache-climatiseurs",
    "Bacs et jardinières",
    "Luminaires intégrés"
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Votre projet, vos dimensions, vos motifs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Formats standards pour accélérer. Et si votre projet sort des formats, nous réalisons vos cotes exactes. 
            Motifs décoratifs au catalogue ou création dédiée.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          <div className="fade-in-up">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Dimensions standards</h3>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
              <h4 className="font-bold text-brand-green mb-4">Hauteurs finies disponibles (mm)</h4>
              <div className="grid grid-cols-2 gap-4">
                {heights.map((height) => (
                  <div key={height} className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">{height}</div>
                    <div className="text-sm text-gray-600">mm</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h4 className="font-bold text-brand-green mb-4">Types de fixation</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-brand-green rounded-full mr-3"></div>
                  <span>À sceller (béton coulé sur place)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-brand-green rounded-full mr-3"></div>
                  <span>Sur platines (fixation au sol existant)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="fade-in-up" style={{animationDelay: '0.2s'}}>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Options disponibles</h3>
            
            <div className="grid gap-4 mb-6">
              {options.map((option, index) => (
                <div key={option} className="bg-white p-4 rounded-xl shadow-lg flex items-center">
                  <div className="w-10 h-10 bg-brand-cream rounded-full flex items-center justify-center mr-4">
                    <div className="w-3 h-3 bg-brand-green rounded-full"></div>
                  </div>
                  <span className="font-medium text-gray-900">{option}</span>
                </div>
              ))}
            </div>
            
            <div className="badge inline-block">
              Revendeur officiel Brand Conception
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={feature.title} className={`bg-white p-8 rounded-2xl shadow-lg text-center fade-in-up`} style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-16 h-16 bg-brand-cream rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-brand-green" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 fade-in-up">
          <p className="text-lg text-gray-600 mb-6">
            Vos cotes, vos motifs, vos couleurs.
          </p>
          <Button 
            onClick={scrollToDevis}
            className="btn-primary text-lg px-12 py-4 h-14"
            data-gtm="cta_devis_click"
          >
            Démarrer mon projet sur mesure
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CustomDesign;