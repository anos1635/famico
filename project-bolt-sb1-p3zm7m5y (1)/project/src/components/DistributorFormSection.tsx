import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const DistributorFormSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
            Devenir distributeur FAMICO
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Rejoignez le réseau FAMICO et proposez un café de qualité à vos clients.  
            <br />
            <span className="italic">
              Become a FAMICO distributor and grow your business with premium coffee.
            </span>
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white shadow-xl rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Company */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nom de l’entreprise *
            </label>
            <input
              type="text"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-red-600 focus:border-red-600"
            />
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nom & Prénom *
            </label>
            <input
              type="text"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-red-600 focus:border-red-600"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-red-600 focus:border-red-600"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Téléphone *
            </label>
            <input
              type="tel"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-red-600 focus:border-red-600"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Pays / Ville *
            </label>
            <input
              type="text"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-red-600 focus:border-red-600"
            />
          </div>

          {/* Activity */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Type d’activité *
            </label>
            <select
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-red-600 focus:border-red-600"
            >
              <option value="">Sélectionner</option>
              <option>Café / Coffee shop</option>
              <option>Hôtel / Restaurant</option>
              <option>Bureau / Entreprise</option>
              <option>Revendeur / Distributeur</option>
              <option>Autre</option>
            </select>
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              rows="4"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-red-600 focus:border-red-600"
              placeholder="Parlez-nous de votre projet..."
            ></textarea>
          </div>

          {/* Button */}
          <div className="md:col-span-2 text-center mt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-red-600 text-white px-10 py-3 font-medium rounded-md hover:bg-red-700 transition-all duration-300"
            >
              Envoyer la demande
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default DistributorFormSection;
