import React from 'react';
import HeroSection from './HeroSection';
import Request from './Request';
import TableSet from './Description';
import Tables from './Table';


const index = () => {
    return (
        <div>
            <HeroSection/>
            <TableSet/>
            <Tables/>
            
          <Request/>
        </div>
    )
}

export default index;
