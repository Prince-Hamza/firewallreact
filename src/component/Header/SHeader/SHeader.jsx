import React, { useContext, useState, Component } from 'react';
import "./SHeader.css";
import { Row, Col } from "react-bootstrap";
// import { GlobalContext } from "../../Context/Context";
import Badge from '@material-ui/core/Badge';
import { useHistory, useLocation } from 'react-router-dom'
// import axios from 'axios';
import pic from "../../../assets/fl.PNG";
// import { Firebase } from '../../../firebase/firebase'
import { useEffect } from 'react';
import SearchBar from '../Searchbar/SearchBar'

// const SHeader = () => {
//     // const API = `https://firewallforce.se/wp-json/wc/v3/autocomplete/brandsandcategorynames?words=`;
//     // const [productName, setNames] = useState([]);
//     // const { toggleDrawer, cartData, productsBySearch } = useContext(GlobalContext);

//     const [cartData, setCartData] = useState([])
//     const [productsBySearch, setProductsBySearch] = useState([])
//     const [price, setPrice] = useState(null)


//     // const [productList, setProductList] = useState([])
//     const history = useHistory()
//     let total = 0;
//     cartData && cartData.forEach(item => {
//         total += Number(item.price * item.count)
//     })



//     useEffect(() => {

//         // var firebase = new Firebase()
//         // var productsArray = await firebase.getAutoCompleteData()
//         // alert(productsArray)
//         // setProductList(productsArray)
//         var cartInfo
//         setInterval(() => {
//             cartInfo = JSON.parse(localStorage.getItem('cart'))
//             alert(typeof cartInfo)
//             alert(cartInfo)
//             if (cartInfo) {
//                 let myPrice = 0.00
//                 cartInfo.forEach((item) => {
//                     myPrice += Number(item.price)
//                 })
//                 alert(myPrice)
//                 setPrice(myPrice)
//                 alert(price)
//             }
//         }, 10000)



//     }, [price])

//     // const searchProducts = async (value) => {
//     //     //  const { data } = await axios.get(`${API}${value}&limit=10`);
//     //     //  setNames(data);
//     //     let filtered = []

//     //     for (let n = 0; n <= productList.length - 1; n++) {
//     //         if (productList[n].title && productList[n].title.includes(value)) {
//     //             filtered.push(productList[n].title)
//     //         }
//     //     }

//     //     alert(filtered)
//     //     setNames(filtered)


//     // }

//     return (
//         <div className="d-flex sub-container-SHeader align-items-center">
//             <section className="container row-head py-3">
//                 <Row className="row-s-header">
//                     <Col className="col-1-s-header d-flex align-items-center" lg={6}>
//                         {/* <i onClick={toggleDrawer('left', true)} className="fa fa-bars text-danger bars-expand fa-lg" aria-hidden="true"></i> */}
//                         <div className="d-flex align-items-center" onClick={() => history.push(`/`)}>
//                             <img className="image-logo " src={pic} alt="" />
//                             {/* <span className="text-danger h2 mx-2 fw-light">Firewall<span className="text-dark h2 fw-light">Force</span></span> */}
//                         </div>
//                         <div className="text-danger cart first-cart">
//                             <i className="fa fa-shopping-cart mx-1" aria-hidden="true"></i>
//                             <span>{price} KR</span>
//                         </div>

//                     </Col>
//                     <Col className="col-2-s-header d-flex align-items-center justify-content-between" lg={6}>


//                         <div className="search d-flex align-items-center  w-50">

//                             <SearchBar />
//                             {/* 
//                             <input list="browsers" name="browser" id="browser" onChange={(e) => searchProducts(e.target.value)} className="search-input" type="text" placeholder="  Search..." style={{ color: '#D32229' }} aria-label="Search" />

//                             <datalist id="browsers">
//                                 {
//                                     productName?.map((item) => {
//                                         return <div key={item} value={item}>{item}</div>
//                                     })
//                                 }
//                             </datalist> */}

//                             <i onClick={(e) => {
//                                 productsBySearch(document.getElementById('browser').value);
//                                 history.push("/searchitem")
//                             }} className=" news fa fa-search text-danger mx-4" aria-hidden="true"></i>
//                         </div>


//                         <button style={{ backgroundColor: '#DD0004' }} className="btn s-btn py-2 px-3">
//                             <a className="text-white text-decoration-none" href="https://firewallforce.se/begar-offert-it-natverksprodukter/"
//                                 target="_blank" style={{ backgroundColor: '#DD0004', fontFamily: 'sans-serif', fontSize: '12px' }}>Begar Offert
//                             </a>
//                         </button>
//                         <div className="text-danger cart second-cart" onClick={() => history.push(`/cart`)}>
//                             <Badge badgeContent={cartData?.length} color="secondary">
//                                 <i className="fa fa-shopping-cart mx-1" aria-hidden="true"></i>
//                             </Badge>
//                             <span className="ms-0 fw-bold" style={{ fontFamily: 'Poppins', fontSize: '12px' }}>{total.toFixed(2)}KR</span>
//                         </div>
//                     </Col>
//                 </Row>
//             </section>
//         </div>
//     )
// }

// export default SHeader;


export default class SHeader extends React.Component {


    constructor() {
        super()
        this.state = ({
            price: 0.00,
            productsBySearch: [],
            cartData: []
        })
        const API = `https://firewallforce.se/wp-json/wc/v3/autocomplete/brandsandcategorynames?words=`;
        // const history = useHistory()
        // const Location = useLocation()

    }


    componentDidMount = () => {
        // var firebase = new Firebase()
        // var productsArray = await firebase.getAutoCompleteData()
        // alert(productsArray)
        // setProductList(productsArray)

        var cartInfo
        setInterval(() => {
            cartInfo = JSON.parse(localStorage.getItem('cart'))
            // alert(typeof cartInfo)
            if (cartInfo) {
                let myPrice = 0.00
                cartInfo.forEach((item) => {
                    myPrice += Number(item.price)
                })
                // alert(myPrice)
                this.setState({ price: myPrice })
                // alert(this.state.price)
            }
        }, 10000)


    }

    // const searchProducts = async (value) => {
    //     //  const { data } = await axios.get(`${API}${value}&limit=10`);
    //     //  setNames(data);
    //     let filtered = []

    //     for (let n = 0; n <= productList.length - 1; n++) {
    //         if (productList[n].title && productList[n].title.includes(value)) {
    //             filtered.push(productList[n].title)
    //         }
    //     }

    //     alert(filtered)
    //     setNames(filtered)


    // }


    render() {
        return (
            <div className="d-flex sub-container-SHeader align-items-center">
                <section className="container row-head py-3">
                    <Row className="row-s-header">
                        <Col className="col-1-s-header d-flex align-items-center" lg={6}>
                            {/* <i onClick={toggleDrawer('left', true)} className="fa fa-bars text-danger bars-expand fa-lg" aria-hidden="true"></i> */}

                            <div className="d-flex align-items-center" onClick={() => this.props.history.push(`/`)}>
                                <a href="/">
                                    <img className="image-logo " src={pic} alt="" />
                                </a>
                            </div>

                            <div style={{ cursor: 'pointer' }} className="text-danger cart first-cart"  >
                                <i className="fa fa-shopping-cart mx-1" aria-hidden="true"></i>
                                <span>  {this.state.price}  KR</span>
                            </div>

                        </Col>

                        <Col className="col-2-s-header d-flex align-items-center justify-content-between" lg={6}>


                            <div style={Styles.SearchBar} >
                                <SearchBar />
                                <i
                                    style={{ marginRight: '5%' }}
                                    onClick={(e) => { this.props.history.push("/searchitem") }}
                                    className=" news fa fa-search text-danger" aria-hidden="true">
                                </i>
                            </div>


                            <button style={{ backgroundColor: '#DD0004' }} className="btn s-btn py-2 px-3">
                                <a className="text-white text-decoration-none" href="https://firewallforce.se/begar-offert-it-natverksprodukter/"
                                    target="_blank" rel="noreferrer" style={{ backgroundColor: '#DD0004', fontFamily: 'sans-serif', fontSize: '12px' }}>Begar Offert
                                </a>
                            </button>
                            <div className="text-danger cart second-cart" onClick={() => {
                                window.location.replace('/cart')
                            }}>
                                <Badge badgeContent={this.state.cartData?.length} color="secondary">
                                    <i className="fa fa-shopping-cart mx-1" aria-hidden="true"></i>
                                </Badge>
                                <span className="ms-0 fw-bold" style={{ fontFamily: 'Poppins', fontSize: '12px' }}>{this.state.price}KR</span>
                            </div>
                        </Col>
                    </Row>
                </section>
            </div>
        )
    }
}

const Styles = ({
    SearchBar: {

        height: '85%',
        width: '40%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        border: 'solid 2px #DD0004',
        borderRadius: '50px',

    },
    Border: {
        border: 'black'
    }
})