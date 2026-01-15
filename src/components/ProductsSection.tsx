@@ .. @@
 import React from 'react';
 import { motion } from 'framer-motion';
 import { useInView } from 'react-intersection-observer';
+import { useLanguage } from '../contexts/LanguageContext';

 const ProductsSection = () => {
+  const { t } = useLanguage();
   const [ref, inView] = useInView({
     triggerOnce: true,
     threshold: 0.1,
@@ .. @@
   ];

   return (
-    <section className="py-20 bg-gray-50" ref={ref}>
+    <section id="products" className="py-20 bg-gray-50" ref={ref}>
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

         {/* Header */}
@@ .. @@
           <div className="flex items-center justify-center mb-4">
             <div className="h-px bg-red-600 w-20"></div>
             <h2 className="text-3xl md:text-4xl font-bold text-red-600 mx-6">
-              BOUTIQUE FAMICO
+              {t('products.title')}
             </h2>
             <div className="h-px bg-red-600 w-20"></div>
           </div>

           <p className="text-gray-600 max-w-3xl mx-auto text-lg">
-            Découvrez la sélection de cafés <span className="font-semibold text-red-600">FAMICO</span>, 
-            soigneusement torréfiés pour offrir une qualité et un goût exceptionnels. 
-            Commandez facilement en ligne et recevez votre café directement chez vous.
+            {t('products.description')}
           </p>

           <motion.button
@@ .. @@
             className="mt-8 bg-red-600 text-white px-8 py-3 font-medium hover:bg-red-700 transition-all duration-300"
           >
-            ACCÉDER À LA BOUTIQUE
+            {t('products.accessShop')}
           </motion.button>
         </motion.div>