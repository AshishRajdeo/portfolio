import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const FONT_WEIGHTS = {
    subtitle: { min: 100, max: 700, default: 100 },
    title: { min: 400, max: 900, default: 400 },
};

const renderText = (text, className, baseWeight = 400) => {
    return [...text].map((char, i) => (
        <span 
            key={i} 
            className={className}
            style={{ 
                fontWeight: baseWeight,
                display: 'inline-block'
            }}
        >
            {char === ' ' ? '\u00A0' : char}
        </span>
    ));
};

const setupTextHover = (container, type) => {
    if (!container) return;
    const letters = container.querySelectorAll('span');
    const { min, max, default: base } = FONT_WEIGHTS[type];

    // Create quickTo for smoother animations
    const quickSetters = Array.from(letters).map(letter => 
        gsap.quickTo(letter, 'fontWeight', {
            duration: 0.3,
            ease: 'power3.out',
        })
    );

    const handleMouseMove = (e) => {
        const { left } = container.getBoundingClientRect();
        const mouseX = e.clientX - left;
        
        letters.forEach((letter, index) => {
            const { left: l, width: w } = letter.getBoundingClientRect();
            const center = l - left + w / 2;
            const distance = Math.abs(mouseX - center);
            const intensity = Math.exp(-(distance ** 2) / 2000);
            const weight = min + (max - min) * intensity;

            quickSetters[index](weight);
        });
    };

    const handleMouseLeave = () => {
        letters.forEach((letter) => {
            gsap.to(letter, {
                fontWeight: base,
                duration: 1.2,
                ease: 'power3.out',
            });
        });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
    };
};

const Welcome = () => {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);

    useGSAP(() => {
        const cleanupTitle = setupTextHover(titleRef.current, 'title');
        const cleanupSubtitle = setupTextHover(subtitleRef.current, 'subtitle');

        return () => {
            cleanupTitle?.();
            cleanupSubtitle?.();
        };
    }, []);

    return (
        <section id='welcome'>
            <p ref={subtitleRef}>
                {renderText("Hey, I'm Ashish Rajdeo, Welcome to my", 'text-3xl font-georama', 100)}
            </p>
            <h1 ref={titleRef} className='mt-7'>
                {renderText("portfolio", 'text-9xl italic font-georama', 400)}
            </h1>
            <div className='small-screen'>
                <p>This Portfolio is designed for desktop/tablet screens only.</p>
            </div>
        </section>
    );
};

export default Welcome;