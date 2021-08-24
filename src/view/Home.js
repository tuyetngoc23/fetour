/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import '../style/home.css'
import image_da_nang from '../asset/images/da_nang.jpg'
import image_coco from '../asset/images/coco-beach-phan-thiet.jpg'

function Home() {
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
                                        <button className="boxed-btn4 " type="submit">Search</button>
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
                        <div className="col-sm-6 col-md-12 fadeInRight">
                            {/* Product Big*/}
                            <article className="product-big">
                                <div className="unit flex-column flex-md-row align-items-md-stretch">
                                    <div className="unit-left"><a className="product-big-figure" href="#"><img src={image_da_nang} alt="images" width={600} height={366} /></a></div>
                                    <div className="unit-body">
                                        <div className="product-big-body">
                                            <h5 className="product-big-title"><a href="#">Benidorm, Spain</a></h5>
                                            <p className="product-big-text">Benidorm is a buzzing resort with a big reputation for beach holidays. Situated in sunny Costa Blanca, the town is one of the original Spanish beach resorts...</p>
                                            <div className="product-big-price-wrap"><span className="product-big-price">5.000.000VND</span></div>
                                            <a className="button button-black-outline button-ujarak" href="#">Buy This Tour</a>

                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col-sm-6 col-md-12 fadeInLeft">
                            {/* Product Big*/}
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
                        </div>
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
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <a href="images/img_1.jpg" className="fh5co-card-item image-popup">
                                <figure>
                                    <img src={`${process.env.PUBLIC_URL}/asset/images/cucangchai.jpg`} alt="Image" className="img-responsive" />
                                </figure>
                                <div className="fh5co-text">
                                    <h2>Núi Đại Ngàn Xinh Đẹp TRùng Dương Quá ĐI</h2>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia..</p>
                                    <p><span className="btn btn-primary">Read More</span></p>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <a href="images/img_2.jpg" className="fh5co-card-item image-popup">
                                <figure>
                                    <img src={`${process.env.PUBLIC_URL}/asset/images/danàng.jpg`} alt="Image" className="img-responsive" />
                                </figure>
                                <div className="fh5co-text">
                                    <h2>Seoul, South Korea</h2>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia..</p>
                                    <p><span className="btn btn-primary">Read More</span></p>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <a href="images/img_3.jpg" className="fh5co-card-item image-popup">
                                <figure>
                                    <img src={`${process.env.PUBLIC_URL}/asset/images/coco-beach-phan-thiet.jpg`} alt="Image" className="img-responsive" />
                                </figure>
                                <div className="fh5co-text">
                                    <h2>Paris, France</h2>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia..</p>
                                    <p><span className="btn btn-primary">Read More</span></p>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <a href="images/img_4.jpg" className="fh5co-card-item image-popup">
                                <figure>
                                    <img src={`${process.env.PUBLIC_URL}/asset/images/da_nang.jpg`} alt="Image" className="img-responsive" />
                                </figure>
                                <div className="fh5co-text">
                                    <h2>Sydney, Australia</h2>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia..</p>
                                    <p><span className="btn btn-primary">Read More</span></p>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <a href="images/img_5.jpg" className="fh5co-card-item image-popup">
                                <figure>
                                    <img src={`${process.env.PUBLIC_URL}/asset/images/deodatrang.jpg`} alt="Image" className="img-responsive" />
                                </figure>
                                <div className="fh5co-text">
                                    <h2>Greece, Europe</h2>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia..</p>
                                    <p><span className="btn btn-primary">Read More</span></p>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <a href="images/img_6.jpg" className="fh5co-card-item image-popup">
                                <figure>
                                    <img src={`${process.env.PUBLIC_URL}/asset/images/dao-ly-son-tu-da-nang.jpg`} alt="Image" className="img-responsive" />
                                </figure>
                                <div className="fh5co-text">
                                    <h2>Spain, Europe</h2>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia..</p>
                                    <p><span className="btn btn-primary">Read More</span></p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>


        </>

    )
}

export default Home
