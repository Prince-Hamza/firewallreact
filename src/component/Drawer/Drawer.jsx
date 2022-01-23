import React, { useContext, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { GlobalContext } from "../Context/Context";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

export default function TemporaryDrawer() {
    const classes = useStyles();
    const { state, toggleDrawer, getAllProductCategories } = useContext(GlobalContext);
    const [eShop, setEShop] = useState(false);
    const [resource, setResource] = useState(false);

    const getProducts = (id) => {
        getAllProductCategories(id, 1);
    }

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
        >
            {/* <Accordion /> */}
            <List>
                <ListItem button>
                    <Link style={{ color: "red", textDecorationLine: "none" }} href="javascript:void(0)" to="/"><a>eShop</a></Link>
                    <i onClick={() => setEShop(!eShop)} className="fa fa-caret-down mx-2" aria-hidden="true"></i>
                </ListItem>
                {
                    eShop &&
                    <ul>
                        <ul className="ms-3">
                            <h6 className="mb-4">Network Equipment</h6>
                            <li>
                                <Link style={{ color: "red", textDecorationLine: "none" }} href="javascript:void(0)" className="text-dark" to={`/equipment?catID=623&category=Router&slug=Router`}>
                                    <p onClick={(e) => getProducts(e.target.innerText)} id="623" className="li-hover" style={{ textTransform: "capitalize" }}>Router</p>
                                </Link>
                            </li>
                            <li>
                                <Link style={{ color: "red", textDecorationLine: "none" }} href="javascript:void(0)" className="text-dark" to={`/equipment?catID=622&category=Network%20Switch&slug=Switches`}>
                                    <p onClick={(e) => getProducts('Network%20Switch')} id="622" className="li-hover" style={{ textTransform: "capitalize" }}>Switches</p>
                                </Link>
                            </li>
                            <li>
                                <Link style={{ color: "red", textDecorationLine: "none" }} href="javascript:void(0)" className="text-dark" to={`/equipment?catID=473&category=Firewalls&slug=Firewalls`}>
                                    <p onClick={(e) => getProducts(e.target.innerText)} id="473" className="li-hover" style={{ textTransform: "capitalize" }}>Firewalls</p>
                                </Link>
                            </li>
                            <li>
                                <Link style={{ color: "red", textDecorationLine: "none" }} href="javascript:void(0)" className="text-dark" to={`/equipment?catID=497&category=KVM Switches&slug=KVM Switches`}>
                                    <p onClick={(e) => getProducts(e.target.innerText)} id="497" className="li-hover" style={{ textTransform: "capitalize" }}>KVM Switches</p>
                                </Link>
                            </li>
                            <li>
                                <Link style={{ color: "red", textDecorationLine: "none" }} href="javascript:void(0)" className="text-dark" to={`/equipment?catID=1084&category=Rackmount & and Data Server Cabinets&slug=Racks and Data Server Cabinets`}>
                                    <p onClick={(e) => getProducts('Rackmount')} id="1084" className="li-hover" style={{ textTransform: "capitalize" }}>Racks & Data Server Cabinets</p>
                                </Link>
                            </li>
                            <li>
                                <Link style={{ color: "red", textDecorationLine: "none" }} href="javascript:void(0)" className="text-dark" to={`/equipment?catID=475&category=Network Module&slug=Network Accessory`}>
                                    <p onClick={(e) => getProducts("Network Module")} id="475" className="li-hover" style={{ textTransform: "capitalize" }}>Network Accessory</p>
                                </Link>
                            </li>
                            <li>
                                <Link style={{ color: "red", textDecorationLine: "none" }} href="javascript:void(0)" className="text-dark" to={`/equipment?catID=491&category=Rack Accessories&slug=Rack Accessories`}>
                                    <p onClick={(e) => getProducts(e.target.innerText)} id="491" className="li-hover" style={{ textTransform: "capitalize" }}>Rack Accessories</p>
                                </Link>
                            </li>
                        </ul>
                        {/*  */}
                        <ul className="ms-3">
                            <h6 className="mb-4">Server & Storage</h6>
                            <li>
                                <Link style={{ color: "red", textDecorationLine: "none" }} href="javascript:void(0)" className="text-dark" to={`/equipment?catID=696&category=Servers&slug=Servers`}>
                                    <p onClick={(e) => getProducts(e.target.innerText)} id="696" className="li-hover" style={{ textTransform: "capitalize" }}>Servers</p>
                                </Link>
                            </li>
                            <li>
                                <Link style={{ color: "red", textDecorationLine: "none" }} href="javascript:void(0)" className="text-dark" to={`/equipment?catID=696&category=Server Accessory&slug=server accessory`}>
                                    <p onClick={(e) => getProducts(e.target.innerText)} id="696" className="li-hover" style={{ textTransform: "capitalize" }}>server accessory</p>
                                </Link>
                            </li>
                            <li>
                                <Link style={{ color: "red", textDecorationLine: "none" }} href="javascript:void(0)" className="text-dark" to={`/equipment?catID=703&category=Storage Server&slug=storage server`}>
                                    <p onClick={(e) => getProducts(e.target.innerText)} id="703" className="li-hover" style={{ textTransform: "capitalize" }}>storage server</p>
                                </Link>
                            </li>
                            <li>
                                <Link style={{ color: "red", textDecorationLine: "none" }} href="javascript:void(0)" className="text-dark" to={`/equipment?catID=916&category=barebone&slug=barebones`}>
                                    <p onClick={(e) => getProducts('barebone')} id="916" className="li-hover" style={{ textTransform: "capitalize" }}>barebones</p>
                                </Link>
                            </li>
                            <li>
                                <Link style={{ color: "red", textDecorationLine: "none" }} href="javascript:void(0)" className="text-dark" to={`/equipment?catID=704&category=Storage Accessory&slug=storage accessories`}>
                                    <p onClick={(e) => getProducts('Storage Accessory')} id="704" className="li-hover" style={{ textTransform: "capitalize" }}>storage accessories</p>
                                </Link>
                            </li>
                        </ul>

                        <ul className="ms-3">
                            <h6 className="mb-4">Unified Communication & Collaboration Equipment</h6>
                            <li>
                                <Link style={{ color: "red", textDecorationLine: "none" }} href="javascript:void(0)" className="text-dark" to={`/equipment?catID=700&category=Analog Phone&slug=voip phones and equipment`}>
                                    <p onClick={(e) => getProducts('Analog Phone')} id="700" className="li-hover" style={{ textTransform: "capitalize" }}>voip phones & equipment</p>
                                </Link>
                            </li>
                            <li>
                                <Link style={{ color: "red", textDecorationLine: "none" }} href="javascript:void(0)" className="text-dark" to={`/equipment?catID=611&category=gateway&slug=gateway`}>
                                    <p onClick={(e) => getProducts(e.target.innerText)} id="611" className="li-hover" style={{ textTransform: "capitalize" }}>gateway</p>
                                </Link>
                            </li>
                            <li>
                                <Link style={{ color: "red", textDecorationLine: "none" }} href="javascript:void(0)" className="text-dark" to={`/equipment?catID=713&category=pbx&slug=pbx`}>
                                    <p onClick={(e) => getProducts(e.target.innerText)} id="713" className="li-hover" style={{ textTransform: "capitalize" }}>pbx</p>
                                </Link>
                            </li>
                            <li>
                                <Link style={{ color: "red", textDecorationLine: "none" }} href="javascript:void(0)" className="text-dark" to={`/equipment?catID=715&category=VOIP Accessory&slug=voip accessories`}>
                                    <p onClick={(e) => getProducts('VOIP Accessory')} id="715" className="li-hover" style={{ textTransform: "capitalize" }}>voip accessories</p>
                                </Link>
                            </li>
                            <li>
                                <Link style={{ color: "red", textDecorationLine: "none" }} href="javascript:void(0)" className="text-dark" to={`/equipment?catID=705&category=Phone Accessory&slug=phone accessories`}>
                                    <p onClick={(e) => getProducts('Phone Accessory')} id="705" className="li-hover" style={{ textTransform: "capitalize" }}>phone accessories</p>
                                </Link>
                            </li>
                            <li>
                                <Link style={{ color: "red", textDecorationLine: "none" }} href="javascript:void(0)" className="text-dark" to={`/equipment?catID=711&category=Pbx Accessory&slug=pbx accessories`}>
                                    <p onClick={(e) => getProducts('Pbx Accessory')} id="711" className="li-hover" style={{ textTransform: "capitalize" }}>pbx accessories</p>
                                </Link>
                            </li>
                        </ul>

                        <ul className="ms-3">
                            <h6 className="mb-4">Software & Licenses</h6>
                            <li>
                                <Link style={{ color: "red", textDecorationLine: "none" }} href="javascript:void(0)" className="text-dark" to={`/equipment?catID=692&category=Operating Systems&slug=operating systems`}>
                                    <p onClick={(e) => getProducts(e.target.innerText)} id="692" className="li-hover" style={{ textTransform: "capitalize" }}>operating systems</p>
                                </Link>
                            </li>
                            <li>
                                <Link style={{ color: "red", textDecorationLine: "none" }} href="javascript:void(0)" className="text-dark" to={`/equipment?catID=618&category=Software and Service Support&slug=software and service support`}>
                                    <p onClick={(e) => getProducts('Software & Service Support License')} id="618" className="li-hover" style={{ textTransform: "capitalize" }}>software & service support</p>
                                </Link>
                            </li>
                            <li>
                                <Link style={{ color: "red", textDecorationLine: "none" }} href="javascript:void(0)" className="text-dark" to={`/equipment?catID=841&category=Software Service and Support&slug=software service and support`}>
                                    <p onClick={(e) => getProducts('Software Service & Support')} id="841" className="li-hover" style={{ textTransform: "capitalize" }}>software service & support</p>
                                </Link>
                            </li>
                            <li>
                                <Link style={{ color: "red", textDecorationLine: "none" }} href="javascript:void(0)" className="text-dark" to={`/equipment?catID=902&category=Systems Service and Support&slug=sysytem service and support`}>
                                    <p onClick={(e) => getProducts('Systems%20Service%20&amp;%20Support')} id="902" className="li-hover" style={{ textTransform: "capitalize" }}>system service & support</p>
                                </Link>
                            </li>
                            <li>
                                <Link style={{ color: "red", textDecorationLine: "none" }} href="javascript:void(0)" className="text-dark" to={`/equipment?catID=474&category=security license&slug=security license`}>
                                    <p onClick={(e) => getProducts(e.target.innerText)} id="474" className="li-hover" style={{ textTransform: "capitalize" }}>security license</p>
                                </Link>
                            </li>
                            <li>
                                <Link style={{ color: "red", textDecorationLine: "none" }} href="javascript:void(0)" className="text-dark" to={`/equipment?catID=642&category=network service support&slug=network service support`}>
                                    <p onClick={(e) => getProducts(e.target.innerText)} id="642" className="li-hover" style={{ textTransform: "capitalize" }}>network service support</p>
                                </Link>
                            </li>
                        </ul>
                    </ul>
                }
                <ListItem button>
                    <Link style={{ color: "red", textDecorationLine: "none" }} href="javascript:void(0)" to="/solutions"><a>Losningar</a></Link>
                </ListItem>
                <ListItem button>
                    <Link style={{ color: "red", textDecorationLine: "none" }} href="javascript:void(0)" to="/services"><a>Tjanster</a></Link>
                </ListItem>
                <ListItem button button>
                    <Link style={{ color: "red", textDecorationLine: "none" }} href="javascript:void(0)" className="re" to="/resource"><a>Resurser</a></Link>
                    <i onClick={() => setResource(!resource)} className="fa fa-caret-down mx-2" aria-hidden="true"></i>
                </ListItem>
                {
                    resource &&
                    <ul className="ms-3">
                        <li>
                            <Link style={{ color: "black" }} to="/resource?id=1"> <p className="li-hover">Hur köper man?</p></Link>
                        </li>
                        <li>
                            <Link style={{ color: "black" }} to="/resource?id=2">  <p className="li-hover">Frakt och Leverans</p></Link>
                        </li>
                        <li>
                            <Link style={{ color: "black" }} to="/resource?id=3"> <p className="li-hover">Retur & Byte</p></Link>
                        </li>
                        <li>
                            <Link style={{ color: "black" }} to="/resource?id=4"><p className="li-hover">Garantier</p></Link>
                        </li>
                        <li>
                            <Link style={{ color: "black" }} to="/resource?id=5">  <p className="li-hover">Kredit Villkor</p></Link>
                        </li>
                        <li>
                            <Link style={{ color: "black" }} to="/resource?id=6"> <p className="li-hover">Enkel Finansiering</p></Link>
                        </li>
                        <li>
                            <Link style={{ color: "black" }} to="/resource?id=7"> <p className="li-hover">Hur köper man?</p></Link>
                        </li>
                        <li>
                            <Link style={{ color: "black" }} to="/resource?id=8"> <p className="li-hover">Industri Nyheter</p></Link>
                        </li>
                    </ul>
                }
                <ListItem button>
                    <Link style={{ color: "red", textDecorationLine: "none" }} href="javascript:void(0)" to="/faq"><a>Kundservice</a></Link>
                </ListItem>
                <ListItem button>
                    <Link style={{ color: "red", textDecorationLine: "none" }} href="javascript:void(0)" to="/aboutus"><a>Om Oss</a></Link>
                </ListItem>
                <ListItem button>
                    <Link style={{ color: "red", textDecorationLine: "none" }} href="javascript:void(0)" to="/brand"><a>Vara Marken</a></Link>
                </ListItem>
                <ListItem button>
                    <Link style={{ color: "red", textDecorationLine: "none" }} href="javascript:void(0)" to="/blog"><a>Tekniskt Bibliotek</a></Link>
                </ListItem>
                <ListItem button>
                    <Link style={{ color: "red", textDecorationLine: "none" }} href="javascript:void(0)" to="/contactus"><a>Kontact</a></Link>
                </ListItem>
            </List>
        </div>
    );

    return (
        <div>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}