import React from 'react';
import "./style.css";
import ModalMapItems from "./ModalMapItems";
import ModalComp from "../../Eqipments/RightSide/Modals";
import SmallSlider from './SmallSlider';

const Modals = () => {
    const array1 = [1, 2, 3, 4];
    const array2 = [1, 2, 3, 4];

    return (
        <div className="py-4 px-2" style={{ backgroundColor: "#f7f7f7" }}>
            <section className="grid-products">
                {
                    array1.map((item, index) => {
                        return <ModalMapItems key={index} />
                    })
                }
            </section>

            <section className="detail-section">
                <div className="styleddiv"></div>

                <section className="mt-4">
                    <ModalComp />
                </section>

                <div className="bg-danger btn-like py-1 mx-2 text-center text-white">
                    <span>Top Selling in this category</span>
                </div>

                <section className="mx-2">
                    <SmallSlider />
                </section>
            </section>

            <section className="grid-products">
                {
                    array2.map((item, index) => {
                        return <ModalMapItems key={index} />
                    })
                }
            </section>
        </div>
    )
}

export default Modals;