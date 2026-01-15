import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProductsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const products = [
    {
      id: 1,
      name: 'Café Grains',
      image: 'https://ik.imagekit.io/wvlb7dccz/WhatsApp%20Image%202026-01-11%20at%2021.33.10.jpeg'
    },
    {
      id: 2,
      name: 'Famico Exclusive',
      image: 'https://ik.imagekit.io/wvlb7dccz/WhatsApp%20Image%202026-01-11%20at%2021.33.10%20(1).jpeg'
    },
    {
      id: 3,
      name: 'Cafe Famico',
      image: 'https://ik.imagekit.io/wvlb7dccz/WhatsApp%20Image%202026-01-11%20at%2021.33.09.jpeg'
    },
    {
      id: 4,
      name: 'Famico expresso oro',
      image: 'https://ik.imagekit.io/wvlb7dccz/WhatsApp%20Image%202026-01-11%20at%2021.11.29%20(1).jpeg'
    },
    {
      id: 5,
      name: 'famico expresso Ristreto',
      image: "https://ik.imagekit.io/wvlb7dccz/WhatsApp%20Image%202026-01-11%20at%2021.11.29.jpeg"
    },
    {
      id: 6,
      name: 'famico expresso forte',
      image: 'https://ik.imagekit.io/wvlb7dccz/WhatsApp%20Image%202026-01-11%20at%2021.10.53%20(2).jpeg'
    },
    {
      id: 7,
      name: 'famico intenso ',
      image: 'https://ik.imagekit.io/wvlb7dccz/WhatsApp%20Image%202026-01-11%20at%2021.10.53%20(1).jpeg'
    },
    {
      id: 7,
      name: 'famico  ',
      image: 'https://ik.imagekit.io/wvlb7dccz/WhatsApp%20Image%202026-01-11%20at%2021.33.15.jpeg'
    },
   
  ];

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <div className="h-px bg-red-600 w-20"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-red-600 mx-6">
              BOUTIQUE FAMICO
            </h2>
            <div className="h-px bg-red-600 w-20"></div>
          </div>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Découvrez la sélection de cafés <span className="font-semibold text-red-600">FAMICO</span>, 
            soigneusement torréfiés pour offrir une qualité et un goût exceptionnels. 
            Commandez facilement en ligne et recevez votre café directement chez vous.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 bg-red-600 text-white px-8 py-3 font-medium hover:bg-red-700 transition-all duration-300"
          >
            ACCÉDER À LA BOUTIQUE
          </motion.button>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden group cursor-pointer"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-medium text-center text-gray-900 group-hover:text-red-600 transition-colors">
                  {product.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
