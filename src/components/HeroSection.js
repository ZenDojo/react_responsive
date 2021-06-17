import React from 'react'
import '../App.css'
import './HeroSection.css'
import { Button } from './Button'

function HeroSection() {
    return (
        <div>
            <video src="../../public/videos/video-2.mp4"></video>
            <h1>ADVENTURE AWAITS</h1>
            <p>What are u waiting for?</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonsize='btn--large'></Button>
            </div>
        </div>
    )
}

export default HeroSection
