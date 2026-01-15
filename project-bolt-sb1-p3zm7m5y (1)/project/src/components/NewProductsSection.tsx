import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const NewProductsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-red-600 w-20"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-red-600 mx-6">
              decouvrez le nouveau produit famico
            </h2>
            <div className="h-px bg-red-600 w-20"></div>
          </div>
        </motion.div>

        {/* Products Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img
              src="https://ik.imagekit.io/wvlb7dccz/WhatsApp%20Image%202026-01-11%20at%2021.10.53.jpeg"
              alt="Famico Products Collection"
              className="w-full h-80 object-cover rounded-lg shadow-xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -top-4 -right-4 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
            >
              NEW
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <img
              src="https://ik.imagekit.io/wvlb7dccz/WhatsApp%20Image%202026-01-11%20at%2021.33.12.jpeg?updatedAt=1768314521974"
              alt="Premium Coffee Collection"
              className="w-full h-80 object-cover rounded-lg shadow-xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-4 -left-4 bg-white text-red-600 px-4 py-2 rounded-full text-sm font-medium shadow-lg border-2 border-red-600"
            >
              PREMIUM
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 text-center"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block"
          >
            <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-full shadow-2xl">
              <span className="text-lg font-medium">Discover Our Latest Innovations</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewProductsSection;