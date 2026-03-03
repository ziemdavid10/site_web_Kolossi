import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="px-4 sm:px-6 md:px-12 max-w-4xl mx-auto">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-purple-600 hover:text-purple-800 mb-8 transition-colors"
        >
          <ArrowLeft size={20} /> Retour à l'accueil
        </button>

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{color: '#8a0080'}}>À Propos de Kolosi Drepano</h1>
          <p className="text-slate-600 text-lg">Découvrez notre histoire, notre mission et nos valeurs.</p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-bold mb-6" style={{color: '#bc00ac'}}>Notre Histoire</h2>
            <div className="bg-gradient-to-r from-purple-50 to-slate-50 p-8 rounded-2xl border-l-4" style={{borderColor: '#bc00ac'}}>
              <p className="text-slate-700 leading-relaxed mb-4">
                Kolosi Drepano est née de la conviction que la drépanocytose ne doit pas être une limite à l'épanouissement personnel et professionnel. Fondée par Mme Nelsa Yoda, l'association s'engage à transformer le vécu de la maladie en un moteur d'autonomie.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Depuis sa création, nous avons accompagné des centaines de jeunes atteints de drépanocytose au Cameroun, en leur offrant un soutien médical, psychosocial et éducatif complet.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6" style={{color: '#bc00ac'}}>Notre Mission</h2>
            <div className="bg-white p-8 rounded-2xl border-2 border-slate-200 shadow-lg">
              <p className="text-slate-700 leading-relaxed text-lg italic">
                "Construire un pont vers l'avenir pour chaque talent atteint de drépanocytose au Cameroun, en garantissant l'accès aux soins, l'éducation, l'autonomisation et l'intégration sociale."
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6" style={{color: '#bc00ac'}}>Nos 5 Piliers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Dignité", desc: "L'être humain au cœur du projet. La maladie ne définit ni la valeur, ni le potentiel.", icon: "✨" },
                { title: "Inclusion", desc: "Combattre la marginalisation pour garantir une place à l'école et en entreprise.", icon: "🤝" },
                { title: "Résilience", desc: "Fidèles à « Kolosi », nous cultivons la force de se relever après chaque crise.", icon: "🌱" },
                { title: "Responsabilité", desc: "Intégrité totale et gestion rigoureuse de nos actions et ressources.", icon: "🛡️" },
              ].map((pilier, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-50 to-slate-50 p-6 rounded-xl border-2 border-slate-200">
                  <div className="text-4xl mb-3">{pilier.icon}</div>
                  <h3 className="text-xl font-bold mb-2" style={{color: '#8a0080'}}>{pilier.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{pilier.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6" style={{color: '#bc00ac'}}>Fondatrice et Présidente</h2>
            <div className="bg-white p-8 rounded-2xl border-2 border-slate-200 shadow-lg">
              <div className="flex items-center gap-6">
                <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0 shadow-lg">
                  <img
                    src="/imagekolosi/IMG_7651.JPG-removebg-preview.png"
                    alt="Mme Nelsa Yoda"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2" style={{color: '#8a0080'}}>Mme Nelsa Yoda</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Fondatrice et Présidente de Kolosi Drepano, Mme Nelsa Yoda est une femme engagée et visionnaire. Son dévouement envers les jeunes atteints de drépanocytose a inspiré la création de cette association et continue de guider ses actions quotidiennes.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6" style={{color: '#bc00ac'}}>Notre Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { number: "500+", label: "Jeunes accompagnés" },
                { number: "100+", label: "Bourses accordées" },
                { number: "50+", label: "Partenaires engagés" }
              ].map((stat, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-100 to-slate-100 p-8 rounded-xl text-center border-2" style={{borderColor: '#bc00ac'}}>
                  <div className="text-4xl font-bold mb-2" style={{color: '#bc00ac'}}>{stat.number}</div>
                  <p className="text-slate-700 font-semibold">{stat.label}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
