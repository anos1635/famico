import React from 'react';
import { motion } from 'framer-motion';

const LocationSection: React.FC = () => {
  // Lien direct vers Google Maps
  const googleMapsLink = "https://www.google.com/maps/place/Famico+Factory";

  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
            FAMICO Factory
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Retrouvez notre site de production et nos bureaux.
            <br />
            <span className="italic">
              Find our production site and offices.
            </span>
          </p>
        </motion.div>

        {/* MAP CLICKABLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full h-[450px] rounded-xl overflow-hidden shadow-xl"
        >
          <a
            href={googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full"
          >
            <iframe
              title="FAMICO Factory Location"
              src="https://maps.app.goo.gl/DXBLaQZZpXiVRyn79"
              className="w-full h-full border-0 pointer-events-none"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default LocationSection;
