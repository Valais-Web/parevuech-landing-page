import { Button } from "@/components/ui/button";
import modelPlein from "@/assets/model-plein.jpg";
import modelMalus from "@/assets/model-malus.jpg";
import modelPicea from "@/assets/model-picea.jpg";
import modelElegans from "@/assets/model-elegans.jpg";
import modelFargesia from "@/assets/model-fargesia.jpg";

const ProductModels = () => {
  const scrollToDevis = () => {
    const devisSection = document.getElementById('devis');
    if (devisSection) {
      devisSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToGallery = () => {
    const gallerySection = document.getElementById('realisations');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const models = [
    {
      name: "Plein",
      description: "Occultation totale, surface pleine",
      image: modelPlein
    },
    {
      name: "Malus", 
      description: "Motifs circulaires décoratifs élégants",
      image: modelMalus
    },
    {
      name: "Picea",
      description: "Prairie naturelle, effet végétal délicat",
      image: modelPicea
    },
    {
      name: "Elegans",
      description: "Géométrie contemporaine sophistiquée",
      image: modelElegans
    },
    {
      name: "Fargesia",
      description: "Inspiration bambou, design zen moderne",
      image: modelFargesia
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Découvrez nos pare-vues les plus demandés
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Alliant design moderne et robustesse, nos modèles s'adaptent à tous vos projets d'intimité et d'esthétique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {models.map((model, index) => (
            <div key={model.name} className={`card-product fade-in-up`} style={{animationDelay: `${index * 0.1}s`}}>
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={model.image} 
                  alt={`Modèle ${model.name} - ${model.description}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{model.name}</h3>
                <p className="text-gray-600 mb-4">{model.description}</p>
                <Button 
                  onClick={scrollToDevis}
                  variant="outline" 
                  className="w-full border-brand-green text-brand-green hover:bg-brand-green hover:text-white"
                  data-gtm="cta_devis_click"
                >
                  Choisir ce modèle
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={scrollToGallery}
            variant="ghost"
            className="text-brand-green hover:text-brand-green/80"
          >
            Voir la collection complète →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductModels;