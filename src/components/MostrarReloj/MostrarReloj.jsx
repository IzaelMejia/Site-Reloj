import React, { useState, useContext } from 'react';
import { Typography, Button } from '@mui/material';
import "./MostrarReloj.css";

import { RelojesContext } from "../../context/RelojesContext";

const MostrarReloj = ({ data }) => {
  const [quantity, setQuantity] = useState(1);
  const [items, setItems] = useContext(RelojesContext);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAgregar = () => {
    const itemExists = items.find(item => item.name === data.name);

    if (itemExists) {
      const updatedItems = items.map(item => {
        if (item.name === data.name) {
          return {
            ...item,
            quantity: item.quantity + quantity,
            totalPrice: item.totalPrice + data.price * quantity,
          };
        }
        return item;
      });
      setItems(updatedItems);
    } else {
      const newItem = {
        ...data,
        quantity,
        totalPrice: data.price * quantity,
      };
      setItems(prevItems => [...prevItems, newItem]);
    }
  };

  return (
    <div className='fondoContainer'>
      <div className='contenedorImg'>
        <img src={data.img} height={600} alt="Product" />
        <div className='contenedorText'>
          <Typography>{data.name}</Typography>
          <Typography>{"$" + data.price + ".00"}</Typography>
          <Typography>{data.description}</Typography>
          <div className='contenedorBotones'>
            <Button onClick={handleDecrement}>-</Button>
            <Typography>{quantity}</Typography>
            <Button onClick={handleIncrement}>+</Button>
            <Button onClick={handleAgregar}>Agregar al carrito</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostrarReloj;
