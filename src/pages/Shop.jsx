import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { useCart } from '../components/Accordions/CartContext';

const Shop = () => {
    console.log('Shop component is rendered.');
    const { state } = useCart();
    console.log('Cart state:', state);
    return (
        <>
            <Header title='Корзина' />
            <h3>В корзине {state.orders.length} товаров.</h3>
            <section className='Shop'>
                {state.orders.map((order, index) => (
                    <div key={index}>
                        <p>{order.title}</p>
                        <button>Оплатить</button>
                    </div>
                ))}
            </section>

            <Footer />
        </>
    );
};

export default Shop;
