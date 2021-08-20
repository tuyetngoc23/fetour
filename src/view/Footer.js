import React from 'react'

function Footer() {
    return (
        <>
            <footer className="section footer-corporate context-dark">
                <div className="footer-corporate-inset">
                    <div className="container">
                        <div className="row row-40 justify-content-lg-between">
                            <div className="col-sm-6 col-md-12 col-lg-3 col-xl-4">
                                <div className="oh-desktop">
                                    <div className="wow slideInRight" data-wow-delay="0s">
                                        <h6 className="text-spacing-100 text-uppercase">Contact us</h6>
                                        <ul className="footer-contacts d-inline-block d-sm-block">
                                            <li>
                                                <div className="unit">
                                                    <div className="unit-left"><span className="icon fa fa-phone" /></div>
                                                    <div className="unit-body"><a className="link-phone" href="tel:#">+1 323-913-4688</a></div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="unit">
                                                    <div className="unit-left"><span className="icon fa fa-envelope" /></div>
                                                    <div className="unit-body"><a className="link-aemail" href="mailto:#">info@demolink.org</a></div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="unit">
                                                    <div className="unit-left"><span className="icon fa fa-location-arrow" /></div>
                                                    <div className="unit-body"><a className="link-location" href="#">4730 Crystal Springs Dr, Los Angeles, CA 90027</a></div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-5 col-lg-3 col-xl-4">
                                <div className="oh-desktop">
                                    <div className="wow slideInDown" data-wow-delay="0s">
                                        <h6 className="text-spacing-100 text-uppercase">Popular news</h6>
                                        {/* Post Minimal 2*/}
                                        <article className="post post-minimal-2">
                                            <p className="post-minimal-2-title"><a href="#">Your Personal Guide to 5 Best Places to Visit on Earth</a></p>
                                            <div className="post-minimal-2-time">
                                                <time dateTime="2019-05-04">May 04, 2019</time>
                                            </div>
                                        </article>
                                        {/* Post Minimal 2*/}
                                        <article className="post post-minimal-2">
                                            <p className="post-minimal-2-title"><a href="#">Top 10 Hotels: Rating by Wonder Tour Travel Experts</a></p>
                                            <div className="post-minimal-2-time">
                                                <time dateTime="2019-05-04">May 04, 2019</time>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-11 col-md-7 col-lg-5 col-xl-4">
                                <div className="oh-desktop">
                                    <div className="wow slideInLeft" data-wow-delay="0s">
                                        <h6 className="text-spacing-100 text-uppercase">Quick links</h6>
                                        <ul className="row-6 list-0 list-marked list-marked-md list-marked-secondary list-custom-2">
                                            <li><a href="about.html">About us</a></li>
                                            <li><a href="#">Our Tours</a></li>
                                            <li><a href="#">Our Team</a></li>
                                            <li><a href="#">Gallery</a></li>
                                            <li><a href="#">Blog</a></li>
                                        </ul>
                                        <div className="group-md group-middle justify-content-sm-start"><a className="button button-lg button-primary button-ujarak" href="#">Get in touch</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-corporate-bottom-panel">
                    <div className="container">
                        <div className="row justfy-content-xl-space-berween row-10 align-items-md-center2">
                            <div className="col-sm-6 col-md-4 text-sm-right text-md-center">
                                <div>
                                    <ul className="list-inline list-inline-sm footer-social-list-2">
                                        <li><a className="icon fa fa-facebook" href="#" /></li>
                                        <li><a className="icon fa fa-twitter" href="#" /></li>
                                        <li><a className="icon fa fa-google-plus" href="#" /></li>
                                        <li><a className="icon fa fa-instagram" href="#" /></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 order-sm-first">
                                {/* Rights*/}
                                <p className="rights"><span>©&nbsp;</span><span className="copyright-year" /><span>&nbsp;</span><span>Wonder Tour</span>. All Rights Reserved. Design by <a href="https://www.templatemonster.com">TemplateMonster</a></p>
                            </div>
                            <div className="col-sm-6 col-md-4 text-md-right">
                                <p className="rights"><a href="#">Privacy Policy</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>

    )
}

export default Footer
