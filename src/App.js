import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import './App.css'; // Import the App.css file for styling

// Define the page transition animation
const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
  transition: { duration: 0.5 },
};

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <motion.div {...pageTransition}>
                <Home />
              </motion.div>
            }
          />
          <Route
            path="/services"
            element={
              <motion.div {...pageTransition}>
                <Services />
              </motion.div>
            }
          />
          <Route
            path="/gallery"
            element={
              <motion.div {...pageTransition}>
                <Gallery />
              </motion.div>
            }
          />
          <Route
            path="/testimonials"
            element={
              <motion.div {...pageTransition}>
                <Testimonials />
              </motion.div>
            }
          />
          <Route
            path="/contact"
            element={
              <motion.div {...pageTransition}>
                <Contact />
              </motion.div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
