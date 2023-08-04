import { useState, createContext } from "react";

export const RelojesContext = createContext();

const initialState = () => [
  
];

export const RelojesProvider = ({ children }) => {
  const [items, setItems] = useState(initialState);

  return (
    <RelojesContext.Provider value={[items, setItems]}>
      {children}
    </RelojesContext.Provider>
  );
};
