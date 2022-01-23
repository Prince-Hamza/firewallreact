import React from 'react';
import "../Eqipment/style.css";
import pic from "../../Home/CarouselGallery/img/g1.jpg";

const Modals = () => {
    const array = [1, 2, 3, 4, 5, 6];
    return (
        <div className="grid-container">
            {
                array.map((item, index) => {
                    return <div key={index} className="border mx-2 mb-3 shadow-sm modals-right d-flex align-items-center">
                        <section>
                            <img className='img-modal' src={pic} alt="" />
                        </section>
                        <section className="text-center">
                            <span className="text-danger font-size-small fw-bold ms-2">Cable Accessories (1000)</span>
                        </section>
                    </div>
                })
            }
        </div>
    )
}

export default Modals;