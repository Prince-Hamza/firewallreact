import React, { useState } from 'react';
import "./style.css";

const Fixed = () => {
    const [question, setQuest] = useState(true);
    const [shipping, setShipping] = useState(true);
    const [accept, setAccept] = useState(true);

    return <>
        {
            question &&
            <div className="d-flex flex-column py-2 bg-white shadow rounded align-items-center conatct-div-fixed">
                <div className="d-flex w-100 px-1 justify-content-start">
                    <i onClick={(e) => setQuest(false)} className="fa times fa-times fa-lg text-danger"></i>
                </div>
                <span className="fw-bold text-small">Questions?</span>
                <span className="fw-bold text-small">Comments?</span>
                <span className="text-muted">Contact us now at</span>
                <span className="text-danger">info@firewallforce.com</span>
                <span className="text-small mt-2">Follow Us</span>
                <div className="w-100 text-center">
                    <i className="fa text-danger fa-instagram"></i>
                    <i className="fa mx-2 text-info fa-twitter"></i>
                    <i className="fa text-primary fa-facebook"></i>
                </div>
                <span>Chat with us Live here</span>
            </div>
        }

        {
            shipping &&
            <div className="d-flex flex-column py-2 px-2 bg-white shadow rounded align-items-center shipping-div-fixed">
                <div className="d-flex w-100 justify-content-end">
                    <i onClick={(e) => setShipping(false)} className="fa times fa-times fa-lg text-danger"></i>
                </div>
                <span className="fw-bold text-small mt-1">Shipping Methods?</span>
                <img className="shippingimg mt-2" src="https://d35z3p2poghz10.cloudfront.net/apps/thirdparty/dhl-express/S5-DHL-Express.jpg" alt="" />
            </div>
        }

        {
            accept &&
            <div className="d-flex flex-column py-2 px-2 bg-white shadow rounded align-items-center Accept-div-fixed">
                <div className="d-flex w-100 justify-content-end">
                    <i onClick={(e) => setAccept(false)} className="fa times fa-times fa-lg text-danger"></i>
                </div>
                <span className="fw-bold text-small mt-1">We Accept</span>
                <img className="shippingimg mt-2" src="https://www.shareicon.net/data/2015/08/24/set_7723_simple-payment-methods.png" alt="" />
            </div>
        }
    </>
}

export default Fixed;