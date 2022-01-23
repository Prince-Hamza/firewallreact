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
                                                                <Link href="javascript:void(0)" to={`/product-category?catID=${item.catId}&category=${item.name}&slug=${item.name.split(' ').join('-')}`}>
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

                        {/* <ul className="div-absolute py-3 shadow">
                            <section className="d-flex justify-content-around">
                                <ul>
                                    <h6 className="mb-4">Network Equipment</h6>
                                    <li>
                                        <Link href="javascript:void(0)" className="text-dark" to={`/equipment?catID=623&category=Router&slug=Router`}>
                                            <p onClick={(e) => getProducts(e.target.innerText)} id="623" className="border-bottom li-hover" style={{ textTransform: "capitalize" }}>Router</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="javascript:void(0)" className="text-dark" to={`/equipment?catID=622&category=Network%20Switch&slug=Switches`}>
                                            <p onClick={(e) => getProducts('Network%20Switch')} id="622" className="border-bottom li-hover" style={{ textTransform: "capitalize" }}>Switches</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="javascript:void(0)" className="text-dark" to={`/equipment?catID=473&category=Firewalls&slug=Firewalls`}>
                                            <p onClick={(e) => getProducts(e.target.innerText)} id="473" className="border-bottom li-hover" style={{ textTransform: "capitalize" }}>Firewalls</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="javascript:void(0)" className="text-dark" to={`/equipment?catID=497&category=KVM Switches&slug=KVM Switches`}>
                                            <p onClick={(e) => getProducts(e.target.innerText)} id="497" className="border-bottom li-hover" style={{ textTransform: "capitalize" }}>KVM Switches</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="javascript:void(0)" className="text-dark" to={`/equipment?catID=1084&category=Rackmount & and Data Server Cabinets&slug=Racks and Data Server Cabinets`}>
                                            <p onClick={(e) => getProducts('Rackmount')} id="1084" className="border-bottom li-hover" style={{ textTransform: "capitalize" }}>Racks & Data Server Cabinets</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="javascript:void(0)" className="text-dark" to={`/equipment?catID=475&category=Network Module&slug=Network Accessory`}>
                                            <p onClick={(e) => getProducts("Network Module")} id="475" className="border-bottom li-hover" style={{ textTransform: "capitalize" }}>Network Accessory</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="javascript:void(0)" className="text-dark" to={`/equipment?catID=491&category=Rack Accessories&slug=Rack Accessories`}>
                                            <p onClick={(e) => getProducts(e.target.innerText)} id="491" className="border-bottom li-hover" style={{ textTransform: "capitalize" }}>Rack Accessories</p>
                                        </Link>
                                    </li>
                                </ul>

                                <ul>
                                    <h6 className="mb-4">Server & Storage</h6>
                                    <li>
                                        <Link href="javascript:void(0)" className="text-dark" to={`/equipment?catID=696&category=Servers&slug=Servers`}>
                                            <p onClick={(e) => getProducts(e.target.innerText)} id="696" className="border-bottom li-hover" style={{ textTransform: "capitalize" }}>Servers</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="javascript:void(0)" className="text-dark" to={`/equipment?catID=696&category=Server Accessory&slug=server accessory`}>
                                            <p onClick={(e) => getProducts(e.target.innerText)} id="696" className="border-bottom li-hover" style={{ textTransform: "capitalize" }}>server accessory</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="javascript:void(0)" className="text-dark" to={`/equipment?catID=703&category=Storage Server&slug=storage server`}>
                                            <p onClick={(e) => getProducts(e.target.innerText)} id="703" className="border-bottom li-hover" style={{ textTransform: "capitalize" }}>storage server</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="javascript:void(0)" className="text-dark" to={`/equipment?catID=916&category=barebone&slug=barebones`}>
                                            <p onClick={(e) => getProducts('barebone')} id="916" className="border-bottom li-hover" style={{ textTransform: "capitalize" }}>barebones</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="javascript:void(0)" className="text-dark" to={`/equipment?catID=704&category=Storage Accessory&slug=storage accessories`}>
                                            <p onClick={(e) => getProducts('Storage Accessory')} id="704" className="border-bottom li-hover" style={{ textTransform: "capitalize" }}>storage accessories</p>
                                        </Link>
                                    </li>
                                </ul>

                                <ul>
                                    <h6 className="mb-4">Unified Communication & Collaboration Equipment</h6>
                                    <li>
                                        <Link href="javascript:void(0)" className="text-dark" to={`/equipment?catID=700&category=Analog Phone&slug=voip phones and equipment`}>
                                            <p onClick={(e) => getProducts('Analog Phone')} id="700" className="border-bottom li-hover" style={{ textTransform: "capitalize" }}>voip phones & equipment</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="javascript:void(0)" className="text-dark" to={`/equipment?catID=611&category=gateway&slug=gateway`}>
                                            <p onClick={(e) => getProducts(e.target.innerText)} id="611" className="border-bottom li-hover" style={{ textTransform: "capitalize" }}>gateway</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="javascript:void(0)" className="text-dark" to={`/equipment?catID=713&category=pbx&slug=pbx`}>
                                            <p onClick={(e) => getProducts(e.target.innerText)} id="713" className="border-bottom li-hover" style={{ textTransform: "capitalize" }}>pbx</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="javascript:void(0)" className="text-dark" to={`/equipment?catID=715&category=VOIP Accessory&slug=voip accessories`}>
                                            <p onClick={(e) => getProducts('VOIP Accessory')} id="715" className="border-bottom li-hover" style={{ textTransform: "capitalize" }}>voip accessories</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="javascript:void(0)" className="text-dark" to={`/equipment?catID=705&category=Phone Accessory&slug=phone accessories`}>
                                            <p onClick={(e) => getProducts('Phone Accessory')} id="705" className="border-bottom li-hover" style={{ textTransform: "capitalize" }}>phone accessories</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="javascript:void(0)" className="text-dark" to={`/equipment?catID=711&category=Pbx Accessory&slug=pbx accessories`}>
                                            <p onClick={(e) => getProducts('Pbx Accessory')} id="711" className="border-bottom li-hover" style={{ textTransform: "capitalize" }}>pbx accessories</p>
                                        </Link>
                                    </li>
                                </ul>

                                <ul>
                                    <h6 className="mb-4">Software & Licenses</h6>
                                    <li>
                                        <Link href="javascript:void(0)" className="text-dark" to={`/equipment?catID=692&category=Operating Systems&slug=operating systems`}>
                                            <p onClick={(e) => getProducts(e.target.innerText)} id="692" className="border-bottom li-hover" style={{ textTransform: "capitalize" }}>operating systems</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="javascript:void(0)" className="text-dark" to={`/equipment?catID=618&category=Software and Service Support&slug=software and service support`}>
                                            <p onClick={(e) => getProducts('Software & Service Support License')} id="618" className="border-bottom li-hover" style={{ textTransform: "capitalize" }}>software & service support</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="javascript:void(0)" className="text-dark" to={`/equipment?catID=841&category=Software Service and Support&slug=software service and support`}>
                                            <p onClick={(e) => getProducts('Software Service & Support')} id="841" className="border-bottom li-hover" style={{ textTransform: "capitalize" }}>software service & support</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="javascript:void(0)" className="text-dark" to={`/equipment?catID=902&category=Systems Service and Support&slug=sysytem service and support`}>
                                            <p onClick={(e) => getProducts('Systems%20Service%20&amp;%20Support')} id="902" className="border-bottom li-hover" style={{ textTransform: "capitalize" }}>system service & support</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="javascript:void(0)" className="text-dark" to={`/equipment?catID=474&category=security license&slug=security license`}>
                                            <p onClick={(e) => getProducts(e.target.innerText)} id="474" className="border-bottom li-hover" style={{ textTransform: "capitalize" }}>security license</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="javascript:void(0)" className="text-dark" to={`/equipment?catID=642&category=network service support&slug=network service support`}>
                                            <p onClick={(e) => getProducts(e.target.innerText)} id="642" className="border-bottom li-hover" style={{ textTransform: "capitalize" }}>network service support</p>
                                        </Link>
                                    </li>
                                </ul>
                            </section>
                        </ul> */}
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


