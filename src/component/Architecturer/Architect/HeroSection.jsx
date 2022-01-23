// import React from 'react';
// import "./style.css";

// const HeroSection = () => {
//     return <>
//         <div className='architect-main'>
//             <section className="container architext-sub-main d-flex flex-column py-5">
//                 <span className="text-white hero-sec-text text-uppercase fw-bold fs-4 span-letter-spc">Vara losningar hjalper</span>
//                 <span className="text-white hero-sec-text text-uppercase fw-bold fs-4 span-letter-spc">foretag att forbattra och utveckla</span>
//                 <span className="text-white hero-sec-text text-uppercase fw-bold fs-4 span-letter-spc">sin it-natverksinfrastruktur</span>
//             </section>
//         </div>
//         <section className="text-center bygga-parent py-5">
//             <span className="back-border bygga-text-heading fs-4 fw-bold text-muted">Bygga Avancerade Vatverkstjanst Arkitekturer</span>
//             <div className="mx-auto mt-1 text-of-heading">
//                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//                     Sint sunt quas dignissimos nesciunt perferendis architecto,
//                 </p>
//             </div>
//         </section>
//     </>
// }

// export default HeroSection;



import React from 'react';
import { Row, Col } from "react-bootstrap";
import "./style.css";

const HeroSection = () => {
    return <>
        <div className="mainer ">
            <Row className="container mx-auto row-faq row-resource">
                <Col lg={6} md={7} className="d-flex flex-column justify-content-center" >

                    <div className="justify">
                        <h1 style={{ fontFamily: 'GTWalsheimPro-Medium', color: 'white', textAlign: 'center', justifyContent: 'center', justifyItems: 'center', padding: '70px', lineHeight: '65px', fontStyle: 'bold' }}>
                            Kundsupport och Vanliga frågor
                        </h1>
                    </div>

                </Col>
                <Col lg={6} md={5} className="row-faq d-flex justify-content-center align-items-center">

                </Col>
                
            </Row>

        </div>

    </>
}

export default HeroSection;