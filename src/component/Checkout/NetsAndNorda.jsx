import React, { Component } from "react";
import { ProgressBar, Jumbotron, Button, Form } from "react-bootstrap";
import axios from "axios";

export default class NordeaNetsCart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Products: [{ id: 180064, name: 'SUPER MICRO Computer MBD-A1SRM-2558F', price: 111 }, { id: 256416, name: 'Gigabyte Technology GB-BRI3-8130', price: 110 }],
            info: [],
            showButtons: false
        }
    }
    componentDidMount = () => {
        console.log(`total :: ${this.props.total}`)
        console.log(`item :: ${JSON.stringify(this.props.items)}`)
        // if (this.props.method == 'nordea')   this.nordeaCheckout(this.props.items) 
        // if (this.props.method == 'nets')   this.netsCheckout(this.props.items)
        this.setState({ info: this.props.items, showButtons: true })
        console.log("products info saved")

    }

    // componentDidUpdate = () => {
    //   if (this.props.method == 'nordea')   this.nordeaCheckout(this.props.items) 
    //   if (this.props.method == 'nets')   this.netsCheckout(this.props.items)

    // }

    nordeaCheckout = () => {
        var postArray = []
        var App = this
        this.state.info.forEach(pro => {
            postArray.push({ productId: pro.id, quantity: pro.count })
        });

        var data = JSON.stringify(postArray);

        console.log(`Nordea Data :: ${data}`)

        var config = {
            method: 'post',
            url: 'https://firewallforce.se/wp-json/wc/v3/nordea',
            headers: {
                'Content-Type': 'application/json'
            },
            timeout: 0,
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(`nordea resp :: ${JSON.stringify(response.data)}`);
                // window.location.replace(response.data.nordeaCheckout)
                App.props.switchView(response.data.nordeaCheckout)
            })
            .catch(function (error) {
                console.log(error)
            });

    }


    netsCheckout = (Products) => {



        const App = this
        App.props.switchOverlayer()

        var postArray = []

        this.state.info.forEach(pro => {
            postArray.push({ productId: pro.id, quantity: pro.count, price: pro.price })
        });
        var data = JSON.stringify(postArray)
        console.log(`Nets Data :: ${data}`)
        // alert(`nets data :: ${data}`)


        var config = {
            method: 'post',
            url: 'https://woo-api-apicenter.herokuapp.com/api/nets?',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                // alert(`success :: ${JSON.stringify(response.data)}`)
                App.props.switchOverlayer()
                console.log(JSON.stringify(response.data))
                //window.location.replace(response.data.hostedPaymentPageUrl)
                App.props.switchView(response.data.hostedPaymentPageUrl)

            })
            .catch(function (error) {
                App.props.switchOverlayer()
                alert(error)
                console.log(error);
            })


    }


    render() {
        // if (this.state.showButtons) {
        return (
            <div style={Styles.Theme}>
                <div style={Styles.List} >
                    {this.state.Products.map((product) => <Item key={Math.random()} Product={product} />)}
                </div>

                <div >
                    {/* <button style={{ ...Styles.Button, top: '70%', marginTop:'10px' }} onClick={() => { this.nordeaCheckout(this.state.Products) }} > checkout with Nordea </button> */}
                    <button style={{ ...Styles.Button, marginTop: '10px', backgroundColor: 'lightgreen' }} onClick={() => { this.netsCheckout(this.state.Products) }} > Checkout With Nets </button>
                </div>
                {/* <CheckoutButtons Products={this.state.Products} /> */}
            </div>

        )
        //}

        //        return null


    }
}



class Item extends Component {
    render() {
        return (
            <div style={Styles.Item} key={Math.random()} >
                {/* <img src="" alt="" />
                <p style={{ marginRight: '250px' }} > {this.props.Product.name} </p>
                <p> SEK {this.props.Product.price} </p> */}
            </div>)
    }
}



class CheckoutButtons extends Component {
    nordeaCheckout = (Products) => {

        // var data = JSON.stringify(Products);

        // var config = {
        //     method: 'post',
        //     url: 'https://firewallforce.se/wp-json/wc/v3/nordea',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     data: data
        // };

        // axios(config)
        //     .then(function (response) {
        //         console.log(JSON.stringify(response.data));
        //     })
        //     .catch(function (error) {
        //         console.log(error)
        //     });

    }



    netsCheckout = (Products) => {
        // var data = JSON.stringify(Products)

        // var config = {
        //     method: 'post',
        //     url: 'https://woo-api-apicenter/api/nets?',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     data: data
        // };

        // axios(config)
        //     .then(function (response) {
        //         console.log(JSON.stringify(response.data));
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });

    }

    render() {
        return (
            <div >
                <button style={{ ...Styles.Button, top: '70%', marginTop: '10px' }} onClick={() => { this.nordeaCheckout(this.props.Products) }} > checkout with Nordea </button>
                <button style={{ ...Styles.Button, top: '80%', marginTop: '10px', backgroundColor: 'lightgreen' }} onClick={() => { this.netsCheckout(this.props.Products) }} > checkout with Nets </button>
            </div>
        )
    }
}


const Styles = ({

    List: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    Item: {
        width: '100%',
        height: '100px',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '3px',
        cursor: 'pointer'
    },
    Button: {
        position: 'absolute',
       // left: '1%',
        top: '175%',
        marginRight: '15%',
        width: '200px',
        height: '50px',
        cursor: 'pointer',
        //margin: '15px',
        backgroundColor: 'lightgreen',
        color: 'white',
        border: 'none'

    },
    // Button: {
    //     position: 'absolute',
    //     left: '1%',
    //     width: '200px',
    //     height: '50px',
    //     cursor: 'pointer',
    //     margin: 10,
    //     backgroundColor: '#dc3545',
    //     color: 'white',
    //     border: 'none'
    // },
})