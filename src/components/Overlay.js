import React, { useState, useTran, Fragment, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { SplitTextToChars } from '../helpers/animationFunc';
import './comp.css';

function Overlay(props) {
    const matchesQuery = props.matchesQuery;
    const wavyTextRef = useRef(null);
    useEffect(() => {
        if (!wavyTextRef.current) return;
        const chars = SplitTextToChars(wavyTextRef.current);

        gsap.set(wavyTextRef.current, { perspective: 400 });

        gsap.from(
            chars,
            {
                duration: 0.2,
                opacity: 0,
                scale: 1,
                delay: 2,
                y: -40,
                rotationX: -90,
                transformOrigin: "0% 50% -50",
                ease: "inOut",
                stagger: 0.025
            },
            "+=0"
        );
    }, []);

    return (
        <section id='overlay' className="section scrollspy full-height" >
            <img class='overlay valign-wrapper' src={require('../images/background.jpg')} style={{opacity: 0.2}} />
            <p class='center-align' style={{fontSize: 30, fontWeight: 'bold'}} ref={wavyTextRef}>I'm a front-end developer, a full-stack wannabe.</p>

        </section>
    );
}


export default Overlay;
