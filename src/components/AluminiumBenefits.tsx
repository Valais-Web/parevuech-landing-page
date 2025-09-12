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
            Beau aujourd'hui. Durable dans le temps.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            L'aluminium thermolaqué combine esthétique moderne et performance technique 
            pour des solutions qui traversent les années sans compromis.
          </p>
          
          <div className="bg-white p-6 rounded-2xl shadow-lg max-w-4xl mx-auto">
            <h3 className="text-lg font-bold text-brand-green mb-2">Spécifications techniques</h3>
            <p className="text-gray-700">
              <strong>Alliage aluminium 5754 H111</strong> • épaisseur 3 mm • découpe laser fibre • 
              pliage de rigidification • thermolaquage premium • 
              <strong>Poteaux 60 × 60 mm</strong> à sceller ou sur platines
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </div>
    </section>
  );
};

export default AluminiumBenefits;