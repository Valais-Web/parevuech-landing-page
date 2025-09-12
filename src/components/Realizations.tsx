import { useState } from "react";
import { Button } from "@/components/ui/button";

const Realizations = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const scrollToDevis = () => {
    const devisSection = document.getElementById('devis');
    if (devisSection) {
      devisSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const filters = [
    { id: 'all', label: 'Tous' },
    { id: 'occultant', label: 'Occultant' },
    { id: 'decoratif', label: 'Décoratif' },
    { id: 'mixte', label: 'Mixte' }
  ];

  const realizations = [
    {
      id: 1,
      category: 'occultant',
      title: 'Intimité totale jardin résidentiel',
      description: 'Transformation complète avec panneaux Plein anthracite',
      before: '/lovable-uploads/6a2639c3-19e7-472f-90dd-548ed65612e4.png',
      after: '/lovable-uploads/05078bbc-1a12-4c92-b911-7ce684d33557.png'
    },
    {
      id: 2,
      category: 'decoratif',
      title: 'Brise-vue décoratif moderne',
      description: 'Motifs Melia pour allier intimité et esthétique',
      before: '/lovable-uploads/6a2639c3-19e7-472f-90dd-548ed65612e4.png',
      after: '/lovable-uploads/c3467b57-7227-4a8f-9394-80a4accfd2ff.png'
    },
    {
      id: 3,
      category: 'mixte',
      title: 'Séparation design et fonctionnelle',
      description: 'Panneaux Carya avec jeux d\'ombres décoratifs',
      before: '/lovable-uploads/6a2639c3-19e7-472f-90dd-548ed65612e4.png',
      after: '/lovable-uploads/bb703772-bb6f-4038-ab92-019bd456622b.png'
    },
    {
      id: 4,
      category: 'decoratif',
      title: 'Cache technique élégant',
      description: 'Motifs géométriques pour masquer les équipements',
      before: '/lovable-uploads/6a2639c3-19e7-472f-90dd-548ed65612e4.png',
      after: '/lovable-uploads/43fe775f-2a8d-46d7-abcd-b53673612607.png'
    },
    {
      id: 5,
      category: 'mixte',
      title: 'Clôture contemporaine sur mesure',
      description: 'Panneaux hauts avec découpes personnalisées',
      before: '/lovable-uploads/6a2639c3-19e7-472f-90dd-548ed65612e4.png',
      after: '/lovable-uploads/5b312112-5334-485d-8fce-db11d1a55a86.png'
    },
    {
      id: 6,
      category: 'occultant',
      title: 'Protection totale terrasse',
      description: 'Panneaux Plein avec portillon intégré',
      before: '/lovable-uploads/6a2639c3-19e7-472f-90dd-548ed65612e4.png',
      after: '/lovable-uploads/29a8e895-1e1a-4ef7-8301-c8cc90080a5d.png'
    }
  ];

  const filteredRealizations = activeFilter === 'all' 
    ? realizations 
    : realizations.filter(item => item.category === activeFilter);

  return (
    <section id="realisations" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Avant / après : voyez la différence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Intimité retrouvée, lignes épurées, extérieur valorisé. 
            Découvrez nos réalisations qui transforment les espaces.
          </p>
        </div>

        <div className="flex justify-center mb-12 fade-in-up">
          <div className="inline-flex bg-gray-100 rounded-full p-1">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-brand-green text-white shadow-lg'
                    : 'text-gray-600 hover:text-brand-green'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRealizations.map((realization, index) => (
            <div key={realization.id} className={`bg-white rounded-2xl shadow-lg overflow-hidden fade-in-up`} style={{animationDelay: `${index * 0.1}s`}}>
              <div className="relative">
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <img 
                      src={realization.before} 
                      alt="Avant transformation"
                      className="w-full h-32 object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                      Avant
                    </div>
                  </div>
                  <div className="relative">
                    <img 
                      src={realization.after} 
                      alt="Après transformation"
                      className="w-full h-32 object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
                      Après
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{realization.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{realization.description}</p>
                
                <Button 
                  onClick={scrollToDevis}
                  variant="outline" 
                  size="sm"
                  className="w-full border-brand-green text-brand-green hover:bg-brand-green hover:text-white"
                  data-gtm="cta_devis_click"
                >
                  Projet similaire
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 fade-in-up">
          <Button 
            onClick={scrollToDevis}
            className="btn-primary text-lg px-12 py-4 h-14"
            data-gtm="cta_devis_click"
          >
            Voir mon projet transformé
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Realizations;