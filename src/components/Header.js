import React, { useState } from 'react';
import { Truck, X, Menu } from 'react-feather';
function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="bg-blue-900 text-white shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Truck className="text-white w-8 h-8 mr-2"></Truck>
            <h1 className="text-white text-2xl font-bold">École de Conduite KS</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-yellow-300 transition">D'accueil</a>
            <a href="#why-us" className="hover:text-yellow-300 transition">Pourquoi Nous Choisir</a>
            <a href="#pricing" className="hover:text-yellow-300 transition">Tarifs</a>
            <a href="#testimonials" className="hover:text-yellow-300 transition">Témoignages</a>
            <a href="#contact" className="hover:text-yellow-300 transition">Contactez-nous</a>
          </nav>
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            
            {mobileMenuOpen ? <X></X> : <Menu></Menu>}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#home" className="block hover:text-yellow-300 transition">D'accueil</a>
            <a href="#why-us" className="block hover:text-yellow-300 transition">Pourquoi Nous Choisir</a>
            <a href="#pricing" className="block hover:text-yellow-300 transition">Tarifs</a>
            <a href="#testimonials" className="block hover:text-yellow-300 transition">Témoignages</a>
            <a href="#contact" className="block hover:text-yellow-300 transition">Contactez-nous</a>
          </div>
        )}
      </div>
    </header>
  );
}
export default Header;