import React from 'react';
import Carousel from './CarouselGallery/Carousel';
import Popularcategory from './PopularCategory/Popularcategory';
import Services from './ServicesComp/Services';
import Card from "./SliderCards/Cards";
import Natvark from './Natvark/Natvark';
import Reviews from './ReviewsComp.old/Reviews';
import Methods from './Methods/Methods';
import FeaturedSignup from './FeaturedBrandAndSignup/FeaturedSignup';
import FeaturedProduct from '.././Brand/FeaturedProduct'
import { useEffect , useState } from 'react'
import axios from 'axios';

const Index = () => {

    const [pro, setPro] = useState([])

    useEffect(() => {
        
    const getItScopeInfo = async (product) => {
        if (!product.sku.includes('/')) {
            var pro = await axios.get(`https://woo-api-apicenter.herokuapp.com/api/itScopeProduct?sku=${product.sku}`)

            if (product.sku === '60C30') {
                alert(`images of ${product.sku}  ::  ${JSON.stringify(pro.data)}`)
            }

            product.images = pro.data.images
            product.primaryImage = pro.data.primaryImage
            product.attributes.forEach((attr, index) => {
                if (attr.name == 'Html Specs') delete product.attributes[index]
            })

            product.attributes.push({ name: "Html Specs", options: [pro.data.htmlSpecs] })

            return product


        } else {
            return { images: [], htmlSpecs: '' }
        }


    }


    const getItScopeImages = async (Products) => {  // brand , count , products

        var newPros = Products.map((product) => {
            return getItScopeInfo(product)
        })

        var resp = await Promise.all(newPros)

        return resp

    }

        async function info() {
            const resp = await axios.get(`https://woo-api-apicenter.herokuapp.com/api/mostOrdered`)
            const piccyPros = await getItScopeImages(resp.data)
            setPro(piccyPros)
        }
        info()
    }, [])

    return (
        <div>
            <Carousel />
            <Popularcategory />
            <FeaturedProduct products={pro} />
            <Services />
            <Natvark />
            {/* <Card /> */}
            <Reviews />
            <Methods />
            <FeaturedSignup />
        </div>
    )
}

export default Index
