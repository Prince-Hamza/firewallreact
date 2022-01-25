import React, { useContext, useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import './style.css'
import SmallSlider from './Slider'
import TrustPilot from '../SuccessStory/Story/Trustpilot'
import Tabs from './Tabs'
import ReactHtmlParser from 'react-html-parser'
import Counter from './Counter'
import { b4i } from './base64image'
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import QuoteBox from "./QuoteBox.jsx";
import { getStandardHtmlDataSheet } from './HtmlSpecs'
import axios from 'axios'

// import MicroProduct from './MicroProduct'

const ProductDetail = (props) => {
  const [count, setCount] = useState(1)
  const [hasBanners, setHasBanners] = useState(false)
  const [bannerUrl, setBannerUrl] = useState('')
  const [showQuoteBox, setShowQuoteBox] = useState(false)
  const [quoteBoxData, setQuoteBoxData] = useState(false)
  const [ItScopeStockStatus, setItScopeStockStatus] = useState('')
  const history = useHistory();
  const [productDetail, setProductDetail] = useState({})
  const [htmlSpecs, setHtmlSpecs] = useState("")
  const [infoRecieved, setInfoRecieved] = useState(false)
  const [productCategory, setProductCategory] = useState({})
  const [cartData, setCartData] = useState({})
  const [defaultImage, setDefault] = useState(undefined)
  const [mainPic, setMainPic] = useState(undefined)
  console.log('product Detail page==>', productDetail)



  const location = useLocation();

  useEffect(async () => {

    setProductDetail(location.state ? location.state : false)

    setDefault(location.state.images[0])
    setInfoRecieved(location.state ? true : false)



    document.title = productDetail.name || productDetail.title || ''


  })

  // const bannerByBrands = async () => {

  //   let sku = productDetail.name.substring(productDetail.name.lastIndexOf(' ') + 1, productDetail.name.length)

  //   const productApi = await axios.get(`https://firewallforce.se/wp-json/wc/v3/productbysku?sku=${sku}`)
  //   const product = productApi.data
  //   // alert(JSON.stringify(product))
  //   if (product.hasOwnProperty('attributes')) {
  //     let brand
  //     product?.attributes.forEach((attrib) => {
  //       if (attrib.name.includes('Brand')) { brand = attrib.options[0] }
  //       if (attrib.name.includes('ITScopeStockStatus')) { setItScopeStockStatus(attrib.options[0]) }

  //     })
  //     if (brand) {

  //       const bannerbybrand = await axios.get(`https://woo-api-apicenter.herokuapp.com/api/bannerbybrand?brand=${brand}`)

  //       if (bannerbybrand.data.length) {
  //         if (bannerbybrand.data[0].hasOwnProperty('image')) {
  //           setBannerUrl(bannerbybrand.data[0].image)
  //           setHasBanners(true)
  //         }
  //       }

  //     }

  //   }


  // }






  //Dynamic select images (SingleProductPage)
  let images = productDetail.images?.slice(1, productDetail.images?.length)

  const addToCart = item => {
    let cartItems = JSON.parse(localStorage.getItem('cart'))
    const selectiveItems = {
      id: item.id,
      name: item.name,
      price: item.price,
      count: count,
      image: item.images && item.images
    }
    if (cartItems === null) {
      let cartArray = []
      cartArray.push(selectiveItems)
      setCartData(cartArray)
      localStorage.setItem('cart', JSON.stringify(cartArray))
      //history.push("/cart", cartData);
    } else if (cartItems) {
      cartItems.push(selectiveItems)
      setCartData(cartItems)
      localStorage.setItem('cart', JSON.stringify(cartItems))
      //history.push("/cart", cartData);

    }
  }

  var tax = productDetail.price * 0.25
  console.log('hhd', tax)
  var includePrice = Number(productDetail.price) + Number(tax)
  console.log('include vat===>', includePrice)





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

  const hideQuoteBox = () => {
    setShowQuoteBox(false)
  }

  if (infoRecieved) {
    return (
      <div>



        {hasBanners &&
          <section style={Styles.bannerContainer}>
            <img src={bannerUrl} alt="" />
            <img src={bannerUrl} alt="" />
            {/* <img src={require('../../assets/homepage/Rittal.png').default} alt="" /> */}
          </section>
        }

        {showQuoteBox &&
          <QuoteBox productDetail={productDetail} hide={hideQuoteBox} />
        }


        <section className='container sec-route my-5' >
          <Row>
            <section className='d-flex'>

              <span onClick={()=> {history.push('/')}} className='fw-bold text-small' style={{ color: '#575757', fontFamily: 'Poppins' }}>Home</span>
              <i
                className='fa fa-chevron-right text-danger mx-2'
                aria-hidden='true'
              ></i>

              {productDetail && productDetail?.categories &&
                <span onClick={() => { history.push(`/product-category/${productDetail.categories[0]?.name}`) }} className='fw-bold text-small' style={{ color: '#575757', fontFamily: 'Poppins' }}>
                  {productDetail.categories[0]?.name}
                </span>
              }

              <i
                className='fa fa-chevron-right text-danger mx-2'
                aria-hidden='true'
              ></i>
              <span className='fw-bold text-small'
                style={{ color: '#575757', fontFamily: 'Poppins' }}>
                {productDetail.name ? productDetail?.name : productDetail?.title}
              </span>


            </section>
            <Col className='py-4' lg={6}>
              <section className='detail-img-container '>

                <div style={{ ...Styles.stealthImage, backgroundImage: maskImage(mainPic || defaultImage), width: '100%', height: '100%' }} >

                </div>

              </section>


              <section className='sub-images-grid mt-4'>
                {productDetail.images &&
                  productDetail.images.map((item, index) => {
                    return (
                      <div
                        style={{ ...Styles.ImagesItem, ...Styles.stealthImage, backgroundImage: maskImage(item), height: '60px' }}
                        onClick={() => { setMainPic(item) }}
                      >

                      </div>
                    )
                  })}
              </section>

            </Col>

            <Col className='py-4'>
              <h5 className='fw-bold' style={{ color: '#575757', fontFamily: 'Poppins', letterSpacing: '3px' }}>
                {' '}
                {
                  productDetail.name ? ReactHtmlParser(productDetail?.name.split('-').join('<span style="color:red;font:bold italic 20px times new roman"></span>'))
                    :
                    ReactHtmlParser(productDetail?.title.split('-').join('<span style="color:blue;font:bold italic 20px times new roman"></span>'))
                }
              </h5>
              <div className='justify shortDes px-1' style={{ overflow: 'auto' }}>
                <span style={{ fontSize: 'small', color: '#575757', fontFamily: 'Poppins' }}>
                  {ReactHtmlParser(
                    productDetail && productDetail.short_description.split('&#8211;').join('<span style="color:red;font:bold italic 20px times new roman"></span>')
                  )}
                </span>
                {console.log(
                  'productDetail.short_description',
                  productDetail.short_description
                )}
              </div>
              <div className='d-flex'>
                <section>
                  <i style={{ color: '#FCC201', boxShadow: '0px 0px 6px 1px #FCC201' }} className='fa mx-0 fa-star fa-md'></i>
                  <i style={{ color: '#FCC201', boxShadow: '0px 0px 6px 1px #FCC201' }} className='fa mx-0 fa-star fa-md'></i>
                  <i style={{ color: '#FCC201', boxShadow: '0px 0px 6px 1px #FCC201' }} className='fa mx-0 fa-star fa-md'></i>
                  <i style={{ color: '#FCC201', boxShadow: '0px 0px 6px 1px #FCC201' }} className='fa mx-0 fa-star fa-md'></i>
                  <i style={{ color: '#FCC201', boxShadow: '0px 0px 6px 1px #FCC201' }} className='fa mx-0 fa-star-o fa-md'></i>
                </section>
                <section className='ms-1'>
                  <span
                    style={{ fontSize: '11px' }}
                    className='text-danger fw-bold'
                  >
                    Review This Product
                  </span>
                </section>
              </div>
              <div>
                <i
                  className='fa fa-heart fa-lg mx-1  text-muted'
                  aria-hidden='true'
                ></i>
              </div>

              <div className='mt-5 d-flex align-items-center'>
                <h3 className='fw-bold text-danger'>
                  {productDetail && productDetail.price} KR
                </h3>
                <span className=' mx-3 yellow-color fw-bold'>Excluding VAT</span>
              </div>
              <div className='d-flex align-items-center '>
                <h6 style={{ color: 'grey' }} className='fw-bold'>
                  {productDetail && includePrice.toFixed(2)} KR
                </h6>
                <div style={{ font: 'bold 11px poppins', color: 'grey', marginLeft: '1%' }} >
                  {' '}
                  Including VAT
                </div>


              </div>

              {ItScopeStockStatus &&
                <div style={{ font: 'bold 11px poppins', color: 'grey' }} >
                  {ItScopeStockStatus}
                </div>
              }

              <div style={{ font: 'bold 11px poppins', color: 'grey' }} >
                Frakt från 140 SEK - Leveranstid är 2-4 dagar
              </div>





              <div className='mt-5'>
                <h6 className='text-danger fw-bold'>
                  Condition: <span className='badge'>New</span>
                </h6>
                <h6 className='text-danger fw-bold'>
                  Warranty:{' '}
                  <span className='fw-normal'>
                    Manufacture Standard Warranty.{' '}
                  </span>
                  <span className='text-danger text-muted'>Learn More</span>
                </h6>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10%' }} >
                <button
                  style={{ backgroundColor: '#DD0004', marginRight: '4%' }}
                  className='btn w-100-resp py-2'
                  onClick={() => addToCart(productDetail)}
                >
                  <i
                    className='fa fa-lg me-2 fa-shopping-cart'
                    aria-hidden='true'
                  ></i>
                  Add to Cart
                </button>


                <Counter onChange={e => setCount(e.target.value)} />

                {/* 
              <input
                type='number'
                style={{ ...Styles.quantityBox, textAlign: 'center' }}
                // className='py-2 ms-3 input-nmbr'
                onChange={e => setCount(e.target.value)}
                defaultValue='1'
                name=''
                id=''
              /> */}


                <button onClick={() => { setShowQuoteBox(true); setQuoteBoxData(productDetail) }} className='btn w-100-resp ms-3 border border-dark btn-outline-secondary py-2 px-4'>
                  Bulk Quote
                </button>
              </div>




              {/* <section style={Styles.bannerContainer}>
              <img src={bannerUrl} alt="" />
            </section> */}
              {hasBanners &&
                <img style={{ width: '80%', height: '10%', marginTop: '6%' }} src={bannerUrl} alt="" />
              }





              <div style={{ marginTop: '6%' }} >
                <img
                  className='w-100-resp'
                  src={b4i}
                  alt=''
                />
              </div>

              {/* {ProductDetail.stock_status == 'outofstock' && */}

              <section style={Styles.requestQuote} >
                <div style={{ ...Styles.rqItem, height: '50%' }} >
                  Got questions ? click here to chat with our presales consultants and make the right purchase
                </div>


                <div style={Styles.rqItem} >
                  <button style={Styles.quoteButton}> Request Quote </button>

                  <div style={Styles.bulletView} >

                    <li> 100% Secure . 100% Money . Back Guarantee </li>
                    <li> Paypal World Seller . Buy Now Pay Later With Easy Nets Afterpay </li>
                    <li> Express Delivery in 2-6 Days . Channeled Products </li>


                  </div>

                </div>
              </section>
              {/* } */}



            </Col>
          </Row>


          <Row>
            <Col lg={6}>
              {/* <SmallSlider /> */}
            </Col>
          </Row>





          {/* {alert(JSON.stringify(productDetail.attributes))} */}



          {location.state && <Tabs productDetail={location.state} />}
          <section
            className={productCategory.length === 0 ? 'd-none' : 'd-block'}
          >
            {/* <FeaturedProduct productCategory={productCategory} /> */}
          </section>
          <section className={productCategory.length === 0 ? 'mt-4' : 'mt-0'}>
            <TrustPilot />
          </section>
        </section>





      </div>
    )
  } else return null
}

export default ProductDetail


const Styles = ({
  bannerContainer: {
    marginTop: '0.1%',
    width: '100%',
    height: '115px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignContent: 'center',
  },
  inDetailBanners: {
    width: '50%',
    height: '15%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  banners: {
    width: '50%',
    height: '100%'
  },
  ImagesContainer: {
    border: 'dashed black 0.1px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '8%'
  },
  ImagesItem: {
    // border: 'dashed black 1px',
    width: '44%',
    height: '110%',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  quantityBox: {
    marginLeft: '2%',
    width: '12%',
    height: '8%',
    color: 'black',
    overflow: 'scroll'
  },
  requestQuote: {
    marginTop: '8%',
    marginBottom: '25%',
    width: '100%',
    height: '30%',
    // border: 'dashed black 1px',
    font: '14px times new roman',
    color: 'gray'
  },
  rqItem: {
    // height: '50%',
    width: '100%',
    // border: 'dashed black 1px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  quoteButton: {
    width: '140px',
    height: '40px',
    background: 'rgb(118,118,122)',
    background: 'linear-gradient(74deg, rgba(118,118,122,1) 0%, rgba(118,118,122,1) 100%)',
    color: 'white',
    marginRight: '8%',
    border: 'none',
    borderRadius: '5px'
  },
  bulletView: {
    font: 'italic 10px times new roman'
  },
  quoteBox: {
    position: 'absolute',
    top: '30%',
    left: '33.33%',
    width: '30.33%',
    height: '50%',
    boxShadow: '0px 0px 8px 1px #222',
    backgroundColor: 'rgb(69,70,70)',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  productTitle: {
    color: 'lightgreen'
  },
  stealthImage: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    pointerEvents: 'none'
  }
})