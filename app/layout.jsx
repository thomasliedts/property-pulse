// Libs
import React from 'react';

// Components
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Utils
import '@/assets/styles/globals.css';

export const metadata = {
  title: 'PropretyPulse | Find the perfect rental',
  description: 'Find your dream rental proprety',
  keywords: 'rental, find rentals, find properties',
};

const MainLayout = ({ children }) => {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
