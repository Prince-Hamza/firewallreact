import React from 'react';
import { Row, Col } from "react-bootstrap";
import "./Reviews.css";
import img1 from "../ServicesComp/img/1.png";
import img2 from "../ServicesComp/img/2.png";
import img3 from "../ServicesComp/img/3.png";
import img4 from "../ServicesComp/img/4.png";
import img5 from "../ServicesComp/img/5.png";
import img6 from "../ServicesComp/img/6.png";
import img7 from "../ServicesComp/img/7.png";
import img8 from "../ServicesComp/img/8.png";
import img9 from "../ServicesComp/img/9.png";
// import pic from './img/review.jpg'
import pic1 from './img/trustpilots.png'
import Card from "../../SuccessStory/Story/TrustCards";
const Reviews = () => {
    // const array = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
    const array = [{ pic: img1, name: "Från 50% till upp till 90% rabatt" }, { pic: img2, name: "Lågprisgaranti" }, { pic: img3, name: "Snabb leverans inom 2- 6 dagar" }, { pic: img4, name: "Gratis Frakt" }, { pic: img5, name: "Säkert Beställning" }, { pic: img6, name: "Produktre kommendation" }, { pic: img7, name: "Möjligheter till finansiering" }, { pic: img8, name: "Kanaliserade Produkter" }, { pic: img9, name: "Lager Tillgänglig" },];

    return (
        <div className="my-4">
            <section className="container">
                <Row>
                    <Col className="text-center" sm={12} lg={6} md={6}>
                        <span className=" h4" style={{ borderBottom: "3px solid #dc3545",fontFamily:'Poppins', color:'#575757' }}>
                            Varfor Kopa Fran Oss?
                        </span>
                        <section className="my-4 py-4 shadow-sm" style={{ backgroundColor: "#f7f7f7" }}>
                            <div className="grid-images " >
                                {
                                 array && array.map((item, index) => {
                                    return <div key={index} className="d-flex flex-column align-items-center justify-content-center" >
                                        <img src={item.pic} alt="" />
                                        <div >
                                        <span style={{fontFamily:'Poppins', color:'#575757', fontSize:'14px'}} className="name">{item.name}</span>
                                        </div>
                                    </div>
                                })
                            }
                            </div>
                        </section>
                    </Col>
                    <Col className="text-center">
                        <span className=" h4" style={{ borderBottom: "3px solid #dc3545", color:'#575757' }}>
                            Customer Reviews
                        </span>
                        <br />
                        <br />
                        <br />

                        <section className="mt-3">
                            <div>
                            <a href="https://se.trustpilot.com/review/firewallforce.se">
                            <img className="w-50 h-50"  src={pic1} alt="" />
                            </a>
                                
                            </div>
                            <br />
                            
                   
                            <div className="img-cont-review ">
                             <Card/>
                            </div>
                        </section>
                    </Col>
                </Row>
            </section>
        </div>
    )
}

export default Reviews;