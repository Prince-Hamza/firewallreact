import React from 'react';
import { Row, Col } from "react-bootstrap";
import "./style.css";
import pic from '../img/about.png'
const HeroSection = () => {
    return <>
        <div className="support-mains" >
            <Row className="container mx-auto row-faq row-resource " >
                <Col lg={12} md={12} className="d-flex flex-column justify-content-center  " >
                
                {/* <img className="w-100 faq-img req-image" src={pic} alt="" /> */}
                    {/* <h3 className="text-white text-uppercase h1">About Us</h3> */}
                    <div className="justify w-100">
                        <h1 className="text-white" style={{fontFamily:'Poppins', color:'white', padding:'70px', lineHeight:'50px', fontStyle:'bold'}}>
                        En verkligt pålitlig återförsäljare <br/> och systemintegrator
                        </h1>
                    </div>
                    <br />
                </Col>
                {/* <Col lg={5} md={7} className="row-faq d-flex justify-content-center align-items-center">
                    <img className="w-100 faq-img req-image" src={pic} alt="" />
                </Col> */}
            </Row>
        </div>
        <section className="text-center bygga-parent py-4">
            <span style={{color:'#575757'}}className="back-border bygga-text-heading fs-4 fw-bold  text-capitalize">Om Oss</span>
        </section>
    </>
}

export default HeroSection;