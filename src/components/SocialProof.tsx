import { Star } from "lucide-react";

const SocialProof = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 fade-in-up">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            
            <blockquote className="text-lg text-gray-700 mb-4">
              « Nous avons installé des palissades de cette entreprise dans notre jardin et le résultat est magnifique. 
              Solides et élégantes, elles ont transformé notre espace. »
            </blockquote>
            
            <cite className="text-brand-green font-medium">
              — Claire M., Lausanne
            </cite>
          </div>
          
          <div className="flex items-center justify-center space-x-8">
            <div className="text-center">
              <div className="text-brand-green font-bold text-sm mb-2">REVENDEUR OFFICIEL</div>
              <div className="text-2xl font-bold text-gray-800">Brand Conception</div>
            </div>
            
            <div className="text-center">
              <div className="text-brand-green font-bold text-sm mb-2">PARTENAIRE</div>
              <div className="text-2xl font-bold text-gray-800">Jardishop</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;