import React from 'react';
import hero from '../images/Group 77.png'

function Hero (){

    return(
        <section className='hero'>
            <img src={hero}className='hero-img'/>
            <h1 className='heroh1'>Online Experiences</h1>
            <p className='herop1'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}

export default Hero;