import React, { useContext, useEffect } from "react";
import Carousel from 'react-elastic-carousel';
import { GlobalContext } from "../Context/Context";
import { useHistory } from "react-router-dom"

export default function FeaturedProduct() {
    const { featuredProductsState: { products }, featuredProducts, setProductDetail, setCartData } = useContext(GlobalContext);

    useEffect(() => {
        featuredProducts();
    }, [])

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 3 },
        { width: 768, itemsToShow: 4 },
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
        <div className="container mb-5">
             
            <section className="text-center bygga-parent equip-parent py-5">
                <span  style={{ fontFamily:'Poppins', color:'#575757'}}  className="back-border fw-bold bygga-text-heading fs-4 text-capitalize">
                    featured products
                </span>
            </section>
            <section className="container services-page card-page shadow-sm py-4">
                <Carousel breakPoints={breakPoints} pagination={false}>
                    {
                        products?.map((item, index) => {
                            return <section key={index} className="bg-white mb-3 mx-2 shadow px-2" style={{ borderRadius: "15px" }}>
                                <div onClick={(e) => AddDetailFunc(item)} className="d-flex brand-img-div-map justify-content-center align-items-center pt-3">
                                    <img className="brand-img-map" src={item.images.length > 0 && item.images[0].src} alt="" />
                                </div>

                                <hr style={{ border: "1px solid red" }} />
                                <div className="pb-3">
                                    <section className="d-flex brand-map-name justify-content-between align-items-center">
                                        <span style={{fontSize:'12px', fontFamily:'Poppins', color:'#575757'}} className="text-capitalize ">{item.title}</span>
                                        {/* <i className="fa fa-heart text-muted fa-lg"></i> */}
                                    </section>
                                    <section>
                                        <span className="fw-bold text-danger">{item.price} kR</span>
                                        <span style={{fontFamily:'popins'}}  className="font-size-small mx-2 yellowtxt">Excluding VAT</span>
                                    </section>
                                    <br/>
                                    <button style={{fontFamily:'popins'}}  onClick={() => addToCart(item)} className="btn btn-danger  btn-size">
                                        <i className="fa fa-shopping-cart me-2" aria-hidden="true"></i>
                                        Add to Cart
                                    </button>
                                    <span className="font-size-small py-2 px-2  ">
                                  
                                  <i class="fas fa-cubes fa-1x text-success " > <span className="font-size-small  "> {item.stock_quantity} </span></i>
                                  <span style={{fontSize:'10px'}} className="ms-2 fw-bold yellowtxt">{item.stock_status}</span>
                                  </span>
                                </div>
                            </section>
                        })
                    }
                </Carousel>
            </section>
        </div>
    )
}