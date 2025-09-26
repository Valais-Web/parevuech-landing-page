import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";
import realization1 from "@/assets/realization-1.jpg";
import realization2 from "@/assets/realization-2.jpg";
import realization3 from "@/assets/realization-3.jpg";
import realization4 from "@/assets/realization-4.jpg";
import realization5 from "@/assets/realization-5.jpg";
import realization6 from "@/assets/realization-6.jpg";
import realization7 from "@/assets/realization-7.jpg";
import realization8 from "@/assets/realization-8.jpg";
import realization9 from "@/assets/realization-9.jpg";
import realization10 from "@/assets/realization-10.jpg";
import realization11 from "@/assets/realization-11.jpg";
import realization12 from "@/assets/realization-12.jpg";
import realization13 from "@/assets/realization-13.jpg";
import realization14 from "@/assets/realization-14.jpg";
import realization15 from "@/assets/realization-15.jpg";
import realization16 from "@/assets/realization-16.jpg";
import realization17 from "@/assets/realization-17.jpg";
import realization18 from "@/assets/realization-18.jpg";
import realization19 from "@/assets/realization-19.jpg";
import realization20 from "@/assets/realization-20.jpg";
const Realizations = () => {
  const [api, setApi] = useState<CarouselApi>();
  const realizations = [
    {
      id: 1,
      image: realization1,
      title: "Pare-vue plein avec espace piscine"
    },
    {
      id: 2,
      image: realization2,
      title: "Clôture décorative blanche"
    },
    {
      id: 3,
      image: realization3,
      title: "Pare-vue décoratif moderne"
    },
    {
      id: 4,
      image: realization4,
      title: "Terrasse avec motif Fargesia"
    },
    {
      id: 5,
      image: realization5,
      title: "Motif Carya contemporain"
    },
    {
      id: 6,
      image: realization6,
      title: "Design géométrique élégant"
    },
    {
      id: 7,
      image: realization7,
      title: "Installation résidentielle premium"
    },
    {
      id: 8,
      image: realization8,
      title: "Pare-vue décoratif ludique"
    },
    {
      id: 9,
      image: realization9,
      title: "Système Azara horizontal"
    },
    {
      id: 10,
      image: realization10,
      title: "Création personnalisée thématique"
    },
    {
      id: 11,
      image: realization11,
      title: "Motif Albizia végétal moderne"
    },
    {
      id: 12,
      image: realization12,
      title: "Motif Cyprès décoratif avec portail"
    },
    {
      id: 13,
      image: realization13,
      title: "Albizia teinte Mars sablé"
    },
    {
      id: 14,
      image: realization14,
      title: "Installation longue ligne beige"
    },
    {
      id: 15,
      image: realization15,
      title: "Clôture piscine motif Albizia"
    },
    {
      id: 16,
      image: realization16,
      title: "Terrasse avec motif Papaver"
    },
    {
      id: 17,
      image: realization17,
      title: "Clôture Alba géométrique"
    },
    {
      id: 18,
      image: realization18,
      title: "Jardin avec pare-vue Alba"
    },
    {
      id: 19,
      image: realization19,
      title: "Motif Toona végétal"
    },
    {
      id: 20,
      image: realization20,
      title: "Design zen avec Bouddha"
    }
  ];
  
  
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