import React, { useContext } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { GlobalContext } from "../../Context/Context";
import moment from "moment";
import pic from "../../Home/CarouselGallery/img/g1.jpg";
import { useHistory } from 'react-router-dom';


const VerticalBlog = ({ blogData, array }) => {
    const { setBlogDetail, productBlog } = useContext(GlobalContext)
    const history = useHistory();

    const AddDetailFunc = (item) => {
        setBlogDetail(item)
        console.log("hey" + productBlog)
        history.push(`/blogdetail?name=${item.title.rendered}&feature=1`)
    }

    return (
        <div>
            {
                blogData && blogData.map((item, index) =>
                    <div class="row" style={{ border: '1px solid darkgray', marginBottom:'20px'}} key={index}>
                        <div class="col-sm-7">
                            <div>
                                <div >
                                    <p className=" py-3 px-2 font-size-small">
                                        Posted on <span className="text-danger fw-bold">{moment(item && item.modified).format('LL')} </span>by <span className="text-danger fw-bold">Admin</span>
                                    </p>
                                    <h2 class="card-title" style={{fontFamily:'Poppins', color:'#575757'}}>{ReactHtmlParser(item && item.title.rendered)}</h2>
                                    <span class="card-tex " style={{fontFamily:'Poppins', color:'#575757'}}>{ReactHtmlParser(item && item.slug)}!</span>
                                    <br/> <br/>
                                    <span class="card-text" style={{fontFamily:'Poppins', fontSize:'14px', color:'575757'}}>{ReactHtmlParser(item && item.excerpt.rendered)}</span>
                                    <a onClick={(e) => AddDetailFunc(item)} style={{ color: 'red',fontFamily:'Poppins' }}>Read More</a>

                                </div>
                            </div>
                        </div>
                        {console.log("data from blog list",item)}
                        <div class="col-sm-5 py-2 px-2">
                            <img src={item.images[0]} alt="" style={{ width: '100%', height: '100%' }} />
                        </div>
                    </div>


                )}
        </div>
    )
}

export default VerticalBlog;
