import React from 'react';

import Navbar from '../components/Navbars/index';
import Footer from '../components/Footers/index';

export default function Layout({ children }) {
  return (
    <>
      <div className={`flex flex-col min-h-screen`}>
        <Navbar fixed />
        {children}
        <Footer />
      </div>
    </>
  );
}
