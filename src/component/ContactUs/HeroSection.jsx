

import React from 'react';
import { Row, Col } from "react-bootstrap";
import "./style.css";

const HeroSection = () => {
    return <>
        <div className="support-main ">
            <Row className="container mx-auto row-faq row-resource">
                <Col lg={6} md={7} className="d-flex flex-column justify-content-center" >
                  
                    <div className="justify">
                        <h1 style={{fontFamily:'Poppins', color:'white', textAlign:'center', justifyContent:'center', justifyItems:'center', padding:'70px', lineHeight:'65px', fontStyle:'bold'}}>
                        </h1>
                    </div>
                  
                </Col>
                <Col lg={6} md={5} className="row-faq d-flex justify-content-center align-items-center">
                   
                </Col>
            </Row>
        </div>

    </>
}

export default HeroSection;