import React, { useState } from 'react';
import { ArrowRight, Heart, Users, Lightbulb, Target, Award, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import AnimatedCircles from './AnimatedCircles';

const KolosiWebsite = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="font-sans text-slate-900 bg-white">
      {/* NAVIGATION */}
      <nav className="sticky top-0 z-50 flex justify-between items-center px-4 sm:px-6 md:px-12 py-3 sm:py-4 bg-white shadow-md">
        <img src="/LOGO KOLOSI.jpg.jpeg" alt="Kolosi Drepano Logo" className="w-24 sm:w-28 md:w-32 h-16 object-contain shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300" />
        
        <div className="hidden md:flex gap-6 lg:gap-8 text-xs sm:text-sm font-medium text-slate-700">
          <a href="#association" className="transition-colors duration-300 relative group" style={{"--hover-color": "#bc00ac"}} onMouseEnter={(e) => e.target.style.color = '#bc00ac'} onMouseLeave={(e) => e.target.style.color = '#374151'}>
            L'Association
            <span className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" style={{backgroundColor: '#bc00ac'}}></span>
          </a>
          <a href="#actions" className="transition-colors duration-300 relative group" onMouseEnter={(e) => e.target.style.color = '#bc00ac'} onMouseLeave={(e) => e.target.style.color = '#374151'}>
            Nos Actions
            <span className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" style={{backgroundColor: '#bc00ac'}}></span>
          </a>
          <a href="#partenaires" className="transition-colors duration-300 relative group" onMouseEnter={(e) => e.target.style.color = '#bc00ac'} onMouseLeave={(e) => e.target.style.color = '#374151'}>
            Partenaires
            <span className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" style={{backgroundColor: '#bc00ac'}}></span>
          </a>
          <a href="#contact" className="transition-colors duration-300 relative group" onMouseEnter={(e) => e.target.style.color = '#bc00ac'} onMouseLeave={(e) => e.target.style.color = '#374151'}>
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" style={{backgroundColor: '#bc00ac'}}></span>
          </a>
        </div>

        <button className="text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium flex items-center gap-1 sm:gap-2 hover:shadow-lg hover:scale-105 transition-all duration-300" style={{background: 'linear-gradient(to right, #bc00ac, #8a0080)'}}>
          Nous soutenir <ArrowRight size={14} className="hidden sm:inline" />
        </button>
      </nav>

      {/* HERO SECTION */}
      <section className="relative px-6 md:px-12 py-20 grid md:grid-cols-2 items-center overflow-hidden gap-8 bg-gradient-to-br from-slate-50 to-white">
        <AnimatedCircles />
        <div className="z-10">
          <h1 className="text-5xl md:text-6xl font-light italic mb-2" style={{color: '#bc00ac'}}>
            La résilience pour tous
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight" style={{color: '#8a0080'}}>
            avec Kolosi Drepano
          </h2>
          <p className="max-w-md text-slate-600 mb-10 leading-relaxed text-lg">
            Nous transformons le vécu de la maladie en un moteur d'autonomie. Nous construisons un pont vers l'avenir pour chaque talent atteint de drépanocytose au Cameroun.
          </p>
          <button className="text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg" style={{background: 'linear-gradient(to right, #bc00ac, #8a0080)'}}>
            Qui sommes-nous ? <ArrowRight size={20} />
          </button>
        </div>

        {/* ÉLÉMENTS GRAPHIQUES */}
        <div className="relative flex justify-center items-center h-96 md:h-full">
          <div className="absolute w-80 h-80 border-2 rounded-full opacity-30 animate-pulse" style={{borderColor: '#bc00ac'}}></div>
          <div className="absolute w-64 h-64 border-4 border-green-400 rounded-full -left-10 bottom-0 opacity-40"></div>
          <div className="absolute w-24 h-24 bg-yellow-400 rounded-full top-20 right-20 opacity-60"></div>
          
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 z-20 shadow-2xl transition-shadow duration-500" style={{borderColor: '#bc00ac'}}>
            <img 
              src="/imagekolosi/IMG_7651.JPG-removebg-preview.png" 
              alt="Présidente" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110"
            />
          </div>
        </div>
      </section>

      {/* SECTION À PROPOS */}
      <section id="association" className="px-4 sm:px-6 md:px-12 py-16 sm:py-24 bg-slate-50 flex flex-col md:flex-row gap-8 md:gap-16 items-center">
        <div className="w-full md:w-1/2 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500">
          <img 
            src="/imagekolosi/IMG_0724.JPG.jpeg" 
            alt="Action Kolosi" 
            className="w-full h-64 sm:h-80 md:h-96 object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
        
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8" style={{color: '#8a0080'}}>Pourquoi Kolosi Drepano ?</h3>
          <div className="border-l-4 pl-4 sm:pl-6 py-4 bg-white shadow-md rounded-r-lg hover:shadow-lg transition-shadow duration-300 mb-6 sm:mb-8" style={{borderColor: '#bc00ac'}}>
            <h4 className="italic font-bold text-base sm:text-lg mb-4" style={{color: '#bc00ac'}}>« Kolosi » signifie « Lève-toi »</h4>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Ce mot évoque la force intérieure, la résilience et la capacité à se relever malgré les épreuves. À travers ce nom, l'association adresse un message fort : se lever, croire en soi, oser briller et prendre sa place dans la société.
            </p>
          </div>
          <div className="p-4 sm:p-6 rounded-2xl border-2" style={{backgroundColor: '#f3e8ff', borderColor: '#bc00ac'}}>
            <p className="text-slate-700 font-semibold mb-2 text-sm sm:text-base">Fondatrice et Présidente</p>
            <p className="font-bold text-base sm:text-lg" style={{color: '#8a0080'}}>Mme Nelsa Yoda</p>
          </div>
        </div>
      </section>

      {/* SECTION VALEURS */}
      <section className="relative px-4 sm:px-6 md:px-12 py-16 sm:py-24 bg-white overflow-hidden">
        <AnimatedCircles />
        <div className="text-center mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4" style={{color: '#8a0080'}}>Nos 5 Piliers</h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
            L'action de Kolosi Drepano est guidée par des valeurs fondamentales qui orientent chacune de nos interventions auprès des patients au Cameroun.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {[
            { title: "Dignité", desc: "L'être humain au cœur du projet. La maladie ne définit ni la valeur, ni le potentiel.", color: "bg-purple-50", icon: "✨", border: "border-purple-200" },
            { title: "Inclusion", desc: "Combattre la marginalisation pour garantir une place à l'école et en entreprise.", color: "bg-green-50", icon: "🤝", border: "border-green-200" },
            { title: "Résilience", desc: "Fidèles à « Kolosi », nous cultivons la force de se relever après chaque crise.", color: "bg-yellow-50", icon: "🌱", border: "border-yellow-200" },
            { title: "Responsabilité", desc: "Intégrité totale et gestion rigoureuse de nos actions et ressources.", color: "bg-blue-50", icon: "🛡️", border: "border-blue-200" },
            { title: "Impact durable", desc: "Refus des solutions superficielles pour une amélioration de long terme.", color: "bg-slate-50", icon: "♾️", border: "border-slate-200" }
          ].map((valeur, index) => (
            <div 
              key={index} 
              className={`${valeur.color} p-8 rounded-2xl hover:shadow-xl hover:scale-105 transition-all duration-300 group cursor-default border-2 ${valeur.border} flex flex-col items-center text-center`}
            >
              <span className="text-5xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">{valeur.icon}</span>
              <h4 className="font-bold mb-3 text-base sm:text-lg" style={{color: '#8a0080'}}>{valeur.title}</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{valeur.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION ACTIONS */}
      <section id="actions" className="relative px-4 sm:px-6 md:px-12 py-16 sm:py-24 bg-gradient-to-br from-purple-50 to-slate-50 overflow-hidden">
        <AnimatedCircles />
        <div className="text-center mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4" style={{color: '#8a0080'}}>Nos Actions</h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
            Découvrez comment nous accompagnons les jeunes atteints de drépanocytose au Cameroun.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {[
            { icon: <Heart className="w-12 h-12 text-red-500" />, title: "Soutien Médical", desc: "Accès aux soins de qualité et suivi médical régulier pour les patients." },
            { icon: <Users className="w-12 h-12 text-blue-500" />, title: "Accompagnement Psychosocial", desc: "Soutien émotionnel et intégration sociale pour les jeunes patients." },
            { icon: <Lightbulb className="w-12 h-12 text-yellow-500" />, title: "Formation & Éducation", desc: "Programmes de formation professionnelle et d'autonomisation." },
            { icon: <Target className="w-12 h-12" style={{color: '#bc00ac'}} />, title: "Sensibilisation", desc: "Campagnes de sensibilisation sur la drépanocytose et ses enjeux." },
            { icon: <Award className="w-12 h-12 text-purple-500" />, title: "Bourses d'Études", desc: "Soutien financier pour la scolarité des jeunes en difficulté." },
            { icon: <Users className="w-12 h-12" style={{color: '#8a0080'}} />, title: "Réseautage", desc: "Création de communautés de soutien entre patients et familles." }
          ].map((action, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-slate-200 hover:border-purple-300"
            >
              <div className="mb-4">{action.icon}</div>
              <h4 className="font-bold text-base sm:text-lg md:text-xl mb-3" style={{color: '#8a0080'}}>{action.title}</h4>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{action.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION PARTENAIRES */}
      <section id="partenaires" className="relative px-4 sm:px-6 md:px-12 py-16 sm:py-24 bg-white overflow-hidden">
        <AnimatedCircles />
        <div className="text-center mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4" style={{color: '#8a0080'}}>Nos Partenaires</h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
            Nous travaillons en collaboration avec des organisations et institutions engagées pour notre cause.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {[
            "Ministère de la Santé",
            "Hôpital Central de Yaoundé",
            "Croix-Rouge Cameroun",
            "UNICEF Cameroun",
            "ONG Santé Plus",
            "Université de Yaoundé",
            "Fondation Santé Jeunesse",
            "Partenaires Internationaux"
          ].map((partner, index) => (
            <div 
              key={index} 
              className="bg-slate-50 p-4 sm:p-6 rounded-2xl border-2 border-slate-200 hover:border-purple-400 hover:shadow-lg transition-all duration-300 flex items-center justify-center text-center min-h-20 sm:min-h-24"
            >
              <p className="text-slate-700 font-semibold text-xs sm:text-sm md:text-base">{partner}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION CONTACT */}
      <section id="contact" className="relative px-4 sm:px-6 md:px-12 py-16 sm:py-24 text-white overflow-hidden" style={{background: 'linear-gradient(to bottom right, #8a0080, #bc00ac)'}}>
        <AnimatedCircles />
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {/* CONTACT INFO */}
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">Nous Contacter</h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex gap-3 sm:gap-4 items-start">
                  <Phone className="w-5 sm:w-6 h-5 sm:h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1 text-sm sm:text-base">Téléphone</p>
                    <p className="text-indigo-100 text-sm sm:text-base">+237 XXX XXX XXX</p>
                  </div>
                </div>
                <div className="flex gap-3 sm:gap-4 items-start">
                  <Mail className="w-5 sm:w-6 h-5 sm:h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1 text-sm sm:text-base">Email</p>
                    <p className="text-indigo-100 text-sm sm:text-base">contact@kolosidrepano.cm</p>
                  </div>
                </div>
                <div className="flex gap-3 sm:gap-4 items-start">
                  <MapPin className="w-5 sm:w-6 h-5 sm:h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1 text-sm sm:text-base">Adresse</p>
                    <p className="text-indigo-100 text-sm sm:text-base">Yaoundé, Cameroun</p>
                  </div>
                </div>
              </div>

              {/* RÉSEAUX SOCIAUX */}
              <div className="mt-8 sm:mt-12">
                <p className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Suivez-nous</p>
                <div className="flex gap-3 sm:gap-4">
                  <a href="#" className="bg-white/20 hover:bg-white/30 p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110">
                    <Facebook className="w-5 sm:w-6 h-5 sm:h-6" />
                  </a>
                  <a href="#" className="bg-white/20 hover:bg-white/30 p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110">
                    <Instagram className="w-5 sm:w-6 h-5 sm:h-6" />
                  </a>
                  <a href="#" className="bg-white/20 hover:bg-white/30 p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110">
                    <Linkedin className="w-5 sm:w-6 h-5 sm:h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* FORMULAIRE CONTACT */}
            <div>
              <form onSubmit={handleFormSubmit} className="space-y-3 sm:space-y-4">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold mb-2">Nom</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-indigo-200 focus:outline-none focus:border-green-400 transition-colors duration-300 text-sm sm:text-base"
                    placeholder="Votre nom"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-semibold mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-indigo-200 focus:outline-none focus:border-green-400 transition-colors duration-300 text-sm sm:text-base"
                    placeholder="votre@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-semibold mb-2">Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    rows="4"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-indigo-200 focus:outline-none focus:border-green-400 transition-colors duration-300 resize-none text-sm sm:text-base"
                    placeholder="Votre message..."
                    required
                  ></textarea>
                </div>
                  <button 
                    type="submit"
                    className="w-full font-bold py-2 sm:py-3 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 text-white text-sm sm:text-base" 
                    style={{background: 'linear-gradient(to right, #00d084, #00b870)'}}
                  >
                    Envoyer le message
                  </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-white px-4 sm:px-6 md:px-12 py-6 sm:py-8 text-center border-t" style={{backgroundColor: '#8a0080', borderColor: '#bc00ac'}}>
        <p className="mb-2 text-xs sm:text-sm md:text-base">&copy; 2026 Kolosi Drepano.| Par David Loïc ZIEM NGAM | Tous droits réservés.</p>
        <p className="text-xs sm:text-sm">Ensemble pour une vie meilleure | Lève-toi et brille</p>
      </footer>
    </div>
  );
};

export default KolosiWebsite;
