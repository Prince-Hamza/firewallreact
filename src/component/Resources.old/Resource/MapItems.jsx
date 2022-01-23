import React from 'react';
import { Row, Col } from "react-bootstrap";
import "./style.css";
import queryString from "query-string";

const MapItems = ({ index, item }) => {
    const { id } = queryString.parse(window.location.search);
    if (id) document.getElementById(id).scrollIntoView();
    return (
        <div id={index + 1} className={((index + 1) % 2 === 0 ? "d-flex justify-content-end div-resource-item   " : "d-flex justify-content-start div-resource-item")}>
       
            <Row className={((index + 1) % 2 === 0 ? "row-overlay row-items mt-3 py-3" : "row-overlay flex-row-reverse row-items mt-3 py-3")}>
          
                <Col >
               
                    <section className="bg-white text-section px-4 py-3  ">
                        <span className="text-danger fw-bold"><h3>{item.title}</h3>

                            <span className="text-danger ">{item.one?<input checked type="checkbox" style={{ marginRight: ".5rem" }} name="" id="" />:item.one}
                            </span>
                            <span  style={{ fontSize:'12px', fontFamily:'poppins', color:'gray'}} >  {item.des}</span>
                            <br />    <br />
                            <span className="text-danger ">{item.two?<input checked type="checkbox" style={{ marginRight: ".5rem" }} name="" id="" />:item.two}

                                <span  style={{ fontSize:'12px', fontFamily:'poppins', color:'gray'}}  >
                                    {item.Steg2}
                                </span>
                                <br />    <br />
                            </span>
                            <span className="text-danger ">{item.three?<input checked type="checkbox" style={{ marginRight: ".5rem" }} name="" id="" />:item.three}

                                <span style={{ fontSize:'12px', fontFamily:'poppins', color:'gray'}}  >
                                    {item.Steg3}
                                </span>
                                <br />    <br />
                            </span>
                            <span className="text-danger ">{item.four?<input checked type="checkbox" style={{ marginRight: ".5rem" }} name="" id="" />:item.four}

                                <span  style={{ fontSize:'12px', fontFamily:'poppins', color:'gray'}}  >
                                    {item.Steg4}

                                </span>

                            </span>

                        </span><br />
                    </section>
                </Col>
                <Col className="column-pictire-overlay col-overlay-resource" >
                    <div className={`detail-item${index + 1} d-flex justify-content-center align-items-center`}>
                      
                    </div>
                    {/* <svg src></svg> */}
                </Col>
            </Row>
        </div>
    )
}

export default MapItems;