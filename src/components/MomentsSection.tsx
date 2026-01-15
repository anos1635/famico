@@ .. @@
 import React, { useRef, useEffect } from 'react';
 import { motion } from 'framer-motion';
 import { useInView } from 'react-intersection-observer';
+import { useLanguage } from '../contexts/LanguageContext';

 /* =========================
    🎥 VIDEO AUTOPLAY
@@ .. @@
 const AutoPlayVideo: React.FC<AutoPlayVideoProps> = ({ src }) => {
   const videoRef = useRef<HTMLVideoElement | null>(null);

   useEffect(() => {
     const video = videoRef.current;
     if (!video) return;

+    // Set video attributes for autoplay
     video.muted = true;
     video.loop = true;
     video.playsInline = true;
     video.preload = 'auto';
+    video.autoplay = true;

-    video.play().catch(() => {});
+    // Attempt to play the video
+    const playVideo = async () => {
+      try {
+        await video.play();
+      } catch (error) {
+        console.log('Video autoplay failed:', error);
+      }
+    };
+
+    // Play when video is loaded
+    if (video.readyState >= 3) {
+      playVideo();
+    } else {
+      video.addEventListener('loadeddata', playVideo);
+    }
+
+    return () => {
+      video.removeEventListener('loadeddata', playVideo);
+    };
   }, []);

   return (
     <video
       ref={videoRef}
       src={src}
       muted
       loop
       playsInline
+      autoPlay
       preload="auto"
-      className="w-full h-96 object-cover rounded-lg shadow-lg"
-    />
+      className="w-full h-96 object-cover rounded-lg shadow-lg"
+      controls={false}
+    >
+      <source src={src} type="video/mp4" />
+      Your browser does not support the video tag.
+    </video>
   );
 };

@@ .. @@
 ========================= */
 const MomentsSection: React.FC = () => {
+  const { t } = useLanguage();
   const [ref, inView] = useInView({
     triggerOnce: true,
     threshold: 0.1,
@@ .. @@
   const images: ImageMoment[] = [
     {
       id: 1,
-      titleFr: 'À la maison',
-      titleEn: 'At home',
+      titleFr: t('moments.atHome'),
+      titleEn: t('moments.atHome'),
       image: 'https://ik.imagekit.io/wvlb7dccz/WhatsApp%20Image%202026-01-10%20at%2018.17.38%20(2).jpeg',
     },
     {
       id: 2,
-      titleFr: 'Au café',
-      titleEn: 'At the coffee shop',
+      titleFr: t('moments.atCafe'),
+      titleEn: t('moments.atCafe'),
       image: 'https://ik.imagekit.io/wvlb7dccz/WhatsApp%20Image%202026-01-10%20at%2018.17.40%20(1).jpeg',
     },
     {
       id: 3,
-      titleFr: 'Au travail',
-      titleEn: 'At work',
+      titleFr: t('moments.atWork'),
+      titleEn: t('moments.atWork'),
       image: 'https://ik.imagekit.io/wvlb7dccz/WhatsApp%20Image%202026-01-10%20at%2018.17.39%20(1).jpeg',
     },
     {
       id: 4,
-      titleFr: 'Moments de partage',
-      titleEn: 'Shared moments',
+      titleFr: t('moments.sharedMoments'),
+      titleEn: t('moments.sharedMoments'),
       image: 'https://ik.imagekit.io/wvlb7dccz/WhatsApp%20Image%202026-01-10%20at%2018.17.38.jpeg',
     },
     {
       id: 5,
-      titleFr: 'Moments de partage',
-      titleEn: 'Shared moments',
+      titleFr: t('moments.sharedMoments'),
+      titleEn: t('moments.sharedMoments'),
       image: 'https://ik.imagekit.io/wvlb7dccz/WhatsApp%20Image%202026-01-10%20at%2018.17.38%20(1).jpeg',
     },
     {
       id: 6,
-      titleFr: 'Moments de partage',
-      titleEn: 'Shared moments',
+      titleFr: t('moments.sharedMoments'),
+      titleEn: t('moments.sharedMoments'),
       image: 'https://ik.imagekit.io/wvlb7dccz/WhatsApp%20Image%202026-01-10%20at%2018.17.39.jpeg',
     },
   ];
@@ .. @@
   const videos: VideoMoment[] = [
     {
       id: 7,
-      titleFr: 'L'art du café',
-      titleEn: 'The art of coffee',
+      titleFr: t('moments.artOfCoffee'),
+      titleEn: t('moments.artOfCoffee'),
       videoUrl: 'https://ik.imagekit.io/wvlb7dccz/WhatsApp%20Video%202026-01-13%20at%2017.27.45.mp4',
     },
     {
       id: 8,
-      titleFr: 'Savoir-faire FAMICO',
-      titleEn: 'FAMICO craftsmanship',
+      titleFr: t('moments.craftsmanship'),
+      titleEn: t('moments.craftsmanship'),
       videoUrl: 'https://ik.imagekit.io/wvlb7dccz/WhatsApp%20Video%202026-01-13%20at%2017.27.45.mp4?updatedAt=1768344579401',
     },
   ];
@@ .. @@
           className="text-center mb-14"
         >
           <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
-            Moments FAMICO
+            {t('moments.title')}
           </h2>
           <p className="text-gray-600 max-w-4xl mx-auto text-lg">
-            Chaque tasse de café FAMICO accompagne vos instants du quotidien.
+            {t('moments.description')}
             <br />
             <span className="italic">
-              Every cup of FAMICO coffee enhances your everyday moments.
+              {t('moments.descriptionEn')}
             </span>
           </p>
         </motion.div>
@@ .. @@
               <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                 <h3 className="text-lg font-semibold">{item.titleFr}</h3>
-                <p className="text-sm opacity-90">{item.titleEn}</p>
               </div>
             </motion.div>
           ))}
@@ .. @@
         {/* 🎥 VIDEOS — CENTRÉES EN DESSOUS */}
         <div className="flex flex-col md:flex-row justify-center gap-10">
           {videos.map((video) => (
-            <div key={video.id} className="w-full md:w-1/2">
+            <motion.div 
+              key={video.id} 
+              className="w-full md:w-1/2"
+              initial={{ opacity: 0, y: 40 }}
+              animate={inView ? { opacity: 1, y: 0 } : {}}
+              transition={{ duration: 0.6, delay: 0.8 }}
+            >
               <AutoPlayVideo src={video.videoUrl} />
               <div className="text-center mt-4">
                 <h3 className="text-lg font-semibold text-gray-800">
                   {video.titleFr}
                 </h3>
-                <p className="text-sm text-gray-500">
-                  {video.titleEn}
-                </p>
               </div>
-            </div>
+            </motion.div>
           ))}
         </div>