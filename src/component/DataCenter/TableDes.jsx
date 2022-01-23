import React from 'react';
import {Row, Col} from 'react-bootstrap'
const TableDes = ({ heading, detail }) => {
    return (
        <div className="mt-5 ">
            {/* <h3 className="text-muted">{heading}</h3> */}
            <Row>
            <Col lg={10} md={10} className="d-flex justify-content-center align-items-center">
                    <img className="w-75 req-image" src="https://img.pngio.com/computer-networking-png-1-png-image-computer-networking-png-500_280.png" alt="" />
                </Col>
            <p className="text-muted detail-text px-5 d-flex justify-content-center align-items-center">{detail}</p>
            </Row>
            <button class="d-flex mb-3 py-2 p-3 bg-danger text-light m-auto">Learn More!</button>
            
        </div>
    )
}

export default TableDes;
