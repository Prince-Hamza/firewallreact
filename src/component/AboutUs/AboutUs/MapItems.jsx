import React from 'react';
import { Row, Col } from "react-bootstrap";
import "./style.css";
import img1 from '../img/one.png'
import img2 from '../img/two.png'
import img3 from '../img/three.png'

const MapItems = ({ index, item }) => {
    const imageArray = [img1, img2, img3];
  
    return (
        <div id={index + 1} className={((index + 1) % 2 === 0 ? "d-flex justify-content-end div-resource-item   " : "d-flex justify-content-start div-resource-item")}>

            <Row className={((index + 1) % 2 === 0 ? "row-overlay row-items mt-3 py-3" : "row-overlay flex-row-reverse row-items mt-3 py-3")}>

                <Col>

                    <section className="bg-white text-section px-4 py-3 ">
                        <span className="fw-bold"><h3 style={{ fontFamily:'Poppins', color: '#575757' }}>{item.title}</h3>

                            <span className="text-danger fw-bold">
                            </span>
                            <span className=" fw-light" style={{ fontFamily:'Poppins', color: '#575757', fontSize: '14px' }} >
                             {item.des}
                            </span>
      
                            

                        </span><br />
                    </section>
                </Col>
                <Col className="column-pictire-overlay col-overlay-resource" >
                    <div className={`detail-item${index + 1} d-flex justify-content-center align-items-center`}>
                        <img style={{ width: '100%' }} src={imageArray[index]} alt="" />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default MapItems;