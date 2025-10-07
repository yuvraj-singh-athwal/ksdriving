import React from 'react';
import { Check } from 'react-feather';
function PricingCard({ title, price, features, popular = false }) {
  return (
    <div className={`bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 ${popular ? 'border-2 border-yellow-500 relative' : ''}`}>
      {popular && (
        <div className="absolute top-0 right-0 bg-yellow-500 text-blue-900 px-4 py-1 text-sm font-bold rounded-bl">
          Most Popular
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-4xl font-bold text-blue-900 mb-6">${price}<span className="text-base font-normal text-gray-500">/course</span></p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="text-green-500 mr-2 w-5 h-5"></Check>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <a href="#contact">
      <button className={`w-full py-3 px-6 rounded font-bold transition ${popular ? 'bg-yellow-500 text-blue-900 hover:bg-yellow-400' : 'bg-blue-900 text-white hover:bg-blue-800'}`}>
        Inscrivez-vous
      </button>
      </a>
    </div>
  );
}
function Pricing() {
  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Nous Tarifs</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des tarifs compétitifs avec des options de paiement flexibles
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PricingCard 
            title="30 Heures"
            price="2649"
            features={[
              "30 heures de formation",
              "Cours théoriques inclus",
              "Préparation à l'examen pratique",
              "Temps d'instructeur individuel",
              "Horaires flexibles"
            ]}
          />
          <PricingCard 
            title="20 Heures"
            price="1849"
            features={[
              "20 heures de formation",
              "Cours théoriques inclus",
              "Préparation à l'examen pratique",
              "Temps d'instructeur individuel",
              "Horaires flexibles"
            ]}
            popular
          />
          <PricingCard 
            title="16 Heures"
            price="1549"
            features={[
              "16 heures de formation",
              "Cours théoriques inclus",
              "Préparation à l'examen pratique",
              "Temps d'instructeur individuel",
              "Horaires flexibles"
            ]}
          />
        </div>
        <div className="text-center mx-auto gap-8">
          <p className="text-xl text-gray-600 max-w-2xl mx-auto p-8">
            Cours horaires également disponibles à 85 $/h
          </p>
        </div>
      </div>
    </section>
  );
}
export default Pricing;