import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import axios from 'axios';
import { Hypnosis } from "react-cssfx-loading";


export default class SHeader extends React.Component {
    constructor() {
        super()
        this.state = {
            productNames: [],
            productList: [],
            showList: false,
            overlayer: false,
            iv: "",
            Route: false,
            selectedProduct: {},
            cursor: 'wait'


        }
    }

    componentDidMount = async () => {

        var config = {
            method: 'get',
            url: 'https://woo-api-apicenter.herokuapp.com/api/autocomplete',
            headers: {},
        }

        await axios(config)
            .then((res) => {
                //alert(res.data)
                let ArrayOfArray = res.data
                var productsArray = []
                ArrayOfArray.forEach((array) => { array.forEach((item) => { productsArray.push(item) }) })
                this.setState({ productList: productsArray, cursor: 'auto' })
                // alert(JSON.stringify(this.state.productList))
            })
            .catch((ex) => {
                // alert(ex)
            })


    }


    searchProducts = async (value) => {
        this.setState({ iv: value })
        //  const { data } = await axios.get(`${API}${value}&limit=10`);
        //  setNames(data);
        // alert(value)
        let filtered = []
        let preFiltered = []

        for (let n = 0; n <= this.state.productList.length - 1; n++) {
            if (this.state.productList[n].name && this.state.productList[n].name.includes(value)) {
                this.state.productList[n].name !== "N/A" && preFiltered.push(this.state.productList[n])
            }
        }

        preFiltered.forEach((item, index) => {
            if (index <= 9) filtered.push(item)
        })


        this.setState({ productNames: preFiltered, showList: true })
        // alert(this.state.productNames)

    }



    proceedNext = async (product) => {
        this.setState({ overlayer: true, showList: false })

        let sku = product.sku
        sku = sku.includes('+') ? sku.split('+').join('$p') : sku
        // alert(sku)
        if (!sku.includes('/')) {
            var pro = await axios.get(`https://woo-api-apicenter.herokuapp.com/api/itScopeProduct?sku=${sku}`)
            product.images = pro.data.images
            //  alert(`${pro.data.htmlSpecs}`)
            product.attributes.forEach((attr, index) => {
                if (attr.name == 'Html Specs') delete product.attributes[index]
            })

            product.attributes.push({ name: "Html Specs", options: [pro.data.htmlSpecs] })
            // alert(JSON.stringify(product.attributes))

        }
        this.setState({ overlayer: false, Route: true, selectedProduct: product })



        // history.push('/detailPage', product)

    }


    render() {

        return (

            <div>

                {this.state.overlayer &&
                    <section style={Styles.Overlayer}>
                        <div style={Styles.overlayerNested}>
                            <Hypnosis color="yellow" width="100px" height="100px" duration="2s" />
                        </div>
                    </section>
                }

                <input
                    onChange={(e) => this.searchProducts(e.target.value)}
                    value={this.state.iv}
                    type="text"
                    placeholder="  Search..."
                    style={{ ...Styles.searchInput, cursor: this.state.cursor }}
                    aria-label="Search"
                    />


                {this.state.productNames.length > 0 && this.state.showList &&
                    <section style={Styles.Listbox} >
                        {
                            this.state.productNames.map((item) => {
                                return (
                                    <div style={Styles.listItem} onClick={() => { this.proceedNext(item) }} >
                                        <br />
                                        <p style={{ marginLeft: '3%' }} >  {item.name.includes('|') ? item.name.substring(0, item.name.indexOf('|') + 1) : item.name} </p>
                                        <p style={{ marginLeft: '3%' }} >  {item.price} </p>
                                    </div>
                                )
                            })
                        }
                    </section>
                }

                {this.state.Route &&
                    <NextRoute product={this.state.selectedProduct} />
                }

            </div>
        )
    }
}




// const SHeader = () => {
//     const [productNames, setNames] = useState([]);
//     const [productList, setProductList] = useState([])
//     const [overlayer, setOverlayer] = useState(false)

//     const [iv, setiv] = useState("")
//     const history = useHistory()

//     useEffect(() => {
//         async function Process() {

//             var config = {
//                 method: 'get',
//                 url: 'https://woo-api-apicenter.herokuapp.com/api/autocomplete',
//                 headers: {}
//             };

//             alert("start")

//             await axios(config)
//                 .then((res) => {
//                     //alert(res.data)
//                     let ArrayOfArray = res.data
//                     var productsArray = []
//                     ArrayOfArray.forEach((array) => { array.forEach((item) => { productsArray.push(item) }) })
//                     alert(JSON.stringify(productsArray))
//                     setProductList(productsArray)
//                     setTimeout(() => {
//                         alert(productList)
//                     }, 5000)
//                 })
//                 .catch((ex) => {
//                     alert(ex)
//                 })




