import React from 'react';
import "./FHeader.css";
import { useHistory } from 'react-router-dom';

const FHeader = () => {
    const history = useHistory()
    return (
        <div className="main-container  text-white" style={{fontFamily:'Poppins'}}>
            <div className='container sub-container d-flex justify-content-center align-items-center'>
                <section className="FH-Div ">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <span className="mx-2">+46 (0) 8517 082 92</span>
                     <span className="mx-2">IT-produkter, företagsnätverk, trådlös, säkerhet, moln, samarbete och IT-tjänster.</span>
                </section>
                <section className="FH-Div d-flex justify-content-end align-items-center text-uppercase">
                    <span className="mx-4 mrgn">create account/Signin</span>
                    <div className="mx-4 mrgn" onClick={()=>history.push(`/faq`)}>faq</div>
                    {/* <span className="mx-4 mrgn">e-procurement tools</span> */}
                    <span className="mx-4 mrgn" onClick={()=>history.push(`/contactus`)}>support</span>
                    <div>
                        <i className="fa fa-flag" aria-hidden="true"></i>
                        <i className="fa fa-caret-down ms-1" aria-hidden="true"></i>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default FHeader;
