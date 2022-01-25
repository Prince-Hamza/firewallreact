import React from 'react';
import "./Footer.css";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {

    return (
        <div id="footer-container" className="footer-container py-4">
            <div className="container py-2">
                <Row>
                    <Col className="px-3" lg={4} md={6} sm={12} >
                        <section className="d-flex align-items-center">
                            {/* <img style={{ width: "70%" }} src="https://firewallforce.se/wp-content/uploads/2020/07/footer-logo.png" alt="" /> */}
                        </section>
                        <section className="py-3">
                            <span className="text-muted font-size">
                                B2B/B2C Mervärde återförsäljare för IT-nätverksprodukter och din
                                teknologipartner inom design och byggnad avancerade nätverksservice
                                arkitekturer.
                            </span>
                            <div className="py-2">
                                <i className="fa text-white mx-3 fa-instagram" aria-hidden="true"></i>
                                <i className="fa text-white mx-3 fa-twitter" aria-hidden="true"></i>
                                <i className="fa text-white mx-3 fa-facebook" aria-hidden="true"></i>
                            </div>
                            <span className="text-white font-size">
                                Copyright &copy; 2021 All Right Reserved
                            </span>
                            <br />
                            <br />
                            <br />
                            <span className="text-white font-size">
                                Organization num &copy; 559296-9330
                            </span>

                        </section>
                    </Col>
                    <Col className="footer-2nd-col" lg={2} md={3} sm={6}>
                        <section className="mt-4">
                            <span style={{ borderBottom: "2px solid red" }} className="text-white pb-2 font-size h2 fw-light">SNABBLÄNKAR</span>
                            <div className="fw-light py-3 footer-padding-comp font-size text-white d-flex flex-column">
                                <Link className="text-muted my-1" style={{ textDecorationLine: "none" }} href="javascript:void(0)" to="/aboutus"><span className="text-muted my-1">Om Oss</span></Link>
                                <Link className="text-muted my-1" style={{ textDecorationLine: "none" }} href="javascript:void(0)" to="/"><span className="text-muted my-1">Köp Nu</span></Link>
                                <Link className="text-muted my-1" style={{ textDecorationLine: "none" }} href="javascript:void(0)" to="/vara-losningar"><span className="text-muted my-1">Våra Tjänster</span></Link>
                                <Link className="text-muted my-1" style={{ textDecorationLine: "none" }} href="javascript:void(0)" to="/vara-losningar"><span className="text-muted my-1">Våra Lösningar</span></Link>
                                <Link className="text-muted my-1" style={{ textDecorationLine: "none" }} href="javascript:void(0)" to="/varumarken"><span className="text-muted my-1">Våra Märken</span></Link>
                                <Link className="text-muted my-1" style={{ textDecorationLine: "none" }} href="javascript:void(0)" to="/resurser"><span className="text-muted my-1">Våra Marken</span></Link>
                            </div>
                        </section>
                    </Col>
                    <Col className="footer-2nd-col" lg={2} md={3} sm={6}>
                        <section className="mt-4">
                            <span style={{ borderBottom: "2px solid red" }} className="text-white pb-2 font-size h2 fw-light">RESURSER</span>
                            <div className="fw-light footer-padding-comp py-3 font-size text-white d-flex flex-column">
                                <span onClick={() => { window.location.replace('/resurser?id=1') }} className="text-muted my-1">
                                    Tekniskt Bibliotek
                                </span>
                                <span className="text-muted my-1" onClick={() => { window.location.replace('/resurser?id=2') }}>
                                    Begär Offert
                                </span>
                                <span className="text-muted my-1" onClick={() => { window.location.replace('/resurser?id=3') }}>
                                    Mitt Konto
                                </span>
                                <span className="text-muted my-1" onClick={() => { window.location.replace('/resurser?id=4') }}>
                                    Vanliga frågor
                                </span>
                                <span className="text-muted my-1" onClick={() => { window.location.replace('/resurser?id=5') }}>
                                    Allmänna Villkor
                                </span>
                                <span className="text-muted my-1" onClick={() => { window.location.replace('/resurser?id=6') }}>
                                    Integritetspolicy
                                </span>
                                <span className="text-muted my-1" onClick={() => { window.location.replace('/resurser?id=7') }}>
                                    Juridisk Varning
                                </span>
                            </div>
                        </section>
                    </Col>
                    <Col className="footer-2nd-col" lg={2} md={3} sm={6}>
                        <section className="mt-4">
                            <span style={{ borderBottom: "2px solid red" }} className="text-white pb-2 font-size h2 fw-light">Kundsupport</span>
                            <div className="fw-light footer-padding-comp py-3 font-size text-white d-flex flex-column">
                                <span className="text-muted my-1">Ny Kundguide</span>
                                <span className="text-muted my-1">Beställningsguide</span>
                                <span className="text-muted my-1">Frakt & Leverans</span>
                                <span className="text-muted my-1">Support efter försäljning</span>
                                <span className="text-muted my-1">Garanti och reklamation</span>
                                <span className="text-muted my-1">Returer och återbetalningar</span>
                                <span className="text-muted my-1">Betalningsinformation</span>
                            </div>
                        </section>
                    </Col>
                    <Col className="footer-2nd-col" lg={2} md={3} sm={6}>
                        <section className="mt-4">
                            <span style={{ borderBottom: "2px solid red" }} className="text-white pb-2 font-size h2 fw-light">Kundsupport</span>
                            <div className="fw-light footer-padding-comp py-3 font-size text-white d-flex flex-column">
                                <span className="text-muted my-1"><i className="fa fa-map-marker" style={{ marginRight: "5px" }} aria-hidden="true"></i> Svetsarvägen 15, 2tr, 17141 Solna Business Park, Stockholm Sweden</span>
                                <span className="text-muted my-3"><i className="fa fa-mobile" style={{ marginRight: "5px" }} aria-hidden="true"></i> +46 (0) 8517 082 92</span>
                                <span className="text-muted mt-3"><i className="fa fa-envelope-o" style={{ marginRight: "5px" }} aria-hidden="true"></i> sales@firewallforce.se</span>
                                <span className="text-muted my-1" style={{ marginLeft: "1.5rem" }}>info@firewallforce.se</span>
                            </div>
                        </section>
                    </Col>
                </Row>

            </div>
        </div>
    )
}

export default Footer;