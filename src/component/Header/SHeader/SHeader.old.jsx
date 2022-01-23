import React, { useContext, useState, useEffect } from 'react';
import "./SHeader.css";
import { Row, Col } from "react-bootstrap";
import { GlobalContext } from "../../Context/Context";
import Badge from '@material-ui/core/Badge';
import { useHistory } from 'react-router-dom'
import axios from 'axios';
import pic from "../../Home/CarouselGallery/img/mainlogo.png";
import firebase from 'firebase/compat/app'
import "firebase/compat/database"
import { config } from '../../../config'

const SHeader = () => {
    const API = `https://firewallforce.se/wp-json/wc/v3/autocomplete/brandsandcategorynames?words=`;
    const [productName, setNames] = useState([]);
    const { toggleDrawer, cartData, productsBySearch } = useContext(GlobalContext);
    const history = useHistory()
    let total = 0;
    cartData && cartData.forEach(item => {
        total += Number(item.price * item.count)
    })



    useEffect(() => {
        firebase.initializeApp(config)
    })
    

    const searchProducts = async (e) => {
        const { data } = await axios.get(`${API}${e}&limit=10`);

        setNames(data);

    }

    return (
        <div className="d-flex sub-container-SHeader align-items-center">
            <section className="container row-head py-3">
                <Row className="row-s-header">
                    <Col className="col-1-s-header d-flex align-items-center" lg={6}>
                        <i onClick={toggleDrawer('left', true)} className="fa fa-bars text-danger bars-expand fa-lg" aria-hidden="true"></i>
                        <div className="d-flex align-items-center" onClick={() => history.push(`/`)}>
                            <img className="image-logo " src={pic} alt="" />
                            {/* <span className="text-danger h2 mx-2 fw-light">Firewall<span className="text-dark h2 fw-light">Force</span></span> */}
                        </div>
                        <div className="text-danger cart first-cart">
                            <i className="fa fa-shopping-cart mx-1" aria-hidden="true"></i>
                            <span>{total.toFixed(2)} KR</span>
                        </div>
                    </Col>
                    <Col className="col-2-s-header d-flex align-items-center justify-content-between" lg={6}>
                        <div className="search d-flex align-items-center  w-50">
                            <input list="browsers" name="browser" id="browser" onChange={(e) => searchProducts(e.target.value)} className="search-input" type="text" placeholder="  Search..." style={{ color: '#D32229' }} aria-label="Search" />
                            <datalist id="browsers">
                                {
                                    productName?.map((item, index) => {
                                        if (index < 10) return <option key={index} value={item}>{item}</option>
                                    })
                                }
                            </datalist>
                            <i onClick={(e) => {
                                productsBySearch(document.getElementById('browser').value);
                                history.push("/searchitem")
                            }} className=" news fa fa-search text-danger mx-4" aria-hidden="true"></i>
                        </div>
                        <button style={{ backgroundColor: '#D32229' }} className="btn s-btn py-2 px-3">
                            <a className="text-white text-decoration-none" href="https://firewallforce.se/begar-offert-it-natverksprodukter/"
                                target="_blank" style={{ fontFamily: 'sans-serif', fontSize: '12px' }}>Begar Offert
                            </a>
                        </button>
                        <div className="text-danger cart second-cart" onClick={() => history.push(`/cart`)}>
                            <Badge badgeContent={cartData?.length} color="secondary">
                                <i className="fa fa-shopping-cart mx-1" aria-hidden="true"></i>
                            </Badge>
                            <span className="ms-0 fw-bold" style={{ fontFamily: 'Poppins', fontSize: '12px' }}>{total.toFixed(2)}KR</span>
                        </div>
                    </Col>
                </Row>
            </section>
        </div>
    )
}

export default SHeader;

var CategoriesList = [
    { name: "Server Storage", subcategories: [{ name: "Servers", catId: "696" }, { name: "Storage Accessory", catId: "704" }, { name: "Server Accessory", catId: "696" }, { name: "Blade Servers", catId: "710" }] },
    { name: "Network Equipment", subcategories: [{ name: "Access Point", catId: "621" }, { name: "Firewalls", catId: "473" }, { name: "Gateways", catId: "611" }, { name: "Load Balancer", catId: "666" }, { name: "Network Accessory", catId: "475" }, { name: "Network Security", catId: "498" }, { name: "Network Switch", catId: "622" }, { name: "Misc Network Equipment", catId: "634" }, { name: "PoE Injector", catId: "500" }, { name: "PoE Splitter", catId: "501" }, { name: "Router", catId: "623" }] },
    { name: "Unified Communication", subcategories: [{ name: "Analog Phone", catId: "700" }, { name: "Audio Equipment", catId: "0" }, { name: "ISDN Comfort Phone", catId: "0" }, { name: "PBX", catId: "713" }, { name: "PBX Accessory", catId: "711" }, { name: "Phone", catId: "0" }, { name: "Phone Accessory", catId: "705" }] },
    { name: "Software Service Support License", subcategories: [{ name: "Input Service & Support", catId: "843" }, { name: "Network Security Accessory", catId: "519" }, { name: "Network Service Support", catId: "642" }, { name: "Operating Systems", catId: "692" }, { name: "Output Service & Support", catId: "909" }, { name: "Security License", catId: "474" },] }
]