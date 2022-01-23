import React from 'react'


export default class QuoteBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            bizCom: false,
            invCom: true,
            text: 'submit'
        }
    }

    Switch = () => {
        this.setState({ bizCom: !this.state.bizCom })
        this.setState({ invCom: !this.state.invCom })
    }

    onSubmit = () => {
        this.setState({text: 'Email sent to FirewallForce'})
        setTimeout(() => { this.props.hide() }, 2000)
    }
    render() {
        return (
            <section style={Styles.quoteBox} >

                <br />
                <br />


                <h6> {this.props.productDetail.title || this.props.productDetail.name} </h6>

                {/* <img src="" alt="" /> */}
                <p style={Styles.productTitle}> {this.props.productDetail.name} </p>
                <input type="text" placeholder="username" />
                <input type="text" placeholder='Type Your Email Here' />
                <br />
                <br />


                <p style={{ color: 'lightgreen' }} > Enter Your Quote</p>
                <input type="number" placeholder='1' />
                <input type="text" placeholder='target price' />

                <br />

                <div style={Styles.customerType} >
                    <div style={Styles.ctypeSelect} >
                        <input type="radio" checked={this.state.bizCom} onChange={() => { this.Switch() }} />
                        <p style={Styles.typeText} > Business Customer </p>
                    </div>
                    <div style={Styles.ctypeSelect} >
                        <input type="radio" checked={this.state.invCom} onChange={() => { this.Switch() }} />
                        <p style={Styles.typeText} > Individual Customer </p>
                    </div>
                </div>


                <button
                    style={{...Styles.submit , fontSize: '10px'}}
                    onClick={() => { this.onSubmit() }} >
                    {this.state.text}
                </button>
                <br />
                <br />


            </section>)
    }
}



const Styles = ({



    quoteButton: {
        width: '140px',
        height: '40px',
        //  background: 'rgb(118,118,122)',
        background: 'linear-gradient(74deg, rgba(118,118,122,1) 0%, rgba(118,118,122,1) 100%)',
        color: 'white',
        marginRight: '8%',
        border: 'none',
        borderRadius: '5px'
    },

    quoteBox: {
        position: 'absolute',
        top: '35%',
        left: '33.33%',
        width: '35%',
        height: '65%',
        boxShadow: '0px 0px 8px 1px #222',
        backgroundColor: 'rgb(69,70,70)',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    productTitle: {
        color: 'lightgreen'
    },
    customerType: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    ctypeSelect: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '200px'
    },
    typeText: {
        marginLeft: '3%'
    },
    submit: {
        width: '50%',
        height: '5%',
        backgroundColor: 'lightgreen',
        color: 'green',
        border: 'none'
    }


})

