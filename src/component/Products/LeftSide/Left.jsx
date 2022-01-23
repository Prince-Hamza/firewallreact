import React from 'react';
import AccordionComp from '../../Eqipments/Eqipment/AccordionComp';

const Left = () => {
    return (
        <div>
            <AccordionComp products={'true'} title={"Brands"} />
            <AccordionComp products={'true'} title={"Categories"} />
        </div>
    )
}

export default Left;