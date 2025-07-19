import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Correct paths for an App.tsx in the root folder
import Layout from './src/components/common/Layout';
import HomePage from './src/pages/HomePage';
import AboutPage from './src/pages/AboutPage';
import ProductsPage from './src/pages/ProductsPage';
import ContactPage from './src/pages/ContactPage';
import WhatsAppWidget from './src/components/common/WhatsAppWidget';

const App: React.FC = () => {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
      <WhatsAppWidget />
    </>
  );
};

export default App;