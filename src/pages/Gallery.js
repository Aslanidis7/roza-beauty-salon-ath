import React from 'react';
import { motion } from 'framer-motion';

// Import images
import img1 from '../assets/images/1.png';
import img2 from '../assets/images/2.png';
import img3 from '../assets/images/3.png';
import img4 from '../assets/images/4.png';
import img5 from '../assets/images/5.png';
import img6 from '../assets/images/6.png';
import img7 from '../assets/images/7.png';
import img8 from '../assets/images/8.png';
import img9 from '../assets/images/9.png';
import img10 from '../assets/images/10.png';
import img11 from '../assets/images/11.png';
import img12 from '../assets/images/12.png';

const Gallery = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

  return (
    <motion.div
      className="pt-20 md:pt-32 px-6 md:px-12 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl md:text-5xl text-pink-600 font-semibold mb-8" style={{ fontFamily: 'Times New Roman, serif' }}>
        Experience Our Work
      </h2>
      <p className="mt-4 text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
        Browse our gallery to see the exceptional quality and artistry that define Roza Beauty Salon. Each photo captures the dedication and expertise of our team, showcasing our salon's elegant ambiance and the transformative results we deliver. From stunning hairstyles to flawless makeup and nail art, our gallery reflects our commitment to beauty, luxury, and style.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center mt-8">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              delay: index * 0.1,
              ease: "easeOut"
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
          >
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-52 h-52 object-cover rounded-lg"
              style={{ pointerEvents: 'none' }}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Gallery;
