import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Accordions from '../components/Accordions/Accordions';
import { CartProvider } from '../components/Accordions/CartContext';

const Service = () => {
  return (
    <CartProvider>
      <>
        <Header title='Услуги' description="" />
        <Accordions />
        <Footer />
      </>
    </CartProvider>
  );
};

export default Service;
