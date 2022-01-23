import React, { useContext, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { GlobalContext } from "../../Context/Context";
import moment from "moment";
import pic from "../../Home/CarouselGallery/img/g1.jpg";
import { useHistory } from 'react-router-dom';



const VerticalBlog = ({ blogData, array }) => {
    // const { setBlogDetail, productBlog } = useContext(GlobalContext)
    const [productBlog, setBlogDetail] = useState([])

    const history = useHistory();

    const AddDetailFunc = (item) => {
        setBlogDetail(item)
        console.log("hey" + productBlog)
        localStorage.setItem('currentBlog' , JSON.stringify(item))
        history.push(`/blogdetail?name=${item.title.rendered.split(' ').join('-')}`)
    }

    return (
        <div>
            {
                blogData.length > 0 && blogData.map((item, index) => {


                    if (index <= 4) {


                        return (

                            <div style={Styles.BlogListItem} key={index} onClick={() => { AddDetailFunc(item) }}>
                                {/* <button onClick={() => { AddDetailFunc(item) }}>
                                    detail
                                </button> */}
                                <div  style={{ marginLeft: '1%' }} className="col-sm-7">
                                    <div>
                                        <div>
                                            <p className=" py-1 px-2 font-size-small">
                                                Posted on <span className="text-danger fw-bold">{moment(item && item.modified).format('LL')} </span>by <span className="text-danger fw-bold">Admin</span>
                                            </p>
                                            <h4 className="card-title" style={{ fontFamily: 'Poppins', color: '#575757' }}>{ReactHtmlParser(item && item.title.rendered)}</h4>
                                            <span className="card-tex " style={{ fontFamily: 'Poppins', color: '#575757' }}>{ReactHtmlParser(item && item.slug)}!</span>
                                            <br />
                                            <span className="card-text" style={{ fontFamily: 'Poppins', fontSize: '14px', color: '575757' }}>{ReactHtmlParser(item && item.excerpt.rendered)}</span>
                                            <span  style={{ cursor:'pointer', color: 'red', fontFamily: 'Poppins' }}>Read More</span>

                                        </div>
                                    </div>
                                </div>
                                {console.log("data from blog list", item)}
                                <div >
                                      <img src={item.images[0]} alt="" style={{ width: '84.5%', height: '99%', marginTop: '0.2%', marginLeft: '15%' }} />
                                </div>
                            </div>

                        )
                    } else return null


                }


                )}
        </div>
    )
}

export default VerticalBlog;

const Styles = ({
    BlogListItem: {
        border: '1px solid darkgray',
        marginBottom: '20px',
        display: 'flex',
        flexDirection: 'row',
        width: '80%',
        height: '20%'
    }
})