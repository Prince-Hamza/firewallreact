import React, { useContext, useEffect, useState } from 'react';
import Pagination from "./Pagination";
import { GlobalContext } from "../Context/Context";
import { useHistory } from "react-router-dom";
import axios from 'axios'
import AccordionComp from './Filter/AccordionComp';
import { Hypnosis } from "react-cssfx-loading";

const ListItems = () => {
    // const { products, setProductDetail, setCartData } = useContext(GlobalContext);
    // const { setProductDetail, setCartData } = useContext(GlobalContext);

    const [products, setProducts] = useState([])
    const [brand, setBrand] = useState("Dell")
    const [allBrands, setAllBrands] = useState([])
    const [overlayer, setOverlayer] = useState(true)

    const history = useHistory();
    const breaks = []

    for (let n = 0; n <= 50; n++) {
        breaks.push(n)
    }


    const getBrands = async () => {
        var brandList = await axios.get(`https://shop.firewallforce.se/wp-json/wc/v3/products/attributes/4/terms?per_page=100&consumer_key=ck_42a75ce7a233bc1e341e33779723c304e6d820cc&consumer_secret=cs_6e5a683ab5f08b62aa1894d8d2ddc4ad69ff0526`)
        setAllBrands(brandList.data)
        return brandList.data
    }

    const getBrandId = async (brandName) => {
        var target
        var brandList = await getBrands()
        brandList.forEach((item) => {
            if (item.name === brandName) target = item.id
        })
        //alert(`id target : ${target}`)
        return target ? target : 527
    }


    async function getInfo(page, brand) {

        var brandId = await getBrandId(brand)
        // alert(`brand id : ${brandId}`)

        try {
            const URL = `https://shop.firewallforce.se/wp-json/wc/v3/products?attribute=pa_brands&attribute_term=${brandId}&page=${page}&per_page=6&consumer_key=ck_42a75ce7a233bc1e341e33779723c304e6d820cc&consumer_secret=cs_6e5a683ab5f08b62aa1894d8d2ddc4ad69ff0526`
            var productsResp = await axios.get(URL)
            //alert(JSON.stringify(productsResp.data))
        } catch (ex) {
            //alert(ex)
            return
        }

        var piccyPros = productsResp.data.map(async (product) => {
            try {
                var wpImages = product.images.map((item) => { return item.src })
                const itsResp = await axios.get(`https://woo-api-apicenter.herokuapp.com/api/itScopeProduct?sku=${product.sku}`)
                product.images = itsResp.data.images
                product.attributes.forEach((attr, index) => {
                    if (attr.name === 'Html Specs') delete product.attributes[index]
                })
                product.attributes.push({ name: "Html Specs", options: [itsResp.data.htmlSpecs] })

                return product

            } catch (ex) {

                product.images = wpImages
                return product
            }
        })

        var piccyProsList = await Promise.all(piccyPros)


        // var validPix = piccyProsList.map((item)=>{

        // })

        //alert(`Final Data :: ${piccyProsList}`)
        setProducts(piccyProsList)
        setOverlayer(false)

        // alert(data)
        // alert(`state : ${products}`)

    }

    const checkedBrands = (brandName) => {
        // alert(brandName)
        setOverlayer(false)
        setOverlayer(true)
        getInfo(1, brandName)
    }

    useEffect(() => {
        getBrands()
        getInfo(1, brand)  // brand pros
    }, [])







    const AddDetailFunc = (item) => {
        // setProductDetail(item);
        history.push(`/detailpage?${item.name}`, item)
    }

    const AddToCart = (item) => {
        let cartItems = JSON.parse(localStorage.getItem('cart'));
        const selectiveItems = { id: item.id, name: item.name, price: item.price, count: 1, image: item.images && item.images };
        if (cartItems === null) {
            let cartArray = []
            cartArray.push(selectiveItems);
            //setCartData(cartArray)
            localStorage.setItem('cart', JSON.stringify(cartArray));
        }
        else if (cartItems) {
            cartItems.push(selectiveItems);
            //setCartData(cartItems)
            localStorage.setItem('cart', JSON.stringify(cartItems));
        }
    }




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

    const onPicError = (item) => {
        //alert(`picError in : ${item}`)
        var newPros = products.map((pro) => pro === item ? undefined : pro).filter(Boolean)
        setProducts(newPros)
    }

    return <>
        <section>

            {overlayer &&
                <section style={Styles.Overlayer} >
                    <div style={Styles.overlayerNested} >
                        <Hypnosis color="cyan" width="100px" height="100px" duration="2s" />
                    </div>
                </section>
            }

            <div style={{ position: 'absolute', top: '247%', left: '1%', width: '25%', height: '950px' }} >
                <AccordionComp title={"Brands"} Brands={allBrands} Switch={"Brands"} brandFunc={checkedBrands} />
            </div>



            <section className="text-center bygga-parent equip-parent py-3">
                <span style={{ fontFamily: 'Poppins', color: '#575757' }} className="back-border bygga-text-heading fs-4 fw-bold text-capitalize">
                    Top Products
                </span>
            </section>

            {
                breaks.map(() => {
                    return (
                        <br />
                    )
                })
            }


            <div className="py-4 px-2 my-4 shadow-sm" style={{ position: 'absolute', top: '240%', left: '25%', backgroundColor: "white", width: '70%', margin: 'auto', fontFamily: 'popins' }}>
                <section className="grid-comm grid-brand-map" >
                    {
                        products && products.map((item, index) => {
                            return <section key={index} className="bg-white mb-3 mx-2 shadow px-3" style={{ borderRadius: "15px" }}>

                                {item.images.length > 0 &&
                                    <div
                                        style={{ ...Styles.stealthImage, backgroundImage: maskImage(item.images[0]) }}
                                        onClick={(e) => AddDetailFunc(item)}
                                        className="d-flex brand-img-div-map justify-content-center align-items-center pt-3"
                                    >
                                        {/* <img className="brand-img-map" onError={() => { onPicError(item) }} src={item.images.length > 0 && item.images[0]} alt="" /> */}
                                    </div>
                                }


                                <hr style={{ border: "1px solid red" }} />
                                <div className="pb-3">
                                    <section className="d-flex brand-map-name justify-content-between align-items-center">
                                        <span className="text-capitalize " style={{ fontFamily: 'Poppins', color: '#575757' }}>{item.name}</span>
                                        <i className="fa fa-heart text-muted fa-lg"></i>
                                    </section>
                                    <section>
                                        <span className="fw-bold text-danger">{item.price} kR</span>
                                        <span className="font-size-small mx-2 yellowtxt">Excluding VAT</span>
                                    </section>
                                    <br />
                                    <button className="btn btn-danger  btn-size" onClick={() => AddToCart(item)}>
                                        <i className="fa fa-shopping-cart me-2" aria-hidden="true"></i>
                                        Add To cart
                                    </button>
                                    <span className="font-size-small py-2 px-2  ">

                                        <i class="fas fa-cubes fa-1x text-success " > <span className="font-size-small  "> {item.stock_quantity} </span></i>
                                        <span style={{ fontSize: '10px' }} className="ms-2 fw-bold yellowtxt">{item.stock_status}</span>
                                    </span>
                                </div>
                            </section>
                        })
                    }
                </section>

                <Pagination updatePage={getInfo} brand={brand} />

            </div>
        </section>
    </>
}

