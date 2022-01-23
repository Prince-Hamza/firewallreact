import React from 'react';
import "./style.css";
import { Row, Col, Tab, ListGroup } from "react-bootstrap";
import TableDes from './TableDes';

const Tables = () => {
    const data = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio earum, voluptas necessitatibus dignissimos, vitae minus, nesciunt eos molestiae alias aliquam officiis ab quidem? Atque enim dolor optio, ut provident reiciendis!'
    return (
        <div className="container mb-5" style={{border:'10px solid grey'}}> 
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                <Row>
                <Col lg={7}>
                        <Tab.Content >
                            <Tab.Pane eventKey="#link1">
                                <TableDes heading="Natverksinfrasturktur" detail={data}  />
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link2">
                                <TableDes heading="Lokal Sakerhet" detail={data} />
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link3">
                                <TableDes heading="Tradlost & Rorlighet" detail={data} />
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link4">
                                <TableDes heading="Data Center" detail={data} />
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link5">
                                <TableDes heading="SD-WAN" detail={data} />
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link6">
                                <TableDes heading="SMB-losningar" detail={data} />
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link7">
                                <TableDes heading="Alt Volp" detail={data} />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>

                    <Col lg={5}>
                        <ListGroup className="mt-5 pb-2">
                            <ListGroup.Item className="d-flex align-items-center" action href="#link1">
                               
                                <span className="mx-3">Natverksinfrasturktur</span>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex align-items-center" action href="#link2">
                              
                                <span className="mx-3">Lokal Sakerhet Natverksinfrasturktur Nat nesxxstra</span>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex align-items-center" action href="#link3">
                                
                                <span className="mx-3">Tradlost necessitatibus Rorlighet</span>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex align-items-center" action href="#link4">
                             
                                <span className="mx-3">Data Center</span>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex align-items-center" action href="#link5">
                               
                                <span className="mx-3">SD-WAN</span>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex align-items-center" action href="#link6">
                                
                                <span className="mx-3">SMB-Losningar</span>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex align-items-center" action href="#link7">
                               
                                <span className="mx-3">Alt Volp</span>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                   
                </Row>
            </Tab.Container>
        </div>
    )
}

export default Tables;
