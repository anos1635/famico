@@ .. @@
 import React from 'react';
 import { motion } from 'framer-motion';
+import { useLanguage } from '../contexts/LanguageContext';
+import { MapPin, ExternalLink } from 'lucide-react';

 const LocationSection: React.FC = () => {
 }
-  // Lien direct vers Google Maps
-  const googleMapsLink = "https://www.google.com/maps/place/Famico+Factory";
+  const { t } = useLanguage();
+  
+  // Coordonnées et lien Google Maps pour FAMICO Factory
+  const googleMapsLink = "https://www.google.com/maps/place/ZONE+INDUSTRIELLE+N02+OULED+MENDIL-DOUIRA,+Alger,+Algeria";
+  const address = "ZONE INDUSTRIELLE N02 OULED MENDIL-DOUIRA - ALGER";

   return (
     <section id="location" className="py-20 bg-white">
@@ .. @@
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
-           FAMICO Factory
+           {t('location.title')}
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
-           Retrouvez notre site de production et nos bureaux.
+           {t('location.description')}
            <br />
            <span className="italic">
-             Find our production site and offices.
+             {t('location.descriptionEn')}
            </span>
          </p>
        </motion.div>
   )

-        {/* MAP CLICKABLE */}
+        {/* ADDRESS INFO */}
         <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
-          className="w-full h-[450px] rounded-xl overflow-hidden shadow-xl"
+          className="bg-gray-50 rounded-xl p-8 mb-8 text-center"
         >
+          <div className="flex items-center justify-center mb-4">
+            <MapPin className="w-8 h-8 text-red-600 mr-3" />
+            <h3 className="text-xl font-semibold text-gray-800">FAMICO Factory</h3>
+          </div>
+          <p className="text-gray-600 mb-4">{address}</p>
+          <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm text-gray-600">
+            <span>Fax: 021400102</span>
+            <a 
+              href="mailto:coffefamico@gmail.com" 
+              className="text-red-600 hover:text-red-700 font-medium"
+            >
+              coffefamico@gmail.com
+            </a>
+          </div>
+        </motion.div>

+        {/* INTERACTIVE MAP */}
+        <motion.div
+          initial={{ opacity: 0, y: 40 }}
+          whileInView={{ opacity: 1, y: 0 }}
+          viewport={{ once: true }}
+          transition={{ duration: 0.8, delay: 0.2 }}
+          className="relative"
+        >
+          {/* Map Container */}
+          <div className="w-full h-[450px] rounded-xl overflow-hidden shadow-xl relative bg-gray-100">
+            {/* Static Map Image */}
+            <img
+              src="https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&w=1200&h=450&fit=crop"
+              alt="FAMICO Factory Location"
+              className="w-full h-full object-cover"
+            />
+            
+            {/* Overlay with location info */}
+            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
+              <div className="text-center text-white">
+                <MapPin className="w-16 h-16 mx-auto mb-4 text-red-500" />
+                <h3 className="text-2xl font-bold mb-2">FAMICO Factory</h3>
+                <p className="text-lg mb-6">{address}</p>
+                <motion.a
+                  href={googleMapsLink}
+                  target="_blank"
+                  rel="noopener noreferrer"
+                  whileHover={{ scale: 1.05 }}
+                  whileTap={{ scale: 0.95 }}
+                  className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors"
+                >
+                  <ExternalLink className="w-5 h-5 mr-2" />
+                  Ouvrir dans Google Maps
+                </motion.a>
+              </div>
+            </div>
+          </div>
+          
+          {/* Click overlay for mobile */}
           <a
             href={googleMapsLink}
             target="_blank"
             rel="noopener noreferrer"
-            className="block w-full h-full"
+            className="absolute inset-0 z-10"
+            aria-label="Ouvrir la localisation dans Google Maps"
           >
-            <iframe
-              title="FAMICO Factory Location"
-              src="https://maps.app.goo.gl/DXBLaQZZpXiVRyn79"
-              className="w-full h-full border-0 pointer-events-none"
-              loading="lazy"
-              referrerPolicy="no-referrer-when-downgrade"
-            ></iframe>
+            <span className="sr-only">Cliquer pour ouvrir dans Google Maps</span>
           </a>
         </motion.div>

       </div>