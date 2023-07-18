import React, { useState } from 'react';
import { Typography, Button } from '@mui/material';
import "./MostrarReloj.css"

const MostrarReloj = ({ data }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAgregar = () => {
    // Aquí puedes escribir la lógica para agregar el producto al carrito o realizar alguna acción deseada
    // Por ejemplo, puedes almacenar la información del producto y su cantidad en el estado global de la aplicación
    // o enviarla al servidor.
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
