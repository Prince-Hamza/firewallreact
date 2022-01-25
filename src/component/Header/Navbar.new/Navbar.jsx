import React, { useContext } from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../Context/Context";
import Grid from "@material-ui/core/Grid";
// import Paper from "@material-ui/core/Grid";
import { useEffect, useState } from 'react';

const NavbarComp = (props) => {
    // const [catInfo, setCatInfo] = useState([])
    const [menuShow, setMenuShow] = useState(false)
    const [tabColor, setTabColor] = useState("#DD0004")

    // const { getAllProductCategories } = useContext(GlobalContext);
    var methodToggle = 'Even'


    // const getProducts = (id) => {
    //     getAllProductCategories(id, 1);
    // }

    const selectMethod = (index) => {
        if (methodToggle == 'Even') {
            return isEven(index)
        } else if (methodToggle == "Odd") {
            return isOdd(index)
        }
    }
    const isEven = (index) => {
        return index % 2 == 0
    }

    const isOdd = (index) => {
        return index % 2 !== 0
    }

    const showMenu = () => {
        setMenuShow(true)

        setTimeout(() => {
            setMenuShow(false)
            setTabColor('#DD0004')
        }, 3500)

        setTimeout(() => {
            props.switchArrows()
        }, 3500)
    }


    return <>
        <section style={{ backgroundColor: '#DD0004' }} className=" navbar-container text-white li-relative">
            <div style={{
                position: 'absolute', top: '0%', left: '4%', zIndex: 0,
                backgroundColor: tabColor, width: '100px', height: '100%'
            }}
                id="eshopDot"
            >

            </div>
            <div className="container py-3">
                <ul className="d-flex justify-content-between">
                    <li style={{ zIndex: 1 }}
                        onMouseOver={() => { setTabColor('rgb(14,14,14)') }}
                    // onMouseLeave={() => {  }}
                    >
                        <Link onMouseOver={() => {
                            props.switchArrows()
                            showMenu()
                        }} href="javascript:void(0)" to="/eshop">
                            <div>  eShop </div>
                        </Link>


                        <i aria-hidden="true" onMouseOver={() => { showMenu() }} ></i>

                        {menuShow &&

                            <div style={{ ...Styles.MenuContainer }} >

                                <Grid container style={Styles.Menu} >



                                    {CategoriesList.map((parentCategory) => {
                                        methodToggle = methodToggle === 'Even' ? 'Odd' : 'Even'
                                        return (
                                            <Grid key={Math.random()} style={Styles.categoryList} container xs={12} sm={6} md={3}>
                                                <p style={{ ...Styles.categoryHeading }} >  {parentCategory.name} </p>
                                                <Grid container style={Styles.subList} >
                                                    {parentCategory.subcategories.map((item, index) => {
                                                        console.log(`Menu Item: ${item.name} Index: ${index}`)

                                                        return (
                                                            <div key={Math.random()} style={{ ...Styles.listItem, backgroundColor: 'rgb(14,14,14)' }} >
                                                                <Link href="javascript:void(0)" to={`/product-category/${item.name.split(' ').join('-')}`}>
                                                                    <p style={Styles.listItemText} > {item.name}  </p>
                                                                </Link>
                                                            </div>
                                                        )
                                                    })}
                                                </Grid>

                                            </Grid>
                                        )
                                    })}

                                </Grid>


                            </div>

                        }

                    </li>

                    <li>
                        <Link href="javascript:void(0)" to="/vara-losningar"><div>Losningar</div></Link>
                    </li>
                    <li>
                        <Link href="javascript:void(0)" to="/vara-tjanster"><div>Tjanster</div></Link>
                    </li>
                    <li className="li-relative">


                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                            <Link href="javascript:void(0)" className="re" to="/resurser">
                                <div className="re">Resurser</div>
                            </Link>
                            <i className="fa fa-caret-down mx-2" aria-hidden="true"></i>
                        </div>



                        <ul className="div-absolute1 p-3 shadow">
                            <li>
                                <Link style={{ color: "black" }} to="/resurser?id=1"> <p className="li-hover">Hur köper man?</p></Link>
                            </li>
                            <li>
                                <Link style={{ color: "black" }} to="/resurser?id=2">  <p className="li-hover">Frakt och Leverans</p></Link>
                            </li>
                            <li>
                                <Link style={{ color: "black" }} to="/resurser?id=3"> <p className="li-hover">Retur & Byte</p></Link>
                            </li>
                            <li>
                                <Link style={{ color: "black" }} to="/resurser?id=4"><p className="li-hover">Garantier</p></Link>
                            </li>
                            <li>
                                <Link style={{ color: "black" }} to="/resurser?id=5">  <p className="li-hover">Kredit Villkor</p></Link>
                            </li>
                            <li>
                                <Link style={{ color: "black" }} to="/resurser?id=6"> <p className="li-hover">Enkel Finansiering</p></Link>
                            </li>
                            <li>
                                <Link style={{ color: "black" }} to="/resurser?id=7"> <p className="li-hover">Hur köper man?</p></Link>
                            </li>
                            <li>
                                <Link style={{ color: "black" }} to="/resurser?id=8"> <p className="li-hover">Industri Nyheter</p></Link>
                            </li>
                        </ul>

                    </li>
                    <li>
                        <Link href="javascript:void(0)" to="/faq"><div>Kundservice</div></Link>
                    </li>
                    <li>
                        <Link href="javascript:void(0)" to="/om-oss"><div>Om Oss</div></Link>
                    </li>
                    <li>
                        <Link href="javascript:void(0)" to="/varumarken"><div>Vara Marken</div></Link>
                    </li>
                    <li>
                        <Link href="javascript:void(0)" to="/it-natverk-tech-bibliotek"><div>Tekniskt Bibliotek</div></Link>
                    </li>
                    <li>
                        <Link href="javascript:void(0)" to="/kontakta-oss"><div>Kontact</div></Link>
                    </li>
                </ul>
            </div>
        </section>
    </>
}

