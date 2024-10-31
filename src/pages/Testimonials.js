import React from 'react';
import { motion } from 'framer-motion';
import './Testimonials.css';

function Testimonials() {
  const googleReviews = [
    {
      name: "Demosthenis Imarhiagbe",
      rating: 5,
      date: "5 months ago",
      review: "Roza is one of the best at hairstyling. Always a pleasure having my cornrows done here.",
    },
    {
      name: "Hanna Tesfaye",
      rating: 5,
      date: "8 months ago",
      review: "I highly recommend Roza Beauty Salon to everyone. She is very professional and friendly!",
    },
    {
      name: "Efi K.",
      rating: 5,
      date: "2 months ago",
      review: "Great job... Very nice people... Highly recommended... 💚",
    },
    {
      name: "Alem Tesfaye",
      rating: 5,
      date: "a year ago",
      review: "The place where you can get what you want. They are the best in styling your hair. Highly recommended!",
    },
    {
      name: "Anna Kousathana",
      rating: 5,
      date: "2 years ago",
      review: "Super friendly staff and I love my braided hair! Highly recommended! ❤️",
    },
    {
      name: "Eliany Hurtado",
      rating: 5,
      date: "8 months ago",
      review: "El mejor negocio que existe en Grecia para nosotras las mulatas son un amor, excelente atención y buen servicio y con precios súper.",
    },
    {
      name: "Gabriel Helu",
      rating: 5,
      date: "5 years ago",
      review: "Nice place to have a good haircut.",
    },
  ];

  return (
    <motion.div
      className="bg-gradient min-h-screen p-8 pt-20 md:pt-32 flex flex-col justify-center items-center text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl md:text-5xl font-bold text-pink-700 mb-4 mt-8">
        What Our Clients Say
      </h1>
      <h2 className="text-2xl text-pink-700 font-semibold underline mb-4">
        Verified Google Reviews
      </h2>
      <p className="text-lg md:text-xl text-gray-700 font-light max-w-3xl leading-relaxed">
        Our clients are the heart of Roza Beauty Salon, and their satisfaction is our ultimate goal. Don’t just take our word for it – hear directly from our satisfied clients about their experiences with us. We pride ourselves on delivering outstanding service and results that exceed expectations. Browse through real testimonials to see how Roza Beauty Salon has become a trusted name in beauty and luxury.
      </p>
      <div className="google-reviews mt-8">
        {googleReviews.map((review, index) => (
          <div key={index} className="google-review">
            <p><strong>{review.name}</strong> - {review.date}</p>
            <p>Rating: {"⭐".repeat(review.rating)}</p>
            <blockquote>{review.review}</blockquote>
          </div>
        ))}
      </div>
      <p className="google-attribution mt-4">
        *These reviews are sourced from Google. They reflect genuine experiences from our valued clients.
      </p>
    </motion.div>
  );
}

export default Testimonials;
