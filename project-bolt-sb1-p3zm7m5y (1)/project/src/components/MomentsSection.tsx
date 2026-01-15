import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/* =========================
   🎥 VIDEO AUTOPLAY
========================= */
type AutoPlayVideoProps = {
  src: string;
};

const AutoPlayVideo: React.FC<AutoPlayVideoProps> = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = 'auto';

    video.play().catch(() => {});
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      loop
      playsInline
      preload="auto"
      className="w-full h-96 object-cover rounded-lg shadow-lg"
    />
  );
};

/* =========================
   🧩 TYPES
========================= */
type ImageMoment = {
  id: number;
  titleFr: string;
  titleEn: string;
  image: string;
};

type VideoMoment = {
  id: number;
  titleFr: string;
  titleEn: string;
  videoUrl: string;
};

/* =========================
   🧠 COMPONENT
========================= */
const MomentsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  /* 📸 PHOTOS (6) */
  const images: ImageMoment[] = [
    {
      id: 1,
      titleFr: 'À la maison',
      titleEn: 'At home',
      image: 'https://ik.imagekit.io/wvlb7dccz/WhatsApp%20Image%202026-01-10%20at%2018.17.38%20(2).jpeg',
    },
    {
      id: 2,
      titleFr: 'Au café',
      titleEn: 'At the coffee shop',
      image: 'https://ik.imagekit.io/wvlb7dccz/WhatsApp%20Image%202026-01-10%20at%2018.17.40%20(1).jpeg',
    },
    {
      id: 3,
      titleFr: 'Au travail',
      titleEn: 'At work',
      image: 'https://ik.imagekit.io/wvlb7dccz/WhatsApp%20Image%202026-01-10%20at%2018.17.39%20(1).jpeg',
    },
    {
      id: 4,
      titleFr: 'Moments de partage',
      titleEn: 'Shared moments',
      image: 'https://ik.imagekit.io/wvlb7dccz/WhatsApp%20Image%202026-01-10%20at%2018.17.38.jpeg',
    },
    {
      id: 5,
      titleFr: 'Moments de partage',
      titleEn: 'Shared moments',
      image: 'https://ik.imagekit.io/wvlb7dccz/WhatsApp%20Image%202026-01-10%20at%2018.17.38%20(1).jpeg',
    },
    {
      id: 6,
      titleFr: 'Moments de partage',
      titleEn: 'Shared moments',
      image: 'https://ik.imagekit.io/wvlb7dccz/WhatsApp%20Image%202026-01-10%20at%2018.17.39.jpeg',
    },
  ];

  /* 🎥 VIDEOS (2) */
  const videos: VideoMoment[] = [
    {
      id: 7,
      titleFr: 'L’art du café',
      titleEn: 'The art of coffee',
      videoUrl: 'https://ik.imagekit.io/wvlb7dccz/WhatsApp%20Video%202026-01-13%20at%2017.27.45.mp4',
    },
    {
      id: 8,
      titleFr: 'Savoir-faire FAMICO',
      titleEn: 'FAMICO craftsmanship',
      videoUrl: 'https://ik.imagekit.io/wvlb7dccz/WhatsApp%20Video%202026-01-13%20at%2017.27.45.mp4?updatedAt=1768344579401',
    },
  ];

  return (
    <section id="moments" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
            Moments FAMICO
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto text-lg">
            Chaque tasse de café FAMICO accompagne vos instants du quotidien.
            <br />
            <span className="italic">
              Every cup of FAMICO coffee enhances your everyday moments.
            </span>
          </p>
        </motion.div>

        {/* 📸 GRID PHOTOS — 3 PAR LIGNE */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {images.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={item.image}
                alt={item.titleEn}
                className="w-full h-80 object-cover"
              />

              <div className="absolute inset-0 bg-black bg-opacity-30"></div>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                <h3 className="text-lg font-semibold">{item.titleFr}</h3>
                <p className="text-sm opacity-90">{item.titleEn}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🎥 VIDEOS — CENTRÉES EN DESSOUS */}
        <div className="flex flex-col md:flex-row justify-center gap-10">
          {videos.map((video) => (
            <div key={video.id} className="w-full md:w-1/2">
              <AutoPlayVideo src={video.videoUrl} />
              <div className="text-center mt-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {video.titleFr}
                </h3>
                <p className="text-sm text-gray-500">
                  {video.titleEn}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MomentsSection;
