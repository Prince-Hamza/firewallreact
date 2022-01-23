import React from 'react';
import "./style.css";
import { Row, Col, Tab } from "react-bootstrap";

const TableSet = () => {
    return (
        <div className="container mt-5  " > 
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                <Row>
                <Col lg={7} >
                    <h2>Data Center</h2>
                    <br/>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis provident aperiam, odit, voluptas vitae delectus, illo architecto quis harum vel nesciunt reprehenderit 
                      sunt cupiditate! Quis et quidem porro excepturi praesentium.
                  
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      sunt cupiditate! Quis et quidem porro excepturi praesentium.
                      </p>
                    </Col>
                    <Col lg={5} className="p-4 float-right">
                        <div class="float-right">
                    <img className="w-100 req-image" src="https://img.pngio.com/computer-networking-png-1-png-image-computer-networking-png-500_280.png" alt="" />
                    </div>
                    </Col>
                  
                   
                </Row>
            </Tab.Container>
        </div>
    )
}

export default TableSet;
