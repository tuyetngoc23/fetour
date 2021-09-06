/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import '../style/blogdetail.css'
import sapaaa from '../asset/images/sapaaa.jpg'
import people from '../asset/images/people.png'
import taynguyen from '../asset/images/tay-nguyen.jpg'
import songhuong from '../asset/images/songhuong.jpg'

function BlogDetail() {
    return (

        <>
            <h1 className="title-blog">Blog Detail</h1>
            <section className="blog-post-area section-margin">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="main_blog_details">
                                <img className="img-fluid fix" src={sapaaa} alt/>
                                <a href="#">
                                    <h4>Cartridge Is Better Than Ever <br /> A Discount Toner</h4>
                                </a>
                                <div className="user_details">
                                    <div className="float-right mt-sm-0 mt-3">
                                        <div className="media">
                                            <div className="media-body">
                                                <h5>Mark wiens</h5>
                                                <p>12 Dec, 2017 11:21 am</p>
                                            </div>
                                            <div className="d-flex">
                                                <img style={{width: '42px', height:'42px'}} src={people} alt/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p>MCSE boot camps have its supporters and its detractors. Some people do not understand why
                                    you should have to spend money on boot camp when you can get the MCSE study materials
                                    yourself at a fraction of the camp price. However, who has the willpower</p>
                                <p>MCSE boot camps have its supporters and its detractors. Some people do not understand why
                                    you should have to spend money on boot camp when you can get the MCSE study materials
                                    yourself at a fraction of the camp price. However, who has the willpower to actually sit
                                    through a self-imposed MCSE training. who has the willpower to actually sit through a
                                    self-imposed MCSE training.</p>
                                <blockquote className="blockquote">
                                    <p className="mb-0">MCSE boot camps have its supporters and its detractors. Some people do
                                        not understand why you should have to spend money on boot camp when you can get the
                                        MCSE study materials yourself at a fraction of the camp price. However, who has the
                                        willpower to actually sit through a self-imposed MCSE training.</p>
                                </blockquote>
                                <p>MCSE boot camps have its supporters and its detractors. Some people do not understand why
                                    you should have to spend money on boot camp when you can get the MCSE study materials
                                    yourself at a fraction of the camp price. However, who has the willpower</p>
                                <p>MCSE boot camps have its supporters and its detractors. Some people do not understand why
                                    you should have to spend money on boot camp when you can get the MCSE study materials
                                    yourself at a fraction of the camp price. However, who has the willpower</p>
                            </div>
                            <div className="comments-area">
                                <h4>05 Comments</h4>
                                <div className="comment-list">
                                    <div className="single-comment justify-content-between d-flex">
                                        <div className="user justify-content-between d-flex">
                                            <div className="thumb">
                                                <img src={people} alt data-pagespeed-url-hash={323181169} />
                                            </div>
                                            <div className="desc">
                                                <h5>Emilly Blunt</h5>
                                                <p className="date">December 4, 2017 at 3:12 pm </p>
                                                <p className="comment">
                                                    Never say goodbye till the end comes!
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment-list left-padding">
                                    <div className="single-comment justify-content-between d-flex">
                                        <div className="user justify-content-between d-flex">
                                            <div className="thumb">
                                                <img src={people} alt data-pagespeed-url-hash={617681090} onload="pagespeed.CriticalImages.checkImageForCriticality(this);" />
                                            </div>
                                            <div className="desc">
                                                <h5>Elsie Cunningham</h5>
                                                <p className="date">December 4, 2017 at 3:12 pm </p>
                                                <p className="comment">
                                                    Never say goodbye till the end comes!
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment-list left-padding">
                                    <div className="single-comment justify-content-between d-flex">
                                        <div className="user justify-content-between d-flex">
                                            <div className="thumb">
                                                <img src={people} alt data-pagespeed-url-hash={912181011} onload="pagespeed.CriticalImages.checkImageForCriticality(this);" />
                                            </div>
                                            <div className="desc">
                                                <h5>Annie Stephens</h5>
                                                <p className="date">December 4, 2017 at 3:12 pm </p>
                                                <p className="comment">
                                                    Never say goodbye till the end comes!
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment-list">
                                    <div className="single-comment justify-content-between d-flex">
                                        <div className="user justify-content-between d-flex">
                                            <div className="thumb">
                                                <img src={people} alt data-pagespeed-url-hash={1206680932} onload="pagespeed.CriticalImages.checkImageForCriticality(this);" />
                                            </div>
                                            <div className="desc">
                                                <h5>Maria Luna</h5>
                                                <p className="date">December 4, 2017 at 3:12 pm </p>
                                                <p className="comment">
                                                    Never say goodbye till the end comes!
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment-list">
                                    <div className="single-comment justify-content-between d-flex">
                                        <div className="user justify-content-between d-flex">
                                            <div className="thumb">
                                                <img src={people} alt data-pagespeed-url-hash={1501180853} onload="pagespeed.CriticalImages.checkImageForCriticality(this);" />
                                            </div>
                                            <div className="desc">
                                                <h5>Ina Hayes</h5>
                                                <p className="date">December 4, 2017 at 3:12 pm </p>
                                                <p className="comment">
                                                    Never say goodbye till the end comes!
                                                </p>
                                            </div>
                                        </div>
                                        {/* <div class="reply-btn">
                                  <a href="" class="btn-reply text-uppercase">reply</a>
                              </div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="comment-form">
                                <h4>Leave a Reply</h4>
                                <form action="#">
                                    <div className="form-group">
                                        <textarea className="form-control mb-10" rows={5} name="message" placeholder="Messege" required />
                                    </div>
                                    <input type="submit" className="button submit_btn" value="Post Comment" />
                                </form>
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
        </>


    )
}

export default BlogDetail
