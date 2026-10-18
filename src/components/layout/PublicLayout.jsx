import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import Navbar from '../common/Navbar/Navbar';
import Footer from '../common/Footer/Footer';
import Chatbot from '../common/Chatbot/Chatbot';
import LatestEventModal from '../common/LatestEventModal/LatestEventModal';

const PublicLayout = () => {
  const location = useLocation();

  useEffect(() => {
    // Refresh scroll triggers when route changes
    AOS.refresh();
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <main className="main-content-flow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <Chatbot />
      <LatestEventModal />
    </>
  );
};

export default PublicLayout;
