import React from 'react';
import Hero from "../Eqipments/Eqipment/Hero";
import Trustpilot from '../SuccessStory/Story/Trustpilot';
import { Row, Col } from 'react-bootstrap';
import Left from './LeftSide/Left';
import Modals from './RightSide/Modals';
import FeaturedProducts from "./FeaturedProducts";

const index = () => {
    return (
        <div>
            <Hero />
            <section className="container">
                <section className="text-center bygga-parent equip-parent py-5">
                    <span className="back-border bygga-text-heading fs-4 fw-bold text-muted text-capitalize">
                        our products
                    </span>
                    <div className="mx-auto mt-1 text-of-heading">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Sint sunt quas dignissimos nesciunt perferendis architecto,
                        </p>
                    </div>
                </section>
                <Row>
                    <Col lg={3} md={4}>
                        <Left />
                    </Col>
                    <Col lg={9} md={8}>
                        <Modals />
                    </Col>
                </Row>
            </section>
            <FeaturedProducts />
            <Trustpilot />
        </div>
    )
}

export default index;