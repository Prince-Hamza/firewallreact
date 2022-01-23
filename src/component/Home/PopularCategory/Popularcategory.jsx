import React from "react";
import Carousel from 'react-elastic-carousel';
import "./Popular.css";
import img1 from "./img/1.png";
import img2 from "./img/2.png";
import img3 from "./img/3.png";
import img4 from "./img/4.png";
import img5 from "./img/5.png";
import img6 from "./img/6.png";
import img7 from "./img/7.png";
import img8 from "./img/8.png";
import img9 from "./img/9.png";
// import $ from 'jquery'
import { carouselIcons } from './iconsList'
import './anime.css'

export default function Popular() {
    const array = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img1, img2];
    const breakPoints = [
        { width: 1, itemsToShow: 2 },
        { width: 550, itemsToShow: 4 },
        { width: 768, itemsToShow: 9 },
        { width: 1200, itemsToShow: 4 },
    ]
    const validatePicName = (name) => {
        name = name.substring(0, name.length - 4)
        name = name.substring(0, 1).toUpperCase() + name.substring(1, name.length)
        name = name == 'Network interferance module' ? 'Network module' : name
        name = name == 'Software service and support' ? 'Software service' : name
        name = name == 'Unified communication and collaboration equipment' ? 'Communication equipment' : name
        return name
    }

    // var allowZoomIn = true
    // var allowZoomOut = false

    // const zoomIcon = (x) => {
    //     if (allowZoomIn) {
    //         allowZoomOut = false
    //         allowZoomIn = false
    //         $(`#home_icons_${x}`).animate({
    //             width: '+=5px',
    //             height: '+=5px'
    //         })

    //         setTimeout(() => {
    //             allowZoomOut = true
    //         }, 2000)
    //     }
    // }

    // const zoomOutIcon = (x) => {
    //     if (allowZoomOut) {
    //         allowZoomOut = false
    //         $(`#home_icons_${x}`).animate({
    //             width: '-=5px',
    //             height: '-=5px'
    //         })
    //         setTimeout(() => {
    //             allowZoomIn = true
    //         }, 2000)

    //     }
    // }

    return (
        <div className="container">
            <br />
            <br />

            <div className="text-center mb-5">
                <span className=" h4 " style={{ fontFamily: 'Poppins', color: '#575757', borderBottom: "3px solid #dc3545" }} >
                    Bladdra Efter Popular Kategori
                </span>
            </div>
            <Carousel style={{ marginBottom: '3%', marginTop: '5%' }} breakPoints={breakPoints} pagination={false}>
                {
                    carouselIcons.map((item, index) => {
                        // let plus = true
                        // if (index >= 4) plus = false
                        return (
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' , height:'100%' }} key={index}  >
                                <img
                                    style={{ width: "200px", height: '200px' }}
                                    src={require(`../../../assets/homepage_carousel_icons/icons/${item}`).default} alt={item}
                                // onMouseOver={() => { zoomIcon(index) }}
                                // onMouseLeave={() => { zoomOutIcon(index) }}

                                />

                                <div style={{ width: '30%', height: '3%', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', textAlign: 'center' }} >
                                    <p style={{ font: '12px poppins' }} > {validatePicName(item)} </p>
                                </div>
                            </div>
                        )
                    })
                }
            </Carousel>
            <br />
            <br />
        </div>
    )
}






















 // style={{
                                    //     width: plus ? 50 + (7 * index) + "px" : 100 - (7 * index) + "px",
                                    //     height: plus ? 50 + (7 * index) + "px" : 100 - (7 * index) + "px"
                                    // }}


