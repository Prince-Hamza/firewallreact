import React from 'react';
import "./Category.css";
import ListItems from "./ListItems";
import CategoryList from "./CategoryList";

const Category = ({ blogData, array, page }) => {
    return (
        <div style={{ position:'absolute' , left:'70%' , top:'30%' , width:'25%'}} >
            <section className="d-flex justify-content-end align-items-center">
                {/* <div className="search search-container d-flex align-items-center">
                    <input className="search-input input-blog" type="text" placeholder="Search" aria-label="Search" />
                    <i className="fa fa-search text-muted mx-2" aria-hidden="true"></i>
                </div> */}
            </section>


            <section  >
                <section className="mt-3 shadow-sm">
                    <p className="text-uppercase m-0 bg-danger text-white text-center py-2">popular posts</p>
                    <div className="list-container border">
                        <ListItems array={array} blogData={blogData} />
                    </div>
                </section>

                <section className="mt-3 shadow-sm">
                    <p className="text-uppercase m-0 bg-danger text-white text-center py-2">featured posts</p>
                    <div className="list-container border">
                        <ListItems array={array} blogData={blogData} />
                    </div>
                </section>
            </section>




            {/* <section className="mt-4 shadow-sm">
                <p className="text-uppercase m-0 bg-danger text-white text-center py-2">Categories</p>
                <div className="list-container2 border">
                    <CategoryList />
                </div>
            </section> */}
            {
                !page === "post" &&
                <section>
                    <div className="middle-card border mt-4">
                        <div className="overlay d-flex align-items-center">
                            <div className="mx-3 w-100 my-3 text-center">
                                <h6 className="text-uppercase join-network heading-middle fw-bold">join our network today</h6>
                                <div className="text-center">
                                    <span className="span-join">
                                        Subscribe our news letter and stay<br />
                                        up-to-date with latest promotions,<br />
                                        new product and amazing sales
                                    </span>
                                </div>
                                <div className="text-center mt-2">
                                    <input className="input-email" type="email" placeholder="email" /><br />
                                    <button style={{ width: "13rem" }} className="btn mt-2 btn-method btn-danger text-capitalize">Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            }
        </div>
    )
}

export default Category;
