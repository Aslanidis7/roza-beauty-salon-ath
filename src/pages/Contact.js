import React from 'react';
import { motion } from 'framer-motion';
import FacebookLogo from '../assets/images/Facebooklogo.png'; // Import Facebook logo
import InstagramLogo from '../assets/images/Instagramlogo.png'; // Import Instagram logo

const Contact = () => {
  return (
    <motion.div
      className="pt-20 md:pt-32 px-6 md:px-12 text-center" // Adjusted padding
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl md:text-5xl text-pink-600 font-semibold mb-4" style={{ fontFamily: 'Times New Roman, serif' }}>
        Get in Touch with Us
      </h2>
      <p className="mt-4 text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
        Whether you're looking to book an appointment or simply have a question about our services, we’re here to help. Reach out to us using the contact details below, or visit us in person to experience the Roza Beauty Salon difference. We look forward to welcoming you to our luxurious salon in Athens.
      </p>
      <div className="mt-6 text-gray-800">
        <p>📍 Ioánnou Drosopoúlou 205, Athina 112 55</p>
        <p>📞 +30 694 553 9054</p>
        <p>📧 rozabeautysalon205@gmail.com</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://www.facebook.com/rozabeautysalon.gr/" target="_blank" rel="noopener noreferrer">
            <img src={FacebookLogo} alt="Facebook" className="w-12 h-12 transform transition duration-300 hover:scale-110" /> {/* Increased size */}
          </a>
          <a href="https://www.instagram.com/roza_beauty_salon_in_athens" target="_blank" rel="noopener noreferrer">
            <img src={InstagramLogo} alt="Instagram" className="w-12 h-12 transform transition duration-300 hover:scale-110" /> {/* Increased size */}
          </a>
        </div>
      </div>
      <div className="mt-6 text-gray-800">
        <h3 className="text-2xl font-semibold">Hours:</h3>
        <p>Monday - Saturday: 11:30 AM – 8:00 PM</p>
        <p>Sunday: Closed</p>
      </div>
    </motion.div>
  );
};

export default Contact;
