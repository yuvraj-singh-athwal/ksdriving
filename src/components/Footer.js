import React from 'react';
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div>
          <h3 className="text-xl font-bold mb-4">École de Conduite KS</h3>
          <p className="text-gray-400">
            Formation professionnelle de conduite de camion à Montréal depuis plus de 20 ans.
          </p>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} École de Conduite KS. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;  