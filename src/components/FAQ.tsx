import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Comment entretenir l'aluminium thermolaqué ?",
      answer: "L'aluminium thermolaqué se nettoie à l'eau claire savonneuse, suivi d'un rinçage. N'utilisez pas d'abrasifs qui pourraient endommager la finition. Cet entretien minimal est l'un des grands avantages de ce matériau premium."
    },
    {
      question: "Quelle garantie s'applique ?",
      answer: "Garantie fabricant sur structure et laquage selon les conditions en vigueur. La durabilité exceptionnelle de nos produits Brand Conception vous assure une tranquillité d'esprit sur le long terme."
    },
    {
      question: "Puis-je poser moi-même ? Proposez-vous un partenaire ?",
      answer: "Pose possible par vos soins si vous êtes équipé pour la maçonnerie (scellement) ou la fixation mécanique (platines). Nous pouvons également recommander un paysagiste partenaire qualifié dans votre région."
    },
    {
      question: "Faut-il une autorisation ou l'accord du voisin ?",
      answer: "Selon les communes, une autorisation ou une mise à l'enquête peut être requise. Les règles varient selon les zones et hauteurs. Nous vous guidons sur les grandes lignes, mais la décision finale appartient aux autorités locales. Vérifiez toujours avec votre commune."
    },
    {
      question: "Quelles teintes sont disponibles ? RAL personnalisé ?",
      answer: "23 RAL fine texture + 6 Futura sablées en standard pour une livraison rapide. Tout RAL possible sur demande pour une personnalisation complète. Nous pouvons vous conseiller sur l'harmonie teinte/motif selon votre environnement."
    },
    {
      question: "Quel délai moyen ?",
      answer: "Environ 7 semaines entre commande validée et mise à disposition. Le délai précis dépend de la complexité du projet, des finitions choisies et de la période. Nous vous communiquons un planning détaillé après validation technique."
    },
    {
      question: "Comment se déroule la commande, la livraison ou l'enlèvement ?",
      answer: "Après réception de votre estimation et du catalogue, nous validons ensemble tous les détails techniques avant lancement en fabrication. Livraison ou enlèvement coordonné selon votre préférence et votre localisation en Suisse romande."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Questions fréquentes
          </h2>
          <p className="text-xl text-gray-600">
            Toutes les réponses aux questions que vous vous posez sur nos pare-vues en aluminium.
          </p>
        </div>

        <div className="fade-in-up">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-2xl shadow-lg border-0 px-6 py-2"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-brand-green transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12 fade-in-up">
          <p className="text-gray-600 mb-4">
            Une question spécifique ? Notre équipe vous répond personnellement.
          </p>
          
          <div className="bg-brand-cream rounded-2xl p-6 inline-block">
            <p className="text-brand-green font-medium">
              💡 <strong>Conseil gratuit</strong> • Expertise technique • Accompagnement projet
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;