export default NavbarComp;


const Styles = ({
    MenuContainer: {
        position: 'absolute',
        left: '0.3%',
        top: '100%',
        width: '99.3%',
        overflow: 'auto',
        boxShadow: '0px 0px 8px 1px #222',
        zIndex: 1,
    },
    Menu: {
        zIndex: 1,
        width: '100%',
        backgroundColor: 'rgb(14,14,14)',
        overflow: 'auto',
    },
    categoryList: {
        flexDirection: 'column',
        marginBottom: '1%',
        // border: 'dashed white',
        marginTop: '1%'
    },
    subList: {
        // display:'flex',
        flexDirection: 'column',
        width: '100%',
        // justifyContent: 'center',
        // alignItems: 'center',
        // border: 'dashed purple'
    },
    categoryHeading: {
        font: 'bold 16px times new roman',
        color: 'white',
        marginLeft: '5vh',
        backgroundColor: 'rgb(14,14,14)',
    },
    listItem: {
        backgroundColor: 'black',
        width: '100%',
        // border: 'dashed red 1px',

    },
    listItemText: {
        font: '16px times new roman',
        marginLeft: '15%',
        cursor: 'pointer'
    }

})


// var CategoriesList = [
//     { name: "Products", subcategories: [{ name: "Server", catId: "696" }, { name: "Storage Accessory", catId: "704" }, { name: "Server Accessory", catId: "696" }, { name: "Blade Servers", catId: "710" }, { name: "Access Point", catId: "621" }, { name: "Firewall", catId: "473" }, { name: "Gateway", catId: "611" }] },
//     { name: "Network Equipment", subcategories: [{ name: "Load Balancer", catId: "666" }, { name: "Network Accessory", catId: "475" }, { name: "Network Security", catId: "498" }, { name: "Network Switch", catId: "622" }, { name: "Misc Network Equipment", catId: "634" }, { name: "PoE Injector", catId: "500" }, { name: "PoE Splitter", catId: "501" }, { name: "Router", catId: "623" }] },
//     //   { name: "Unified Communication", subcategories: [{ name: "Analog Phone", catId: "700" }, { name: "Audio Equipment", catId: "0" }, { name: "ISDN Comfort Phone", catId: "0" }, { name: "PBX", catId: "713" }, { name: "PBX Accessory", catId: "711" }, { name: "Phone", catId: "0" }, { name: "Phone Accessory", catId: "705" }] },
//     { name: "Featured Products", subcategories: [{ name: "Analog Phone", catId: "700" }, { name: "Audio Equipment", catId: "0" }, { name: "ISDN Comfort Phone", catId: "0" }, { name: "PBX", catId: "713" }, { name: "PBX Accessory", catId: "711" }, { name: "Phone", catId: "0" }, { name: "Phone Accessory", catId: "705" }] },
//     { name: "Software Service Support License", subcategories: [{ name: "Input Service & Support", catId: "843" }, { name: "Network Security Accessory", catId: "519" }, { name: "Network Service Support", catId: "642" }, { name: "Operating Systems", catId: "692" }, { name: "Output Service & Support", catId: "909" }, { name: "Security License", catId: "474" },] }
// ]



var CategoriesList = [
    { name: "Products", subcategories: [{ name: "Server", catId: "696" }, { name: "Storage Accessory", catId: "704" }, { name: "Server Accessory", catId: "696" }, { name: "Blade Servers", catId: "710" }, { name: "Access Point", catId: "621" }, { name: "Firewall", catId: "473" }, { name: "Gateway", catId: "611" }, { name: "Load Balancer", catId: "666" }, { name: "Network Accessory", catId: "475" }] },
    { name: "", subcategories: [{ name: "Network Security", catId: "498" }, { name: "Network Switch", catId: "622" }, { name: "Misc Network Equipment", catId: "634" }, { name: "PoE Injector", catId: "500" }, { name: "PoE Splitter", catId: "501" }, { name: "Router", catId: "623" }] },
    //   { name: "Unified Communication", subcategories: [{ name: "Analog Phone", catId: "700" }, { name: "Audio Equipment", catId: "0" }, { name: "ISDN Comfort Phone", catId: "0" }, { name: "PBX", catId: "713" }, { name: "PBX Accessory", catId: "711" }, { name: "Phone", catId: "0" }, { name: "Phone Accessory", catId: "705" }] },
    { name: "Featured Products", subcategories: [{ name: "Analog Phone", catId: "700" }, { name: "Audio Equipment", catId: "0" }, { name: "ISDN Comfort Phone", catId: "0" }, { name: "PBX", catId: "713" }, { name: "PBX Accessory", catId: "711" }, { name: "Phone", catId: "0" }, { name: "Phone Accessory", catId: "705" }] },
    { name: "", subcategories: [{ name: "Input Service & Support", catId: "843" }, { name: "Network Security Accessory", catId: "519" }, { name: "Network Service Support", catId: "642" }, { name: "Operating Systems", catId: "692" }, { name: "Output Service & Support", catId: "909" }, { name: "Security License", catId: "474" },] }
]


