import React from 'react'
import { useState } from "react";
import { useRadios } from "../../../context/RadiosContext"

function Country({ countries }) {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const { countryParam, countRadios } = useRadios();

    // Cuando cambia el datalist
    const handleCountryChange = (e) => {

        const countryName = e.target.value;

        const country = countries.find(
            (country) => country.name === countryName
        );

        setSelectedCountry(country || null);

    };
    const handleSelectedCountry = (country) => {
        setSelectedCountry(country);
        countryParam(country);
    }

    // Limpiar selección
    const clearCountry = () => {
        setSelectedCountry(null);
    };
    return (
        <section className="mb-section-gap mt-2">
            <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Top Countries</h3>
            <div className="grid grid-cols-1  gap-2">
                <label className={`              
                rounded-full 
                w-96
                py-4
                px-2
                flex items-center 
                cursor-pointer               
                border
                ${selectedCountry
                        ? "bg-primary-container text-on-primary-container border-primary border-4 border-indigo-500"
                        : "bg-surface-container text-on-surface-variant border-outline-variant/30 hover:bg-surface-variant"
                    }
                                `}
                >
                    <span className="material-symbols-outlined text-secondary ml-1">flag</span>
                    {selectedCountry && (
                        <p className="
                                mt-1
                                ml-1
                                text-[8px]
                                text-on-surface-variant
                                uppercase
                                tracking-tighter
                            ">
                            {countRadios[selectedCountry.name] || 0}
                        </p>
                    )}
                    <div className="relative flex-1 items-center overflow-x-auto hide-scrollbar">
                        <div className="rounded-full flex items-center justify-center bg-surface-container-highest ">

                            <input
                                type="text"
                                id="Countries"
                                list="CountriesList"
                                value={selectedCountry?.name || ""}
                                onChange={handleCountryChange}
                                placeholder="Seleccionar país"
                                className="                                  
                                    cursor-pointer
                                    w-64
                                    text-sm
                                    font-medium 
                                    border-none
                                    border-outline
                                    bg-transparent
                                "
                            />
                        </div>
                        <datalist id="CountriesList">
                            {countries.map((country) => (
                                <option
                                    key={country.name}
                                    value={country.name}
                                />
                            ))}
                        </datalist>


                    </div>

                    {selectedCountry && (
                        <button
                            type="button"
                            onClick={clearCountry}
                            className="
                                flex-shrink-0
                                w-7
                                h-7
                                rounded-full
                                flex
                                items-center
                                justify-center
                                text-gray-400
                                hover:bg-red-500
                                hover:text-white
                                transition-colors
                            "
                        >
                            ✕
                        </button>
                    )}
                    {selectedCountry && (
                        <button
                            type="button"
                            onClick={() => handleSelectedCountry(selectedCountry)}
                            className="
                                flex-shrink-0
                                w-7
                                h-7
                                rounded-full
                                flex
                                items-center
                                justify-center
                                text-gray-400
                                hover:bg-red-500
                                hover:text-white
                                transition-colors
                            "
                        >
                            Ok
                        </button>
                    )}
                </label>



            </div>
        </section>
    )
}

export default Country