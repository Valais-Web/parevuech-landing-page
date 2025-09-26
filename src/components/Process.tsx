import { MessageSquare, Calculator, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

const Process = () => {
  const scrollToDevis = () => {
    const devisSection = document.getElementById('devis');
    if (devisSection) {
      devisSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const steps = [
    {
      icon: MessageSquare,
      number: "01",
      title: "Décrivez votre contexte",
      description: "Dimensions, objectif, style souhaité. Notre formulaire intelligent calcule une estimation immédiate.",
      duration: "5 minutes"
    },
    {
      icon: Calculator,
      number: "02", 
      title: "Recevez estimation et catalogue",
      description: "Catalogue produits complet + votre estimation personnalisée par e-mail. Un spécialiste vous recontacte.",
      duration: "Immédiat"
    },
    {
      icon: Package,
      number: "03",
      title: "Fabrication et livraison",
      description: "Validation des détails techniques, fabrication sur mesure et mise à disposition coordonnée.",
      duration: "~7 semaines"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Simple et clair
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            3 étapes. Zéro complication. De votre demande à la réception, 
            un processus fluide et transparent.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={step.number} className={`text-center fade-in-up`} style={{animationDelay: `${index * 0.2}s`}}>
                <div className="relative mb-8">
                  <div className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-4 relative z-10">
                    <IconComponent className="w-10 h-10 text-brand-green" />
                  </div>
                  
                  <div className="absolute top-0 right-0 w-12 h-12 bg-brand-green rounded-full flex items-center justify-center text-white font-bold">
                    {step.number}
                  </div>
                  
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gray-300 -z-10"></div>
                  )}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 mb-4 min-h-[3rem]">{step.description}</p>
                
                <div className="inline-flex items-center bg-brand-cream px-4 py-2 rounded-full">
                  <div className="w-2 h-2 bg-brand-green rounded-full mr-2"></div>
                  <span className="text-sm font-medium text-brand-green">{step.duration}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg text-center fade-in-up">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Délai indicatif total
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Environ <strong className="text-brand-green">7 semaines</strong> entre commande et mise à disposition. 
            Délai précis communiqué selon la complexité et la période.
          </p>
          
          <Button 
            onClick={scrollToDevis}
            className="btn-primary text-base sm:text-lg px-6 sm:px-12 py-3 sm:py-4 h-12 sm:h-14 w-full sm:w-auto"
            data-gtm="cta_devis_click"
          >
            Commencer maintenant
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Process;