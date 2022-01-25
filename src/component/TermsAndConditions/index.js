import React from 'react';
import { useEffect } from 'react';



const Index = () => {


    useEffect(()=>{

        var footer = document.getElementById('footer-container')
        var header = document.getElementById('header-top')
    

        setInterval(()=>{

            if (header !== null) header.style.display = 'none'
            if (footer !== null) footer.style.display = 'none'
        
        },1000)

    })

    return (
        <div>
            <iframe title="Terms And Conditions" src="https://shop.firewallforce.se/terms-and-conditions/" style={{ width: '100%', position: 'absolute', minHeight: '-webkit-fill-available' }} ></iframe>
        </div>
    )
}

export default Index;