import React, { useContext, useEffect, useState } from 'react';
import { Row, Col } from "react-bootstrap";
import Gallery from './Gallery';
import Category from '../Category/Category';
import PostComment from './PostComment';
import { GlobalContext } from "../../Context/Context";
import axios from 'axios';

const Post = (props) => {
    const [thisBlog, setThisBlog] = useState({})
    const [blogData, setBlogData] = useState([])
    var urlQuery = window.location.href
    var inputTitle = urlQuery.split('name=')[1]
    var finalTitle = inputTitle.split('-').join(' ')


    useEffect(async () => {

        const URL = `https://shop.firewallforce.se/wp-json/wc/v3/blogs?page=1&limit=100`
        const { data } = await axios.get(URL)
        setBlogData(data)
        alert(`total Blogs : ${data.length}`)
        // alert(JSON.stringify(data))


        // data.map((item) => {
        //     // alert(`${item.title.rendered}  == ${finalTitle}`)
        //     if (item.title.rendered == finalTitle) {
        //         alert(`Final title :: ${finalTitle}`)
        //         setThisBlog(item)
        //     }
        // })

        var blogOne = JSON.parse(localStorage.getItem('currentBlog'))
        setThisBlog(blogOne)



        return () => {
            document.getElementById("footer-container").style.display = "block"
        }


    }, [])


    const setFooter = () => {
        document.getElementById("footer-container").style.display = "none"
    }

    if (blogData.length) {

        return (
            <div style={{ top: '23.5%', left: '7%', width: '92%' }} className="my-5">
                <section className="container">
                    {blogData && <Row>
                        <Col lg={9}>
                            <Gallery blogData={blogData} productBlog={thisBlog} />
                            {/* <PostComment blogData={props.blogData} /> */}
                        </Col>
                        <Col lg={3}>
                            <Category page="post" blogData={blogData} />
                        </Col>
                    </Row>}
                </section>
                <br />
                <br />

            </div>
        )
    } else {
        return (
            <h1>loading</h1>
        )
    }

}

export default Post;
