import React from 'react';
import { Row, Col } from "react-bootstrap";
import pic3 from "../../Home/CarouselGallery/img/g3.jpg";
import "./style.css";

const Hero = () => {
    return (
        <div>
            <section className="container">
                <Row className="mt-2">
                    <Col lg={5} md={5} className="bg-dark py-3 px-5 col-hero-equip col-height bottom txt-hero-cont">
                        <div className="text-white font-size-small justify" style={{fontFamily: 'Poppins',fontSize: '14px'}}>
                            <span>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Assumenda sint iste cumque corrupti, itaque earum nobis inventore.
                                Magni.
                            </span>
                        </div>
                        <div className="d-flex justify-content-end align-items-center ">
                            <img style={{ width: "5%" }} src="https://firewallforce.net/wp-content/uploads/2020/06/fw-icon-300x300.png" alt="" />
                            <span className="text-white mt-2 h5 mx-2 fw-light">Firewall<span className="text-muted h5 fw-light">Force</span></span>
                        </div>
                    </Col>
                    <Col className="col-left col-height first-img-hero">
                        <div className="img-equip">
                            <img className="w-100 h-100" src={pic3} alt="" />
                        </div>
                    </Col>
                </Row>

                <Row className="mt-2">
                    <Col sm={12} lg={6} className="col-height col-right first-img-hero bottom">
                        <div className="detail-item d-flex justify-content-center align-items-center h-100">
                            <div className="overlay d-flex align-items-center">
                                <div style={{ width: "20rem" }} className="mx-4 text-center">
                                    {/* <h6 style={{ marginBottom: "0.3rem", letterSpacing: "1px" }} className="text-uppercase">providing you with the best <br /> solutions for your business</h6> */}
                                    {/* <p style={{ marginBottom: "0px" }} className="font-size-small" style={{fontFamily: 'Poppins',fontSize: '14px'}}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </p> */}
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} lg={6} className="col-height col-left first-img-hero">
                        <div className="img-equip d-flex justify-content-end align-items-center">
                            <section className="d-flex flex-column mx-3 text-white justify-content-end align-items-end">
                                <span className="text-uppercase">top service</span>
                                <span className="text-uppercase">provided since 2005</span>
                                <button className="btn btn-danger rounded-0 font-size-small">Learn More</button>
                            </section>
                        </div>
                    </Col>
                </Row>
            </section>
        </div>
    )
}

export default Hero;