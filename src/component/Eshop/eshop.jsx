import React from 'react'
import Container from 'react-bootstrap/Container';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import { column1, column2, column3, column4, column5, column6, allItems, set36 } from './info'
var Columns = [column1, column2, column3, column4, column5, column6]



const detectMob = () => {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];

    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}




export default class Eshop extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: ['used', 'new'],
            breax: []
        }
        //   alert(this.props.history)
        // this.props.history.push('/detail')
    }

    componentWillMount = () => {
        document.title = `FirewallForce eShop | Kopa IT Produkter , Routrar`
    }

    componentDidMount = () => {
        for (let n = 1; n <= 55; n++) {
            this.state.breax.push(n)
        }
        this.setState({ breax: this.state.breax })
        // document.getElementById('footer-container').style.display = 'none'
    }

    validateName = (name) => {
        name = name.substring(0, name.length - 4)
        name = name.substring(0, 1).toUpperCase() + name.substring(1, name.length)
        name = name.includes('Unified') ? "Unified communication" : name
        return name
    }

    validateLink = (name) => {
        name = name.substring(0, name.length - 4)
        return name.split(' ').join('-')
    }

    render() {
        let array = [1, 2, 4, 5, 6, 7, 8, 9]
        let columns = [column1, column2, column3, column4, column5, column6]
        return (
            <section  >

                <br />
                <br />

                <section style={Styles.Heading} >
                    <p> Browse By Brands | Browse By Categories </p>
                </section>


                {/* 
                {!detectMob() &&
                    <section>

                        <Grid container style={Styles.GridContainer} spacing={12} >
                            {allItems.map((item) => {
                                return (
                                    <Grid item xs={2} sm={2} lg={2} md={2}>
                                        <img
                                            style={{
                                                width: '100%',
                                                height: '55%'
                                            }} src={require(`../../assets/icons_for_categories/icons/${item}`).default} alt="" />
                                        <div style={{ ...Styles.iconTextWrap, font: item.length <= 30 ? '12px poppins' : '11px poppins'  }} >
                                            <p > {this.validateName(item)}  </p>
                                        </div>
                                    </Grid>

                                )
                            })}
                        </Grid>

                        <Grid container style={{ ...Styles.GridContainer, top: '350%' }} spacing={12} direction={'column'} >
                            {set36.map((item) => {
                                return (
                                    <Grid item xs={2} sm={2} lg={2} md={2} >
                                        <img style={{ width: '100%', height: '55%' }} src={require(`../../assets/icons_for_categories/icons/${item}`).default} alt="" />
                                        <div style={{ ...Styles.iconTextWrap, font: item.length <= 30 ? '12px poppins' : '11px poppins' }} >
                                            <p > {this.validateName(item)}  </p>
                                        </div>
                                    </Grid>
                                )
                            })}
                        </Grid>

                    </section>

                }
 */}

                {
                    detectMob() &&
                    <section style={{ ...Styles.row, ...Styles.center }} >
                        <section style={{ ...Styles.center, ...Styles.column }} >
                            {
                                allItems.map((item) => {
                                    return (
                                        <div style={{ ...Styles.center, ...Styles.column }} >
                                            <img
                                                style={{ width: '100%', height: '55%' }}
                                                src={require(`../../assets/icons_for_categories/icons/${item}`).default}
                                                alt=""
                                                onClick={() => { this.props.history.push(`/product-category/${this.validateLink(item)}`) }}

                                            />
                                            <div style={{ ...Styles.iconTextWrap, font: item.length <= 30 ? '12px poppins' : '11px poppins' }} >
                                                <p > {this.validateName(item)}  </p>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </section>


                        <section style={{ ...Styles.center, ...Styles.column }} >
                            {
                                set36.map((item) => {
                                    return (
                                        <div style={{ ...Styles.center, ...Styles.column }} >
                                            <img style={{ width: '100%', height: '55%' }}
                                                src={require(`../../assets/icons_for_categories/icons/${item}`).default}
                                                alt=""
                                                onClick={() => { this.props.history.push(`/product-category?/${this.validateLink(item)}`) }}
                                            />
                                            <div style={{ ...Styles.iconTextWrap, font: item.length <= 30 ? '12px poppins' : '11px poppins' }} >
                                                <p > {this.validateName(item)}  </p>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </section>


                    </section>
                }











                {!detectMob() &&

                    <section style={Styles.GridContainer} >

                        {Columns.map((column) => {
                            return (
                                <section style={Styles.columnContainer}>
                                    {column.map((item) => {
                                        return (
                                            <div style={Styles.GridItem} >
                                                <div style={{ width: '120px', height: '120px' }} >
                                                    <img
                                                        style={{ width: '100%', height: '100%' }}
                                                        src={require(`../../assets/icons_for_categories/icons/${item}`).default}
                                                        alt=""
                                                        onClick={() => { this.props.history.push(`/product-category/${this.validateLink(item)}`) }}
                                                    />
                                                </div>
                                                <div style={Styles.iconTextWrap} >
                                                    <p style={{ font: '12px poppins' }} > {this.validateName(item)} </p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </section>
                            )
                        })}

                    </section>

                }


                {this.state.breax.map(() => {
                    return (
                        <section>
                            <br />
                            <br />
                        </section>
                    )
                })}
            </section>
        )
    }
}





const Styles = ({

    Container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '500vh',
        marginTop: '20%',
        marginRight: '8%'
    },

    GridContainer: {
        position: 'absolute',
        top: '42%',
        left: detectMob() ? '2%' : '5.5%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: detectMob() ? '100.5%' : '94%',
        height: detectMob() ? '390%' : '300%',
        //  border: 'dashed'
    },
    columnContainer: {
        // border: 'dashed',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '5%'
    },
    GridItem: {
        // width: '12%',
        // height: '8%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: '3.5%',
        // border: 'dashed',

    },

    center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    column: {
        display: 'flex',
        flexDirection: 'column'
    },

    iconContainer: {
        border: 'solid 1px #222',
        // marginRight:'2%',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        font: '8px poppins',
    },
    iconTextWrap: {
        width: '100%',
        height: '40px',
        // border: 'dashed',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // marginLeft: '15%'
    },

    Heading: {
        position: 'absolute',
        top: detectMob() ? '24%' : '37%',
        left: '0%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        font: '18px poppins'
    },
    BarContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    Bar: {
        width: '100px',
        height: '20px',
        borderRadius: '50px',
        backgroundColor: 'lightgray',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },

    GridColumn: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
})