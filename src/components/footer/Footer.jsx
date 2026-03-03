import React from 'react';
import { Mail, Facebook, Globe, ArrowUpCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="text-white pt-12 sm:pt-20 pb-6 sm:pb-10 px-4 sm:px-6 md:px-12 rounded-t-2xl sm:rounded-t-3xl md:rounded-t-[100px]" 
      style={{
        backgroundColor: '#8a0080',
        zIndex: 10,
        position: 'relative',
      }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-16">
          
          {/* Colonne 1 : Vision */}
          <div>
            <div className="flex items-center gap-3 mb-4 sm:mb-6 group">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" style={{backgroundColor: '#bc00ac'}}>KD</div>
              <span className="text-base sm:text-lg md:text-xl font-bold tracking-tight group-hover:text-green-400 transition-colors duration-300">KOLOSSI DREPANO</span>
            </div>
            <p className="text-purple-100 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 hover:text-white transition-colors duration-300">
              « Une société inclusive est une société qui s'enrichit de toutes ses forces. »
              Ensemble, brisons le cycle de l'exclusion au Cameroun.
            </p>
          </div>

          {/* Colonne 2 : Liens rapides */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <h4 className="font-bold text-base sm:text-lg mb-2">Navigation</h4>
            {['Notre Vision 2030', 'Centre d\'Insertion', 'Plaidoyer et Sensibilisation', 'Mentions Légales'].map((link, i) => (
              <a 
                key={i}
                href="#" 
                className="text-purple-100 hover:text-white hover:translate-x-2 transition-all duration-300 relative group text-xs sm:text-sm"
              >
                <span className="absolute -left-4 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                {link}
              </a>
            ))}
          </div>

          {/* Colonne 3 : Contact & Social */}
          <div>
            <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-6">Rejoignez le mouvement</h4>
            <div className="flex flex-col gap-3 sm:gap-4">
              <a 
                href="mailto:Kolosi.association@gmail.com" 
                className="flex items-center gap-3 group hover:translate-x-2 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 flex-shrink-0" style={{backgroundColor: '#bc00ac'}}>
                  <Mail size={16} className="sm:w-5 sm:h-5" />
                </div>
                <span className="text-xs sm:text-sm group-hover:text-green-400 transition-colors">Kolosi.association@gmail.com</span>
              </a>
              <a 
                href="https://facebook.com/kolosidrepano" 
                className="flex items-center gap-3 group hover:translate-x-2 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-blue-500 group-hover:scale-110 transition-all duration-300 flex-shrink-0" style={{backgroundColor: '#bc00ac'}}>
                  <Facebook size={16} className="sm:w-5 sm:h-5" />
                </div>
                <span className="text-xs sm:text-sm group-hover:text-blue-400 transition-colors">Kolosi Drepano</span>
              </a>
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-purple-500 group-hover:scale-110 transition-all duration-300 flex-shrink-0" style={{backgroundColor: '#bc00ac'}}>
                  <Globe size={16} className="sm:w-5 sm:h-5" />
                </div>
                <span className="text-xs sm:text-sm italic text-purple-200 underline underline-offset-4 group-hover:text-purple-400 transition-colors">Site Web officiel en construction</span>
              </div>
            </div>
          </div>
        </div>

        {/* Barre de fin */}
        <div className="border-t pt-4 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4 text-xs text-purple-200" style={{borderColor: '#bc00ac'}}>
          <p className="text-center sm:text-left">© 2026 Kolosi Drepano | by CMCT | Tous droits réservés.</p>
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline">Retournez en haut de la page</span>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:scale-125 hover:text-green-400 transition-all duration-300 flex-shrink-0"
            >
              <ArrowUpCircle size={20} className="sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
