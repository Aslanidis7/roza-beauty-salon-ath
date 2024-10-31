import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      className="bg-gradient min-h-screen p-8 pt-20 md:pt-32 flex flex-col justify-center items-center text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl md:text-5xl font-bold text-pink-700 mb-4 mt-8">
        Welcome to Roza Beauty Salon – Where Beauty Meets Luxury
      </h1>
      <p className="text-lg md:text-xl text-gray-700 font-light max-w-3xl leading-relaxed">
        Located in the heart of Athens, Roza Beauty Salon offers an unparalleled beauty experience. Our salon is dedicated to excellence, combining luxury with a modern aesthetic. With a team of skilled professionals and a commitment to quality, we provide a range of beauty services that cater to every need. Step into an environment of elegance and let us transform your look with finesse and style. Discover why we are one of the most sought-after beauty destinations in Athens.
      </p>
    </motion.div>
  );
};

export default Home;
