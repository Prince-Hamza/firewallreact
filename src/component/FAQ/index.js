import React, { useState } from 'react';
import Hero from "./FaqComp/Hero";
import Tabs from './FaqComp/Tabs';
import Detail from './FaqComp/Detail';
import Reviews from "../Home/ReviewsComp/Reviews";
import ContactCusSupp from './FaqComp/ContactCusSupp';
import SearchFAQ from './FaqComp/SearchFAQ';

const Index = () => {
    document.title = `Kundservice | Faq's | FranBestallnings guide`

    const [faqNum, setFaqNum] = useState("one")

    const sendFaqNum = (num) => {
        setFaqNum(num)
    }

    return (
        <div>
            <Hero />

            <Tabs switchArticle={sendFaqNum} />
            <Detail faqNum={faqNum} />
            <SearchFAQ />
            <ContactCusSupp />
            <Reviews />
        </div>
    )
}

export default Index;