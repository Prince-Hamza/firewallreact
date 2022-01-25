import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import pic from "../../Home/CarouselGallery/img/g1.jpg";
import PostDetail from './PostDetail';
import { GlobalContext } from "../../Context/Context";
import img1 from "../img/one.jpg";
import img2 from "../img/two.png";
import img3 from "../img/three.jpeg";
import img4 from "../img/four.jpeg";
import img5 from "../img/five.jpg";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        height: '350px',
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));

const Gallery = ({ blogData, productBlog }) => {
    const classes = useStyles();
    // const { blogsToShow } = useContext(GlobalContext);

    const blog = blogData && blogData[0];
    // alert(JSON.stringify(blog))
    const array = [img1, img2, img3, img4, img5];
    console.log("hahahahah ====111==>", productBlog)

    return (
        <div className={classes.root}>
            <GridList className={classes.gridList}>
                <GridListTile className="flex-fill h-100" >
                    <img src={productBlog && productBlog.images && productBlog.images[0]} alt="" />
                    <GridListTileBar

                        subtitle={<span style={{ fontFamily: 'Poppins', fontSize: '16px' }}>{productBlog && productBlog.title && productBlog.title?.rendered}</span>}
                        actionIcon={
                            <IconButton aria-label={`info about`} className={classes.icon}>
                                <InfoIcon />
                            </IconButton>
                        }
                    />
                </GridListTile>
            </GridList>
            <div className=' w-100 py-3' style={{ backgroundColor: "#f7f7f7", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <section className="w-50 post-options d-flex justify-content-evenly">
                    <i className="fa fa-lg fa-heart text-danger" aria-hidden="true"></i>
                    <i className="fa text-muted fa-lg fa-commenting-o" aria-hidden="true"></i>
                    <i className="fa text-muted fa-lg fa-share-alt" aria-hidden="true"></i>
                    <i className="fa text-danger fa-lg fa-instagram" aria-hidden="true"></i>
                    <i className="fa text-primary fa-lg fa-twitter" aria-hidden="true"></i>
                    <i className="fa text-primary fa-lg fa-facebook" aria-hidden="true"></i>
                </section>
            </div>
            <div className=" w-100" >
                <PostDetail blog={blog} productBlog={productBlog} />
            </div>
        </div>
    )
}

export default Gallery;
