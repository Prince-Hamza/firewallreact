import React, { useState } from 'react';
import { Row, Col } from "react-bootstrap";
// import img1 from "../ServicesComp/img/1.png";
// import img2 from "../ServicesComp/img/2.png";
// import img3 from "../ServicesComp/img/3.png";
// import img4 from "../ServicesComp/img/4.png";
// import img5 from "../ServicesComp/img/5.png";
// import img6 from "../ServicesComp/img/6.png";
// import img7 from "../ServicesComp/img/7.png";
// import img8 from "../ServicesComp/img/8.png";
// import img9 from "../ServicesComp/img/9.png";
import pic from './img/ixc.png'
import "./Natvark.css"
const Natvark = () => {
    const [data, setData] = useState([0])
    const [active, setActive] = useState(0)
    const array = [{ name: 'Vi kommer att bedöma det', des: 'Vi utför inledande utvärderingar och granskningar i ditt nätverk, leder strategier och designar skräddarsydda lösningar för framtida skalbarhet.' },
    { name: 'Vi kommer att designa det', des: 'Tillsammans med dig kommer vi att utveckla strategin och den arkitektoniska utformningen av ditt nätverk och system... ' },
    {
        name: 'Vi kommer att sälja det',
        des: 'Som återförsäljare erbjuder vi nästa generations nätverksenheter som routrar, switchar, brandväggar åtkomstpunkter och relevanta produkter i olika märken i vår butik med otroliga rabatter, så att du kan..'
    },
    {
        name: 'Vi kommer att distribuera det',
        des: 'Vi säkerställer en smidig implementering av alla delar i nätverket skapad av våra certifierade ingenjörer enligt arbetsomfånget. Tjänster kan tillhandahållas på distans eller på plats enligt kundernas efterfrågan.'
    }
    ];

    console.log("datata=====> natvark", array[0].des)

    return (
        <div>
            <section className="container text-center mt-4">
                <span className="h4 " style={{ borderBottom: "3px solid #dc3545",fontFamily:'Poppins', color:'#575757' }}>
                    Fran Komplexitet Till Klarhet,
                </span>
                <br />
                <span className=" position-relative h4 my-2" style={{ borderBottom: "3px solid #dc3545", top: "5px",fontFamily:'Poppins', color:'#575757' }}>
                    Bygger Vi Natvark
                </span>
                <div className="mx-auto my-3 service-text" style={{ width: "27rem", fontFamily:'Poppins', color:'#575757' }} >
                    <span className="text-center">
                        Vi förstår att du behöver ditt nätverk att vara sömlöst, pålitligt,
                        säkert och skalbart för framtida framsteg.
                    </span>
                </div>
            </section>
            <section className="container">
                <div className="services-page shadow-sm rounded">
                    <Row>
                        <Col className="py-3 mx-3 column-pictire-overlay" sm={12} lg={6} md={6} style={{fontFamily:'Poppins', color:'#575757'}}>
                            <div className="detail-item d-flex justify-content-center align-items-center">
                                <div className="overlay d-flex align-items-center">
                                    <div className="mx-5">
                                        <h6 className="mb-4">{!data.name ? array[0].name : data.name}</h6>
                                        <span >{!data.des ? array[0].des : data.des}</span>

                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col className="  d-flex flex-column align-items-center justify-content-center">
                            <div style={{ display: 'flex', width: '96%', alignItems: 'center', justifyContent: 'space-between', paddingTop: '10px' }}>
                                <h6 className={active === 0 ? "text-danger " : "#575757"} style={{ width: '30%', display: 'flex', textAlign: 'center',fontFamily:'Poppins', color:'#575757' }} onClick={() => {
                                    setData(array[0]); setActive(0)
                                }} >Vi kommer att bedöma det</h6>
                                <h6 className={active === 1 ? "text-danger " : "#575757"} style={{ width: '30%', display: 'flex', textAlign: 'center',fontFamily:'Poppins', color:'#575757' }} onClick={() => {
                                    setData(array[1]); setActive(1)
                                }}>Vi kommer att designa det</h6>
                            </div>

                            <div class="text-center">
                                <img src={pic} class="rounded" alt="..." style={{ width: '70%', height: 'auto', }} />
                            </div>
                            <div style={{ display: 'flex', width: '96%', alignItems: 'center', justifyContent: 'space-between', }}>
                                <h6 className={active === 2 ? "text-danger " : "#575757"} style={{ width: '30%', display: 'flex', textAlign: 'center',fontFamily:'Poppins', color:'#575757' }} onClick={() => {
                                    setData(array[2]); setActive(2)
                                }}>Vi kommer att sälja det</h6>
                                <h6 className={active === 3 ? "text-danger " : "#575757"} style={{ width: '30%', display: 'flex', textAlign: 'center',fontFamily:'Poppins', color:'#575757' }} onClick={() => {
                                    setData(array[3]); setActive(3)
                                }}>Vi kommer att distribuera det</h6>
                            </div>

                            {/* <img  style={{ width: '60%', height: '65%', margin: 'auto', border: '1px solid green ' }} src={pic} /> */}


                            {/* <h5 className=" d-flex justify-space-between" style={{marginRight:'5%', fontSize:'12px', marginTop:'7%'}}>Hello world my sweet</h5> */}
                        </Col>
                    </Row>
                </div>
            </section>
        </div>
    )
}

export default Natvark;