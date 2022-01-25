import React, { useState } from 'react';
import { Row, Col } from "react-bootstrap";
import "./Featured.css";
import axios from 'axios'

const FeaturedSignup = () => {
    const [flag, setFlag] = useState(false)
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [customerType, setCustomerType] = useState('')


    const signup = async () => {
        const user = {
            email,
            pass,
            companyName,
            customerType
        }
        // alert(JSON.stringify(user))
        await axios.get(`https://woo-api-apicenter.herokuapp.com/api/signup?email=${email}&pass=${pass}`)
            .then(function (response) {

                console.log(JSON.stringify(response.data));
                if (response.data && response.data.uid) {
                    //alert(JSON.stringify(response.data))
                    alert('successfully created account')
                }

            })
            .catch(function (error) {

                alert("error.message", error.message);
            });
    }

    const signin = async () => {
        console.log(email, pass)
        const user = {
            email,
            pass
        }
        // alert(JSON.stringify(user))
        await axios.get(`https://woo-api-apicenter.herokuapp.com/api/signin?email=princehamzi.mine@gmail.com&pass=firewall`)
            .then(function (response) {
                // handle success
                console.log(JSON.stringify(response.data));
                if (response.data && response.data.uid) {
                    //alert(JSON.stringify(response.data))
                    alert('successfully logged in')
                }

            })
            .catch(function (error) {

                console.log("error.message", error.message);
            });
    }

    return (
        <div className="my-5" id="fsign">
            <section className="container">
                <Row>
                    <Col lg={8} className="text-center">
                        <span className=" h4  " style={{ borderBottom: "3px solid #dc3545", fontFamily: 'Poppins', color: '#575757' }}>Featured Brands</span>

                        <div className="brand-img-div my-1  "></div>
                    </Col>

                    <Col style={{ height: '20%' }} className="text-center py-3 back-color" lg={4}>
                        <div className="h-100 py-4 bg-white">
                            <div className="d-flex justify-content-around mb-5">
                                <span style={{ color: '#575757' }} className={!flag ? "account-active account" : "account"} onClick={() => setFlag(false)} >Login</span>
                                <span style={{ color: '#575757' }} className={flag ? "account-active account" : "account"} onClick={() => setFlag(true)} >Signup</span>
                            </div>

                            {flag ?
                                <div className="d-flex flex-column py-4 px-4 account-container">
                                    <input required className="input-account my-2" placeholder=" email" type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
                                    <input required className="input-account my-2" placeholder=" password" type="password" name="password" value={pass} onChange={(e) => setPass(e.target.value)} />
                                    <input required className="input-account my-2" placeholder=" company name" type="text" name="companyName" onChange={(e) => setCompanyName(e.target.value)} />
                                    <br />
                                    <div style={{ ...Styles.column }} >
                                        <div style={{ ...Styles.row, ...Styles.start }} >
                                            <input style={{ marginRight: '5%' }} value={customerType} type="radio" className='mt-1 mr-3' name="customerType" onChange={(e) => setCustomerType('b2b')} />
                                            <label  >business to business</label>
                                        </div>
                                    </div>
                                    <br />
                                    <div>
                                        <div style={{ ...Styles.row, ...Styles.start }} >
                                            <input style={{ marginRight: '5%' }} type="radio" className='mt-1' name="customerType" onChange={(e) => setCustomerType(e.target.value)} />
                                            <label >business to customer</label>
                                        </div>
                                    </div>

                                    <br />


                                    <div className="d-flex text-muted font-smaller justify-content-start">
                                        <small>have you already account?</small>
                                    </div>
                                    <br />

                                    <button style={{ fontFamily: 'Poppins' }} className="btn btn-danger mt-3 py-2" onClick={signup}>Sign up</button>

                                </div>
                                :
                                <div className="d-flex flex-column py-4 px-4 account-container">
                                    <input required className="input-account my-2" placeholder=" email" type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
                                    <input required className="input-account my-2" placeholder=" password" type="password" name="password" onChange={(e) => setPass(e.target.value)} />


                                    <div className="d-flex text-muted font-smaller justify-content-end">
                                        <small>Forget Password</small>
                                    </div>
                                    <button style={{ fontFamily: 'Poppins' }} className="btn btn-danger mt-3 py-2" onClick={signin}>Login</button>

                                </div>
                            }
                        </div>
                    </Col>
                </Row>
            </section>
        </div>
    )
}

export default FeaturedSignup;



const Styles = ({
    center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    start: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    row: {
        flexDirection: 'row'
    },
    column: {
        flexDirection: 'row'
    },

})