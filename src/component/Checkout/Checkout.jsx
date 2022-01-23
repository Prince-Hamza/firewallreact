import { Grid } from '@material-ui/core'
import axios from 'axios';
import React from 'react'
import GeoData from './Geodata.json'
import { Hypnosis } from "react-cssfx-loading";
import Form from './Form'
import Form2 from './Form2'
import OrderBar from './OrderBar'

export default class Checkout extends React.Component {

    constructor() {
        super()
        this.state = {
            selectedCountry: "Sweden",
            States: ["Stockholm"],
            bankTransfer: true,
            paypal: false,
            nets: false,
            selectedPay: 'bankTransfer',
            netsOrdered: false,
            payView: '',
            overlayer: false
        }
    }


    switchPay = (e) => {
        this.setState({
            bankTransfer: false,
            paypal: false,
            nets: false
        })
        this.setState({ [`${e.target.value}`]: true, selectedPay: e.target.value })
    }

    componentDidMount = async () => {
        // alert(JSON.stringify(this.props.history.location.state))
    }

    onCountry = (e) => {
        this.setState({ selectedCountry: e.target.value })
        GeoData.countries.forEach((item) => {
            if (item.country === e.target.value) {
                this.setState({ States: item.states })
            }
        })

        // alert(this.state.States)
    }

    switchView = (url) => {
        // setPayView(url)
        this.setState({ payView: url })
    }

    switchOverlayer = () => {
        this.setState({ overlayer: this.state.overlayer ? false : true })
    }


    render() {
        if (this.state.payView === '') {
            return (
                <section  >

                    {this.state.overlayer &&
                        <section style={Styles.Overlayer} >
                            <div style={Styles.overlayerNested} >
                                <Hypnosis color="yellow" width="100px" height="100px" duration="2s" />
                            </div>
                        </section>
                    }




                    <Grid container style={{ display: 'flex', flexDirection: 'row' }} >

                        <Form />
                        <OrderBar Items={this.props.history.location.state} switchOverlayer={this.switchOverlayer} switchView={this.switchView} />

                    </Grid>

                    <Form2 />




                </section>
            )
        } else {
            return (
                <div>
                    <iframe style={Styles.netsView} title={"netsCheckout"} src={this.state.payView} frameborder="0">
                    </iframe>
                </div>
            )
        }
    }
}




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
        background: 'rgb(66,66,150)',
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
        marginLeft: '5vh',
        marginTop: '5vh',
        marginRight: '15vh'
    },

    productsBox: {
        width: '85%',
        height: '20%',
        backgroundColor: '#f1f1f1',
        marginTop: '5%',
        marginBottom: '5%',
        overflow: 'scroll'
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
        width: '450px',
        height: '300px',
        font: '13px times new roman',
        marginLeft: '8%'
    }

})