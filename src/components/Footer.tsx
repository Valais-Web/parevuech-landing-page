const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src="/lovable-uploads/logo-pare-vue.png" alt="Pare-Vue.ch Logo" className="w-8 h-8" />
            <div className="text-2xl font-bold text-white">
              Pare-Vue.ch
            </div>
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
            <p className="text-gray-400 text-sm flex items-center justify-center gap-2 flex-wrap">
              <span>© {new Date().getFullYear()} Pare-Vue.ch — Tous droits réservés.</span>
              <span>•</span>
              <span>
                Site web conçu par{' '}
                <a 
                  href="https://valaisweb.ch" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors"
                >
                  Valais Web
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;