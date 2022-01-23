import React from 'react'
import HeroSection from './Resource/HeroSection'
import Detail from './Resource/Detail'

const indexs = () => {
    document.title = `Resurser | Information | FirewallForce`

    return (
        <div>
            <HeroSection />
            <Detail/>
            
        </div>
    )
}

export default indexs;