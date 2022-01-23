import React from 'react';
import HeroSection from './Story/HeroSection';
import Tabs from "./Story/Tabs";
import Trustpilot from './Story/Trustpilot';

const index = () => {
    document.title = `vara tjanster | IT-anskaffning | teknisk`

    return (
        <div>
            <HeroSection />
            <Tabs />
            <Trustpilot/>
        </div>
    )
}

export default index;