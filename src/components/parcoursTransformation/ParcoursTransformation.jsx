import React from 'react';
import { Sparkles, BookOpen, UserCheck, VolumeX } from 'lucide-react';

const ParcoursTransformation = () => {
  const etapes = [
    {
      titre: "L'État Initial (Le Silence)",
      desc: "Le patient subit les préjugés et l'échec scolaire. Il se sent comme un fardeau pour la société.",
      icon: <VolumeX className="text-slate-400" size={28} />,
      style: "border-slate-200 bg-slate-50",
      delay: "0s"
    },
    {
      titre: "L'Éveil (Le Levier Kolosi)",
      desc: "Prise de conscience de sa valeur. Le jeune « se lève » mentalement par le soutien psychosocial.",
      icon: <Sparkles className="text-yellow-500" size={28} />,
      style: "border-yellow-200 bg-yellow-50",
      delay: "0.1s"
    },
    {
      titre: "La Structuration (Le Pont)",
      desc: "Programmes d'orientation personnalisés et partenariats avec des centres de formation compatibles.",
      icon: <BookOpen className="text-indigo-500" size={28} />,
      style: "border-indigo-200 bg-indigo-50",
      delay: "0.2s"
    },
    {
      titre: "L'Épanouissement (L'Acteur)",
      desc: "Accès à un emploi viable. Il devient un citoyen productif et non plus seulement 'le drépanocytaire'.",
      icon: <UserCheck className="text-green-500" size={28} />,
      style: "border-green-200 bg-green-50",
      delay: "0.3s"
    }
  ];

  return (
    <section className="px-6 md:px-12 py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4 text-center animate-fade-in-down">
          Le Parcours de Transformation « Kolosi »
        </h3>
        <p className="text-slate-500 text-center mb-16 max-w-2xl mx-auto animate-fade-in">
          Un cheminement structuré pour transformer un patient isolé en un citoyen actif et épanoui.
        </p>

        <div className="relative">
          {/* Ligne de connexion */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-slate-200 via-indigo-300 to-green-300 -translate-y-1/2 z-0 animate-pulse"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {etapes.map((etape, index) => (
              <div 
                key={index}
                className={`group p-8 rounded-3xl border-2 transition-all duration-500 transform ${etape.style} hover:shadow-2xl hover:scale-105 cursor-default animate-scale-in`}
                style={{animationDelay: etape.delay}}
              >
                <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center mb-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                  {etape.icon}
                </div>
                <div className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-2 animate-pulse">
                  Étape 0{index + 1}
                </div>
                <h4 className="text-lg md:text-xl font-bold text-indigo-900 mb-4 leading-tight group-hover:text-indigo-600 transition-colors">
                  {etape.titre}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed group-hover:text-slate-700 transition-colors">
                  {etape.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParcoursTransformation;
