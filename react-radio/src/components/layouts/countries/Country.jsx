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
        console.log(country);
        console.log(countRadios(country));

    }

    // Limpiar selección
    const clearCountry = () => {
        setSelectedCountry(null);
    };
    return (
        <section className="mb-section-gap mt-8">
            <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Top Countries</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <label className={`              
                rounded-full 
                w-full
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
                            {selectedCountry.stationcount?.toLocaleString()}
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
                                    w-full
                                    text-xs
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

                {countries.slice(0, 5).map((country) => (
                    <button
                        key={country.name}
                        onClick={() => handleSelectedCountry(country)}
                        className={`
                                flex-shrink-0
                                px-6                               
                                rounded-full                               
                                transition-colors
                                border
                                ${selectedCountry === country
                                ? "bg-primary-container text-on-primary-container border-primary border-4 border-indigo-500"
                                : "bg-surface-container text-on-surface-variant border-outline-variant/30 hover:bg-surface-variant"
                            }
                                `}


                    >

                        <div key={country.name} className="p-2 rounded-xl flex items-center  gap-3 cursor-pointer">
                            <div className="w-10 h-6 rounded-lg flex items-center justify-center inline-block align-baseline gap-2 bg-surface-container-highest">
                                <span className="material-symbols-outlined text-secondary">flag</span>
                                <p className="text-[8px]   tracking-tighter">{country.stationcount} </p>
                            </div>
                            <div className="flex justify-center w-full">
                                <p className="font-label-sm text-[10px] text-on-surface line-clamp-1">{country.name}</p>
                            </div>
                        </div>
                    </button>
                ))}


            </div>
        </section>
    )
}

export default Country