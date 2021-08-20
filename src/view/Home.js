/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import '../style/home.css'

function Home() {
    return (
        <div className="gtco-section">
            <div className="gtco-container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2 text-center gtco-heading">
                        <h2>Most Popular Destination</h2>
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
                                <p><span className="btn btn-primary">Schedule a Trip</span></p>
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
                                <p><span className="btn btn-primary">Schedule a Trip</span></p>
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
                                <p><span className="btn btn-primary">Schedule a Trip</span></p>
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
                                <p><span className="btn btn-primary">Schedule a Trip</span></p>
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
                                <p><span className="btn btn-primary">Schedule a Trip</span></p>
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
                                <p><span className="btn btn-primary">Schedule a Trip</span></p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Home
