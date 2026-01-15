@@ .. @@
 import React, { useState } from 'react';
 import { motion } from 'framer-motion';
 import { Menu, X, Facebook, Instagram, Youtube } from 'lucide-react';
+import { useLanguage } from '../contexts/LanguageContext';

 const Header: React.FC = () => {
+  const { language, setLanguage, t } = useLanguage();
   const [isMenuOpen, setIsMenuOpen] = useState(false);

-  // Items de navigation, reliés aux ids des sections
+  // Smooth scroll function with offset for fixed header
+  const scrollToSection = (sectionId: string) => {
+    const element = document.getElementById(sectionId);
+    if (element) {
+      const headerHeight = 140; // Height of fixed header
+      const elementPosition = element.offsetTop - headerHeight;
+      window.scrollTo({
+        top: elementPosition,
+        behavior: 'smooth'
+      });
+    }
+    setIsMenuOpen(false);
+  };
+
   const navItems = [
-    { label: 'Accueil', href: '#home' },
-    { label: 'Products', href: '#ProductsSection' },
-    { label: 'Nouveautés', href: '#new-products' },
-    { label: 'Moments', href: '#moments' },
-    { label: 'Devenir distributeur', href: '#distributor' },
-    { label: 'Localisation', href: '#location' },
+    { key: 'nav.home', sectionId: 'home' },
+    { key: 'nav.products', sectionId: 'products' },
+    { key: 'nav.newProducts', sectionId: 'new-products' },
+    { key: 'nav.history', sectionId: 'history' },
+    { key: 'nav.moments', sectionId: 'moments' },
+    { key: 'nav.distributor', sectionId: 'distributor' },
+    { key: 'nav.location', sectionId: 'location' },
   ];

   return (
@@ .. @@
           </div>

           <div className="flex items-center gap-4">
-            <span className="text-sm cursor-pointer">FR</span>
-            <span className="text-sm cursor-pointer">EN</span>
+            <button
+              onClick={() => setLanguage('fr')}
+              className={`text-sm font-medium transition-colors ${
+                language === 'fr' ? 'text-red-600' : 'text-gray-600 hover:text-red-600'
+              }`}
+            >
+              FR
+            </button>
+            <span className="text-gray-300">|</span>
+            <button
+              onClick={() => setLanguage('en')}
+              className={`text-sm font-medium transition-colors ${
+                language === 'en' ? 'text-red-600' : 'text-gray-600 hover:text-red-600'
+              }`}
+            >
+              EN
+            </button>
             <a
-              href="#products"
+              href="#"
+              onClick={(e) => {
+                e.preventDefault();
+                scrollToSection('products');
+              }}
               className="bg-red-600 text-white px-4 py-1 text-sm font-medium hover:bg-red-700 transition"
             >
-              Boutique
+              {t('nav.shop')}
             </a>
           </div>
         </div>
@@ .. @@
           <div className="hidden md:flex gap-8">
             {navItems.map((item) => (
-              <a
-                key={item.label}
-                href={item.href}
+              <button
+                key={item.key}
+                onClick={() => scrollToSection(item.sectionId)}
                 className="text-sm font-medium text-gray-900 border-b-2 border-transparent hover:text-red-600 hover:border-red-600 transition"
               >
-                {item.label}
-              </a>
+                {t(item.key)}
+              </button>
             ))}
           </div>

@@ .. @@
             className="md:hidden bg-white border-t"
           >
             {navItems.map((item) => (
-              <a
-                key={item.label}
-                href={item.href}
-                onClick={() => setIsMenuOpen(false)}
+              <button
+                key={item.key}
+                onClick={() => scrollToSection(item.sectionId)}
                 className="block px-6 py-4 text-gray-900 hover:bg-gray-100"
               >
-                {item.label}
-              </a>
+                {t(item.key)}
+              </button>
             ))}
           </motion.div>
         )}