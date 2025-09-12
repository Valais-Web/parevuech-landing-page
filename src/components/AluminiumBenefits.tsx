import { Shield, Palette, Wrench, Recycle, Sun, Clock } from "lucide-react";

const AluminiumBenefits = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Résiste à la corrosion et aux UV",
      description: "Pas de corrosion, pas de lasure, pas de compromis."
    },
    {
      icon: Palette, 
      title: "Finition homogène premium",
      description: "Texture premium, couleur durable dans le temps."
    },
    {
      icon: Wrench,
      title: "Entretien minimal", 
      description: "Nettoyage à l'eau claire savonneuse, c'est tout."
    },
    {
      icon: Clock,
      title: "Léger et rigide",
      description: "Installation facilitée, stabilité optimale."
    },
    {
      icon: Recycle,
      title: "Recyclable",
      description: "Matériau durable et respectueux de l'environnement."
    },
    {
      icon: Sun,
      title: "Garantie longue durée",
      description: "Investissement pérenne pour vos extérieurs."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            L'aluminium thermolaqué : la solution premium pour vos extérieurs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            L'aluminium thermolaqué combine esthétique moderne et performance technique 
            pour des solutions qui traversent les années sans compromis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={benefit.title} className={`bg-white p-8 rounded-2xl shadow-lg fade-in-up`} style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-12 h-12 bg-brand-cream rounded-full flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-brand-green" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-brand-green to-brand-green/80 p-8 rounded-3xl shadow-xl max-w-5xl mx-auto fade-in-up">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Spécifications techniques premium</h3>
              <p className="text-white/90 mb-4">
                Nos pare-vues sont fabriqués selon les plus hauts standards de qualité, 
                garantissant durabilité et esthétique exceptionnelles.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <div className="grid gap-3 text-white">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-cream rounded-full"></div>
                  <span className="font-semibold">Alliage aluminium 5754 H111</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-cream rounded-full"></div>
                  <span>Épaisseur 3 mm • Découpe laser fibre</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-cream rounded-full"></div>
                  <span>Pliage de rigidification</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-cream rounded-full"></div>
                  <span>Thermolaquage premium</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-cream rounded-full"></div>
                  <span className="font-semibold">Poteaux 60 × 60 mm</span>
                </div>
                <div className="text-sm text-white/80 mt-2">
                  Fixation à sceller ou sur platines
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AluminiumBenefits;