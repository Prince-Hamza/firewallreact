import React from 'react';
import "./Post.css";
import ReactHtmlParser from 'react-html-parser';
import moment from "moment";
// import { parse } from 'query-string';
// import { GlobalContext } from "../../Context/Context";
import { Redirect } from "react-router-dom";


const PostDetail = ({ productBlog }) => {
    // const { setBlogDetail, productBlog, blogData } = useContext(GlobalContext)
    console.log(productBlog)
    return <>
        {!productBlog && <Redirect to="/blog" />}

        <div className="pt-2 font-size-small border-btm " style={{fontFamily:'Poppins', fontSize:'14px', color:'#575757'}}>
            <p >{ReactHtmlParser(productBlog && productBlog.content?.rendered)}</p>
        </div>
        <span className=" py-2 font-size-small">
            Posted on <span className="text-danger fw-bold">{moment(productBlog && productBlog.modified).format('LL')} </span>by <span className="text-danger fw-bold">Admin</span>
        </span>
    </>
}

export default PostDetail;
