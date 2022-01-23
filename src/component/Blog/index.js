import React, { useContext, useEffect, useState } from 'react';
import Blog from './PostComp/Post';
import { GlobalContext } from "../Context/Context";
import Main from './MainComp/Main';
import axios from 'axios';

// const Index = () => {
//     // const { getBlogs, blogData, productBlog } = useContext(GlobalContext);
//     const [blogData, setBlogData] = useState([])
//     useEffect(() => {
//         async function blogApi() {
//             var blogs = await getBlogs() 
//             alert(JSON.stringify(blogs))
//             setBlogData(blogs)
//             alert(JSON.stringify(blogData))
//         }

//         blogApi()

//     }, [])

//     const getBlogs = async () => {
//         //const URL = `https://shop.firewallforce.se/wp-json/wc/v3/blogs?page=1&limit=100`;
//         const URL = `https://shop.firewallforce.se/wp-json/wp/v2/posts`
//         const { data } = await axios.get(URL);
//         setBlogData(data);
//         return data
//     }

//     return (<div>
//         <Main blogData={[]} />
//         {/* <Blog blogData={blogData} productBlog={productBlog}/> */}
//     </div>
//     )
// }



// export default Index;


export default class Index extends React.Component {
    constructor() {
        super()
        this.state = {
            blogData: []
        }
    }

    componentDidMount = async () => {
        document.title = `Texh bibliotek | Tekniska fallstudier , product-och`

        const URL = `https://shop.firewallforce.se/wp-json/wc/v3/blogs?page=1&limit=15`
        const { data } = await axios.get(URL);
        this.setState({ blogData: data.reverse() })
        
        // alert(JSON.stringify(this.state.blogData))
    }


    render() {
        if (this.state.blogData.length > 0) {
            return (
                <section>
                    {this.state.blogData &&
                        <div>
                            <Main blogData={this.state.blogData} />
                            {/* <Blog blogData={this.state.blogData} productBlog={[]}/> */}
                        </div>
                    }

                </section>
            )
        } else {
            <section>
            <h5> Loading </h5>
            </section>
        }
        return null
    }
}