import React, { useContext, useEffect } from 'react';
import HeroSection from './HeroSection';
import ListItems from './ListItems';
import FeaturedProduct from './FeaturedProduct';
import { GlobalContext } from "../Context/Context";

const Index = () => {
    const { GetProductsFirst } = useContext(GlobalContext);

    useEffect(() => {
        GetProductsFirst();
    }, [])

    return <React.Fragment>
        <HeroSection />
        <FeaturedProduct />
        <ListItems />
    </React.Fragment>
}

export default Index;