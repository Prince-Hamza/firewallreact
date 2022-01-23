import React, { useContext, useState, useEffect } from 'react'
// import { Table } from 'react-bootstrap'
import ReactHtmlParser from 'react-html-parser';
import { GlobalContext } from "../Context/Context";
import './Tabs.css'

const Tabs = (props) => {

    const [htmlString, setHtmlString] = useState('')
    const [active, setActive] = useState(0)
    const productDetail = props.productDetail

    useEffect(() => {
        // alert("within tabs.jsx")

        // alert(`Tabs.jsx: attr : ${productDetail.attributes}`)

        productDetail && productDetail?.attributes?.forEach((item) => {

            if (item.name === "Html Specs") {
                // alert(`found Html Spex`)
                setHtmlString(item && item?.options[0])
            }
        })


    }, [])

    console.log(`html String : ${htmlString}`)
    if (props.productDetail) {
        return (
            <div className="pt-5">
                <section style={{ display: 'flex', justifyContent: 'space-around', width: '70%', margin: 'auto', color: '#575757' }} className="text-center tabs-text fw-bold ">
                    <span class="mx-3 margin-left-none  fw-bold" className={active === 0 ? "text-danger " : "#575757"} onClick={() => { setActive(0) }}>Specification</span>
                    <span class="mx-3 margin-left-none fw-bold" className={active === 1 ? "text-danger" : "#575757"} onClick={() => { setActive(1) }}>Overview</span>
                    <span class="mx-3 margin-left-none fw-bold" className={active === 2 ? "text-danger " : "#575757"} onClick={() => { setActive(2) }}>Additional Information</span>
                    <span class="mx-3 margin-left-none fw-bold" className={active === 3 ? "text-danger " : "#575757"} onClick={() => { setActive(3) }}>Warranties</span>
                    <span class="mx-3 margin-left-none fw-bold" className={active === 4 ? "text-danger " : "#575757"} onClick={() => { setActive(4) }}>Reviews</span>
                </section>


                <section className="mt-5">
                    {/* <h2 className=" fw-bold">Brief Description</h2> */}
                    <div class="justify px-4 " style={{ maxHeight: "25rem", overflow: "auto" }} className={active === 1 ? "d-none d-sm-block" : "d-none"}>
                        <span style={{ fontSize: "small", color: '#575757', fontFamily: 'Poppins' }}>{ReactHtmlParser(productDetail && productDetail.description)}</span>
                    </div>
                    {console.log("active or not==>", active)}
                    <div style={{ color: '#575757', fontFamily: 'Poppins' }} className={active === 0 ? "d-none d-sm-block" : "d-none"}>
                        {ReactHtmlParser(htmlString)}
                    </div>
                    {/* <div class="justify shortDes px-1" style={{ overflow: "auto" }} className={active === 2 ? "d-none d-sm-block" : "d-none"}>
                        <span style={{ fontSize: "small", color: '#575757', fontFamily: 'Poppins' }}>{ReactHtmlParser(productDetail?.short_description || productDetail?.description || "<p></p>")}</span>
                        {console.log("productDetail.short_description", productDetail.short_description)}
                    </div> */}





                    {/* <Table className="mt-4" striped bordered hover>
                    <thead>
                        <tr>
                            <th className="text-danger h4 fw-bold" colSpan="2">Network</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="w-25">1</td>
                            <td>Mark</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                        </tr>
                        <tr>
                            <th className="text-danger h4 fw-bold" colSpan="2">Wireless LAN Features</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                        </tr>
                        <tr>
                            <th className="text-danger h4 fw-bold" colSpan="2">Mobile Network</th>
                        </tr>
                        <tr>
                            <td>3G</td>
                            <td>N</td>
                        </tr>
                        <tr>
                            <td>4G</td>
                            <td>N</td>
                        </tr>
                        <tr>
                            <th className="text-danger h4 fw-bold" colSpan="2">Power</th>
                        </tr>
                        <tr>
                            <td>Power source type</td>
                            <td>AC</td>
                        </tr>
                    </tbody>
                </Table> */}
                </section>
            </div>
        )
    }
}

export default Tabs
