/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

function Footer() {
    //get List Blog
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:9090/blog`)
            .then(res => {
                setBlogs(res.data.slice(-2))
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    return (
        <>
            <footer className=" footer-corporate context-dark">
                <div className="footer-corporate-inset">
                    <div className="fix-container">
                        <div className="row row-40 justify-content-lg-between">
                            <div className="col-sm-6 col-md-12 col-lg-3 col-xl-4">
                                <div>
                                    <div className="slideInRight">
                                        <h6 className="text-spacing-100 text-uppercase">Contact us</h6>
                                        <ul className="footer-contacts d-inline-block d-sm-block">
                                            <li>
                                                <div className="unit">
                                                    <div ><span className="icon fa fa-phone" /></div>
                                                    <div ><a className="link-phone" href="tel:#">+1 323-913-4688</a></div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="unit">
                                                    <div ><span className="icon fa fa-envelope" /></div>
                                                    <div><a className="link-email" href="mailto:#">info@demolink.org</a></div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="unit">
                                                    <div ><span className="icon fa fa-location-arrow" /></div>
                                                    <div ><a className="link-location" href="#">4730 Crystal Springs Dr, Los Angeles, CA 90027</a></div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-5 col-lg-3 col-xl-4">
                                <div>
                                    <div className="slideInDown">
                                        <h6 className="text-spacing-100 text-uppercase">Popular news</h6>
                                        {/* Post Minimal 2*/}
                                        {
                                            blogs.length > 0 && blogs.map(item => (
                                                <article className="post post-minimal-2" key={item.id}>
                                                    <p ><Link to={`/blogdetail/${item.id}`}>{item.title}</Link></p>
                                                    <div>
                                                        <time dateTime="2019-05-04"><Moment format="MMM DD, YYYY">{item.wdate}</Moment></time>
                                                    </div>
                                                </article>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-11 col-md-7 col-lg-5 col-xl-4">
                                <div>
                                    <div className="slideInLeft">
                                        <h6 className="text-spacing-100 text-uppercase">Quick links</h6>
                                        <ul className="row-6 list-0 list-marked list-marked-md list-marked-secondary list-custom-2">
                                            <li><a href="about.html">About us</a></li>
                                            <li><a href="#">Our Tours</a></li>
                                            <li><a href="#">Our Team</a></li>
                                            <li><a href="#">Gallery</a></li>
                                            <li><a href="#">Blog</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
        </>

    )
}

export default Footer
