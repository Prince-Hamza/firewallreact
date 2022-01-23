import React, { useContext } from 'react';
import { Row, Col } from "react-bootstrap";
import AccordionComp from "./AccordionComp";
import Discover from './Discover';
import Connect from './Connect';
import Leading from './Leading';
import Modals from '../RightSide/Modals';
import ECommerce from '../RightSide/ECommerce';
import { GlobalContext } from "../../Context/Context";
import { categories } from "./Category";

const CablingEquipment = ({ categoryInfo, slug, productData, parent, productCategory, setProductDetail, getAllProductCategories, catID, category }) => {
    const { checked, Brands } = useContext(GlobalContext);

    let products = [];
    if (checked.length === 0) products = productCategory;
    if (checked.length > 0) {
        let filteredArray = [];
        checked && checked.forEach(item => {
            productCategory && productCategory.forEach(value => {
                if (item === value.attributes[0]?.options[0]) {
                    filteredArray.push(value);
                }
            })
        })
        products = filteredArray;
    }

    let brands = [];
    // alert(`eq data : ${productCategory}`)
    productCategory && productCategory.length &&
        productCategory.forEach((item) => {

            if (item.attributes && item.attributes.length) {
                brands.push(item?.attributes[0]?.options[0])
            }
        })

    let categoryCount = brands.reduce(function (prev, cur) {
        prev[cur] = (prev[cur] || 0) + 1;
        return prev;
    }, {})

    let categoryList = categories[category];

    return <>
        <div className="pb-5">
            <section className="text-center bygga-parent equip-parent py-5">
                <span className="back-border bygga-text-heading fs-4 fw-bold  text-capitalize">
                    {slug && slug}
                </span>
            </section>
            <section className="container">
                <Row>
                    <Col lg={3} md={4}>
                        <AccordionComp Brands={Brands} categoryCount={categoryCount} title={"Brands"} />
                        <AccordionComp parent={parent} categoryList={categoryList} title={"Categories"} />
                        <Discover />
                        <Connect />
                        <Leading />
                    </Col>
                    <Col lg={9} md={8}>
                        {/* <Modals /> */}
                        <ECommerce
                            getAllProductCategories={getAllProductCategories}
                            setProductDetail={setProductDetail}
                            productCategory={products}
                            catID={catID}
                            productData={productData}
                            categoryInfo={categoryInfo}
                        />
                    </Col>
                </Row>
            </section>
        </div>
    </>
}

export default CablingEquipment;