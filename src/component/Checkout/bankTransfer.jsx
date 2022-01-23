
import React from 'react'
import info from './bankOrder.json'

export default class BankTransfer extends React.Component {

    render() {
        return (
            <section style={{ marginLeft: '3%' , font:'14px poppins' }} >
                <br />
                <br />

                <p> {info.thanks} </p>

                <img src={require('../../assets/checkout/banner.jpeg').default} alt="" />
                <br />
                <br />

                <p> {info.para} </p>

                <br />

                <h4>
                    Our Bank Details
                </h4>

                <br />

                <div style={{ ...Styles.row, ...Styles.center }}>
                    {info.bankDetails.map((item) => {
                        return (
                            <div>
                                <p> {item.key} </p>
                                <h6> {item.value} </h6>
                            </div>
                        )
                    })}
                </div>

                <br />
                <br />

            </section>
        )
    }

}

const Styles = ({
    row: {
        display: 'flex',
        flexDirection: 'row'
    },
    center: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    }
})