import React from 'react'

function Stations() {
      
    return (
        <section className="mb-section-gap mb-15">

            <div className="flex items-center justify-between mb-10">
                <h3 className="font-headline-md text-headline-md text-on-surface">
                    Featured Stations
                </h3>

                <button className="text-primary font-label-sm text-label-sm hover:underline">
                    View All
                </button>
            </div>


            {/* GRID */}
            <div className="grid grid-cols-2 gap-2 md:gap-6">


                {/* TARJETA 1 */}
                <div className="group relative h-[250px] md:h-[300px] overflow-hidden rounded-2xl glass-card">

                    <img
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDf3levJ1X0hXzUUW6kjfSpYbtroIhSBjlI167TL91Emg6TIIbYSokF0SJRsVhCA-O0LTISjYn1XWQSisSlax1N_tm5kiercyWo1W-Zw2NfC96oo1VQbMdeSU6PDbbk65sdnbB3tq5UKtTGQiXnYpPWfTuQvqOm0ndAfDNC052V1KFjkaLqHv9oAP8XOmAZlPXvPuHpPTMSmg80AKItjyODgKb4Yg2QPwPtPj-XB5bBCGWVCznbhqR0-xPKBFO2rwAg9Oi31ssjmA"
                        alt="Radio station studio"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

                    <div className="absolute bottom-0 left-0 w-full p-4">

                        <div className="flex items-center gap-2 mb-1">
                            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />

                            <span className="font-label-sm text-[10px] text-secondary uppercase tracking-widest">
                                Provider 1
                            </span>
                        </div>

                        <div className="flex gap-2">
                            <span className="px-2 py-0.5 rounded-md bg-white/10 backdrop-blur-md text-[10px] font-label-sm text-on-surface-variant uppercase">
                                Stations
                            </span>

                            <span className="px-2 py-0.5 rounded-md bg-white/10 backdrop-blur-md text-[10px] font-label-sm text-on-surface-variant uppercase">
                                2000
                            </span>
                        </div>

                    </div>

                </div>


                {/* TARJETA 2 */}
                <div className="group relative h-[250px] md:h-[300px] overflow-hidden rounded-2xl glass-card">

                    <img
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDf3levJ1X0hXzUUW6kjfSpYbtroIhSBjlI167TL91Emg6TIIbYSokF0SJRsVhCA-O0LTISjYn1XWQSisSlax1N_tm5kiercyWo1W-Zw2NfC96oo1VQbMdeSU6PDbbk65sdnbB3tq5UKtTGQiXnYpPWfTuQvqOm0ndAfDNC052V1KFjkaLqHv9oAP8XOmAZlPXvPuHpPTMSmg80AKItjyODgKb4Yg2QPwPtPj-XB5bBCGWVCznbhqR0-xPKBFO2rwAg9Oi31ssjmA"
                        alt="Radio station studio"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

                    <div className="absolute bottom-0 left-0 w-full p-4">

                        <div className="flex items-center gap-2 mb-1">
                            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />

                            <span className="font-label-sm text-[10px] text-secondary uppercase tracking-widest">
                                Provider 2
                            </span>
                        </div>

                        <div className="flex gap-2">
                            <span className="px-2 py-0.5 rounded-md bg-white/10 backdrop-blur-md text-[10px] font-label-sm text-on-surface-variant uppercase">
                                Stations
                            </span>

                            <span className="px-2 py-0.5 rounded-md bg-white/10 backdrop-blur-md text-[10px] font-label-sm text-on-surface-variant uppercase">
                                1800
                            </span>
                        </div>

                    </div>

                </div>


                {/* TARJETA GRANDE
                <div className="
                        group
                        relative
                        col-span-2
                        md:col-span-1
                        md:row-span-2
                        h-[300px]
                        md:h-auto
                        min-h-[300px]
                        md:min-h-0
                        rounded-2xl
                        overflow-hidden
                        glass-card
                ">

                    <img
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDO2JuDohTjRm-e89cKqg408bOI6CdaKuu8VsnLeR5CPbhvuzVsZ_mhQ5Bq-UNN3tMMk-90X0KdXhH9TLYDn4Yaytz7kHc2uNFjciq-O000ptHXjD6miA0SXCi6yN46NiTuY7f86GsOei1XZgouEGw24xyJk3bdM6sqCmAv0JlriglxjxuJnSfPds4TLGrfFcoLnC78Yav2GGLfOsG084uXbNMgz1WXE-bAof7lgQE0ycDuD7-_z9fAlov-VsMgnZcuM_0iFTPhcg"
                        alt="Vintage electric guitar"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

                    <div className="absolute bottom-0 left-0 w-full p-6">

                        <div className="flex items-center gap-2 mb-2">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />

                            <span className="font-label-sm text-[10px] text-primary uppercase tracking-widest">
                                Live Recording
                            </span>
                        </div>

                        <h4 className="font-headline-md text-headline-md text-on-primary-container mb-1">
                            The Vinyl Archive
                        </h4>

                        <div className="flex gap-2">
                            <span className="px-2 py-0.5 rounded-md bg-white/10 backdrop-blur-md text-[10px] font-label-sm text-on-surface-variant uppercase">
                                Rock
                            </span>

                            <span className="px-2 py-0.5 rounded-md bg-white/10 backdrop-blur-md text-[10px] font-label-sm text-on-surface-variant uppercase">
                                USA
                            </span>
                        </div>

                    </div>

                </div> */}

            </div>

        </section>
    )
}

export default Stations