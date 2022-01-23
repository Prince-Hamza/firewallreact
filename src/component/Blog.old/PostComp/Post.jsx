import React, { useContext } from 'react';
import { Row, Col } from "react-bootstrap";
import Gallery from './Gallery';
import Category from '../Category/Category';
import PostComment from './PostComment';
import { GlobalContext } from "../../Context/Context";

const Post = () => {
    const { blogData, productBlog } = useContext(GlobalContext);
    return (
        <div className="my-5">
            <section className="container">
                <Row>
                    <Col lg={9}>
                        <Gallery blogData={blogData} productBlog={productBlog} />
                        <PostComment blogData={blogData} />
                    </Col>
                    <Col lg={3}>
                        <Category page="post" blogData={blogData} />
                    </Col>
                </Row>
            </section>
        </div>
    )
}

export default Post;
