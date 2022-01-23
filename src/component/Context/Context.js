import axios from "axios";
import React, { createContext, useState } from 'react';
import WooCommerceAPI from "woocommerce-api";
import { consumer_key, consumer_secret, featured_Products, URL } from "./api";

export const GlobalContext = createContext();
var WooCommerce = new WooCommerceAPI({
    url: URL,
    consumerKey: consumer_key,
    consumerSecret: consumer_secret,
    wpAPI: true,
    version: 'wc/v3',
    queryStringAuth: true
});

const MainContext = ({ children }) => {
    const cart = JSON.parse(localStorage.getItem('cart'))
    const [state, setState] = React.useState({
        left: false,
    });
    const [products, setProducts] = useState([]);
    const [productDetail, setDetail] = useState({});
    const [backdropOpen, setOpen] = useState(false);
    const [faqDisplay, setDisplay] = useState("one");
    const [blogData, setBlogData] = useState([]);
    const [productCategory, setCategory] = useState([]);
    const [checked, setChecked] = React.useState([]);
    const [brandSearch, SetBrandSearch] = useState('');
    const [cartData, setCartData] = useState(cart && cart);
    const [featuredProductsState, setFeaturedproducts] = useState([]);
    const [categoryInfo, setCategoryInfo] = useState(null);
    const [blogsToShow, setBlogsToShow] = useState(0);
    const [productBlog, setProductBlog] = useState(null)
    const [solution, setSolution] = useState([])
    const [productSol, setProductSol] = useState(null)
    const [solToShow, setSolToShow] = useState(0);
    const [searchPro, setSearchPro] = useState(null)
    const [Brands, setBrands] = useState(null);
    const [array, setArray] = useState(null);

    const [dummy, setDummy] = useState(false);

    //get featured products
    const featuredProducts = async () => {
        const { data } = await axios.get(featured_Products);
        console.log(data);
        if (data) return setFeaturedproducts(data);
    }

    //Get Products Data from Backkend as per page 20

    const GetProductsFirst = () => {
        startLoading();
        WooCommerce.getAsync(`products?per_page=45&page=1`).then(function (result) {
            if (result) {
                EndLoading();
                return setProducts(JSON.parse(result.toJSON().body));
            }
        });
    }
    // Update state for Products Pagination 
    const gettingChangeProducts = (page) => {
        startLoading();
        WooCommerce.getAsync(`products?per_page=50&page=${page}`).then(function (result) {
            if (result) {
                EndLoading();
                return setProducts(JSON.parse(result.toJSON().body));
            }
        });
    }
    // search products
    //https://firewallforce.se/wp-json/wc/v3/productbysku?sku=ST1200MM0009
    // https://firewallforce.se/wp-json/wc/v3/productbysuggestion?sku=F-Secure FCIPBR1N001A7
    // https://firewallforce.se/wp-json/wc/v3/filter?category=${value}&limit=30&page=1
    const productsBySearch = async (value) => {
        startLoading();
        const URL = `https://shop.firewallforce.se/wp-json/wc/v3/productbysuggestion?sku=${value}`;
        const { data } = await axios.get(URL);


        if (data) {
            EndLoading();
            setSearchPro(data);
        }


    }
    // Get Blog Post Data from Backend
    const getBlogs = async () => {
        startLoading();
        const URL = `https://shop.firewallforce.se/wp-json/wc/v3/blogs?page=1&limit=100`;
        const { data } = await axios.get(URL);
        if (data) {
            EndLoading();
            setBlogData(data);
        }
    }
    const GetSolutionData = async () => {
        startLoading();
        const URL = `https://shop.firewallforce.se/wp-json/wc/v3/solutions`;
        const { data } = await axios.get(URL);
        if (data) {
            EndLoading();
            setSolution(data);
        }
    }


    //This one api is belong to brand product when a user click on brand in eshop(categoryPage)
    const checkBrands = async (category, brand) => {
        startLoading();
        var res = await axios.get(`https://shop.firewallforce.se/wp-json/wc/v3/filterbycategoryandbrand?category=${category}&brand=${brand}&page=1&limit=20`)
        await getItScopeImages(res.data)
        // alert(`new brand : ${JSON.stringify(piccyPros)}`)

        setCategory(res.data)
        EndLoading();
    }



    const getAllProductCategories = async (category, page) => {

        startLoading();
        var res = await axios.get(`https://shop.firewallforce.se/wp-json/wc/v3/filter?category=${category}&limit=20&page=${page}`)
        if (res.data) {

            var products = await getItScopeImages(res.data.Products)
            // alert(products)


            setCategory(products)
            setCategoryInfo(res.data?.categoryInfo)
            EndLoading();
        }

        var brandsRes = await axios.get(`https://shop.firewallforce.se/wp-json/wc/v3/brandsincategory?category=${category}`)
        if (brandsRes.data) {
            setBrands(brandsRes.data);
            EndLoading();
        }
    }





    const blobToBase64 = (blob) => {
        return new Promise((resolve, _) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.readAsDataURL(blob);
        })
    }


    const urlToBlob = async (url) => {
        var blobResp = await axios.get(url, { responseType: 'blob' })
        return blobResp.data
    }


    const toBase64 = async (url) => {
        var blob = await axios.post(`https://woo-api-apicenter.herokuapp.com/api/urlToBlob`, { url: "https://media.itscope.com/img/p/-CeJBx1BcuA74Anp7kEBVgk9FBPgSR8bbFhbnB3kBTY=/aHR0cDovL2luaXNob3AuY29tL2ltZy9nYWxsZXJ5Lzc3ODY4MjYzXzA1NDk1MzU0ODMuanBn" })
        // alert(blob)
        var base64 = await blobToBase64(blob)
        // alert(base64)
    }


    const setCssVar = (varname, value) => {
        document.documentElement.style
            .setProperty(`--${varname}`, value);
    }

    
    const getItScopeInfo = async (product , index) => {

        if (product.sku.includes('/')) { 
            product.images = []
            product.primaryImage = ""
            return product
        }

        try {
            var pro = await axios.get(`https://woo-api-apicenter.herokuapp.com/api/itScopeProduct?sku=${product.sku}`)
            product.images = pro.data.images
            product.primaryImage = pro.data.primaryImage
            product.attributes.forEach((attr, index) => {
                if (attr.name == 'Html Specs') delete product.attributes[index]
            })
            product.attributes.push({ name: "Html Specs", options: [pro.data.htmlSpecs] })
            return product
        } catch (ex) {
            product.images = []
            product.primaryImage = ""
            return product
        }





        // var config = {
        //     method: 'get',
        //     url: 'https://media.itscope.com/img/p/-CeJBx1BcuA74Anp7kEBVgk9FBPgSR8bbFhbnB3kBTY=/aHR0cDovL2luaXNob3AuY29tL2ltZy9nYWxsZXJ5Lzc3ODY4MjYzXzA1NDk1MzU0ODMuanBn',
        //     headers: {
        //         'Authorization': 'Basic bTEzNTE3MjpHWEJsZXpKSzBuLUk1NUs0UlZfZjB2SElSckZxX1ljVE5oOVl6NzM1TEpz'
        //     },
        //     responseType: 'arraybuffer'
        // }

        // await axios(config)
        //     .then(function (response) {
        //         alert(response.data)
        //     })
        //     .catch(function (error) {
        //         alert(error);
        //     });


        //alert(resp.data)
        // const url = `https://media.itscope.com/img/p/-CeJBx1BcuA74Anp7kEBVgk9FBPgSR8bbFhbnB3kBTY=/aHR0cDovL2luaXNob3AuY29tL2ltZy9nYWxsZXJ5Lzc3ODY4MjYzXzA1NDk1MzU0ODMuanBn`
        // const image = new Image()

        

    }


    const getItScopeImages = async (Products) => {  // brand , count , products

        var newPros = Products.map((product , index) => {
            return getItScopeInfo(product , index)
        })

        var resp = await Promise.all(newPros)

        return resp

    }


    //    const getItScopeInfo = async (object) => {
    //         // alert(product.sku)

    //         var makePros = object.Products.map(async (product) => {

    //             let sku = product.sku
    //             sku = sku.includes('+') ? sku.split('+').join('$p') : sku
    //             // alert(sku)
    //             if (!sku.includes('/')) {
    //                 var pro = await axios.get(`https://woo-api-apicenter.herokuapp.com/api/itScopeProduct?sku=${sku}`)
    //                 //alert(`itscope product resp for ${product.sku} : ${JSON.stringify(pro)}`)
    //                 product.images = pro.data.images
    //                 alert(`images of ${product.sku}  ::  ${pro.data.images}`)
    //                 // alert(product.images)

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
    //         object.Products = newProsArray

    //         return object
    //     }



    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const setProductDetail = (product) => {
        setDetail(product);


    }

    const setBlogDetail = (item) => {
        setProductBlog(item)
        console.log(productBlog)
    }

    const setSolDetail = (item) => {
        setProductSol(item)
        console.log(productSol)
    }

    const startLoading = () => {
        setOpen(true);
    }

    const EndLoading = () => {
        setOpen(false);
    }

    const faqDisplayChangeFunc = (view) => {
        setDisplay(view);
    }

    // filter checkBox categories
    const handleToggle = (value, category, Brands) => {
        if (value != undefined && value !== null) {
            if (array === value) {
                setArray(null);
                getAllProductCategories(category, 1);
            }
            else {
                setArray(value);
                if (category !== undefined && Brands !== undefined) {
                    checkBrands(category, Brands);
                }
            }
            // if (array.includes(value)) {
            //     let _filter = [];
            //     array.forEach(item => {
            //         if (item !== value) {
            //             _filter.push(item);
            //         }
            //     })
            //     if (value === array[0]) {
            //         _filter = [];
            //     }
            //     return setArray(_filter);
            // }
            // else {
            //     setArray([...array, value]);
            // }
        }
    }

    return <GlobalContext.Provider value={{
        faqDisplay, checked, blogData, productCategory, handleToggle, getAllProductCategories, faqDisplayChangeFunc,
        state, backdropOpen, toggleDrawer, products, setProductDetail, productDetail, GetProductsFirst,
        gettingChangeProducts, cartData, setCartData, categoryInfo, productsBySearch, featuredProducts, setProductBlog,
        brandSearch, SetBrandSearch, featuredProductsState, getBlogs, blogsToShow, setBlogsToShow, setBlogDetail, productBlog,
        GetSolutionData, solution, searchPro, Brands, checkBrands, array, dummy, setDummy, startLoading, EndLoading
    }}>
        {children}
    </GlobalContext.Provider>
}

export default MainContext;