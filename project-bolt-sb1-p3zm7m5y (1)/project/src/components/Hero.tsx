import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://ik.imagekit.io/wvlb7dccz/WhatsApp%20Image%202026-01-13%20at%2016.52.45.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto h-full px-6 grid md:grid-cols-2 items-center gap-12">
        
        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="text-white"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            CAFÉ <span className="text-yellow-400">FAMICO</span>
          </h1>

          <p className="text-yellow-400 text-xl md:text-2xl mt-4 font-medium">
            L’Excellence du Café Algérien <span className="font-bold">DZ</span>
          </p>

          <p className="mt-6 text-lg max-w-xl text-gray-200 leading-relaxed">
            Depuis 1973, nous torréfions avec passion un café authentique,
            intense et raffiné pour les amateurs de vrai goût.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-6 mt-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg shadow-xl"
              onClick={() =>
                document
                  .getElementById("produits")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Découvrir nos produits
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-bold text-lg"
              onClick={() =>
                document
                  .getElementById("histoire")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Notre histoire
            </motion.button>
          </div>
        </motion.div>

        {/* RIGHT PRODUCT */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          <motion.img
            src="https://ik.imagekit.io/wvlb7dccz/16195db8-025c-45a7-bd09-fee72e7fc4a1.png?updatedAt=1767735982401"
            alt="Café Famico"
            className="w-[260px] md:w-[340px] drop-shadow-2xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Glow */}
          <div className="absolute -z-10 w-80 h-80 bg-yellow-400/20 blur-3xl rounded-full" />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