export default ListItems;


const Styles = ({

    netsView: {
        position: 'absolute',
        left: '0%',
        top: '0%',
        width: '100%',
        height: '100%'
    },
    Overlayer: {
        position: 'fixed',
        top: '0px',
        left: '0px',
        width: '100%',
        height: '200%',
        //   background: 'rgb(66,66,150)',
        background: 'linear-gradient(74deg, rgba(66,66,150,0.773546918767507) 0%, rgba(133,133,207,0.773546918767507) 100%)',
        zIndex: 1,

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    overlayerNested: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50%',
        width: '25%',
    },
    Input: {
        width: '100%',
        height: '5vh',
        backgroundColor: '#f1f1f1',
        border: 'none',
        borderRadius: '5px',
        marginRight: '2vh',
        marginBottom: '30px'
    },
    Form: {
        marginLeft: '5vh',
        marginTop: '5vh',
        marginRight: '15vh'
    },

    productsBox: {
        width: '85%',
        height: '20%',
        backgroundColor: '#f1f1f1',
        marginTop: '5%',
        marginBottom: '5%',
        overflow: 'scroll'
    },
    bankTransferSection: {

    },
    checkBoxesContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    orderButton: {
        width: '45%',
        height: '5%',
        backgroundColor: '#DD0004',
        border: 'none'
    },
    terms: {
        width: '80%',
        height: '2%',
        marginLeft: '2%'
    },
    bankTransferPara: {
        width: '450px',
        height: '300px',
        font: '13px times new roman',
        marginLeft: '8%'
    },
    stealthImage: {
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
    }

})