import React, { useState, useContext, createContext } from 'react';
import { useProvider1 } from '../hooks/useProvider1'

export const RadiosContext = createContext();

export const useRadios= () => {
    const context = useContext(RadiosContext);
    if (!context) {
        throw new Error('useRadios debe ser usado dentro de un CartProvider');
    }
    return context;
};

export const RadiosProvider = ({ children }) => {
    const [radios, setRadios] = useState([]);


    const listRadios = (tag, country) => {
        console.log(tag, country);

    }



    return (
        <RadiosContext.Provider value={{
            listRadios
        }}>
            {children}
        </RadiosContext.Provider>
    );
};
export default RadiosContext;