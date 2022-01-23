import React, { useContext } from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../Context/Context";

const NavbarComp = () => {
    const { getAllProductCategories } = useContext(GlobalContext);

    const getProducts = (id) => {
        getAllProductCategories(id, 1);
    }

    return <>
        <section className="bg-danger navbar-container text-white li-relative">
            <div className="container py-3">
                <ul className="d-flex justify-content-between">
                    <li>
                        <Link href="javascript:void(0)" to="/eshop"><a>eShop</a></Link>
                        <i className="fa fa-caret-down mx-2 li-hover" aria-hidden="true"></i>
                        <ul className="div-absolute py-3 shadow">
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
                        </ul>
                    </li>
                    <li>
                        <Link href="javascript:void(0)" to="/vara-losningar"><a>Losningar</a></Link>
                    </li>
                    <li>
                        <Link href="javascript:void(0)" to="/vara-tjanster"><a>Tjanster</a></Link>
                    </li>
                    <li className="li-relative">
                        <Link href="javascript:void(0)" className="re" to="/resurser"><a className="re">Resurser</a></Link>
                        <i className="fa fa-caret-down mx-2" aria-hidden="true"></i>
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
                        <Link href="javascript:void(0)" to="/faq"><a>Kundservice</a></Link>
                    </li>
                    <li>
                        <Link href="javascript:void(0)" to="/om-oss"><a>Om Oss</a></Link>
                    </li>
                    <li>
                        <Link href="javascript:void(0)" to="/varumarken"><a>Vara Marken</a></Link>
                    </li>
                    <li>
                        <Link href="javascript:void(0)" to="/it-natverk-tech-bibliotek"><a>Tekniskt Bibliotek</a></Link>
                    </li>
                    <li>
                        <Link href="javascript:void(0)" to="/kontakta-oss"><a>Kontact</a></Link>
                    </li>
                </ul>
            </div>
        </section>
    </>
}

export default NavbarComp;