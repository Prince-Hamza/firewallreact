import React, { useContext } from 'react';
import ListItems from "./BrandListItems";
import "./style.css";
import { GlobalContext } from "../../Context/Context";

const AccordionComp = ({ checkedCategories, Switch, brandFunc, title, categoryCount, filterCategoryProducts, categoryList, Brands }) => {
    // const { SetBrandSearch } = useContext(GlobalContext);

    // alert(JSON.stringify(Brands))
    return (
        <div style={{height:'500px'}} className="shadow-sm mb-4">
            <section className="bg-danger px-4 py-2 text-white d-flex justify-content-between align-items-center">
                <span className="text-uppercase" style={{ letterSpacing: "2px" }}>{title}</span>
                <i className="fa fa-chevron-down" aria-hidden="true"></i>
            </section>
            {
                title === "Brands" &&
                <section className="d-flex justify-content-center align-items-center my-3">
                    <div className="search search-container d-flex align-items-center">
                        <input /*onChange={(e) => SetBrandSearch(e.target.value)}*/ className="search-input input-searchbar input-blog" type="text" placeholder="Search" aria-label="Search" />
                        <i className="fa fa-search text-muted mx-2" aria-hidden="true"></i>
                    </div>
                </section>
            }
            <section className={title !== 'Brands' ? "mt-4" : "mt-0"}>
                <ListItems
                    sendBrands={brandFunc}
                    Brands={Brands}
                    categoryList={categoryList}
                    filterCategoryProducts={filterCategoryProducts}
                    categoryCount={categoryCount}
                    switch={Switch}
                    checkedCategories={checkedCategories} />
            </section>
        </div>
    )
}

export default AccordionComp;