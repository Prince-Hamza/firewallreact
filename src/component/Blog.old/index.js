import React, { useContext, useEffect, useState } from 'react';
import Blog from './PostComp/Post';
import { GlobalContext } from "../Context/Context";
import Main from './MainComp/Main';
const Index = () => {
    const { getBlogs, blogData, productBlog } = useContext(GlobalContext);

    useEffect(() => {
        getBlogs();
    }, [])

    return (<div>
        <Main blogData={blogData} />
        {/* <Blog blogData={blogData} productBlog={productBlog}/> */}
    </div>
    )
}

export default Index;
