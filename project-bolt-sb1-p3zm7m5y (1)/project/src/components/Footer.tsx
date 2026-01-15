import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Youtube, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative">
      {/* Coffee beans background */}
      <div 
        className="bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop)'
        }}
      >
        <div className="bg-black bg-opacity-80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-white">
              
              {/* Logo and Company Info */}
              <div className="md:col-span-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-6"
                >
                  <img 
                    src="https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=200&h=60&fit=crop" 
                    alt="Segafredo" 
                    className="h-8 w-auto mb-4 filter brightness-0 invert"
                  />
                  <p className="text-sm text-gray-300 leading-relaxed">
                    FAMICO GROU Group<br />
                    EURL FAMICO - ZONE INDUSTRIELLE N02 OULED MENDIL-DOUIRA -ALGER<br />
                    Fax 021400102<br />
                    EMAIL coffefamico@gmail.com<br />
                  </p>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xs text-gray-400 mb-4"
                >
                  
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-xs text-gray-400"
                >
                  
                </motion.p>
              </div>

              {/* Navigation Links */}
              <div className="md:col-span-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <h3 className="text-lg font-semibold mb-4">Navigation</h3>
                  <ul className="space-y-2">
                    {['HOME', 'COMPANY', 'PRODUCTS', 'PROFESSIONALS', 'SPONSORSHIP', 'CONTACT'].map((item) => (
                      <li key={item}>
                        <a 
                          href="#" 
                          className="text-gray-300 hover:text-white transition-colors text-sm"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Information Links */}
              <div className="md:col-span-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3 className="text-lg font-semibold mb-4">Information</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Cookie Policy</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Terms of Service</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Sustainability</a></li>
                  </ul>
                </motion.div>
              </div>

              {/* Payment Methods and Social */}
              <div className="md:col-span-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h3 className="text-lg font-semibold mb-4">Payment Methods</h3>
                  <div className="flex space-x-2 mb-6">
                    <div className="bg-white rounded px-2 py-1">
                      <span className="text-blue-600 font-bold text-xs">VISA</span>
                    </div>
                    <div className="bg-white rounded px-2 py-1">
                      <span className="text-red-600 font-bold text-xs">MC</span>
                    </div>
                    <div className="bg-white rounded px-2 py-1">
                      <span className="text-blue-600 font-bold text-xs">AMEX</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.2 }}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      <Facebook className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.2 }}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.2 }}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      <Youtube className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.2 }}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="border-t border-gray-700 mt-12 pt-8 text-center"
            >
              <p className="text-gray-400 text-sm">
                © 2024 Segafredo famico Group. All rights reserved.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;