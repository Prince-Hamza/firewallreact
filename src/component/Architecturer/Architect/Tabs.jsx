import React from 'react';
import "./style.css";
import { Row, Col, Tab, ListGroup } from "react-bootstrap";
import Avatar from '@material-ui/core/Avatar';
import TabDetail from './TabDetail';
import pic1 from './img/icon1.png'
import pic3 from './img/icon3.png'
import pic4 from './img/icon4.png'
import pic5 from './img/icon5.png'
import pic6 from './img/icon6.png'
import pic7 from './img/icon7.png'
const Tabs = ({solution}) => {
    
    const {Headings, Info} =solution
    console.log("solsss", solution)
    console.log("info", Info)
    // const {Solutions}=Info
    // console.log(Solutions)
    //const data = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio earum, voluptas necessitatibus dignissimos, vitae minus, nesciunt eos molestiae alias aliquam officiis ab quidem? Atque enim dolor optio, ut provident reiciendis!'
    return (
        <div className="container mb-5">
            <section className="text-center bygga-parent equip-parent py-5">
                <span style={{fontFamily:'Poppins', color:'#575757'}}  className="back-border bygga-text-heading fs-4 fw-bold text-capitalize">
                Bygga Avancerade Nätverkstjänst Arkitekturer
                </span>
                <div className="mx-auto mt-1 text-of-heading w-50" style={{fontFamily: 'Poppins',fontSize: '14px'}}>
                <p>
                Med rätt teknik på plats kommer du att uppleva färre tekniska avbrott,
                 snabbare prestanda och on-demand-tjänster för växande affärsbehov.
                </p>
            </div>
            </section>
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1" style={{fontFamily:'Poppins'}}>
                <Row>
                    <Col lg={4}>
                        <ListGroup>
                            <ListGroup.Item className="d-flex align-items-center" action href="#link1" >
                                <Avatar className="text-dark"><img src={pic1}/></Avatar>
                                <span className="mx-3" style={{fontFamily:'Poppins'}}>{Headings?.length>0&&Headings[0]}</span>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex align-items-center" action href="#link2">
                            <Avatar className="text-dark"><img src={pic3}/></Avatar>
                                <span className="mx-3" style={{fontFamily:'Poppins'}}>{Headings?.length>0&&Headings[1]}</span>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex align-items-center" action href="#link3">
                            <Avatar className="text-dark"><img src={pic4}/></Avatar>
                                <span className="mx-3" style={{fontFamily:'Poppins'}}>{Headings?.length>0&&Headings[2]}</span>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex align-items-center" action href="#link4">
                            <Avatar className="text-dark"><img src={pic7}/></Avatar>
                                <span className="mx-3" style={{fontFamily:'Poppins'}}>{Headings?.length>0&&Headings[3]}</span>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex align-items-center" action href="#link5">
                            <Avatar className="text-dark"><img src={pic5}/></Avatar>
                                <span className="mx-3" style={{fontFamily:'Poppins'}}>{Headings?.length>0&&Headings[4]}</span>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex align-items-center" action href="#link6">
                            <Avatar className="text-dark"><img src={pic6}/></Avatar>
                                <span className="mx-3" style={{fontFamily:'Poppins'}}>{Headings?.length>0&&Headings[5]}</span>
                            </ListGroup.Item>
                            {/* <ListGroup.Item className="d-flex align-items-center" action href="#link7">
                                <Avatar>A</Avatar>
                                <span className="mx-3">Alt Volp</span>
                            </ListGroup.Item> */}
                        </ListGroup>
                    </Col>
                    <Col lg={8}>
                        <Tab.Content style={{fontFamily:'Poppins'}}>
                            <Tab.Pane eventKey="#link1">
                                <TabDetail  style={{fontFamily:'Poppins', fontSize:'12px'}}  heading="Natverksinfrasturktur" detail={Info?.Solutions[0]?.description} subheadings={Info?.Solutions[0]?.subheadings}  />
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link2">
                                <TabDetail heading="Lokal Sakerhet" detail={Info?.Solutions[1]?.description} subheadings={Info?.Solutions[1]?.subheadings} />
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link3">
                                <TabDetail heading="Tradlost & Rorlighet" detail={Info?.Solutions[2]?.description} subheadings={Info?.Solutions[2]?.subheadings}/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link4">
                                <TabDetail heading="Data Center" detail={Info?.Solutions[3]?.description} subheadings={Info?.Solutions[3]?.subheadings}/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link5">
                                <TabDetail heading="SD-WAN" detail={Info?.Solutions[4]?.description} subheadings={Info?.Solutions[4]?.subheadings}/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link6">
                                <TabDetail heading="SMB-losningar" detail={Info?.Solutions[5]?.description} subheadings={Info?.Solutions[5]?.subheadings}/>
                            </Tab.Pane>
                            {/* <Tab.Pane eventKey="#link7">
                                <TabDetail heading="Alt Volp" detail={data} />
                            </Tab.Pane> */}
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    )
}

export default Tabs;
