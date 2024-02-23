// Libs
import React from 'react';

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
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;