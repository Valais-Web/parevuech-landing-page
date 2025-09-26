import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import brandLogo from "@/assets/logo-brand-conception.webp";

const SocialProof = () => {
  const testimonials = [
    {
      text: "Nous avons installé des palissades de cette entreprise dans notre jardin et le résultat est magnifique. Solides et élégantes, elles ont transformé notre espace.",
      author: "Claire M., Échallens"
    },
    {
      text: "Service impeccable du devis à l'installation. L'équipe a su nous conseiller parfaitement pour notre projet d'aménagement. Résultat au-delà de nos attentes.",
      author: "Marc D., Fribourg"
    },
    {
      text: "Qualité exceptionnelle et finitions parfaites. Nos pare-vues résistent parfaitement aux intempéries et conservent leur éclat après 2 ans.",
      author: "Sophie R., Payerne"
    },
    {
      text: "Accompagnement personnalisé tout au long du projet. De la conception à la pose, tout s'est déroulé dans les règles de l'art.",
      author: "Jean-Paul F., Yverdon"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 fade-in-up">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="flex items-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-sm text-gray-600">4.9/5 - Plus de 200 projets réalisés</span>
            </div>
            
            <div className="min-h-[120px] relative">
              <blockquote className="text-lg text-gray-700 mb-4">
                « {testimonials[currentTestimonial].text} »
              </blockquote>
              
              <cite className="text-brand-green font-medium">
                — {testimonials[currentTestimonial].author}
              </cite>
            </div>

            <div className="flex items-center gap-2 mt-4">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full hover:bg-gray-200 transition-colors"
                aria-label="Témoignage précédent"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="flex gap-1">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-brand-green' : 'bg-gray-300'
                    }`}
                    aria-label={`Aller au témoignage ${index + 1}`}
                  />
                ))}
              </div>
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full hover:bg-gray-200 transition-colors"
                aria-label="Témoignage suivant"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-brand-green font-bold text-sm mb-2">REVENDEUR OFFICIEL</div>
            <img 
              src={brandLogo}
              alt="Logo Brand Conception"
              className="h-10 md:h-12 object-contain mx-auto mb-6"
            />
            
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-lg font-bold text-brand-green mb-2">Service clé en main</h3>
              <p className="text-gray-700 text-sm">
                Accompagnement personnalisé • Installation professionnelle • 
                Suivi de projet complet • Garantie étendue
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;