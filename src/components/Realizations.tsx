import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";
const Realizations = () => {
  const [api, setApi] = useState<CarouselApi>();
  const realizations = [{
    id: 1,
    image: "/lovable-uploads/05078bbc-1a12-4c92-b911-7ce684d33557.png",
    category: "Occultant",
    title: "Pare-vue plein moderne",
    description: "Installation résidentielle, intimité totale garantie",
    location: "Lausanne"
  }, {
    id: 2,
    image: "/lovable-uploads/bb703772-bb6f-4038-ab92-019bd456622b.png",
    category: "Décoratif",
    title: "Motif géométrique contemporain",
    description: "Délimitation élégante avec jeu de lumière subtil",
    location: "Genève"
  }, {
    id: 3,
    image: "/lovable-uploads/c3467b57-7227-4a8f-9394-80a4accfd2ff.png",
    category: "Mixte",
    title: "Ensemble coordonné premium",
    description: "Pare-vue + portillon assorti, installation clé en main",
    location: "Montreux"
  }, {
    id: 4,
    image: "/lovable-uploads/29a8e895-1e1a-4ef7-8301-c8cc90080a5d.png",
    category: "Décoratif",
    title: "Treillis végétal design",
    description: "Support pour plantes grimpantes, effet naturel",
    location: "Yverdon"
  }, {
    id: 5,
    image: "/lovable-uploads/43fe775f-2a8d-46d7-abcd-b53673612607.png",
    category: "Mixte",
    title: "Aménagement complet sur mesure",
    description: "Pare-vue + jardinières intégrées, projet personnalisé",
    location: "Neuchâtel"
  }, {
    id: 6,
    image: "/lovable-uploads/5b312112-5334-485d-8fce-db11d1a55a86.png",
    category: "Occultant",
    title: "Clôture haute performance",
    description: "Protection et esthétique combinées, pose professionnelle",
    location: "Fribourg"
  }, {
    id: 7,
    image: "/lovable-uploads/6a2639c3-19e7-472f-90dd-548ed65612e4.png",
    category: "Décoratif",
    title: "Motif végétal raffiné",
    description: "Design inspiré de la nature, finition premium",
    location: "Vevey"
  }, {
    id: 8,
    image: "/lovable-uploads/05078bbc-1a12-4c92-b911-7ce684d33557.png",
    category: "Occultant",
    title: "Installation résidentielle",
    description: "Transformation complète d'un espace extérieur",
    location: "Sion"
  }];
  
  
  useEffect(() => {
    if (!api) {
      return;
    }

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000); // Défile toutes les 3 secondes

    return () => clearInterval(interval);
  }, [api]);
  return <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Galerie de nos réalisations en Suisse romande
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Plus de 200 projets réalisés avec installation professionnelle. 
            Découvrez comment nous transformons vos espaces extérieurs.
          </p>
          <div className="bg-white inline-flex items-center gap-2 px-4 py-2 rounded-full shadow-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">Équipe installation disponible</span>
          </div>
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {realizations.map((item, index) => (
              <CarouselItem key={item.id} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <div className={`aspect-[4/3] relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 fade-in-up`} style={{
                  animationDelay: `${index * 0.1}s`
                }}>
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="text-center mt-12 fade-in-up">
          <div className="bg-white p-6 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-lg font-bold text-brand-green mb-2">Service d'installation professionnel</h3>
            <p className="text-gray-700 mb-4">Nos équipes qualifiées assurent la pose dans le Nord-Vaudois, Fribourg, Neuchâtel et Jura. Fixation à sceller ou sur platines selon votre projet.</p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">Étude de sol</span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">Pose garantie</span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">Suivi après installation</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Realizations;