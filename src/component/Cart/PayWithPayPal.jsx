import React, { useState, useRef, useEffect } from 'react';

const PayWithPayPal = ({ items, total }) => {
    const [paidFor, setPaidfor] = useState(false);
    const [error, setError] = useState(null);
    const PayPalRef = useRef();

    useEffect(() => {
        // window.addEventListener('load', function () {
        //     alert('hello!');
        // }, false);


        window.paypal.Buttons({
            createOrder: (data, actions) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [{
                        description: "Firewall Force Payment",
                        amount: {
                            currency: 'KR',
                            value: total.toFixed(2)
                        }
                    }]
                })
            },
            onApprove: async (data, actions) => {
                alert("approve")
                await actions.order.capture()
                setPaidfor(true)
            },
            onError: err => {
                alert(err)
                setError(err);
            }
        }).render(PayPalRef.current)



    }, [])

    if (paidFor) return <h1>Thanks for purchasing...!</h1>
    if (error) return <h1>Error in payment processing...!</h1>
    return (<div ref={PayPalRef}></div>);
}

export default PayWithPayPal
