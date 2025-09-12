import { Button } from "@/components/ui/button";

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
      description: "Occultation totale, ligne épurée",
      image: "/lovable-uploads/05078bbc-1a12-4c92-b911-7ce684d33557.png"
    },
    {
      name: "Malus", 
      description: "Jeu de motifs géométriques fins",
      image: "/lovable-uploads/29a8e895-1e1a-4ef7-8301-c8cc90080a5d.png"
    },
    {
      name: "Melia",
      description: "Motif végétal léger",
      image: "/lovable-uploads/c3467b57-7227-4a8f-9394-80a4accfd2ff.png"
    },
    {
      name: "Carya",
      description: "Lignes organiques, ombres décoratives", 
      image: "/lovable-uploads/bb703772-bb6f-4038-ab92-019bd456622b.png"
    },
    {
      name: "Elegans",
      description: "Design contemporain sophistiqué",
      image: "/lovable-uploads/43fe775f-2a8d-46d7-abcd-b53673612607.png"
    },
    {
      name: "Fargesia",
      description: "Inspiration bambou moderne",
      image: "/lovable-uploads/5b312112-5334-485d-8fce-db11d1a55a86.png"
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