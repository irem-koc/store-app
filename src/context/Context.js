import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);
    const values = { data, setData, cart, setCart };
    return <Context.Provider value={values}>{children}</Context.Provider>;
};
export default ContextProvider;
