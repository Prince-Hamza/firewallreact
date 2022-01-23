import React from 'react';
import { Row, Col } from "react-bootstrap";
import pic1 from "./img/fedex.png";
import pic2 from "./img/dhl.png";
import pic3 from "./img/postnord.png";
import pic4 from "./img/ups.png";
import pic5 from "./img/Nets-logo.png";
import pic6 from "./img/paypal.png";
import pic7 from "./img/mastercard.png";
import pic8 from "./img/visa.png";
import pic9 from "./img/nordea.png";
import pic10 from "./img/afterpay.png";
import pic11 from "./img/Swish.png";
import "./Methods.css";

const Methods = () => {
    return (
        <div>
            <section className="container ">
                <Row>
                    <Col lg={3} md={3}>
                        <span className=" shipping-method h4 back-border " style={{fontFamily:'Poppins', color:'#575757'}}> Shipping Methods
                            <i className="fa fa-check-circle text-success mx-2" aria-hidden="true"></i>
                        </span>
                        <div className="mt-3 py-3 px-3 card-height shadow-sm d-flex flex-column justify-content-around align-items-center">
                            <img className="w-50 icon" src={pic1} alt="" />
                            <img className="w-50 icon" src={pic2} alt="" />
                            <img className="w-50 icon" src={pic3} alt="" />
                            <img className="w-50 icon" src={pic4} alt="" />
                        </div>
                    </Col>
                    <Col className="text-center py-5" lg={5} md={5}>
                        <span className=" shipping-method h4 back-border" style={{fontFamily:'Poppins', color:'#575757'}}>Subscribe to Our Newsletter</span>
                        <div className="middle-card mt-3">
                            <div className="overlay d-flex align-items-center">
                                <div className="mx-3 w-100 my-3">
                                    <h6 className="text-uppercase join-network heading-middle fw-bold">join our network today</h6>
                                    <div className="text-center">
                                        <span className="span-join">
                                            Subscribe our news letter and stay<br />
                                            up-to-date with latest promotions,<br />
                                            new product and amazing sales
                                        </span>
                                    </div>
                                    <div className="text-center mt-2">
                                        <input className="input-email" type="email" placeholder="   email" /><br />
                                        <button style={{ width: "13rem" }} className="btn mt-2 btn-method btn-danger text-capitalize">Subscribe</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="text-center" lg={4} md={4}>
                        <span className=" h4 shipping-method back-border m-auto" style={{fontFamily:'Poppins', color:'#575757'}}>Payment Methods
                            <i className="fa fa-check-circle text-success mx-2" aria-hidden="true"></i>
                        </span>
                        <div className="mt-3 py-4 px-5 card-height shadow-sm d-flex flex-column justify-content-between align-items-center">
                            <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                                <img width="70" height="45" hspace="20" src={pic5} alt="" />
                                <img width="80" height="60" hspace="20" src={pic6} alt="" />
                            </div>

                            <div style={{ display: 'flex', justifyItems: 'center', justifyContent: 'space-between' }}>
                                <img width="80" height="50" hspace="20" src={pic7} alt="" />
                                <img width="100" height="50" hspace="20" src={pic11} alt="" />
                            </div>
                            <div style={{ display: 'flex', justifyItems: 'center', justifyContent: 'space-between' }}>
                                <img  width="80" height="50" hspace="20" src={pic8} alt="" />
                                <img  width="80" height="50" hspace="20" src={pic9} alt="" />
                            </div>
                            <div className="d-flex align-items-center">
                                <img width="145" height="45" src={pic10} alt="" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </section>
        </div>
    )
}

export default Methods;