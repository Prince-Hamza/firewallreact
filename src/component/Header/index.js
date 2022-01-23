import React from 'react';
import FHeader from './FirstHeader/FHeader';
import SHeader from './SHeader/SHeader';
import Navbar from './Navbar/Navbar';
import AfterNav from './Navbar/AfterNav';

const index = () => {
    return (
        <div>
            <FHeader />
            <SHeader />
            <Navbar />
            <AfterNav />
        </div>
    )
}

export default index;
