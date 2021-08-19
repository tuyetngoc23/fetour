/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
// import image1 from 'asset/images/phuquoc.jsp'

function Header() {
    return (
        <>
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-child-tab" ><a href="">Home</a></button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-child-tab" ><a>Profile</a></button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-child-tab" ><a>Contact</a></button>
                </li>
            </ul>
            {/* <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-interval={10000}>
                        <img src={require('../asset/images/phanthiet.png')} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-interval={2000}>
                        <img src="" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="..." className="d-block w-100" alt="..." />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div> */}
        </>

    )
}

export default Header
