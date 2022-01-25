import React, { useContext, useState, useEffect } from 'react';
import { Row, Col } from "react-bootstrap";
import Pagination from "./Pagination";
import ReactHtmlParser from 'react-html-parser';
import { useHistory } from "react-router-dom";
import { GlobalContext } from '../../Context/Context'
import alternate from '../../../assets/products.png'
import axios from 'axios'
import './stealth.css'


// useEffect(()=>{

// })


const setCssVar = (varname, value) => {
    document.documentElement.style
        .setProperty(`--${varname}`, value);
}

const getCssVar = (varname) => {
    return getComputedStyle(document.documentElement)
        .getPropertyValue(`--${varname}`);
}


const maskImage = (image) => {
    let random = Math.random().toString().split('.').join('_')
    setCssVar(`pic_${random}`, `url('${image}')`)
    return `var(--pic_${random})`
}



const ECommerce = ({ categoryInfo, productCategory, setProductDetail, getAllProductCategories, catID }) => {

    const { setCartData } = useContext(GlobalContext);
    const [toggle, setToggle] = useState(0)
    const history = useHistory();

    const AddDetailFunc = (item) => {
        setProductDetail(item);
        history.push(`/product/${item.name.split(' ').join('-')}`, item)
    }

    const AddToCart = (item) => {
        let cartItems = JSON.parse(localStorage.getItem('cart'));
        const selectiveItems = { id: item.id, name: item.name, price: item.price, count: 1, image: item.images && item.images };
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
    return <>
        <section className="d-flex flex-row-reverse px-2 my-2 shadow ">

            <div className={toggle === 0 ? "text-danger " : "-dark"} >
                <i onClick={() => { setToggle(0) }} class="fas fa-th fa-2x m-2 "></i>
            </div>
            <div className={toggle === 1 ? "text-danger " : "-dark"} >
                <i onClick={() => { setToggle(1) }} class="fas  fa-grip-horizontal fa-2x m-2 "></i>
            </div>
        </section>
        <div className="py-4 px-2 my-4 shadow-sm" style={{ backgroundColor: "#f7f7f7" }}>

            <section className="grid-comm">
                {
                    productCategory && productCategory?.map((item, index) => {
                        return <div
                            key={Math.random()}
                            className={toggle === 0 ? " d-sm-block " : "d-none"}
                            onClick={() => { AddDetailFunc(item) }}
                        >
                            <section className="bg-white mb-3 mx-2 shadow px-3" style={{ borderRadius: "15px" }}>
                                <div
                                    className="d-flex brand-img-div-map justify-content-center align-items-center pt-3"
                                    style={{ ...Styles.stealthImage, backgroundImage: maskImage(item.primaryImage) }}
                                >
                                </div>
                                <hr style={{ border: "1px solid red" }} />
                                <div className="pb-3">
                                    <section className="d-flex brand-map-name justify-content-between align-items-center">
                                        <span className="text-capitalize font-size-small ">{item.name}</span>
                                        <i className="fa fa-heart text-muted fa-lg"></i>
                                    </section>
                                    <section>
                                        <span className="fw-bold text-danger">{item.price} kR</span>
                                        <span className="font-size-small mx-2 yellowtxt">Excluding VAT</span>
                                    </section>
                                    <section className="pt-2 ">
                                        <button className="btn btn-danger btn-size" onClick={() => AddToCart(item)}>
                                            {/* <i className="fa fa-shopping-cart me-2" aria-hidden="true"></i> */}
                                            Add To cart
                                        </button>

                                        <span className="font-size-small py-2 px-2  ">

                                            <i class="fas fa-cubes fa-1x text-success " > <span className="font-size-small  "> {item.stock_quantity} </span></i>
                                            <span style={{ fontSize: '10px' }} className="ms-2 fw-bold yellowtxt">{item.stock_status}</span>
                                        </span>

                                    </section>
                                    {/* stock Quantity {item.stocsrck_quantity} */}
                                </div>
                            </section>
                        </div>
                    })
                }
            </section>
            <section>

                {
                    productCategory && productCategory?.map((item, index) => {
                        return <div className={toggle === 1 ? " d-sm-block mb-4 " : "d-none"} key={index}>
                            <Row className="bg-white py-4 mx-2 shadow-sm" style={{ borderRadius: "15px" }}>
                                <Col onClick={(e) => AddDetailFunc(item)} lg={3} className=" d-flex justify-content-center align-items-center">

                                    <div style={{ ...Styles.stealthImage, width: '200px', height: '200px', backgroundImage: maskImage(item.primaryImage) }}     >

                                    </div>

                                </Col>
                                <Col lg={9} className="">
                                    <section className="d-flex flex-extra justify-content-between">
                                        <div>
                                            <span className="text-capitalize ">{item.name}</span>
                                            <div>
                                                <div style={{ fontFamily: 'poppins' }} className="font-size-small ms-1">
                                                    {ReactHtmlParser(item.short_description)}
                                                </div>
                                            </div>
                                            <section>
                                                <span className="fw-bold text-danger">{item.price} kr</span>
                                                <span className="font-size-small mx-1 yellowtxt">Excluding VAT</span>
                                            </section>
                                        </div>
                                        <div className=" d-flex justify-content-center align-items-center">
                                            <div className="font-size-small ms-txt ms-3">
                                                {ReactHtmlParser(item.short_description.substring(0, 75))}
                                            </div>
                                        </div>
                                    </section>
                                    <section className="mt-1 btn-extra-grid" style={{ fontFamily: 'Poppins' }}>
                                        <button className="btn btn-danger mt-1 font-size-small" onClick={() => AddToCart(item)}>
                                            <i className="fa fa-shopping-cart me-2" aria-hidden="true"></i>
                                            Add To cart
                                        </button>

                                        <input style={{ textAlign: 'center' }} defaultValue={1} className="mx-1  ps-1 input-number" type="number" />


                                        <button className="btn btn-outline-danger font-size-small fw-bold">
                                            <i className="fa fa-bell-o mx-1" aria-hidden="true"></i>
                                            Price/Stock Alert
                                        </button>
                                        <i className="fa fa-heart fa-lg text-muted mx-2"></i>
                                    </section>
                                </Col>
                            </Row>
                        </div>
                    })
                }
            </section>
            {/* <Extra item={productCategory}/> */}
            <Pagination categoryInfo={categoryInfo} catID={catID} getAllProductCategories={getAllProductCategories} />

            {/* 
            <div
                style={{  backgroundSize : 'contain',width: '500px', height: '400px', backgroundImage: maskImage(`https://media.itscope.com/img/p/-CeJBx1BcuA74Anp7kEBVgk9FBPgSR8bbFhbnB3kBTY=/aHR0cDovL2luaXNob3AuY29tL2ltZy9nYWxsZXJ5Lzc3ODY4MjYzXzA1NDk1MzU0ODMuanBn`) }}
                // id="si"
                className="stealthImage">
            </div> */}


        </div>
    </>
}

export default ECommerce;



// data:image/jpeg;base64,

const Styles = ({
    stealthImage: {
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        pointerEvents: 'none'

    }
})