import React from 'react';
import { Mail, Facebook, Globe, ArrowUpCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="text-white pt-20 pb-10 px-6 md:px-12 rounded-t-3xl md:rounded-t-[100px]" style={{backgroundColor: '#8a0080'}}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Colonne 1 : Vision */}
          <div className="animate-fade-in-left">
            <div className="flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" style={{backgroundColor: '#bc00ac'}}>KD</div>
              <span className="text-lg md:text-xl font-bold tracking-tight group-hover:text-green-400 transition-colors duration-300">KOLOSSI DREPANO</span>
            </div>
            <p className="text-purple-100 text-sm leading-relaxed mb-6 hover:text-white transition-colors duration-300">
              « Une société inclusive est une société qui s'enrichit de toutes ses forces. »
              Ensemble, brisons le cycle de l'exclusion au Cameroun.
            </p>
          </div>

          {/* Colonne 2 : Liens rapides */}
          <div className="flex flex-col gap-4 animate-fade-in">
            <h4 className="font-bold text-lg mb-2">Navigation</h4>
            {['Notre Vision 2030', 'Centre d\'Insertion', 'Plaidoyer et Sensibilisation', 'Mentions Légales'].map((link, i) => (
              <a 
                key={i}
                href="#" 
                className="text-purple-100 hover:text-white hover:translate-x-2 transition-all duration-300 relative group"
              >
                <span className="absolute -left-4 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                {link}
              </a>
            ))}
          </div>

          {/* Colonne 3 : Contact & Social */}
          <div className="animate-fade-in-right">
            <h4 className="font-bold text-lg mb-6">Rejoignez le mouvement</h4>
            <div className="flex flex-col gap-4">
              <a 
                href="mailto:Kolosi.association@gmail.com" 
                className="flex items-center gap-3 group hover:translate-x-2 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300" style={{backgroundColor: '#bc00ac'}}>
                  <Mail size={18} />
                </div>
                <span className="text-sm group-hover:text-green-400 transition-colors">Kolosi.association@gmail.com</span>
              </a>
              <a 
                href="https://facebook.com/kolosidrepano" 
                className="flex items-center gap-3 group hover:translate-x-2 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-blue-500 group-hover:scale-110 transition-all duration-300" style={{backgroundColor: '#bc00ac'}}>
                  <Facebook size={18} />
                </div>
                <span className="text-sm group-hover:text-blue-400 transition-colors">Kolosi Drepano</span>
              </a>
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-purple-500 group-hover:scale-110 transition-all duration-300" style={{backgroundColor: '#bc00ac'}}>
                  <Globe size={18} />
                </div>
                <span className="text-sm italic text-purple-200 underline underline-offset-4 group-hover:text-purple-400 transition-colors">Site Web officiel en construction</span>
              </div>
            </div>
          </div>
        </div>

        {/* Barre de fin */}
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-purple-200 animate-fade-in" style={{borderColor: '#bc00ac'}}>
          <p>© 2026 Kolosi Drepano. Tous droits réservés.</p>
          <div className="flex items-center gap-2">
            <span>Fait avec résilience à Yaoundé</span>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:scale-125 hover:text-green-400 transition-all duration-300"
            >
              <ArrowUpCircle size={24} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
