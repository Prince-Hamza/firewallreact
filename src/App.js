import React from 'react';
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainContext from "./component/Context/Context";
import Footer from "./component/Footer/Footer";
import Drawer from "./component/Drawer/Drawer";
import Header from "./component/Header/index";
import Home from "./component/Home/index";
import Blog from "./component/Blog/index";
import Architecturer from "./component/Architecturer/index";
import SuccessStory from "./component/SuccessStory/index";
import FAQ from "./component/FAQ/index";
import Resource from './component/Resources/index';
import Eqipments from './component/Eqipments/index';
import Products from './component/Products/index';
import AboutUs from './component/AboutUs/index';
import ContactUs from './component/ContactUs/index'
import Model from './component/Model/index'
import DataCenter from './component/DataCenter/index'
import Brand from './component/Brand/index'
import ProductDetailPage from './component/ProductDetailPage/index'
import Fixed from './component/FixedComp/Fixed';
import Backdrop from "./component/Backdrop/Backdrop";
import Cart from "./component/Cart/Cart";
import Post from './component/Blog/PostComp/Post';
import SearchItem from './component/SearchItem/SearchItem'
import Begar from './component/Begar/Begar.jsx'
import BankTransfer from './component/Checkout/bankTransfer';
import Checkout from './component/Checkout/Checkout';
import Eshop from './component/Eshop/eshop';
import { useState, useEffect } from 'react'

const App = () => {

    const [showArrows, setShowArrows] = useState('block')

    const switchArrows = () => {
        var visible = showArrows === 'block' ? 'none' : 'block'
        setShowArrows(visible)
    }

    return (
        <MainContext>
            <BrowserRouter>
                <Header switchArrows={switchArrows} />
                <Drawer />
                <Fixed />
                <Backdrop />
                <Switch>
                    <Route exact path="/" render={(props) => <Home showArrows={showArrows} {...props} />} />
                    <Route path="/eshop" component={Eshop} />
                    <Route path="/it-natverk-tech-bibliotek" component={Blog} />
                    <Route path="/blogdetail" component={Post} />
                    <Route path="/vara-losningar" component={Architecturer} />
                    <Route path="/vara-tjanster" component={SuccessStory} />
                    <Route path="/detailpage" component={ProductDetailPage} />
                    <Route path="/faq" component={FAQ} />
                    <Route path="/model" component={Model} />
                    <Route path="/om-oss" component={AboutUs} />
                    <Route path="/kontakta-oss" component={ContactUs} />
                    <Route path="/varumarken" component={Brand} />
                    <Route path="/datacenter" component={DataCenter} />
                    <Route path="/resurser" component={Resource} />
                    <Route exact path="/equipment" render={(props) => <Eqipments showArrows={showArrows} {...props} />} />
                    <Route path="/products" component={Products} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/checkout" component={Checkout} />
                    <Route exact path="/bank-transfer" component={BankTransfer} />
                    <Route exact path="/begar-offert-it-natverksprodukter" component={Begar} />
                </Switch>
                <Footer />
            </BrowserRouter>


        </MainContext>
    )
}

export default App;