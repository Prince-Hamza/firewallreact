import React from 'react';
import "./style.css";
import img from './CarouselGallery/img/cisco-banner.png'
import img1 from './CarouselGallery/img/partner-banner.png'
const HeroSection = () => {
    return <>
         <div className='architect-main'>
            <section className="container architext-sub-main d-flex flex-column py-5">
                {/* <img alt="" style={{height:'200px'}} src={img}/> */}
            </section>
         
        </div>
        <section className="text-center bygga-parent equip-parent py-5">
                <span style={{fontFamily:'Poppins', color:'#575757'}}  className="back-border bygga-text-heading fs-4 fw-bold text-capitalize">
                    Brand Profile
                </span>
            </section>
        <section className="container architext-sub-main d-flex flex-column py-3" >
                 <img src={img1} alt=""/>
                {/* <span className="back-border bygga-text-heading fs-4 fw-bold text-capitalize">
                    featured products
                </span> */}
            </section>
    </>
}

export default HeroSection;