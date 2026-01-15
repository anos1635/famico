@@ .. @@
 import React from 'react';
 import { motion } from 'framer-motion';
 import { Facebook, Twitter, Youtube, Instagram } from 'lucide-react';
+import { useLanguage } from '../contexts/LanguageContext';

 const Footer = () => {
+  const { t } = useLanguage();
+
   return (
     <footer className="relative">
       {/* Coffee beans background */}
@@ .. @@
                   <p className="text-sm text-gray-300 leading-relaxed">
                     FAMICO GROU Group<br />
                     EURL FAMICO - ZONE INDUSTRIELLE N02 OULED MENDIL-DOUIRA -ALGER<br />
-                    Fax 021400102<br />
-                    EMAIL coffefamico@gmail.com<br />
+                    Fax: 021400102<br />
+                    <a 
+                      href="mailto:coffefamico@gmail.com" 
+                      className="text-red-400 hover:text-red-300 transition-colors"
+                    >
+                      coffefamico@gmail.com
+                    </a><br />
+                    <a 
+                      href="mailto:contact@famico-coffee.com" 
+                      className="text-red-400 hover:text-red-300 transition-colors"
+                    >
+                      contact@famico-coffee.com
+                    </a><br />
+                    <a 
+                      href="mailto:commercial@famico-coffee.com" 
+                      className="text-red-400 hover:text-red-300 transition-colors"
+                    >
+                      commercial@famico-coffee.com
+                    </a>
                   </p>
                 </motion.div>

@@ .. @@
                   transition={{ duration: 0.6, delay: 0.1 }}
                 >
-                  <h3 className="text-lg font-semibold mb-4">Navigation</h3>
+                  <h3 className="text-lg font-semibold mb-4">{t('footer.navigation')}</h3>
                   <ul className="space-y-2">
-                    {['HOME', 'COMPANY', 'PRODUCTS', 'PROFESSIONALS', 'SPONSORSHIP', 'CONTACT'].map((item) => (
+                    {[
+                      { key: 'nav.home', label: t('nav.home') },
+                      { key: 'nav.products', label: t('nav.products') },
+                      { key: 'nav.newProducts', label: t('nav.newProducts') },
+                      { key: 'nav.history', label: t('nav.history') },
+                      { key: 'nav.moments', label: t('nav.moments') },
+                      { key: 'nav.distributor', label: t('nav.distributor') },
+                      { key: 'nav.location', label: t('nav.location') }
+                    ].map((item) => (
                       <li key={item}>
                         <a 
                           href="#" 
                           className="text-gray-300 hover:text-white transition-colors text-sm"
                         >
-                          {item}
+                          {item.label}
                         </a>
                       </li>
                     ))}
@@ .. @@
                   transition={{ duration: 0.6, delay: 0.2 }}
                 >
-                  <h3 className="text-lg font-semibold mb-4">Information</h3>
+                  <h3 className="text-lg font-semibold mb-4">{t('footer.information')}</h3>
                   <ul className="space-y-2">
-                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
-                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Cookie Policy</a></li>
-                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Terms of Service</a></li>
-                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Sustainability</a></li>
+                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">{t('footer.privacyPolicy')}</a></li>
+                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">{t('footer.cookiePolicy')}</a></li>
+                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">{t('footer.termsOfService')}</a></li>
+                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">{t('footer.sustainability')}</a></li>
                   </ul>
                 </motion.div>
               </div>
@@ .. @@
                   transition={{ duration: 0.6, delay: 0.3 }}
                 >
-                  <h3 className="text-lg font-semibold mb-4">Payment Methods</h3>
+                  <h3 className="text-lg font-semibold mb-4">{t('footer.paymentMethods')}</h3>
                   <div className="flex space-x-2 mb-6">
                     <div className="bg-white rounded px-2 py-1">
                       <span className="text-blue-600 font-bold text-xs">VISA</span>
@@ .. @@
                     </div>
                   </div>

-                  <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
+                  <h3 className="text-lg font-semibold mb-4">{t('footer.followUs')}</h3>
                   <div className="flex space-x-4">
                     <motion.a
                       href="#"
@@ .. @@
               className="border-t border-gray-700 mt-12 pt-8 text-center"
             >
               <p className="text-gray-400 text-sm">
-                © 2024 Segafredo famico Group. All rights reserved.
+                {t('footer.copyright')}
               </p>
             </motion.div>
           </div>