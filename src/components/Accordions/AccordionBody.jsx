import React, { useState } from 'react';
import { useCart } from './CartContext';

const AccordionBody = (props) => {
    const [time, setTime] = useState(1);
    const { dispatch } = useCart();
  
    const prev = () => {
      if (time > 1) {
        setTime(time - 1);
      }
    };
  
    const next = () => {
      setTime(time + 1);
    };
  
    const handleAddToCart = () => {
      const order = { title: props.title, time };
      console.log('Before dispatch:', order);
  
      // Вместо использования хука useCart в обработчике события, мы будем вызывать dispatch напрямую
      dispatch({
        type: 'ADD_TO_CART',
        payload: order,
      });
  
      // После вызова dispatch, выведем текущее состояние корзины в консоль
      const cartState = JSON.parse(localStorage.getItem('cartState'));
      console.log('After dispatch. Cart state:', cartState);
    };
  
    return (
      <div className="Element">
        <h3>{props.title}</h3>
        <div className="count">
          <p>{'Количество часов'}</p>
          <div className="time">
            <div>
              <button onClick={prev}>-</button>
            </div>
            <div className="time_count">{time}</div>
            <button onClick={next}>+</button>
          </div>
        </div>
        {props.children}
        <button onClick={handleAddToCart}>+</button>
      </div>
    );
  };
  
  export default AccordionBody;