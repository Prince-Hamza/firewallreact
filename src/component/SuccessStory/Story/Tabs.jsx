import React from 'react';
import TabsMenu from "./TabsMenu";
import PopularCategory from "../../Home/PopularCategory/Popularcategory";
import Cards from "../../Home/SliderCards/Cards";
import Request from "../../Architecturer/Architect/Request";

const Tabs = () => {
    return (
        <div>
            <section className="text-center bygga-parent tjanster-parent py-5">
                <span className="back-border bygga-text-heading fs-4 fw-bold " style={{fontFamily: 'Poppins', color:'#575757'}}>Utforska Vara Tjanster</span>
                <div className="mx-auto w-50 mt-2 text-of-heading" style={{fontFamily: 'Poppins',fontSize: '14px', color:'#575757'}}>
                    <p>Våra tjänster inkluderar IT-sourcing, hårdvaru / mjukvaruupphandling, konsulttjänster, byggnad och design samt service och support för ditt nätverk.
                </p>
                </div>
            </section>
            <section className="container">
                <TabsMenu />
                <div className="my-5">
                    <PopularCategory />
                </div>
                {/* <Cards success={'Our Success Stories'} /> */}
                {/* <Request /> */}
            </section>
        </div>
    )
}

export default Tabs;