import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../contexts/LanguageContext';

const HistorySection: React.FC = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="history" className="py-20 bg-gradient-to-br from-red-50 to-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
            {t('history.title')}
          </h2>
          <p className="text-xl text-gray-700 font-medium mb-2">
            {t('history.subtitle')}
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            {t('history.description')}
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  1973
                </div>
                <div className="ml-4 h-px bg-red-600 flex-1"></div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {t('history.content1')}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                  <span className="text-sm">50+</span>
                </div>
                <div className="ml-4 h-px bg-red-600 flex-1"></div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {t('history.content2')}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  2024
                </div>
                <div className="ml-4 h-px bg-red-600 flex-1"></div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {t('history.content3')}
              </p>
            </div>
          </motion.div>

          {/* Image/Video Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img
                src="https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="FAMICO History"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">1973 - 2024</h3>
                <p className="text-lg">Plus de 50 ans d'excellence</p>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-red-600 text-white px-4 py-2 rounded-full shadow-lg"
            >
              <span className="font-bold">50+ ans</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-4 -left-4 bg-white text-red-600 px-4 py-2 rounded-full shadow-lg border-2 border-red-600"
            >
              <span className="font-bold">Tradition</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;