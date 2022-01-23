import React, { useContext } from "react";
import Carousel from 'react-elastic-carousel';
import { useHistory } from "react-router-dom";
import { GlobalContext } from "../Context/Context";
// import queryString from "query-string";

export default function App({ productCategory }) {
    const history = useHistory();
    const { setProductDetail, setCartData } = useContext(GlobalContext);
    // const { feature } = queryString.parse(window.location.search);
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 300, itemsToShow: 1 },
        { width: 400, itemsToShow: 2 },
        { width: 550, itemsToShow: 5 },
        { width: 768, itemsToShow: 5 },
        { width: 1200, itemsToShow: 5 },
    ]
    const AddDetailFunc = (item) => {
        setProductDetail(item);
        history.push(`/detailpage?name=${item.name}`)
    }

    const addToCart = (item) => {
        let cartItems = JSON.parse(localStorage.getItem('cart'));
        const selectiveItems = { id: item.id, name: item.name, price: item.price, count: 1, image: item.images && item.images };
        if (cartItems === null) {
            let cartArray = [];
            cartArray.push(selectiveItems);
            setCartData(cartArray);
            localStorage.setItem('cart', JSON.stringify(cartArray));
        }
        else if (cartItems) {
            cartItems.push(selectiveItems);
            setCartData(cartItems);
            localStorage.setItem('cart', JSON.stringify(cartItems));
        }
    }


    return (
        <div className="container mb-5">
            <section className="text-center bygga-parent equip-parent pt-5 pb-4">
                <span className="bygga-text-heading fs-4 fw-bold text-capitalize">
                    related products
                    </span>
            </section>
            <section className="container services-page card-page  py-2">
                <Carousel breakPoints={breakPoints} pagination={false}>
                    {
                        productCategory?.map((item, index) => {
                            return <section key={index} className="bg-white mb-1 mx-1  px-1 py-1 " style={{ borderRadius: "20px" }}>
                                <div onClick={(e) => AddDetailFunc(item)} className="d-flex brand-img-div-map justify-content-center align-items-center pt-1">
                                    <img className="brand-img-map" src={item.images.length > 0 && item.images[0].src} alt="" />
                                </div>

                                <hr style={{ border: "1px solid red" }} />
                                <div className=" pb-3 align-items-center">
                                    <section className="d-flex brand-map-name justify-content-between align-items-center">
                                        <span style={{textAlign:'center', fontSize:'12px', color:'#575757', fontFamily:'Poppins'}} className="text-capitalize align-item-center text-align-center">{item.name}</span>
                                        {/* <i className="fa fa-heart text-muted fa-lg"></i> */}
                                    </section>
                                    <section style={{textAlign:'center'}}>
                                        <span className="fw-bold text-danger">{item.price} kR</span>
                                        <span style={{fontSize:'8px'}} className="font-size-small mx-2 fw-bold yellowtxt">Excluding VAT</span>
                                    </section>
                                    <button style={{fontSize:'10px', display:'flex'}} onClick={() => addToCart(item)} className="btn btn-danger mt-1 btn-size m-auto">
                                        <i className="fa fa-shopping-cart me-1" aria-hidden="true"></i>
                                        Add to Cart
                                </button>
                                </div>
                            </section>
                        })
                    }
                </Carousel>
            </section>
        </div>
    )
}