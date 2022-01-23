import React from 'react';
import HeroSection from './Story/HeroSection';
import Tabs from "./Story/Tabs";
import Trustpilot from './Story/Trustpilot';

const index = () => {
    return (
        <div>
            <HeroSection />
            <Tabs />
            <Trustpilot/>
        </div>
    )
}

export default index;