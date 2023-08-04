import React, { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import "./ShopPage.css";

import { db } from "../../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import MessageSuccess from "../../components/MessageSuccess/MessageSuccess";

import { RelojesContext } from "../../context/RelojesContext";

const initialState = {
  name: "",
  lastName: "",
  city: "",
};

const ShopPage = () => {
  const [values, setValues] = useState(initialState);
  const [purchaseID, setPurchaseID] = useState(null);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [items, setItems] = useContext(RelojesContext);

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleRemoveFromCart = (id) => {
    setItems((prevItems) => {
      // Find the item with the given id
      const itemToRemove = prevItems.find((item) => item.id === id);

      // If the item is found and its quantity is greater than 1, decrease the quantity by 1
      if (itemToRemove && itemToRemove.quantity > 1) {
        return prevItems.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity - 1,
              totalPrice: item.totalPrice - item.price,
            };
          }
          return item;
        });
      }

      // If the item quantity is 1 or the item is not found, remove the item from the cart
      return prevItems.filter((item) => item.id !== id);
    });
  };

  const handleClearCart = () => {
    setItems([]);
  };

  const validateFields = React.useCallback(() => {
    const { name, lastName, city } = values;
    return name.trim() !== "" && lastName.trim() !== "" && city.trim() !== "";
  }, [values]);

  React.useEffect(() => {
    setIsSubmitDisabled(!validateFields());
  }, [values, validateFields]);

  const onSubmit = async (e) => {
    e.preventDefault();

    const docRef = await addDoc(collection(db, "compras"), {
      items,
      values,
    });

    setPurchaseID(docRef.id);
    setValues(initialState);
    setItems([]);
  };

  const handleAddToCart = (data) => {
    const itemExists = items.find((item) => item.name === data.name);

    if (itemExists) {
      const updatedItems = items.map((item) => {
        if (item.name === data.name) {
          return {
            ...item,
            quantity: item.quantity + 1,
            totalPrice: item.totalPrice + data.price,
          };
        }
        return item;
      });
      setItems(updatedItems);
    } else {
      const newItem = {
        ...data,
        quantity: 1,
        totalPrice: data.price,
      };
      setItems((prevItems) => [...prevItems, newItem]);
    }
  };

  // Calcular cantidad total y suma total de precios
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = items.reduce((total, item) => total + item.totalPrice, 0);

  return (
    <div className="containerShop">
      <h1 style={{ color: "black" }}>Shop</h1>
      <form className="formContainer" onSubmit={onSubmit}>
        <TextField
          placeholder="Nombre"
          name="name"
          value={values.name}
          onChange={handleOnChange}
        />
        <TextField
          placeholder="Apellido"
          name="lastName"
          value={values.lastName}
          onChange={handleOnChange}
        />
        <TextField
          placeholder="Ciudad"
          name="city"
          value={values.city}
          onChange={handleOnChange}
        />
        <button className="btnASendAction" disabled={isSubmitDisabled}>
          Send
        </button>
      </form>

      {purchaseID ? (
        <div className="messageSuccessContainer">
          <MessageSuccess purchaseID={purchaseID} />
        </div>
      ) : null}

      <div className="tableContainer">
        <h2>Carrito de compras</h2>
        {items.length === 0 ? <p>El carrito está vacío.</p> : null}
        {items.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>Imagen</th>
                <th>Producto</th>
                <th>Descripción</th>
                <th>Cantidad</th>
                <th>Precio Unitario</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img src={item.img} alt="Product" />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.quantity}</td>
                  <td>{"$" + item.price + ".00"}</td>
                  <td>
                    <button onClick={() => handleAddToCart(item)}>Agregar</button>
                    <button onClick={() => handleRemoveFromCart(item.id)}>Quitar</button>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan="3">Total</td>
                <td>{totalItems}</td>
                <td>{"$" + totalPrice + ".00"}</td>
                <td>
                  <button onClick={handleClearCart}>Vaciar carrito</button>
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ShopPage;
