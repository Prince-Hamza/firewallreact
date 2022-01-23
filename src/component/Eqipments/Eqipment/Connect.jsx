import React from 'react';

const Connect = () => {
    return (
        <div className="connect-container mt-4 text-center">
            <h3 className="py-4 fw-bold text-uppercase">Connect <br /> With Us</h3>
            <div className="text-white d-flex justify-content-evenly align-items-center">
                <i className="fa bg-primary fa-lg fa-facebook-official" aria-hidden="true"></i>
                <i className="fa bg-danger fa-lg fa-instagram" aria-hidden="true"></i>
                <i className="fa bg-info fa-lg fa-twitter-square" aria-hidden="true"></i>
                <i className="fa bg-success fa-lg fa-whatsapp" aria-hidden="true"></i>
            </div>
        </div>
    )
}

export default Connect;