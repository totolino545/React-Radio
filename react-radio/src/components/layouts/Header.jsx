import React from 'react'

function Header() {
    return (
        <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl flex justify-between items-center px-container-padding-mobile h-16">
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full overflow-hidden border border-primary/20">
                    <img className="w-full h-full object-cover" data-alt="A professional studio portrait of a young music enthusiast with stylish headphones, softly lit by purple and cyan neon lights in a dark, minimalist room. The aesthetic is clean and high-fidelity, matching a premium music application interface. The lighting creates a vibrant midnight mood with soft bokeh in the background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBESN5_KGGxRgTisuqv5A8kxSXdoJKHNEMVJ8jpSvRKsPHZrFnUGLg_58o9CP0-9hCfJUoFEBLiv5qdGoh8cDS6_CVRVEKsJBCGTgFE7hCUK_HFsP1R2llCKg-_ab8BdJ2d3d53ZRjFlKXylSQhInBWL2JJvMhzNcyahe6Zu_HtVtHAVS0Jmi12WGZeUHWKHRFQm2nQ-iCYO1Z7nq9vbj4n7TcB3F8MhGo3rYKLZA06QwBUnSfUVyaKXsjFfxlo7XceHDSLllQBag" />
                </div>
                <h1 className="font-display text-headline-lg-mobile font-extrabold text-primary tracking-tight">VibeRadio</h1>
            </div>
            <button className="text-on-surface-variant hover:text-secondary transition-colors active:scale-95 duration-200">
                <span className="material-symbols-outlined">settings</span>
            </button>
        </header>
    )
}

export default Header
