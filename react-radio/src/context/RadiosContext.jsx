import React, { useState, useContext, createContext } from 'react';
import { useProvider1 } from '../hooks/useProvider1'

export const RadiosContext = createContext();

export const useRadios = () => {
    const context = useContext(RadiosContext);
    if (!context) {
        throw new Error('useRadios debe ser usado dentro de un CartProvider');
    }
    return context;
};

export const RadiosProvider = ({ children }) => {
    // const [radios, setRadios] = useState([]);
    const [tag, setTag] = useState([]);
    const [country, setcountry] = useState([]);
    const {
        provider1,
        countRadios,
        loading,
        error
    } = useProvider1(tag, country);
    
    const tagParam = (subGenre) => {
        setTag(subGenre);
    }
    const countryParam = (selectedCountry) => {
        setcountry(selectedCountry.name);
    }

    // const countRadios = (country) => {
        
    //     let cantRadios = provider1
    //         .filter(item=> item.country === country)

        
        
    // }
    console.log(countRadios);

    return (
        <RadiosContext.Provider value={{
            provider1,
            loading,
            error,
            tag,
            country,
            tagParam,
            countryParam
        }}>
            {children}
        </RadiosContext.Provider>
    );
};
export default RadiosContext;