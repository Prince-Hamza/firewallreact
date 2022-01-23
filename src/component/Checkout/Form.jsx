import React from 'react'
import { Grid } from '@material-ui/core'
import GeoData from './Geodata.json'

class Form extends React.Component {
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
    render() {
        return (

            <Grid item style={Styles.Form} xs={9} sm={6} bg={12} >
                <h5> Billing Details </h5>
                <br />

                <section style={{font:'14px poppins'}} >

                    <Grid container style={{ flexDirection: 'column' }} >
                        <Grid container flexDirection={"row"}  >
                            <Grid item >
                                <p>  First Name</p>
                                <input type="text" style={{ ...Styles.Input, width: '40vh' }} />
                            </Grid>

                            <Grid >
                                <p>  Last Name</p>
                                <input type="text" style={{ ...Styles.Input, width: '40vh' }} />
                            </Grid>

                        </Grid>
                    </Grid>

                    <div  >
                        <p>  company name (optional) </p>
                        <input type="text" style={Styles.Input} />
                    </div>

                    <div >
                        <p>country / region</p>
                        <select style={Styles.Input} value={this.state.selectedCountry} onChange={(e) => { this.onCountry(e) }} >

                            {GeoData.countries.map((item, index) => {
                                return (
                                    <option key={index} value={item.country}> {item.country} </option>
                                )
                            })}

                        </select>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column' }} >
                        <p> Street Address </p>
                        <input type="text" placeholder='street address home number' style={Styles.Input} />
                        <input type="text" placeholder='Apartment suite unit' style={Styles.Input} />
                    </div>


                    <div>
                        <p>Town / City</p>
                        <input type="text" style={Styles.Input} />
                    </div>


                    <div >
                        <p> city / states </p>
                        <select style={Styles.Input} value={this.state.States} onChange={(e) => { this.onCountry(e) }} >

                            {this.state.States.map((item, index) => {
                                return (
                                    <option key={index} value={item}> {item} </option>
                                )
                            })}

                        </select>
                    </div>



                    <div>
                        <p> postcode / zip </p>
                        <input type="text" style={Styles.Input} />
                    </div>

                    <div>
                        <p> Phone </p>
                        <input type="text" style={Styles.Input} />
                    </div>

                    <div>
                        <p> Email Address </p>
                        <input type="email address" style={Styles.Input} />
                    </div>


                    <div style={{ width: '90%', border: 'none 1px', display: 'flex', flexDirection: 'row' }} >
                        <input type="checkbox" checked={true} style={{ marginTop: '1%', marginRight: '2%' }} />
                        <p style={{ color: '#DD0004' }} >
                            Informativ | Kompakt | Korrekt information. Information om våra produkter, ny teknik och helt nya erbjudanden och kampanjer. Vi kommer att hålla dig uppdatering via e-post! Prenumerera nu.
                          </p>
                    </div>

                    <br />
                    <br />
                    <br />
                    <br />
                    </section>

            </Grid>

        )
    }
}

export default Form



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
        width: '500px',
        height: '300px',
        font: '13px times new roman',
        marginLeft: '8%'
    }

})