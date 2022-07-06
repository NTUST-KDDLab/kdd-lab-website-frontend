import React from 'react';

import IndexNavbar from '../components/Navbars/IndexNavbar.js';
import IndexFooter from '../components/Footers/Footer.js';

export default function Layout({ children }) {
  return (
    <>
      <div className={`flex flex-col min-h-screen`}>
        <IndexNavbar fixed />
        {children}
        <IndexFooter />
      </div>
    </>
  );
}
