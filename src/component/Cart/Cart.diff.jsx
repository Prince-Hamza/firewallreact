import React, { useContext } from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { List, ListItem, Avatar, Typography } from '@material-ui/core'
// import { GlobalContext } from '../Context/Context'
import { useState } from 'react'
import PayWithPayPal from './PayWithPayPal'
import { Table, Card } from 'react-bootstrap'
import NordeaNetsCart from './NetsAndNorda'
import { useLocation } from "react-router-dom";
import { useEffect } from 'react'
import { Hypnosis } from "react-cssfx-loading";
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles(theme =>
    createStyles({
        root: {
            width: '100%',
            backgroundColor: theme.palette.background.paper,
            color: 'black'
        },
        inline: {
            display: 'inline'
        },
        listItem: {
            padding: theme.spacing(1, 0),
            justifyContent: 'flex-end'
        },
        total: {
            fontWeight: theme.typography.fontWeightBold,
            fontSize: theme.typography.fontSize * 2,
            color: 'red'
        }
    })
)

const Cart = () => {    const [overlayer, setOverLayer] = useState(false)

    const classes = useStyles({})
    const history = useHistory()

    // const { cartData, setCartData, dummy, setDummy } = useContext(GlobalContext)

    const [cartData, setCartData] = useState(JSON.parse(localStorage.getItem('cart')))
    const [dummy, setDummy] = useState([])

    const location = useLocation();


    const [isCheckout, setCheckout] = useState(false)
    const [paymentMethod, setPaymentMethod] = useState('nordea')
    const [value, setValue] = useState()
    const [checkedVal, setCheckedVal] = useState("nets")
    const [payView, setPayView] = useState('')


    console.log(dummy)
    // alert(cartData)
    let total = 0
    cartData &&
        cartData.forEach(item => {
            total += Number(item.price) * Number(item.count)
        })


    useEffect(() => {
        //  setCartData(location.state)
    }, [])

    const increment = product => {
        const _localData = JSON.parse(localStorage.getItem('cart'))
        console.log(_localData)
        let new_array = _localData
        new_array.forEach(item => {
            if (item.id === product.id) {
                item.count += 1
            }
        })
        localStorage.setItem('cart', JSON.stringify(new_array))
        setCartData(new_array)
    }

    const decrement = product => {
        const _localData = JSON.parse(localStorage.getItem('cart'))
        let new_array = _localData
        new_array.forEach(item => {
            if (item.id === product.id) {
                item.count -= 1
            }
        })
        localStorage.setItem('cart', JSON.stringify(new_array))
        setCartData(new_array)
    }
    const onChangeVal = (e) => {
        console.log(e.target.value);
        setValue(e.target.value)
        // alert(e.target.value)
        setCheckedVal(e.target.value)
    }

    const switchOverlayer = () => {
        setOverLayer(overlayer ? false : true)
    }

    const switchView = (url) => {
        setPayView(url)
    }

    if (payView === '') {
        return (
            <>
                <div className='px-4'>

                    {overlayer &&
                        <section style={Styles.Overlayer} >
                            <div style={Styles.overlayerNested} >
                                <Hypnosis color="yellow" width="100px" height="100px" duration="2s" />
                            </div>
                        </section>
                    }

                    <br /> <br />
                    {/* <Typography component='h2' variant='h6' color='secondary' gutterBottom>
                    Shopping Cart History
                </Typography> */}
                    <br />
                    <Table responsive>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartData &&
                                cartData.map((product, index) => {
                                    return (
                                        <tr style={{ cursor: 'pointer' }}>
                                            <td
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'space-evenly'
                                                }}
                                            >
                                                <i
                                                    class='fa fa-times'
                                                    aria-hidden='true'
                                                    onClick={e => {
                                                        let cartItems = JSON.parse(
                                                            localStorage.getItem('cart')
                                                        )
                                                        const filter = cartItems.filter(
                                                            item => item.id !== product.id
                                                        )
                                                        localStorage.setItem('cart', JSON.stringify(filter))
                                                        setCartData(filter)
                                                    }}
                                                ></i>
                                                <Avatar
                                                    alt='Product'
                                                    src={product.image && product.image[0]}
                                                />
                                            </td>
                                            <td>{product.name}</td>
                                            <td>{product.price} KR</td>

                                            <td>
                                                <span
                                                    onClick={() => increment(product)}
                                                    style={{
                                                        padding: '5px 10px',
                                                        border: '1px solid gray'
                                                    }}
                                                >
                                                    +
                                                </span>
                                                <span style={{ margin: '0px 1rem' }}>
                                                    {product.count}
                                                </span>
                                                <span
                                                    onClick={() => decrement(product)}
                                                    style={{
                                                        padding: '5px 10px',
                                                        border: '1px solid gray'
                                                    }}
                                                >
                                                    -
                                                </span>
                                            </td>
                                            <td>
                                                {(product.price * Number(product.count)).toFixed(2)} KR
                                            </td>
                                        </tr>
                                    )
                                })}
                        </tbody>
                    </Table>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row-reverse',
                            marginTop: '1.5rem'
                        }}
                    >
                        <Card style={{ width: 'auto' }}>
                            <Card.Body>
                                <Card.Title class='fw-bold '>Cart Totals</Card.Title>
                                <Card.Text>
                                    <Table>
                                        <tbody>
                                            <tr>
                                                <td class='fw-bold '>Subtotal</td>
                                                <td>{total.toFixed(2)} -KR</td>
                                            </tr>
                                            {/* <tr>
                                        <td>Shipping</td>
                                        
                                        
                                    </tr> */}
                                            <tr>
                                                <span class='d-block p-2 text-black fw-bold'>
                                                    {' '}
                                                    Shippinggy{' '}
                                                </span>
                                                <span style={{ fontSize: '12px' }} class='d-block p-2 text-black'>
                                                    <input
                                                        class='m-1'
                                                        type='radio'
                                                        value='Nets'
                                                        name='nets'
                                                        checked={checkedVal === "nets" ? true : false}
                                                        onChange={() => { setCheckedVal("nets") }}

                                                    />
                                                    Local pick from our office. Soina Business Park
                                                    Stockhoim
                                                </span>

                                                <span style={{ fontSize: '12px' }} class='d-block p-2 text-black'>
                                                    <input
                                                        class='m-1'
                                                        type='radio'
                                                        value='standardSweden'
                                                        checked={checkedVal === "standardSweden" ? true : false}
                                                        onChange={onChangeVal}

                                                    />
                                                    Standard shipping rate within sweden only:{' '}
                                                    <span class='text-danger fw-bold'>150.00 Kr </span>
                                                </span>

                                                <span style={{ fontSize: '12px' }} class='d-block p-2 text-black'>
                                                    <input
                                                        class='m-1'
                                                        type='radio'
                                                        value='standardEu'
                                                        checked={checkedVal === "standardEu" ? true : false}
                                                        onChange={onChangeVal}

                                                    />
                                                    Standard shipping rate to other European countries &
                                                    Scandinavia:{' '}
                                                    <span class='text-danger fw-bold'>150.00 Kr </span>
                                                </span>
                                                <span style={{ fontSize: '12px' }} class='d-block p-2 text-black'>
                                                    <input
                                                        class='m-1'
                                                        type='radio'
                                                        value={'free'}
                                                        checked={checkedVal === "free" ? true : false}
                                                        onChange={onChangeVal}
                                                        
                                                    />
                                                    Free Shipping - Choose this if you're buying software or license based product

                                                </span>
                                                <span style={{ fontSize: '14px' }}
                                                    class='d-block p-4 text-black fw-blod '>
                                                    Shipping Options will be updated during checkout.
                                                </span>
                                            </tr>
                                            <tr>
                                                <td class='fw-bold '>VAT 25%</td>
                                                <td>{(total * 0.25).toFixed(2)} -KR</td>
                                            </tr>
                                            <tr>
                                                <td class='fw-bold '>Total</td>
                                                <td>{(total + Number(total * 0.25)).toFixed(2)} -KR</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Card.Text>
                                {console.log('testshshsh ', cartData)}
                                <div className='d-flex justify-content-start mb-3'>
                                    {isCheckout ? (
                                        <>
                                            {/* <PayWithPayPal items={cartData} total={total} /> */}

                                            <NordeaNetsCart
                                                switchOverlayer={switchOverlayer}
                                                switchView={switchView}
                                                items={cartData}
                                                total={total}
                                                method={paymentMethod}
                                            />
                                        </>
                                    ) : (
                                        <button
                                            onClick={() => {
                                                //  setCheckout(true)
                                                history.push('/checkout', cartData)

                                            }}
                                            className='btn '
                                            style={{ backgroundColor: 'lightgreen' }}
                                        >
                                            Proceed To Checkout
                                        </button>
                                    )}
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <List className={classes.root}></List>
                </div>
            </>
        )
    } else {
        return (
            <div>
                <iframe style={Styles.netsView} title={"netsCheckout"} src={payView} frameborder="0">
                </iframe>
            </div>
        )
    }
}


export default Cart


const Styles = ({
    netsView: {
        position: 'absolute',
        left: '0%',
        top: '0%',
        width: '100%',
        height: '100%'
    },
    
})