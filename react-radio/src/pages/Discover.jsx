import React, { useState, useEffect } from 'react';
import { useRadios } from "../context/RadiosContext"
import logo from "../assets/imagen.jpg"
import './styles/discover.css'


const Discover = () => {

    const { provider1 } = useRadios();
    console.log(provider1);

    return (
        <>
            <main className="font-body-md text-body-md selection:bg-primary-container selection:text-on-primary-container">



                <main className="pt-20 pb-40 px-10 mx-auto">

                    {/* <!-- Main Content: Station List --> */}
                    <section className="space-y-4 px-container-padding-mobile max-w-2xl mx-auto">
                        <h2 className="font-headline-md text-headline-md text-on-surface my-6">Discovery Feed</h2>
                        {/* <!-- Station Card 1 --> */}
                        {provider1.map(radios =>
                            <div key="radios.id" className="group flex items-center p-4 rounded-2xl bg-surface-container-low border border-outline-variant/10 hover:border-secondary/40 transition-all duration-300 cursor-pointer hover:bg-surface-container">
                                <div className="relative w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden mr-4">
                                    <img className="w-full h-full object-cover"
                                        data-alt="Favicon de la Radio"
                                        src={radios.favicon || logo}
                                        onError={(e) => {
                                            e.currentTarget.src = logo;
                                        }} />
                                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                                        <span className="material-symbols-outlined text-white" >play_arrow</span>
                                    </div>
                                </div>
                                <div className="flex-grow min-w-0">
                                    <div className="flex justify-between items-start">
                                        <h3 className="font-headline-md text-body-lg text-on-surface truncate pr-2">{radios.name}</h3>
                                        <span className="material-symbols-outlined text-on-surface-variant text-[20px] hover:text-primary">favorite</span>
                                    </div>
                                    <p className="text-on-surface-variant font-body-md text-sm truncate mt-1">{radios.tags}</p>
                                    <div className="flex items-center gap-3 mt-2">
                                        <span className="flex items-center gap-1 text-primary font-label-sm text-[10px] uppercase tracking-widest">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                                            Live
                                        </span>
                                        <span className="text-on-surface-variant/60 font-label-sm text-[10px]">{radios.country} - {radios.votes} Votes</span>
                                    </div>
                                </div>

                            </div>
                        )}
                    </section>
                </main>



            </main>
        </>
    )
}

export default Discover