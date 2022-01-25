import React from 'react';

const index = () => {
    var footer = document.getElementById('footer-container')
    var header = document.getElementById('header-top')

    if (header) header.style.display = 'none'
    if (footer) footer.style.display = 'none'

    return (
        <div>
            <iframe title="Terms And Conditions" src="https://shop.firewallforce.se/terms-and-conditions/" style={{ width: '100%', position: 'absolute', minHeight: '-webkit-fill-available' }} ></iframe>
        </div>
    )
}

export default index;