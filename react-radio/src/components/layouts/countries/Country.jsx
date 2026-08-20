import React from 'react'
import { useState } from "react";
import { useRadios } from "../../../context/RadiosContext"

function Country({ countries }) {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const { listRadios } = useRadios();

    // Cuando cambia el datalist
    const handleCountryChange = (e) => {

        const countryName = e.target.value;

        const country = countries.find(
            (country) => country.name === countryName
        );

        setSelectedCountry(country || null);

    };
    const handleSelectedCountry = () => {
        useRadios(selectedCountry)
    }

    // Limpiar selección
    const clearCountry = () => {
        setSelectedCountry(null);
    };
    return (
        <section className="mb-section-gap mt-8">
            <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Top Countries</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <label className="glass-card rounded-xl p-3 flex items-center cursor-pointer min-h-16">
                    <span className="w-10 material-symbols-outlined text-secondary">flag</span>
                    <div className="relative flex-1 items-center">
                        <div className="rounded-lg flex items-center justify-center bg-surface-container-highest">


                            <input
                                type="text"
                                id="Countries"
                                list="CountriesList"
                                value={selectedCountry?.name || ""}
                                onChange={handleCountryChange}
                                placeholder="Seleccionar país"
                                className="
                                    glass-card
                                    cursor-pointer
                                    w-full
                                    outline-none
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

                        {selectedCountry && (
                            <p className="
                                mt-1
                                ml-3
                                text-[10px]
                                text-on-surface-variant
                                uppercase
                                tracking-tighter
                            ">
                                {selectedCountry.stationcount?.toLocaleString()} Stations
                            </p>
                        )}
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
                </label>

                {countries.slice(0, 7).map((country) => (
                    <button
                        key={country.name}
                        onClick={() => handleSelectedCountry(country.name)}
                        className={`
                                // flex-shrink-0
                                // px-6
                                // py-2
                                // rounded-full
                                // font-label-sm
                                // text-label-sm
                                // transition-colors
                                // border
                                
                                `}
                        
                        
                    >

                    <div key={country.name} className={`
                        glass-card
                        p-4 
                        rounded-xl 
                        flex 
                        items-center 
                        gap-3 
                        cursor-pointer
                        ${selectedCountry === country.name
                                ? "bg-primary-container text-on-primary-container border-primary border-4 border-indigo-500"
                                : "bg-surface-container text-on-surface-variant border-outline-variant/30 hover:bg-surface-variant"
                            }
                        `}>
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-surface-container-highest">
                            <span className="material-symbols-outlined text-secondary">flag</span>
                        </div>
                        <div>
                            <p className="font-label-sm text-label-sm text-on-surface">{country.name}</p>
                            <p className="text-[10px] text-on-surface-variant uppercase tracking-tighter">{country.stationcount} Stations</p>
                        </div>
                    </div>
</button>
                ))}


            </div>
        </section>
    )
}

export default Country