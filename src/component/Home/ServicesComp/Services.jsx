import React, { useState } from 'react';
import { Row, Col } from "react-bootstrap";
import { useHistory } from 'react-router-dom'
import "./Services.css";
import img1 from "./img/1.png";
import img2 from "./img/2.png";
import img3 from "./img/3.png";
import img4 from "./img/4.png";
import img5 from "./img/5.png";
import img6 from "./img/6.png";
import img7 from "./img/7.png";
import img8 from "./img/8.png";
import img9 from "./img/9.png";

const Services = () => {
    const [toggle, setToggle] = useState(0);
    const [data, setData] = useState();
    const history = useHistory()
    const array = [{ pic: img1, name: "IT-Inkop", des:'Vi är en ledande leverantör av IT- och nätverksprodukter för att stödja ditt SMB, företag, datacenter eller industriella nätverk. Vi tillhandahåller original ny och begagnad nätverksutrustning...' },
     { pic: img2, name: "Finansiering", des:'B2B/B2C Mervärde återförsäljare för IT-nätverksprodukter och din teknologipartner inom design och byggnad avancerade nätverksservice arkitekturer...'},
      { pic: img3, name: "konfigurationjanster", des:'Vi erbjuder prisvärda, säkra och lätthanterliga nätverksarkitekturalternativ för företag med cirka 30-60 eller till och med 90 anställda som behöver använda IP-telefoni, VPN och WIFI-tjänster...' }, 
      { pic: img4, name: "Datacenter", des:'Idag är datacenter i centrum för allt som ett företag gör, och moderna applikationer är mer avancerade och kräver snabb och. Vi hjälper främst till att designa, implementera och outsourca IT-utrustning för företagsdatacenter i Norden...' }, 
      { pic: img5, name: "Tradlost & RorLighet", des:'Som vi ser världen idag har trådlöst blivit den primära anslutningsmetoden. Alla förväntar sig en bra och snabb trådlös anslutning. Oavsett om du behöver ett WLAN, P2P eller P2MP för utomhusanslutning...' }, 
      { pic: img6, name: "Natverkinfrastruktur", des:'Oavsett om det är LAN, WAN eller Wireless, vi har ditt nätverk täckt i våra tjänster.  Från utvärdering till design och konfiguration för att stödja befintlig infrastruktur, våra ingenjörer levererar specialistråd och expertis när...' },
       { pic: img7, name: "SD-WAN", des:'SD-WAN ger användarna möjlighet att hantera anslutningar över sina WAN från en enda instrumentpanel. Men det låter dem också att ansluta sig till molnplattformar med högre hastighet, tillförlitlighet och effektivitet...' },
        { pic: img8, name: "SMB-losningar", des:'Vi erbjuder prisvärda, säkra och lätthanterliga nätverksarkitekturalternativ för företag med cirka 30-60 eller till och med 90 anställda som behöver använda IP-telefoni, VPN och WIFI-tjänster...' },
         { pic: img9, name: "Natverkssakerhet", des:'Ett nätverk utan säkerhet är en öppen inbjudan till cyberhot och många andra sårbarheter. Firewall Force bildades ursprungligen med idén och syftar till att tillhandahålla datasäkerhet till SMB och företagsnätverk... ' },];
   
    return (
        <div>
            <section className="container text-center mt-4">
                <span className=" h4" style={{ borderBottom: "3px solid #dc3545",fontFamily:'Poppins', color:'#575757' }}>Our Services</span>
                <div className="mx-auto my-2 service-text" style={{ width: "28rem",fontFamily:'Poppins', color:'#575757' }} >
                    <span className="text-center">
                    Från inköp av hårdvara och programvara till teknisk rådgivning, design och implementering.
                    </span>
                </div>
            </section>
            <section className="container">
                <div className="services-page shadow-sm rounded">
                    <Row className="row-overlay">
                        <Col className="py-4">
                            <div className="grid-images">
                                {
                                    array && array.map((item, index) => {
                                        return <div key={index} style={{ fontFamily:'Poppins', color:'#575757', fontSize:'14px' }} className="d-flex flex-column align-items-center justify-content-center" >
                                            <img src={item.pic} alt=""  onClick={()=>{
                                                setToggle(index); 
                                                setData(item)
                                                }}/>
                                            <div >
                                            <span  className={toggle === index ? "text-danger " : "#575757"}>{item.name}</span>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                        </Col>
                        {console.log("test data from toggle::==>", data)}
                        <Col className="py-3 mx-3 column-pictire-overlay" >
                            <div className="detail-item d-flex justify-content-center align-items-center">
                                <div className="overlay d-flex align-items-center">
                                    <div className="mx-3">
                                        <h6 className="mb-4">{array[toggle].name}</h6>
                                        <span>{array[toggle].des}</span>
                                        <div className="py-4 text-center">
                                            <button className="btn btn-danger text-capitalize" onClick={() => history.push(`/services`)}>Learn More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </div>
    )
}

export default Services;