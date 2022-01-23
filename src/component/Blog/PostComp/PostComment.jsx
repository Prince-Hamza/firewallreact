import React from 'react';
import { Form } from "react-bootstrap";
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import "./Post.css";

const PostComment = () => {
    const array = [1, 2, 3];
    return (
        <div  className="my-4 pt-4 pb-5 px-5 bg-color comment-main">
            <section>
                <div className="d-flex justify-content-between">
                    <span className="text-danger fw-bold font-size-small">Comments</span>
                    <section>
                        <span className="text-danger fw-bold mx-2 font-size-small">SHARE</span>
                        <span className="text-danger fw-bold font-size-small">MORE</span>
                    </section>
                </div>
                <div className="mt-2">
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control className="font-size-small text-area" as="textarea" placeholder="Write a comment..." rows={3} />
                    </Form.Group>
                </div>
                <div className="my-3 text-end">
                    <button className="btn btn-danger py-2 font-size-small">Post Comment</button>
                </div>
            </section>

            {/* <section>
                {
                    array.map((item, index) => {
                        return <div key={index} className="bg-white p-4 mt-3 comment-text">
                            <div className="icon-info-btn">
                                <IconButton aria-label={`info about`}>
                                    <InfoIcon />
                                </IconButton>
                            </div>
                            <section className="d-flex align-items-center">
                                <i className="fa fa-user-circle-o text-danger fa-lg" aria-hidden="true"></i>
                                <span className="font-size-small text-danger fw-bold mx-2">John Doe</span>
                                <span className="text-muted font-size-small">1 hr ago</span>
                            </section>

                            <section className="justify py-2 px-4">
                                <span className="font-size-small text-muted">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate neque ipsam repellat perferendis delectus, debitis aperiam amet quasi dolorem similique quisquam eveniet
                           </span>
                                <section className="d-flex align-items-center justify-content-end mt-2">
                                    <i className="fa fa-lg text-danger mx-2 fa-thumbs-o-up" aria-hidden="true"></i>
                                    <i className="fa fa-lg fa-thumbs-o-down" aria-hidden="true"></i>
                                </section>
                            </section>

                        </div>
                    })
                }
            </section> */}
        </div>
    )
}

export default PostComment;
