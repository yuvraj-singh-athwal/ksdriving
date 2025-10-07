import React from 'react';
function WhyChooseUs() {
  return (
    <section id="why-us" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Pourquoi choisir l'école de conduite KS ?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-blue-900 mb-4">
              <i data-feather="award" className="w-8 h-8"></i>
            </div>
            <h3 className="text-lg font-bold mb-2">Instructeurs Certifiés</h3>
            <p className="text-gray-600">Apprenez auprès de professionnels expérimentés</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-blue-900 mb-4">
              <i data-feather="clock" className="w-8 h-8"></i>
            </div>
            <h3 className="text-lg font-bold mb-2">Horaires Flexibles</h3>
            <p className="text-gray-600">Cours de jour et de soir disponibles</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-blue-900 mb-4">
              <i data-feather="dollar-sign" className="w-8 h-8"></i>
            </div>
            <h3 className="text-lg font-bold mb-2">Tarifs Abordables</h3>
            <p className="text-gray-600">Des prix compétitifs avec des plans de paiement</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-blue-900 mb-4">
              <i data-feather="thumbs-up" className="w-8 h-8"></i>
            </div>
            <h3 className="text-lg font-bold mb-2">Taux de réussite élevé</h3>
            <p className="text-gray-600">Plus de 95 % de nos étudiants réussissent du premier coup</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default WhyChooseUs;