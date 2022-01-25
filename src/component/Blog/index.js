import React, { useContext, useEffect, useState } from 'react';
import Blog from './PostComp/Post';
import { GlobalContext } from "../Context/Context";
import Main from './MainComp/Main';
import axios from 'axios';
import { Hypnosis } from "react-cssfx-loading";

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
            blogData: [],
            overlayer: true
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
        }

        return (
            <section>
                <section style={Styles.Overlayer} >
                    <div style={Styles.overlayerNested} >
                        <Hypnosis color="cyan" width="100px" height="100px" duration="2s" />
                    </div>
                </section>
            </section>
        )
    }
}


const Styles = ({


    Overlayer: {
        position: 'fixed',
        top: '0px',
        left: '0px',
        width: '100%',
        height: '200%',
        background: 'rgb(98,91,91)',
        background: 'linear-gradient(90deg, rgba(98,91,91,0.7791491596638656) 0%, rgba(98,91,91,0.76234243697479) 100%)',
        zIndex: 1,

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    overlayerNested: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50%',
        width: '25%',
    },
    Input: {
        width: '100%',
        height: '5vh',
        backgroundColor: '#f1f1f1',
        border: 'none',
        borderRadius: '5px',
        marginRight: '2vh',
        marginBottom: '30px'
    },
    Form: {
        marginLeft: '5vh',
        marginTop: '5vh',
        marginRight: '15vh'
    },

    productsBox: {
        width: '85%',
        height: '20%',
        backgroundColor: '#f1f1f1',
        marginTop: '5%',
        marginBottom: '5%',
        overflow: 'scroll'
    },
    bankTransferSection: {

    },
    checkBoxesContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    orderButton: {
        width: '45%',
        height: '5%',
        backgroundColor: '#DD0004',
        border: 'none'
    },
    terms: {
        width: '80%',
        height: '2%',
        marginLeft: '2%'
    },
    bankTransferPara: {
        width: '450px',
        height: '300px',
        font: '13px times new roman',
        marginLeft: '8%'
    },
    stealthImage: {
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
    }

})