import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <motion.div
      className="pt-20 md:pt-32 px-6 md:px-12 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl md:text-5xl font-semibold text-pink-700 mb-4 transition duration-300 transform hover:scale-105">
        Our Exclusive Services
      </h2>
      <p className="text-lg text-gray-700 font-light max-w-2xl mx-auto mb-8 transition duration-300 transform hover:scale-105">
        At Roza Beauty Salon, we offer a curated selection of premium beauty services tailored to meet the unique needs of each client. From revitalizing facials and expert hair styling to exquisite nail treatments and relaxing massages, our services are designed to enhance your natural beauty. Explore our offerings and indulge in a beauty experience that is both luxurious and personalized.
      </p>
      <ul className="text-left space-y-4 max-w-xl mx-auto">
        <li><strong>Facials & Skincare:</strong> Rejuvenate your skin with our custom skincare treatments.</li>
        <li><strong>Hair Styling & Coloring:</strong> From classic cuts to trendy colors, our stylists have you covered.</li>
        <li><strong>Nail Care:</strong> Manicures, pedicures, and nail art designed to perfection.</li>
        <li><strong>Makeup:</strong> Professional makeup services for every occasion.</li>
        <li><strong>Massage Therapy:</strong> Unwind with our relaxing and therapeutic massage treatments.</li>
      </ul>
    </motion.div>
  );
};

export default Services;
