import React from 'react';
import { Heart, Users, Lightbulb, Target, Award, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ActionsPage = () => {
  const navigate = useNavigate();

  const actions = [
    {
      icon: <Heart className="w-12 h-12 sm:w-16 sm:h-16 text-red-500" />,
      title: "Soutien Médical",
      desc: "Accès aux soins de qualité et suivi médical régulier pour les patients.",
      details: "Nous facilitons l'accès aux soins spécialisés, aux consultations médicales régulières et aux traitements adaptés pour les jeunes atteints de drépanocytose. Notre réseau de partenaires médicaux assure un suivi continu et une prise en charge optimale."
    },
    {
      icon: <Users className="w-12 h-12 sm:w-16 sm:h-16 text-blue-500" />,
      title: "Accompagnement Psychosocial",
      desc: "Soutien émotionnel et intégration sociale pour les jeunes patients.",
      details: "Nous offrons un soutien psychologique professionnel et des programmes d'intégration sociale pour aider les jeunes à surmonter les défis émotionnels liés à la maladie et à s'épanouir socialement."
    },
    {
      icon: <Lightbulb className="w-12 h-12 sm:w-16 sm:h-16 text-yellow-500" />,
      title: "Formation & Éducation",
      desc: "Programmes de formation professionnelle et d'autonomisation.",
      details: "Nous proposons des formations professionnelles adaptées et des programmes d'autonomisation pour permettre aux jeunes de développer des compétences et d'accéder à l'emploi."
    },
    {
      icon: <Target className="w-12 h-12 sm:w-16 sm:h-16" style={{color: '#bc00ac'}} />,
      title: "Sensibilisation",
      desc: "Campagnes de sensibilisation sur la drépanocytose et ses enjeux.",
      details: "Nous menons des campagnes de sensibilisation pour éduquer le public sur la drépanocytose, combattre les stigmates et promouvoir une meilleure compréhension de la maladie."
    },
    {
      icon: <Award className="w-12 h-12 sm:w-16 sm:h-16 text-purple-500" />,
      title: "Bourses d'Études",
      desc: "Soutien financier pour la scolarité des jeunes en difficulté.",
      details: "Nous accordons des bourses d'études pour permettre aux jeunes atteints de drépanocytose de poursuivre leur scolarité sans contraintes financières."
    },
    {
      icon: <Users className="w-12 h-12 sm:w-16 sm:h-16" style={{color: '#8a0080'}} />,
      title: "Réseautage",
      desc: "Création de communautés de soutien entre patients et familles.",
      details: "Nous créons des espaces de partage et de soutien où les patients et leurs familles peuvent se rencontrer, échanger leurs expériences et se soutenir mutuellement."
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20 sm:pt-24 pb-12 sm:pb-16">
      <div className="px-3 sm:px-6 md:px-12 max-w-6xl mx-auto">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-purple-600 hover:text-purple-800 mb-6 sm:mb-8 transition-colors text-sm sm:text-base"
        >
          <ArrowLeft size={18} className="sm:w-5 sm:h-5" /> Retour à l'accueil
        </button>

        <div className="text-center mb-8 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4" style={{color: '#8a0080'}}>Nos Actions</h1>
          <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">Découvrez en détail comment nous accompagnons les jeunes atteints de drépanocytose au Cameroun.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {actions.map((action, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-white p-4 sm:p-8 rounded-lg sm:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-slate-200 hover:border-purple-300"
            >
              <div className="mb-3 sm:mb-6">{action.icon}</div>
              <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-3" style={{color: '#8a0080'}}>{action.title}</h3>
              <p className="text-slate-600 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">{action.details}</p>
              <div className="pt-3 sm:pt-4 border-t border-slate-200">
                <p className="text-xs sm:text-sm text-slate-500 italic">{action.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActionsPage;
