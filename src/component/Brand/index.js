import React, { useContext, useEffect, useState } from 'react';
import HeroSection from './HeroSection';
import ListItems from './ListItems';
import FeaturedProduct from './FeaturedProduct';
import { GlobalContext } from "../Context/Context";
import axios from 'axios';

const Index = () => {
    document.title = `Vara varumarken | strategiska partners`

    // const { GetProductsFirst } = useContext(GlobalContext);
    const [pro, setPro] = useState([])

    useEffect(() => {
        async function info() {
            const resp = await axios.get(`https://shop.firewallforce.se/wp-json/wc/v3/products?page=2&per_page=45&consumer_key=ck_42a75ce7a233bc1e341e33779723c304e6d820cc&consumer_secret=cs_6e5a683ab5f08b62aa1894d8d2ddc4ad69ff0526`)
            setPro(resp.data)
        }
        info()
    }, [])

    return <React.Fragment>
        <HeroSection />
        <FeaturedProduct products={pro} />
        <ListItems />
    </React.Fragment>
}

export default Index;