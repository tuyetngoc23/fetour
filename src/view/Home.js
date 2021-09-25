/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { useState, useEffect } from 'react'
import '../style/home.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import NumberFormat from 'react-number-format';

function Home() {

    //get List Tours
    const [tours, setTours] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:9090/tour`)
            .then(res => {
                setTours(res.data.slice(-4))
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    console.log(tours);

    //get List Blog
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:9090/blog`)
            .then(res => {
                setBlogs(res.data.slice(-6))
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <>
            <div className="where_togo_area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3">
                            <div className="form_area">
                                <h3>Where you want to go?</h3>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="search_wrap">
                                <form className="search_form" action="#">
                                    <div className="input_field">
                                        <input id="datepicker" placeholder="Date" type="date" />
                                    </div>
                                    <div className="input_field">
                                        <select className="choose">
                                            <option data-display="Tour Type">Tour Type</option>
                                            <option value={1}>Some option</option>
                                            <option value={2}>Another option</option>
                                        </select>
                                    </div>
                                    <div className="input_field">
                                        <select className="choose">
                                            <option data-display="Destination">Destination</option>
                                            <option value={1}>Some option</option>
                                            <option value={2}>Another option</option>
                                        </select>
                                    </div>
                                    <div className="search_btn">
                                        <Link to="/tour"><button className="boxed-btn4 " type="submit">Search</button></Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section-sm">
                <div className="container">
                    <h3 className="oh-desktop"><span className="d-inline-block slideInDown">Hot Tours</span></h3>
                    <div className="row row-sm row-40 row-md-50">
                        {
                            tours && tours.map(item =>
                                <div className="col-sm-6 col-md-12 fadeInRight" key={item.id}>
                                    <article className="product-big">
                                        <div className="unit flex-column flex-md-row align-items-md-stretch">
                                            <div className="unit-left"><a className="product-big-figure" href="#"><img src={`${process.env.PUBLIC_URL}/asset/images/${item.image}`} alt="images" width={600} height={366} /></a></div>
                                            <div className="unit-body">
                                                <div className="product-big-body">
                                                    <h5 className="product-big-title"><a href="#">{item.name}</a></h5>
                                                    <p className="product-big-text">{item.content}...</p>
                                                    <div className="product-big-price-wrap"><span className="product-big-price"><NumberFormat value={item.price} suffix="VND" thousandSeparator={true} thousandsGroupStyle="thousand" displayType="text" /></span></div>
                                                    <Link to={`/tourdetail/${item.id}`} className="button button-black-outline button-ujarak">Buy This Tour</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            )
                        }
                        {
                            tours.lenghth <= 0 && <div className="alert alert-danger">Hiện không có tour nào</div>
                        }
                        {/* <div className="col-sm-6 col-md-12 fadeInLeft">
                            <article className="product-big">
                                <div className="unit flex-column flex-md-row align-items-md-stretch">
                                    <div className="unit-left"><a className="product-big-figure" href="#"><img src={image_coco} alt="images" width={600} height={366} /></a></div>
                                    <div className="unit-body">
                                        <div className="product-big-body">
                                            <h5 className="product-big-title"><a href="#">Mauritius Island, Africa</a></h5>
                                            <p className="product-big-text">The beautiful and inviting island nation of Mauritius is an ideal ‘flop and drop’ at the conclusion of your safari. Indulge in the delightful scents of the fragrant...</p>
                                            <div className="product-big-price-wrap"><span className="product-big-price">9.000.000VND</span></div>
                                            <a className="button button-black-outline button-ujarak" href="#">Buy This Tour</a>

                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div> */}
                    </div>
                </div>
            </section>
            <div className="gtco-section">
                <div className="gtco-container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center gtco-heading">
                            <h2>Most Popular Blog</h2>
                            <p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
                        </div>
                    </div>
                    <div className="row">
                        {
                            blogs.length > 0 && blogs.map(item => (
                                <div className="col-lg-4 col-md-4 col-sm-6" key={item.id}>
                                    <Link to={`/blogdetail/${item.id}`} className="fh5co-card-item image-popup">
                                        <figure>
                                            <img src={`${process.env.PUBLIC_URL}/asset/images/${item.image}`} alt="Image" className="img-responsive" />
                                        </figure>
                                        <div className="fh5co-text">
                                            <h2>{item.title.slice(0, 30)}..</h2>
                                            <p>{item.content.slice(0,100)}...</p>
                                            <p><span className="btn btn-primary">Read More</span></p>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        }
                        
                    </div>
                </div>
            </div>
        </>

    )
}

export default Home
