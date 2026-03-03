import React from 'react';

const AnimatedCircles = ({ position = 'absolute', className = '' }) => {
  return (
    <div className={`${position} inset-0 overflow-hidden pointer-events-none ${className}`}>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes pulse-scale {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        @keyframes rotate-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .circle-float-1 { animation: float 6s ease-in-out infinite; }
        .circle-float-2 { animation: float 8s ease-in-out infinite 1s; }
        .circle-float-3 { animation: float 7s ease-in-out infinite 2s; }
        .circle-pulse { animation: pulse-scale 4s ease-in-out infinite; }
        .circle-rotate { animation: rotate-slow 20s linear infinite; }
      `}</style>
      
      <div className="circle-float-1 absolute w-32 h-32 rounded-full opacity-20" style={{background: 'linear-gradient(135deg, #bc00ac, #8a0080)', top: '10%', left: '5%'}}></div>
      
      <div className="circle-float-2 absolute w-24 h-24 rounded-full opacity-15" style={{background: '#00d084', bottom: '15%', right: '10%'}}></div>
      
      <div className="circle-float-3 absolute w-40 h-40 rounded-full opacity-10 border-2" style={{borderColor: '#bc00ac', top: '50%', right: '5%'}}></div>
      
      <div className="circle-pulse absolute w-20 h-20 rounded-full opacity-25" style={{background: '#00d084', bottom: '30%', left: '15%'}}></div>
      
      <div className="circle-rotate absolute w-28 h-28 rounded-full opacity-5 border-4" style={{borderColor: '#8a0080', top: '20%', right: '20%'}}></div>
    </div>
  );
};

export default AnimatedCircles;
