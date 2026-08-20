import React from 'react'

function Visualizer() {
    return (
        <section className="mb-section-gap glass-card p-8 rounded-3xl relative overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2">Feeling Unsure?</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">Let our AI curator find the perfect rhythm for your current mood.</p>
                </div>
                <button className="bg-primary-container text-on-primary-container px-8 py-4 rounded-full font-headline-md text-headline-md hover:scale-105 transition-transform shadow-lg shadow-primary/20">
                    Surprise Me
                </button>
            </div>
            {/* <!-- Decorative Visualizer elements --> */}
            <div className="absolute bottom-0 right-0 left-0 flex items-end justify-center gap-1 opacity-20 h-24 pointer-events-none">
                <div className="w-2 bg-secondary rounded-t-full h-12 animate-pulse" style={{ animationDelay: "0.1s" }}></div>
                <div className="w-2 bg-secondary rounded-t-full h-20 animate-pulse" style={{ animationDelay: "0.3s" }}></div>
                <div className="w-2 bg-secondary rounded-t-full h-16 animate-pulse" style={{ animationDelay: "0.5s" }}></div>
                <div className="w-2 bg-secondary rounded-t-full h-24 animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                <div className="w-2 bg-secondary rounded-t-full h-8 animate-pulse" style={{ animationDelay: "0.4s" }}></div>
                <div className="w-2 bg-secondary rounded-t-full h-20 animate-pulse" style={{ animationDelay: "0.6s" }}></div>
                <div className="w-2 bg-secondary rounded-t-full h-12 animate-pulse" style={{ animationDelay: "0.1s" }}></div>
            </div>
        </section>
    )
}

export default Visualizer
