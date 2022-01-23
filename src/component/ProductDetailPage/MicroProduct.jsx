import React, { useContext, useEffect } from "react";
import Carousel from 'react-elastic-carousel';
import { GlobalContext } from "../Context/Context";
import { useHistory } from "react-router-dom"

export default function MicroProduct() {
    const { featuredProductsState: { products }, featuredProducts, setProductDetail, setCartData } = useContext(GlobalContext);

    useEffect(() => {
        featuredProducts();
    }, [])

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 260, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 5 },
    ]

    const history = useHistory();

    const AddDetailFunc = (item) => {
        setProductDetail(item);
        history.push(`/detailpage?name=${item.title}&feature=1`)
    }

    const addToCart = (item) => {
        let cartItems = JSON.parse(localStorage.getItem('cart'));
        const selectiveItems = { id: item.id, name: item.title, price: item.price, count: 1, image: item.images && item.images };
        if (cartItems === null) {
            let cartArray = [];
            cartArray.push(selectiveItems);
            setCartData(cartArray)
            localStorage.setItem('cart', JSON.stringify(cartArray));
        }
        else if (cartItems) {
            cartItems.push(selectiveItems);
            setCartData(cartItems)
            localStorage.setItem('cart', JSON.stringify(cartItems));
        }
    }


    return (
        <div className="container mb-2">
             
            <section className="text-center bygga-parent equip-parent py-3">
                <span className="back-border bygga-text-heading fs-5 fw-bold text-capitalize">
                    Popular in this category
                </span>
            </section>
            <section className="container services-page card-page shadow-sm py-2">
                <Carousel breakPoints={breakPoints} pagination={false}>
                    {
                        products?.map((item, index) => {
                            return <section key={index} className="bg-white mx-2 shadow px-1 " style={{ borderRadius: "15px" }}>
                                <div onClick={(e) => AddDetailFunc(item)} className="d-flex  brand-img-div-map justify-content-center align-items-center ">
                                    <img className="brand-img-map " src={item.images.length > 0 && item.images[0].src} alt="" />
                                </div>

                                <hr style={{ border: "1px solid red" }} />
                                <div className="pb-3">
                                    <section className="d-flex brand-map-name justify-content-between align-items-center">
                                        <span style={{fontSize:'11px'}} className="fw-bold ">{item.title}</span>
                                        {/* <i className="fa fa-heart text-muted fa-lg"></i> */}
                                    </section>
                                    <section style={{display:'flex', textAlign:'center', justifyContent:'center', paddingBottom:'5px'}}>
                                        <span style={{fontSize:'12px'}} className="fw-bold text-danger">{item.price} kR</span>
                                        <span style={{fontSize:'9px'}} className="font-size-small fw-bold mx-0 yellowtxt"> Excluding VAT</span>
                                    </section>
                                    <button onClick={() => addToCart(item)} className="btn btn-danger btn-sm d-flex m-auto">
                                        <i className="fa fa-shopping-cart me-2" aria-hidden="true"></i>
                                        Add To cart
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