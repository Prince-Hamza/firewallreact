import React from 'react';
import "./style.css";

const Discover = () => {
    return (
        <div className="discover-div text-white">
            <section className="d-flex justify-content-around">
                <div className="discover-parent d-flex justify-content-center align-items-center">
                    <h1 className="discover">Discover.</h1>
                </div>
                <div className="mr-3">
                    <p className="mt-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        At ab aperiam numquam atque At ab aperiam numquam atque
                    </p>
                    <button className="font-size-small btn btn-info text-white">Learn More</button>
                </div>
            </section>
            <div className="overlay-container text-center">
                <p className="text-capitalize" style={{ marginBottom: "0px" }}>
                    serving with <br />
                    quality <br />
                    since 2005
                </p>
                <div className="d-flex justify-content-center align-items-center ">
                    <img style={{ width: "10%" }} src="https://firewallforce.net/wp-content/uploads/2020/06/fw-icon-300x300.png" alt="" />
                    <span className="text-white mt-2 h5 mx-2 fw-light">Firewall<span className="text-muted h5 fw-light">Force</span></span>
                </div>
            </div>
        </div>
    )
}

export default Discover;