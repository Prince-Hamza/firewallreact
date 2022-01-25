import React from 'react'
import { Grid } from '@material-ui/core'
import NordeaNetsCart from './NetsAndNorda';
import PayWithPayPal from './PayWithPayPal';

class OrderBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedCountry: "Sweden",
            States: ["Stockholm"],
            bankTransfer: true,
            paypal: false,
            nets: false,
            selectedPay: 'bankTransfer',
            netsOrdered: false,
            paypalOrdered: false,
            payView: '',
            overlayer: false,
            total: 0,
            cartInfo: {}
        }
        this.setState({ total: props.Items.total, cartInfo: props.Items.cartInfo })
        
    }

    componentDidMount = () => {
        // alert(`total :: ${this.props.Items.total}`)

        // alert(JSON.stringify(this.props.location))
        // this.props.items &&
        //     this.props.items.forEach(item => {
        //         this.state.total += Number(item.price) * Number(item.count)
        //         this.setState({ total: this.state.total })
        //     })
        // alert(this.state.total)
    }

    switchPay = (e) => {
        this.setState({
            bankTransfer: false,
            paypal: false,
            nets: false
        })
        this.setState({ [`${e.target.value}`]: true, selectedPay: e.target.value })
    }


    onOrder = () => {
        // alert(this.state.selectedPay)

        if (this.state.selectedPay === 'nets') {
            this.setState({ netsOrdered: true })
        }


        setTimeout(() => {
            if (this.state.selectedPay === 'nets') {
            //    document.getElementById("netsPayButton").click()
            this.setState({ netsOrdered: true })

            }
            else if (this.state.selectedPay === 'paypal') {
                // alert("Paypal")
                this.setState({ paypalOrdered: true })
            }

        }, 1000)

    }


    switchView = (url) => {
        // setPayView(url)
        this.props.switchView(url)
    }

    switchOverlayer = () => {
        this.props.switchOverlayer()
    }


    render() {
        return (

            <Grid container item xs={1} sm={4} bg={12} direction='column'>


                <br />
                <br />
                <br />


                {this.props.Items &&
                    <section style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start' }} >
                        <div style={Styles.productsBox} >
                            {/* {this.props.Items.map((item) => {
                                return (
                                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginLeft: '0.3%', marginBottom: '0.3%', marginTop: '0.3%' }} >
                                        <img width={"30%"} height={"70px"} src={item.image[0]} alt={item.image[0]} />
                                        <p style={{ font: '12px arial', marginTop: '5%' }} >  {item.price} </p>
                                    </div>
                                )
                            })} */}
                        </div>
                    </section>
                }


                <div style={{ display: 'flex', flexDirection: 'row' }} >
                    <h6 style={{ marginRight: '7%' }} > Subtotal </h6>
                    <p> 0.00 </p>
                </div>


                <div style={{ display: 'flex', flexDirection: 'row' }} >
                    <h6 style={{ marginRight: '7%' }} > Total </h6>
                    <p> 0.00 </p>
                </div>


                <br />


                <section style={Styles.bankTransfer} >
                    <div style={{ display: 'flex', flexDirection: 'row' }} >
                        <input style={{ marginRight: '5%', marginTop: '1%' }} type="radio" checked={this.state.bankTransfer} value="bankTransfer" onChange={(e) => { this.switchPay(e) }} />
                        <p>bank transfer</p>
                    </div>

                    <div style={Styles.bankTransferPara} >
                        <p>  Make your payment directly into our bank account. </p>
                        <p>  Please use your Order  ID as the payment reference. Your order will not be executed until we receive payment receipt from you.</p>
                        <p>  Following are the bank details:    </p>
                        <p>  Bankgironummer: 5663-0502   </p>
                        <p>  NORDEA BANK AB (PUBL)  </p>
                        <p>  Account Name: FirewallForce Nordic AB </p>
                        <p>  IBAN: SE1830000000011953158269 </p>
                        <p> BIC / Swift: NDEASESS </p>
                    </div>
                </section>
                <br />

                <section >
                    <div style={Styles.checkBoxesContainer} >
                        <input style={{ marginTop: '1%' }} type="radio" checked={this.state.nets} value="nets" onChange={(e) => { this.switchPay(e) }} />
                        <p style={{ marginLeft: '3%' }} > Nets Pay </p>
                        <img src="" alt="" />
                    </div>
                    <div style={Styles.checkBoxesContainer} >
                        <input style={{ marginTop: '1%' }} type="radio" checked={this.state.paypal} value="paypal" onChange={(e) => { this.switchPay(e) }} />
                        <p style={{ marginLeft: '3%' }} >Paypal </p>
                        <img src="" alt="" />
                    </div>
                </section>

                {/* <div style={{width:'55%' , height:'15%' , overflow:'hidden' , font:'9px arial'}} >
            <p>
                Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
            </p>
        </div> */}

                <div style={{ display: 'flex', flexDirection: 'row' }} >
                    <input type="checkbox" style={{ marginTop: '1%' }} />
                    <div style={Styles.terms} >
                        <p> I have read and agree to the website terms and conditions  </p>
                    </div>
                </div>


                <button style={Styles.orderButton} onClick={() => { this.onOrder() }} >
                    Place Order
                </button>

                {this.state.paypalOrdered &&

                    <PayWithPayPal items={this.props.Items.cartInfo} total={this.props.Items.total} />
                }

                {
                    this.state.netsOrdered &&
                    <NordeaNetsCart items={this.props.Items.cartInfo} switchView={this.switchView} switchOverlayer={this.switchOverlayer} />
                }


            </Grid>

        )
    }
}

export default OrderBar



const Styles = ({
    netsView: {
        position: 'absolute',
        left: '0%',
        top: '0%',
        width: '100%',
        height: '100%'
    },
    Overlayer: {
        position: 'absolute',
        top: '0px',
        left: '0px',
        width: '100%',
        height: '200%',
        // background: 'rgb(66,66,150)',
        background: 'linear-gradient(74deg, rgba(66,66,150,0.773546918767507) 0%, rgba(133,133,207,0.773546918767507) 100%)',
        zIndex: 1,

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    overlayerNested: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50%',
        width: '25%',
    },
    Input: {
        width: '100%',
        height: '5vh',
        backgroundColor: '#f1f1f1',
        border: 'none',
        borderRadius: '5px',
        marginRight: '2vh',
        marginBottom: '30px'
    },
    Form: {
        // width:'50%',
        marginLeft: '5vh',
        marginTop: '5vh',
        marginRight: '15vh',
        border: 'dashed'
    },

    productsBox: {
        width: '310px',
        height: '200px',
        backgroundColor: '#f1f1f1',
        marginBottom: '5%',
        overflow: 'scroll',

    },
    bankTransferSection: {

    },
    checkBoxesContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    orderButton: {
        width: '45%',
        height: '5%',
        backgroundColor: '#DD0004',
        border: 'none'
    },
    terms: {
        width: '80%',
        height: '2%',
        marginLeft: '2%'
    },
    bankTransferPara: {
        width: '500px',
        height: '300px',
        font: '13px times new roman',
        marginLeft: '8%'
    }

})