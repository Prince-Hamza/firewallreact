import React from 'react';
import { Row, Col } from "react-bootstrap";
import "./style.css";
// import pic from '../img/banner.jpg'
const HeroSection = () => {
    return <>
        <div className="supports">
            <Row className="container mx-auto row-faq row-resource">
                <Col lg={6} md={7} className="d-flex flex-column justify-content-center" >
                   
                <div className="justify">
                        <h1 style={{fontFamily:'GTWalsheimPro-Medium', color:'white', textAlign:'center', justifyContent:'center', justifyItems:'center', padding:'70px', lineHeight:'85px', fontStyle:'bold'}}>
                        Våra Resurser
                        </h1>
                    </div>
                    <br />
                </Col>
                <Col lg={6} md={5} className="row-faq d-flex justify-content-center align-items-center">
                    {/* <img className="w-100 faq-img req-image" src="https://img.pngio.com/computer-networking-png-1-png-image-computer-networking-png-500_280.png" alt="" /> */}
                </Col>
            </Row>
        </div>
        <section className="text-center bygga-parent py-4">
            <span className="back-border bygga-text-heading fs-4 fw-bold text-capitalize" style={{fontFamily:'Poppins', color:'#575757'}}>Resurser</span>
            <div className="mx-auto mt-1 text-of-heading" style={{fontFamily:'Poppins', color:'#575757', fontSize:'14px'}}>
                <p>
                Ett spår som leder dig till din nödvändiga information relaterad till saker,
                 verktyg och policyer som du behöver veta.
                </p>
            </div>
        </section>
    </>
}

export default HeroSection;