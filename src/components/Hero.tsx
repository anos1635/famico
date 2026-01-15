@@ .. @@
 import { motion } from "framer-motion";
+import { useLanguage } from '../contexts/LanguageContext';

 const Hero = () => {
+  const { t } = useLanguage();
+
+  const scrollToSection = (sectionId: string) => {
+    const element = document.getElementById(sectionId);
+    if (element) {
+      const headerHeight = 140;
+      const elementPosition = element.offsetTop - headerHeight;
+      window.scrollTo({
+        top: elementPosition,
+        behavior: 'smooth'
+      });
+    }
+  };
+
   return (
-    <section className="relative min-h-screen overflow-hidden">
+    <section id="home" className="relative min-h-screen overflow-hidden">
       {/* Background */}
       <div
@@ .. @@
           className="text-white"
         >
           <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
-            CAFÉ <span className="text-yellow-400">FAMICO</span>
+            {t('hero.title')} <span className="text-yellow-400">FAMICO</span>
           </h1>

           <p className="text-yellow-400 text-xl md:text-2xl mt-4 font-medium">
-            L'Excellence du Café Algérien <span className="font-bold">DZ</span>
+            {t('hero.subtitle')} <span className="font-bold">DZ</span>
           </p>

           <p className="mt-6 text-lg max-w-xl text-gray-200 leading-relaxed">
-            Depuis 1973, nous torréfions avec passion un café authentique,
-            intense et raffiné pour les amateurs de vrai goût.
+            {t('hero.description')}
           </p>

           {/* Buttons */}
@@ .. @@
               whileTap={{ scale: 0.95 }}
               className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg shadow-xl"
               onClick={() =>
-                document
-                  .getElementById("produits")
-                  ?.scrollIntoView({ behavior: "smooth" })
+                scrollToSection("products")
               }
             >
-              Découvrir nos produits
+              {t('hero.discoverProducts')}
             </motion.button>

             <motion.button
@@ .. @@
               whileTap={{ scale: 0.95 }}
               className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-bold text-lg"
               onClick={() =>
-                document
-                  .getElementById("histoire")
-                  ?.scrollIntoView({ behavior: "smooth" })
+                scrollToSection("history")
               }
             >
-              Notre histoire
+              {t('hero.ourHistory')}
             </motion.button>
           </div>
         </motion.div>