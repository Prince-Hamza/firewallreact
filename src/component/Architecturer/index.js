import React, {useEffect, useContext} from 'react';
import HeroSection from './Architect/HeroSection';
import Tabs from './Architect/Tabs';
import CardsSlider from "../Home/SliderCards/Cards";
import Request from "./Architect/Request";
import { GlobalContext } from '../Context/Context';
const Index = () => {
    const {GetSolutionData, solution}=useContext(GlobalContext)

    console.log("rops", solution)
    useEffect(() => {
      GetSolutionData()
    }, [])
    return (
        <div>
            <HeroSection />
            <Tabs solution={solution}/>
            <CardsSlider heading={false} />
            {/* <Request /> */}
        </div>
    )
}

export default Index;
