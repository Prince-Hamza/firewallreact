import React, { useContext } from 'react';
import { MainDataObject } from "./DetailObject";
import { GlobalContext } from "../../Context/Context";

const Detail = () => {
    const { faqDisplay } = useContext(GlobalContext);
    return (
        <div className="py-4">
            <section className="text-center faq-parent bygga-parent">
                <span className="back-border pb-3 bygga-text-heading fs-4 fw-bold text-capitalize" style={{fontFamily:'Poppins', fontSize:'12px', color:'#575757'}}>
                    {MainDataObject[faqDisplay].main}
                </span>
            </section>
            <section className="container mt-5 " style={{ textAlign: "justify" }}>
                {
                    MainDataObject[faqDisplay].paragraphArray?.map((item, index) => {
                        return <p style={{fontFamily:'Poppins', color:'#575757'}} key={index}>{item}</p>
                    })
                }
            </section>
            <section className="container mt-5 " style={{ textAlign: "justify" }}>
                {
                    MainDataObject[faqDisplay].checkBoxArray?.map((item, index) => {
                        return <p key={index}> <input checked type="checkbox" style={{ marginRight: ".5rem" }} name="" id="" /><span style={{ color: "red" }}>{item.head}</span> {item.text}</p>
                    })
                }
            </section>
        </div>
    )
}

export default Detail;