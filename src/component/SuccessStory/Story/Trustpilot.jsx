import React from 'react';
import "./style.css";
import { Row, Col } from "react-bootstrap";
import Card from "./TrustCards";
import img from '../img/trust.png'
const Trustpilot = () => {
    return (
        <div className="mb-5">
            <br />
            <br />
            <br />
            <section className="container">
                <div>
                    <section className="d-flex justify-content-center align-items-center ">

                        <img style={{ width: '12%', height: '12%' }} src={img} alt="" />

                    </section>

                </div>
            </section>
            <section style={{width:'60%' }} className="container trust-border py-2 px-3 mt-md-5">
                <Row>
                    <Col lg={3} className="excellent-margin">
                        <section className="text-center mt-3">
                            <h3 style={{ color: '#575757', fontFamily: 'Poppins' }}>Excellent</h3>
                            <div className="d-flex justify-content-center align-items-center">
                                <i className="fa fa-star star mx-1 text-white bg-success fa-lg"></i>
                                <i className="fa fa-star star mx-1 text-white bg-success fa-lg"></i>
                                <i className="fa fa-star star mx-1 text-white bg-success fa-lg"></i>
                                <i className="fa fa-star star mx-1 text-white bg-success fa-lg"></i>
                                <i className="fa fa-star star mx-1 text-white bg-success fa-lg"></i>
                            </div>
                            <div className="mt-2 " style={{ fontSize: "smaller", fontWeight: "500" }}>
                                <span>
                                    <h6 className="card-title heading-trust mt-2 fw-bold text-black" style={{ color: '#575757', fontFamily: 'Poppins' }}>Informationen kommer från företaget</h6>
                                    <br />
                                    B2B/B2C Mervärde återförsäljare för IT-nätverksprodukter och din teknologipartner inom design och byggnad avancerade nätverksservice arkitekturer.
                                </span>
                            </div>
                        </section>
                    </Col>
                    <Col lg={9}>
                        <Card />
                    </Col>
                </Row>
            </section>
        </div>
    )
}



export default Trustpilot;