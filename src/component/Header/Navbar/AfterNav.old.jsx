import React from 'react';
import "./Navbar.css";
import pic from "../../Home/CarouselGallery/img/trustpilot.png";
import pic2 from "../../Home/CarouselGallery/img/pay-with-invoice.png";
import pic3 from "../../Home/CarouselGallery/img/fast-delivery.png";
const AfterNav = () => {
    return (
        <div className="main-after-nav">
            <section className="container afterNav-main d-flex justify-content-between align-items-center">
                <div className="afternav-div-container">
                    <span>Promise</span>
                </div>
                <div className="afternav-div-container">
                    <i className="fa fa-refresh mx-1" aria-hidden="true"></i>
                    <span>Free 30 Days Return Policy</span>
                </div>
                <div className="afternav-div-container">
                    
                    <div className="d-flex align-items-center" >
                    <span>
                            <img className=" mx-1 " src={pic} alt="" />
                            </span>
                            Rated Excellent 
                            {/* <span className="text-danger h2 mx-2 fw-light">Firewall<span className="text-dark h2 fw-light">Force</span></span> */}
                        </div>
                        
                        
                </div>
                <div className="afternav-div-container">
                <span >
                            <img className=" mx-1 " src={pic3} alt="" />
                            </span>
                    Fast Delivery 2-3 Days
                </div>
                <div className="afternav-div-container">
                <span >
                            <img className=" mx-1 " src={pic2} alt="" />
                            </span>
                    Pay With Invoice, 15-30 days Credit Line Always invest Free 
                </div>
                <div className="afternav-div-container">
                    <span>Purchase Online, Buy</span>
                </div>
            </section>
        </div>
    )
}

export default AfterNav;