//         }
//         Process()

//     }, [])


//     const searchProducts = async (value) => {
//         setiv(value)
//         //  const { data } = await axios.get(`${API}${value}&limit=10`);
//         //  setNames(data);
//         let filtered = []
//         let preFiltered = []

//         for (let n = 0; n <= productList.length - 1; n++) {
//             if (productList[n].title && productList[n].title.includes(value)) {
//                 productList[n].title !== "N/A" && preFiltered.push(productList[n])
//             }
//         }

//         preFiltered.forEach((item, index) => {
//             if (index <= 9) filtered.push(item)
//         })


//         setNames(preFiltered)


//     }



//     const getItScopeInfo = async (Products) => {
//         // alert(product.sku)

//         var makePros = Products.map(async (product) => {

//             let sku = product.sku
//             sku = sku.includes('+') ? sku.split('+').join('$p') : sku
//             // alert(sku)
//             if (!sku.includes('/')) {
//                 var pro = await axios.get(`https://woo-api-apicenter.herokuapp.com/api/itScopeProduct?sku=${sku}`)
//                 product.images = pro.data.images
//                 // alert(`${pro.data.htmlSpecs}`)
//                 product.attributes.forEach((attr, index) => {
//                     if (attr.name == 'Html Specs') delete product.attributes[index]
//                 })

//                 product.attributes.push({ name: "Html Specs", options: [pro.data.htmlSpecs] })
//                 // alert(JSON.stringify(product.attributes))

//             }

//             return product
//         })

//         var newProsArray = await Promise.all(makePros)

//         return newProsArray
//     }




//     const proceedNext = async (product) => {
//         setOverlayer(true)

//         let sku = product.sku
//         sku = sku.includes('+') ? sku.split('+').join('$p') : sku
//         // alert(sku)
//         if (!sku.includes('/')) {
//             var pro = await axios.get(`https://woo-api-apicenter.herokuapp.com/api/itScopeProduct?sku=${sku}`)
//             product.images = pro.data.images
//             // alert(`${pro.data.htmlSpecs}`)
//             product.attributes.forEach((attr, index) => {
//                 if (attr.name == 'Html Specs') delete product.attributes[index]
//             })

//             product.attributes.push({ name: "Html Specs", options: [pro.data.htmlSpecs] })
//             // alert(JSON.stringify(product.attributes))

//         }
//         setOverlayer(false)

//         history.push('/detailPage', product)

//     }

//     return (

//         <div>

//             {overlayer &&
//                 <section style={Styles.Overlayer}>
//                     <div style={Styles.overlayerNested}>
//                         <Hypnosis color="yellow" width="100px" height="100px" duration="2s" />
//                     </div>
//                 </section>
//             }

//             <input
//                 onChange={(e) => searchProducts(e.target.value)}
//                 value={iv}
//                 type="text"
//                 placeholder="  Search..."
//                 style={Styles.searchInput}
//                 aria-label="Search" />

//             {/* <datalist id="browsers">
//                 {
//                     productNames?.map((item) => {
//                         return <div key={item} value={item}>{item}</div>
//                     })
//                 }
//             </datalist> */}


//             {productNames.length > 0 &&
//                 <section style={Styles.Listbox} >
//                     {
//                         productNames.map((item) => {
//                             return (
//                                 <div style={Styles.listItem} onClick={() => { proceedNext() }} >
//                                     <br />
//                                     <p style={{ marginLeft: '3%' }} >  {item.title} </p>
//                                     <p style={{ marginLeft: '3%' }} >  {item.price} </p>
//                                 </div>
//                             )
//                         })
//                     }
//                 </section>
//             }


//         </div>
//     )
// }

// export default SHeader;


const NextRoute = (props) => {
    const history = useHistory()
    // alert(`routing with : ${props.product}`)
    history.push(`/detailPage?${props.product.name}`, props.product)

    return null
}

const detectMob = () => {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];

    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}



const Styles = {
    Overlayer: {
        position: 'absolute',
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
    Listbox: {
        position: 'absolute',
        top: detectMob() ? '14%' : '15%',
        left: detectMob() ? '8.5%' : '52%',
        width: detectMob() ? '80%' : '20%',
        height: detectMob() ? '60%' : '37%',
        backgroundColor: 'lightgray',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        overflow: 'auto',
        boxShadow: '0px 0px 8px 1px lightgray'
    },
    listItem: {
        width: '100%',
        height: '20%',
        backgroundColor: 'white',
        marginTop: '1%',
        font: '10px times new roman',
        color: '#DD0004',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    searchInput: {
        border: 'none',
        outline: 'none',
        width: '200px',
        height: '30px'
    }
}
