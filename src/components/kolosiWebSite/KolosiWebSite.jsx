import React, { useState } from 'react';
import { ArrowRight, Heart, Users, Lightbulb, Target, Award, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Image, ArrowUpCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AnimatedCircles from './AnimatedCircles';

const KolosiWebsite = () => {
  const navigate = useNavigate();
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
        <img src="/LOGO KOLOSI.jpg.jpeg" 
          alt="Kolosi Drepano Logo" 
          style={{ height: '100px', width: '170px' }}
          onClick={() => navigate('/')}
          className="cursor-pointer hover:opacity-80 transition-opacity"
        />
        
        <div className="hidden md:flex gap-6 lg:gap-8 text-xs sm:text-sm font-medium text-slate-700">
          <button onClick={() => navigate('/about')} className="transition-colors duration-300 relative group" onMouseEnter={(e) => e.target.style.color = '#bc00ac'} onMouseLeave={(e) => e.target.style.color = '#374151'}>
            L'Association
            <span className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" style={{backgroundColor: '#bc00ac'}}></span>
          </button>
          <button onClick={() => navigate('/actions')} className="transition-colors duration-300 relative group" onMouseEnter={(e) => e.target.style.color = '#bc00ac'} onMouseLeave={(e) => e.target.style.color = '#374151'}>
            Nos Actions
            <span className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" style={{backgroundColor: '#bc00ac'}}></span>
          </button>
          <button onClick={() => navigate('/gallery')} className="transition-colors duration-300 relative group" onMouseEnter={(e) => e.target.style.color = '#bc00ac'} onMouseLeave={(e) => e.target.style.color = '#374151'}>
            Galerie
            <span className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" style={{backgroundColor: '#bc00ac'}}></span>
          </button>
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
      <section className="relative px-4 sm:px-6 md:px-12 py-16 sm:py-20 grid md:grid-cols-2 items-center overflow-hidden gap-6 sm:gap-8 bg-gradient-to-br from-slate-50 to-white">
        <AnimatedCircles />
        <div className="z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light italic mb-2" style={{color: '#bc00ac'}}>
            La résilience pour tous
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 leading-tight" style={{color: '#8a0080'}}>
            avec Kolosi Drepano
          </h2>
          <p className="max-w-md text-slate-600 mb-8 sm:mb-10 leading-relaxed text-sm sm:text-base">
            Nous transformons le vécu de la maladie en un moteur d'autonomie. Nous construisons un pont vers l'avenir pour chaque talent atteint de drépanocytose au Cameroun.
          </p>
          <button onClick={() => navigate('/about')} className="text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-medium flex items-center gap-2 hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg text-sm sm:text-base" style={{background: 'linear-gradient(to right, #bc00ac, #8a0080)'}}>
            Qui sommes-nous ? <ArrowRight size={18} />
          </button>
        </div>

        {/* ÉLÉMENTS GRAPHIQUES */}
        <div className="relative flex justify-center items-center h-64 sm:h-80 md:h-full">
          <div className="absolute w-64 sm:w-80 h-64 sm:h-80 border-2 rounded-full opacity-30 animate-pulse" style={{borderColor: '#bc00ac'}}></div>
          <div className="absolute w-48 sm:w-64 h-48 sm:h-64 border-4 border-green-400 rounded-full -left-10 bottom-0 opacity-40"></div>
          <div className="absolute w-20 sm:w-24 h-20 sm:h-24 bg-yellow-400 rounded-full top-16 sm:top-20 right-16 sm:right-20 opacity-60"></div>
          
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-8 z-20 shadow-2xl transition-shadow duration-500 flex items-center justify-center bg-white" style={{borderColor: '#bc00ac'}}>
            <img 
              src="/imagekolosi/IMG_7651.JPG-removebg-preview.png" 
              alt="Présidente" 
              className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110"
            />
          </div>
        </div>
      </section>

      {/* SECTION À PROPOS */}
      <section id="association" className="px-4 sm:px-6 md:px-12 py-12 sm:py-24 bg-slate-50 flex flex-col md:flex-row gap-8 md:gap-16 items-center">
        <div className="w-full md:w-1/2 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500 bg-white flex items-center justify-center" style={{height: '500px'}}>
          <img 
            src="/imagekolosi/IMG_0724.JPG.jpeg" 
            alt="Action Kolosi" 
            className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
          />
        </div>
        
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-8" style={{color: '#8a0080'}}>Pourquoi Kolosi Drepano ?</h3>
          <div className="border-l-4 pl-4 sm:pl-6 py-4 bg-white shadow-md rounded-r-lg hover:shadow-lg transition-shadow duration-300 mb-4 sm:mb-8" style={{borderColor: '#bc00ac'}}>
            <h4 className="italic font-bold text-sm sm:text-base md:text-lg mb-3 sm:mb-4" style={{color: '#bc00ac'}}>« Kolosi » signifie « Lève-toi »</h4>
            <p className="text-slate-600 leading-relaxed text-xs sm:text-sm md:text-base">
              Ce mot évoque la force intérieure, la résilience et la capacité à se relever malgré les épreuves. À travers ce nom, l'association adresse un message fort : se lever, croire en soi, oser briller et prendre sa place dans la société.
            </p>
          </div>
          <div className="p-4 sm:p-6 rounded-2xl border-2" style={{backgroundColor: '#f3e8ff', borderColor: '#bc00ac'}}>
            <p className="text-slate-700 font-semibold mb-2 text-xs sm:text-sm md:text-base">Fondatrice et Présidente</p>
            <p className="font-bold text-sm sm:text-base md:text-lg" style={{color: '#8a0080'}}>Mme Nelsa Yoda</p>
          </div>
        </div>
      </section>

      {/* SECTION VALEURS */}
      <section className="relative px-4 sm:px-6 md:px-12 py-12 sm:py-24 bg-white overflow-hidden">
        <AnimatedCircles />
        <div className="text-center mb-8 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4" style={{color: '#8a0080'}}>Nos 5 Piliers</h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-xs sm:text-sm md:text-base lg:text-lg px-2">
            L'action de Kolosi Drepano est guidée par des valeurs fondamentales qui orientent chacune de nos interventions auprès des patients au Cameroun.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
          {[
            { title: "Dignité", desc: "L'être humain au cœur du projet. La maladie ne définit ni la valeur, ni le potentiel.", color: "bg-purple-50", icon: "✨", border: "border-purple-200" },
            { title: "Inclusion", desc: "Combattre la marginalisation pour garantir une place à l'école et en entreprise.", color: "bg-green-50", icon: "🤝", border: "border-green-200" },
            { title: "Résilience", desc: "Fidèles à « Kolosi », nous cultivons la force de se relever après chaque crise.", color: "bg-yellow-50", icon: "🌱", border: "border-yellow-200" },
            { title: "Responsabilité", desc: "Intégrité totale et gestion rigoureuse de nos actions et ressources.", color: "bg-blue-50", icon: "🛡️", border: "border-blue-200" },
            { title: "Impact durable", desc: "Refus des solutions superficielles pour une amélioration de long terme.", color: "bg-slate-50", icon: "♾️", border: "border-slate-200" }
          ].map((valeur, index) => (
            <div 
              key={index} 
              className={`${valeur.color} p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-2xl hover:shadow-xl hover:scale-105 transition-all duration-300 group cursor-default border-2 ${valeur.border} flex flex-col items-center text-center`}
            >
              <span className="text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">{valeur.icon}</span>
              <h4 className="font-bold mb-2 sm:mb-3 text-sm sm:text-base md:text-lg" style={{color: '#8a0080'}}>{valeur.title}</h4>
              <p className="text-slate-600 text-xs sm:text-xs md:text-sm leading-relaxed">{valeur.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION ACTIONS */}
      <section id="actions" className="relative px-4 sm:px-6 md:px-12 py-12 sm:py-24 bg-gradient-to-br from-purple-50 to-slate-50 overflow-hidden">
        <AnimatedCircles />
        <div className="text-center mb-8 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4" style={{color: '#8a0080'}}>Nos Actions</h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-xs sm:text-sm md:text-base lg:text-lg px-2">
            Découvrez comment nous accompagnons les jeunes atteints de drépanocytose au Cameroun.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {[
            { icon: <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-red-500" />, title: "Soutien Médical", desc: "Accès aux soins de qualité et suivi médical régulier pour les patients." },
            { icon: <Users className="w-10 h-10 sm:w-12 sm:h-12 text-blue-500" />, title: "Accompagnement Psychosocial", desc: "Soutien émotionnel et intégration sociale pour les jeunes patients." },
            { icon: <Lightbulb className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-500" />, title: "Formation & Éducation", desc: "Programmes de formation professionnelle et d'autonomisation." },
            { icon: <Target className="w-10 h-10 sm:w-12 sm:h-12" style={{color: '#bc00ac'}} />, title: "Sensibilisation", desc: "Campagnes de sensibilisation sur la drépanocytose et ses enjeux." },
            { icon: <Award className="w-10 h-10 sm:w-12 sm:h-12 text-purple-500" />, title: "Bourses d'Études", desc: "Soutien financier pour la scolarité des jeunes en difficulté." },
            { icon: <Users className="w-10 h-10 sm:w-12 sm:h-12" style={{color: '#8a0080'}} />, title: "Réseautage", desc: "Création de communautés de soutien entre patients et familles." }
          ].map((action, index) => (
            <button
              key={index}
              onClick={() => navigate('/actions')}
              className="bg-white p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-slate-200 hover:border-purple-300 text-left"
            >
              <div className="mb-3 sm:mb-4">{action.icon}</div>
              <h4 className="font-bold text-sm sm:text-base md:text-lg lg:text-xl mb-2 sm:mb-3" style={{color: '#8a0080'}}>{action.title}</h4>
              <p className="text-slate-600 leading-relaxed text-xs sm:text-sm md:text-base">{action.desc}</p>
            </button>
          ))}
        </div>
      </section>

      {/* SECTION PARTENAIRES */}
      <section id="partenaires" className="relative px-4 sm:px-6 md:px-12 py-12 sm:py-24 bg-white overflow-hidden">
        <AnimatedCircles />
        <div className="text-center mb-8 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4" style={{color: '#8a0080'}}>Nos Partenaires</h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-xs sm:text-sm md:text-base lg:text-lg px-2">
            Nous travaillons en collaboration avec des organisations et institutions engagées pour notre cause.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
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
              className="bg-slate-50 p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-2xl border-2 border-slate-200 hover:border-purple-400 hover:shadow-lg transition-all duration-300 flex items-center justify-center text-center min-h-16 sm:min-h-20 md:min-h-24"
            >
              <p className="text-slate-700 font-semibold text-xs sm:text-sm md:text-base">{partner}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION GALERIE */}
      <section className="relative px-4 sm:px-6 md:px-12 py-12 sm:py-24 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
        <AnimatedCircles />
        <div className="text-center mb-8 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4" style={{color: '#8a0080'}}>Galerie Kolosi</h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-xs sm:text-sm md:text-base lg:text-lg px-2">
            Découvrez nos moments, nos actions et notre engagement auprès des jeunes atteints de drépanocytose.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12">
          {[
            '/imagekolosi/IMG_0727.JPG.jpeg',
            '/imagekolosi/IMG_0730111.JPG.jpeg',
            '/imagekolosi/IMG_7654.JPG.jpeg',
            '/imagekolosi/WhatsApp Image 2026-02-09 at 2.52.50 PM.jpeg'
          ].map((image, index) => (
            <div key={index} className="relative rounded-lg sm:rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group bg-white flex items-center justify-center" style={{height: '280px'}}>
              <img src={image} alt={`Galerie ${index + 1}`} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => navigate('/gallery')}
            className="text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-medium flex items-center gap-2 hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg mx-auto text-sm sm:text-base"
            style={{background: 'linear-gradient(to right, #bc00ac, #8a0080)'}}
          >
            Voir la galerie complète <Image size={18} className="sm:w-5 sm:h-5" />
          </button>
        </div>
      </section>

      {/* SECTION CONTACT */}
      <section id="contact" 
        className="relative px-4 sm:px-6 md:px-12 lg:px-16 py-12 sm:py-24 text-white overflow-hidden" 
        style={{
          background: 'linear-gradient(to bottom right, #8a0080, #bc00ac)',
          minHeight: '1030px',
          height: 'auto'}}>
        <AnimatedCircles />
        <div className="max-w-7xl mx-auto"
          style={{ marginBottom: "150px"}}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 lg:gap-20">
            {/* CONTACT INFO */}
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8">Nous Contacter</h3>
              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                <div className="flex gap-3 sm:gap-4 items-start">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1 text-xs sm:text-sm md:text-base">Téléphone</p>
                    <p className="text-indigo-100 text-xs sm:text-sm md:text-base">+237 XXX XXX XXX</p>
                  </div>
                </div>
                <div className="flex gap-3 sm:gap-4 items-start">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1 text-xs sm:text-sm md:text-base">Email</p>
                    <p className="text-indigo-100 text-xs sm:text-sm md:text-base">contact@kolosidrepano.cm</p>
                  </div>
                </div>
                <div className="flex gap-3 sm:gap-4 items-start">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1 text-xs sm:text-sm md:text-base">Adresse</p>
                    <p className="text-indigo-100 text-xs sm:text-sm md:text-base">Yaoundé, Cameroun</p>
                  </div>
                </div>
              </div>

              {/* RÉSEAUX SOCIAUX */}
              <div className="mt-6 sm:mt-8 md:mt-12">
                <p className="font-semibold mb-2 sm:mb-3 md:mb-4 text-xs sm:text-sm md:text-base">Suivez-nous</p>
                <div className="flex gap-2 sm:gap-3 md:gap-4">
                  <a href="#" className="bg-white/20 hover:bg-white/30 p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110">
                    <Facebook className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  </a>
                  <a href="#" className="bg-white/20 hover:bg-white/30 p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110">
                    <Instagram className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  </a>
                  <a href="#" className="bg-white/20 hover:bg-white/30 p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110">
                    <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* FORMULAIRE CONTACT */}
            <div 
              // style={{ paddingBottom:'150px'}}
              >
              <form onSubmit={handleFormSubmit} className="space-y-2 sm:space-y-3 md:space-y-4">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold mb-1 sm:mb-2">Nom</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-indigo-200 focus:outline-none focus:border-green-400 transition-colors duration-300 text-xs sm:text-sm md:text-base"
                    placeholder="Votre nom"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-semibold mb-1 sm:mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-indigo-200 focus:outline-none focus:border-green-400 transition-colors duration-300 text-xs sm:text-sm md:text-base"
                    placeholder="votre@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-semibold mb-1 sm:mb-2">Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    rows="4"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-indigo-200 focus:outline-none focus:border-green-400 transition-colors duration-300 resize-none text-xs sm:text-sm md:text-base"
                    placeholder="Votre message..."
                    required
                  ></textarea>
                </div>
                  <button 
                    type="submit"
                    className="w-full font-bold py-2 sm:py-3 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 text-white text-xs sm:text-sm md:text-base" 
                    style={{background: 'linear-gradient(to right, #00d084, #00b870)'}}
                  >
                    Envoyer le message
                  </button>
              </form>
            </div>
          </div>
        </div>
        <footer className="text-white pt-12 sm:pt-20 lg:pt-24 pb-6 sm:pb-10 lg:pb-12 px-4 sm:px-6 md:px-12 lg:px-16 w-full" 
          style={{
            backgroundColor: '#8a0080',
            marginLeft: 'calc(-45vw + 50%)',
            // marginLeft: 'calc(-50vw + 50%)',
            marginRight: 'calc(-45vw + 70%)',
            }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style={{backgroundColor: '#bc00ac'}}>KD</div>
                <span className="text-base sm:text-lg md:text-xl font-bold tracking-tight">KOLOSI DREPANO</span>
              </div>
              <p className="text-purple-100 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">Une société inclusive est une société qui s'enrichit de toutes ses forces. » Ensemble, brisons le cycle de l'exclusion au Cameroun.</p>
            </div>
            <div className="flex flex-col gap-3 sm:gap-4">
              <h4 className="font-bold text-base sm:text-lg mb-2">Navigation</h4>
              {['Notre Vision 2030', 'Centre d\'Insertion', 'Plaidoyer et Sensibilisation', 'Mentions Légales'].map((link, i) => (
                <a key={i} href="#" className="text-purple-100 hover:text-white text-xs sm:text-sm">{link}</a>
              ))}
            </div>
            <div>
              <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-6">Rejoignez le mouvement</h4>
              <div className="flex flex-col gap-3 sm:gap-4">
                <a href="mailto:Kolosi.association@gmail.com" className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#bc00ac'}}>
                    <Mail size={16} className="sm:w-5 sm:h-5" />
                  </div>
                  <span className="text-xs sm:text-sm">Kolosi.association@gmail.com</span>
                </a>
                <a href="https://facebook.com/kolosidrepano" className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#bc00ac'}}>
                    <Facebook size={16} className="sm:w-5 sm:h-5" />
                  </div>
                  <span className="text-xs sm:text-sm">Kolosi Drepano</span>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t pt-4 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4 text-xs text-purple-200" style={{borderColor: '#bc00ac'}}>
            <p className="text-center sm:text-left">© 2026 Kolosi Drepano | by CMCT | Tous droits réservés.</p>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex-shrink-0">
              <span className="text-xs sm:text-sm">Vers le Haut de page</span>
              <ArrowUpCircle size={20} className="sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </footer>
      </section>

      {/* SECTION FOOTER */}
      
    </div>
  );
};

export default KolosiWebsite;
