import React from 'react'

function Playing() {
    return (
        <div className="fixed bottom-[88px] left-4 right-4 z-40 h-16 glass-card rounded-2xl flex items-center px-4 justify-between neon-glow">
            <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
                    <img className="w-full h-full object-cover" data-alt="Album art for a lo-fi electronic track, featuring a minimalist sunset over a digital ocean with pixel-art clouds. Colors are a mix of soft electric purple and deep navy. High-contrast and modern design style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDL4heF-5YmCBgtiYEJW7db3vO2ENijoVCgt0JdqESAF-Po5oSJ34dTTqlJRsOiyZtUfAH32o_mYtE_5KoxrJyj2vSRfPTtKeSuTFBoTnsUIDQDC_liUHQzO5EA5tcReSHC7kOWqJJZ9thrXATtZHqK7mCqMfXEeAspBJrp5mOdfoc2SC1GyWMoYKU8UNpeog2ASjbf5PTvQSdLUOcMLz9GYt5tgfKH8oK3T0aaBU2bOY2hdTdF1qV8jIBA6HpHNWbnKlQWq4Ov-Q" />
                </div>
                <div className="truncate">
                    <p className="font-label-sm text-on-surface truncate">Neon Nights</p>
                    <p className="text-[10px] text-on-surface-variant uppercase tracking-tighter">Midnight Pulse Radio</p>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <button className="text-on-surface hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">skip_next</span>
                </button>
                <button className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}
                    >pause</span>
                </button>
            </div>
            {/* <!-- Progress mini-bar --> */}
            <div className="absolute bottom-0 left-0 h-[2px] bg-secondary-container" style={{ width: "45%" }}></div>
        </div>
    )
}

export default Playing