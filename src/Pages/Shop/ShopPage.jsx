import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import "./ShopPage.css";

import { db } from "../../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import MessageSuccess from "../../components/MessageSuccess/MessageSuccess";

const initialState = {
  name: "",
  lastName: "",
  city: "",
};

const styles = {
  containerShop: {
    textAlign: "center",
    paddingTop: 20,
  },
};

const ShopPage = () => {
  const [values, setValues] = useState(initialState);
  const [purchaseID, setPurchaseID] = useState(null);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true); // Estado para habilitar o deshabilitar el botón de envío

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  // Función de validación de campos
 
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
      values,
    });

    setPurchaseID(docRef.id);
    setValues(initialState);
  };

  return (
    <div style={styles.containerShop}>
      <h1 style={{ color: "black" }}>Shop</h1>
      <form className="FormContainer" onSubmit={onSubmit}>
        <TextField
          placeholder="Nombre"
          style={{ margin: 10, width: 400 }}
          name="name"
          value={values.name}
          onChange={handleOnChange}
        />
        <TextField
          placeholder="Apellido"
          style={{ margin: 10, width: 400 }}
          name="lastName"
          value={values.lastName}
          onChange={handleOnChange}
        />
        <TextField
          placeholder="Ciudad"
          style={{ margin: 10, width: 400 }}
          name="city"
          value={values.city}
          onChange={handleOnChange}
        />
        <button className="btnASendAction" disabled={isSubmitDisabled}>
          Send
        </button>
      </form>

      {purchaseID ? <MessageSuccess purchaseID={purchaseID} /> : null}
    </div>
  );
};

export default ShopPage;
