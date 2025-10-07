import React from 'react';
function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 truck-bg relative">
      <div className="absolute inset-0 bg-blue-900 bg-opacity-30"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl font-bold text-white mb-6">Commencez votre carrière de camionneur aujourd'hui</h2>
        <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
          Formation professionnelle pour permis de Classe 1 à Montréal
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a href="#contact" className="bg-yellow-500 text-blue-900 px-6 py-3 rounded font-bold hover:bg-yellow-400 transition">
            Inscrivez-vous
          </a>
        </div>
      </div>
    </section>
  );
}
export default Hero;