import react from 'react';
import { Row, Col } from "react-bootstrap";
import VerticalBlog from './VerticalBlog';
import Category from '../Category/Category';
import img1 from "../img/one.jpg";
import img2 from "../img/two.png";
import img3 from "../img/three.jpeg";
import img4 from "../img/four.jpeg";
import img5 from "../img/five.jpg";
import axios from 'axios';

const Main = ({ blogData }) => {
    const array = [img1, img2, img3, img4, img5];


    return (
        <section style={{ width: '80%', margin: '5%', paddingTop: 5, fontFamily: 'Poppins', color: '#575757' }}>
            {
                blogData.length &&
                <section style={{ display: 'flex', flexDirection: 'row' }}>
                    <Col lg={12}>
                        <VerticalBlog array={array} blogData={blogData} />
                    </Col>
                    <Col lg={5}>
                        <Category array={array} blogData={blogData} />
                    </Col>
                </section>
            }


        </section>
    )
}


export default Main