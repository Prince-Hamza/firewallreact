import React, {useContext, useEffect} from 'react';
// import pic from "../CarouselGallery/img/g1.jpg";
import Carousel from 'react-elastic-carousel';
import { GlobalContext } from "../../Context/Context";
import { useHistory } from 'react-router-dom';
const Cards = ({ heading, success }) => {
    const {blogData, getBlogs, setBlogDetail}=useContext(GlobalContext)
    // const [data, setData] =useState([])
    // console.log("datatatatataa===>", blogData)
    useEffect(() => {
      getBlogs();
    }, [])
    // const array = [1, 2, 3, 4, 5, 6];
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 4 },
        { width: 1200, itemsToShow: 4 },
    ]
    const history = useHistory();

    const AddDetailFunc = (item) => {
        setBlogDetail(item)
        // console.log("hey" + productBlog)
        history.push(`/blogdetail?name=${item.title.rendered}&feature=1`)
    }
    // blogData.forEach(element => {
    //     setData(element)
    // });

    return (
        <div>
            {
                heading !== false && <section className="container text-center mt-4">
                    <span className=" h4" style={{ borderBottom: "3px solid #dc3545",fontFamily:'Poppins', color:'#575757' }}>{success ? success : 'Senaste Fran Tekniskt Bibliotek'}</span>
                    <div className={success ? 'my-4' : "mx-auto my-2 service-text"} style={{ width: "27rem" }} >
                        {
                            !success &&
                            <span className="text-center" style={{fontFamily:'Poppins', fontSize:'14px'}}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Voluptate exercitationem sequi
                            </span>
                        }
                    </div>
                </section>
            }
            <section className="container services-page card-page shadow-sm py-4">
                <Carousel breakPoints={breakPoints}>
                    {
                        blogData?.reverse().map((item, index) => {
                            return <div key={index} className="card mx-1">
                                {console.log("ddddd image=>",item)}
                                <img className="card-img-top" style={{height:'12rem'}} src={item?.images[0]} alt="Card cap" />
                                <div className="card-body" style={{height:'11rem'}}>
                                    <span  style={{fontFamily:'Poppins', fontSize:'14px'}}>{item.slug }</span>
                                 
                                    <p className="card-text"><small className="text-muted">{item.modified }</small></p>
                                    <span className="card-text text-danger" onClick={(e) => AddDetailFunc(item)} style-={{margin:0}}>Learn more</span>
                                </div>
                            </div>
                        })
                    }
                </Carousel>
            </section>
        </div>
    )
}

export default Cards;
