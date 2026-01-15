@@ .. @@
 import React from 'react';
 import { motion } from 'framer-motion';
 import { useInView } from 'react-intersection-observer';
+import { useLanguage } from '../contexts/LanguageContext';

 const NewProductsSection = () => {
+  const { t } = useLanguage();
   const [ref, inView] = useInView({
     triggerOnce: true,
     threshold: 0.1,
   });

   return (
-    <section className="py-20 bg-white" ref={ref}>
+    <section id="new-products" className="py-20 bg-white" ref={ref}>
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         {/* Header */}
         <motion.div
@@ .. @@
           <div className="flex items-center justify-center mb-8">
             <div className="h-px bg-red-600 w-20"></div>
             <h2 className="text-3xl md:text-4xl font-bold text-red-600 mx-6">
-              decouvrez le nouveau produit famico
+              {t('newProducts.title')}
             </h2>
             <div className="h-px bg-red-600 w-20"></div>
           </div>