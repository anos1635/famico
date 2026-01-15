import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Facebook, Instagram, Youtube } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Items de navigation, reliés aux ids des sections
  const navItems = [
    { label: 'Accueil', href: '#home' },
    { label: 'Products', href: '#ProductsSection' },
    { label: 'Nouveautés', href: '#new-products' },
    { label: 'Moments', href: '#moments' },
    { label: 'Devenir distributeur', href: '#distributor' },
    { label: 'Localisation', href: '#location' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-sm">

      {/* TOP BAR */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 h-12 flex items-center justify-between">
          <div className="flex gap-4">
            <Facebook className="w-4 h-4 text-gray-600 hover:text-red-600 cursor-pointer" />
            <Instagram className="w-4 h-4 text-gray-600 hover:text-red-600 cursor-pointer" />
            <Youtube className="w-4 h-4 text-gray-600 hover:text-red-600 cursor-pointer" />
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm cursor-pointer">FR</span>
            <span className="text-sm cursor-pointer">EN</span>
            <a
              href="#products"
              className="bg-red-600 text-white px-4 py-1 text-sm font-medium hover:bg-red-700 transition"
            >
              Boutique
            </a>
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <nav>
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">

          {/* LOGO */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <img
              src="https://ik.imagekit.io/wvlb7dccz/t%C3%A9l%C3%A9chargement%20(4).jpg"
              alt="Café Famico"
              className="h-14 w-auto"
            />
          </motion.div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-gray-900 border-b-2 border-transparent hover:text-red-600 hover:border-red-600 transition"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-6 py-4 text-gray-900 hover:bg-gray-100"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;
