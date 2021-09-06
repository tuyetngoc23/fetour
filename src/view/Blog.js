/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import '../style/blog.css'
import vinhhalong from '../asset/images/vinhhalong.jpg'
import vinhlanha from '../asset/images/Vịnh-Lan-Hạ.jpg'
import taynguyen from '../asset/images/tay-nguyen.jpg'
import songhuong from '../asset/images/songhuong.jpg'
import sapaaa from '../asset/images/sapaaa.jpg'

function Blog() {
    return (
        <>
            <main className="site-main">
                <h1 className="title-blog">Blog</h1>
                <section className="blog-post-area section-margin mt-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="single-recent-blog-post">
                                    <div className="thumb">
                                        <img className="img-fluid fix-img" src={vinhhalong} alt="image blog" />
                                        <ul className="thumb-info">
                                            <li><a href="#"><i className="fas fa-user" />Admin</a></li>
                                            <li><a href="#"><i className="fas fa-calendar-alt" />January 12,2019</a></li>
                                            <li><a href="#"><i className="fas fa-comments" />2 Comments</a></li>
                                        </ul>
                                    </div>
                                    <div className="details mt-20">
                                        <a href="#">
                                            <h3>Woman claims husband wants to name baby girl
                                                after his ex-lover sparking.</h3>
                                        </a>
                                        <p>Over yielding doesn't so moved green saw meat hath fish he him from given yielding
                                            lesser cattle were fruitful lights. Given let have, lesser their made him above
                                            gathered dominion sixth. Creeping deep said can't called second. Air created seed
                                            heaven sixth created living</p>
                                        <a className="button" href="#">Read More <i className="fas fa-arrow-right" /></a>
                                    </div>
                                </div>
                                <div className="single-recent-blog-post">
                                    <div className="thumb">
                                        <img className="img-fluid" src={vinhlanha} alt="image blog" />
                                        <ul className="thumb-info">
                                            <li><a href="#"><i className="fas fa-user" />Admin</a></li>
                                            <li><a href="#"><i className="fas fa-calendar-alt" />January 12,2019</a></li>
                                            <li><a href="#"><i className="fas fa-comments" />2 Comments</a></li>
                                        </ul>
                                    </div>
                                    <div className="details mt-20">
                                        <a href="#">
                                            <h3>Woman claims husband wants to name baby girl
                                                after his ex-lover sparking.</h3>
                                        </a>
                                        <p>Over yielding doesn't so moved green saw meat hath fish he him from given yielding
                                            lesser cattle were fruitful lights. Given let have, lesser their made him above
                                            gathered dominion sixth. Creeping deep said can't called second. Air created seed
                                            heaven sixth created living</p>
                                        <a className="button" href="#">Read More <i className="fas fa-arrow-right" /></a>
                                    </div>
                                </div>
                                <div className="single-recent-blog-post">
                                    <div className="thumb">
                                        <img className="img-fluid" src={sapaaa} alt="image blog" />
                                        <ul className="thumb-info">
                                            <li><a href="#"><i className="fas fa-user" />Admin</a></li>
                                            <li><a href="#"><i className="fas fa-calendar-alt" />January 12,2019</a></li>
                                            <li><a href="#"><i className="fas fa-comments" />2 Comments</a></li>
                                        </ul>
                                    </div>
                                    <div className="details mt-20">
                                        <a href="#">
                                            <h3>Tourist deaths in Costa Rica jeopardize safe dest
                                                ination reputation all time. </h3>
                                        </a>
                                        <p>Over yielding doesn't so moved green saw meat hath fish he him from given yielding
                                            lesser cattle were fruitful lights. Given let have, lesser their made him above
                                            gathered dominion sixth. Creeping deep said can't called second. Air created seed
                                            heaven sixth created living</p>
                                        <a className="button" href="#">Read More <i className="fas fa-arrow-right" /></a>
                                    </div>
                                </div>
                                <div className="single-recent-blog-post">
                                    <div className="thumb">
                                        <img className="img-fluid" src={sapaaa} alt="image blog" />
                                        <ul className="thumb-info">
                                            <li><a href="#"><i className="fas fa-user" />Admin</a></li>
                                            <li><a href="#"><i className="fas fa-calendar-alt" />January 12,2019</a></li>
                                            <li><a href="#"><i className="fas fa-comments" />2 Comments</a></li>
                                        </ul>
                                    </div>
                                    <div className="details mt-20">
                                        <a href="#">
                                            <h3>Tourist deaths in Costa Rica jeopardize safe dest
                                                ination reputation all time. </h3>
                                        </a>
                                        <p>Over yielding doesn't so moved green saw meat hath fish he him from given yielding
                                            lesser cattle were fruitful lights. Given let have, lesser their made him above
                                            gathered dominion sixth. Creeping deep said can't called second. Air created seed
                                            heaven sixth created living</p>
                                        <a className="button" href="#">Read More <i className="fas fa-arrow-right" /></a>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="col-lg-4 sidebar-widgets">
                                <div className="widget-wrap">
                                    <div className="single-sidebar-widget popular-post-widget">
                                        <h3 className="single-sidebar-widget__title">Popular Post</h3>
                                        <div className="popular-post-list">
                                            <div className="single-post-list">
                                                <div className="thumb">
                                                    <img className="card-img rounded-0" src={sapaaa} alt="image blog" />
                                                    <ul className="thumb-info">
                                                        <li><a href="#">Adam Colinge</a></li>
                                                        <li><a href="#">Dec 15</a></li>
                                                    </ul>
                                                </div>
                                                <div className="details mt-20">
                                                    <a href="#">
                                                        <h6>Accused of assaulting flight attendant miktake alaways</h6>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="single-post-list">
                                                <div className="thumb">
                                                    <img className="card-img rounded-0" src={songhuong} alt="image blog" />
                                                    <ul className="thumb-info">
                                                        <li><a href="#">Adam Colinge</a></li>
                                                        <li><a href="#">Dec 15</a></li>
                                                    </ul>
                                                </div>
                                                <div className="details mt-20">
                                                    <a href="#">
                                                        <h6>Tennessee outback steakhouse the
                                                            worker diagnosed</h6>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="single-post-list">
                                                <div className="thumb">
                                                    <img className="card-img rounded-0" src={taynguyen} alt="image blog" />
                                                    <ul className="thumb-info">
                                                        <li><a href="#">Adam Colinge</a></li>
                                                        <li><a href="#">Dec 15</a></li>
                                                    </ul>
                                                </div>
                                                <div className="details mt-20">
                                                    <a href="#">
                                                        <h6>Tennessee outback steakhouse the
                                                            worker diagnosed</h6>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <div style={{ clear: 'both' }} />
        </>

    )
}

export default Blog
