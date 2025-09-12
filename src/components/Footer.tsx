const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-white mb-4">
            Pare-Vue.ch
          </div>
          
          <div className="flex justify-center space-x-8 text-sm">
            <a href="#" className="hover:text-brand-cream transition-colors">
              Conditions générales
            </a>
            <a href="#" className="hover:text-brand-cream transition-colors">
              Politique de confidentialité
            </a>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Pare-Vue.ch — Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;