import { useState, createContext } from "react";

export const RelojesContext = createContext();

const initialState = () => [
  {
    description: "Forrado de plata",
    img: "https://firebasestorage.googleapis.com/v0/b/reloj-d4138.appspot.com/o/plata2.png?alt=media&token=5d83094b-2e4e-4557-96fa-0c5b95c735a9",
    name: "vacheron constantin",
    price:78999
  },
];

export const RelojesProvider = ({ children }) => {
  const [items, setItems] = useState(initialState);

  return (
    <RelojesContext.Provider value={[items, setItems]}>
      {children}
    </RelojesContext.Provider>
  );
};
