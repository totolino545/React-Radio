import React from 'react'

function Hero() {
    return (
        <section className="relative mb-section-gap rounded-xl overflow-hidden h-48 flex flex-col justify-end p-6">

            <div className="relative z-10">
                <p className="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-1">Live Now</p>
                <h2 className="font-display text-display text-on-surface">Hello, Listener</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">Your sonic journey starts here.</p>
            </div>
        </section>
    )
}

export default Hero