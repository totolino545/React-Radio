import React, { useState, useEffect } from 'react';
import TagsListContainer from '../components/layouts/tags/TagsListContainer'
import CountriesListContainer from '../components/layouts/countries/CountriesListContainer'

const Discover = () => {
    return (
        <>
            <main className="font-body-md text-body-md selection:bg-primary-container selection:text-on-primary-container">

                <main className="pt-20 pb-40 px-10 mx-auto">
                    
                    {/* <!-- Main Content: Station List --> */}
                    <section className="space-y-4 px-container-padding-mobile max-w-2xl mx-auto">
                        <h2 className="font-headline-md text-headline-md text-on-surface my-6">Discovery Feed</h2>
                        {/* <!-- Station Card 1 --> */}
                        <div className="group flex items-center p-4 rounded-2xl bg-surface-container-low border border-outline-variant/10 hover:border-secondary/40 transition-all duration-300 cursor-pointer hover:bg-surface-container">
                            <div className="relative w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden mr-4">
                                <img className="w-full h-full object-cover" data-alt="A professional radio station logo featuring abstract geometric shapes in vibrant electric purple and cyan. The logo is displayed on a high-gloss, dark metallic background with cinematic lighting and subtle lens flares, conveying a modern electronic music vibe. Detailed textures and sharp edges." src="https://lh3.googleusercontent.com/aida-public/AB6AXuChtiOqbJjItJhCaSy3MpooamOohAtnD8Enw0-c1dyHOrRm0b10cZmiBLCTumNHTnaA-5DvBU7PUR-kXvUx33Pp_KMR7nmRbRhKZLmdESd3N4cbCYuf_xZ2Ef7Kkbdx5LgntDaxrJtksE2dqMjG_VHN63PHhzl22ulEe2uO0GuT9sNxIUZyyO2bbjxZ8wss3QuAYD00Md1gsRm6PsuOroXsZ7I9diU13wjWjlR80PDJ8HjsepJMpzSua-VwO97YkOUP8tlWtD_IeA" />
                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                                    <span className="material-symbols-outlined text-white" >play_arrow</span>
                                </div>
                            </div>
                            <div className="flex-grow min-w-0">
                                <div className="flex justify-between items-start">
                                    <h3 className="font-headline-md text-body-lg text-on-surface truncate pr-2">Madrid Indie Pulse</h3>
                                    <span className="material-symbols-outlined text-on-surface-variant text-[20px] hover:text-primary">favorite</span>
                                </div>
                                <p className="text-on-surface-variant font-body-md text-sm truncate mt-1">Best of Spanish Indie Rock &amp; Alternative</p>
                                <div className="flex items-center gap-3 mt-2">
                                    <span className="flex items-center gap-1 text-primary font-label-sm text-[10px] uppercase tracking-widest">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                                        Live
                                    </span>
                                    <span className="text-on-surface-variant/60 font-label-sm text-[10px]">1.2k Listening</span>
                                </div>
                            </div>
                        </div>
                       
                    </section>
                </main>
                
               

            </main>
        </>
    )
}

export default Discover