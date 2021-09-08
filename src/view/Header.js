/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import image_logo from '../asset/images/logo1.png'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <>

            <header>
                <div style={{ opacity: '0.5' }} className="fixed-top">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="logo">
                            <img className="nav-link" src={image_logo} alt="Logo" />
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-child-tab" ><Link to="/">Home</Link></button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-child-tab" ><Link to="/tour">Tour</Link></button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-child-tab" ><Link to="/blog">Blog</Link></button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-child-tab" ><Link to="/contact">Contact</Link></button>
                        </li>
                    </ul>
                </div>
                <div className="slick">
                    <div>
                        <div className="title-slick text-uppercase">
                            <h5>Welcome to Our Tour</h5>
                            <span>Create <strong>your tour</strong></span>
                        </div>
                        <img src={`${process.env.PUBLIC_URL}/asset/images/dalat2.jpg`} style={{ width: '100%', height: '655px' }} />
                    </div>
                    <div>
                        <div className="title-slick text-uppercase">
                            <h5>Welcome to Our Tour</h5>
                            <span>Exploxe <strong>your tour</strong></span>
                        </div>
                        <img  src={`${process.env.PUBLIC_URL}/asset/images/vinhhalong.jpg`} style={{ width: '100%', height: '655px' }} />
                    </div>
                    <div>
                        <div className="title-slick text-uppercase">
                            <h5>Welcome to Our Tour</h5>
                            <span>Create <strong>your tour</strong></span>
                        </div>
                        <img  src={`${process.env.PUBLIC_URL}/asset/images/phuquoc.jpg`} style={{ width: '100%', height: '655px' }} />
                    </div>
                </div>

            </header>
        </>

    )
}

export default Header
