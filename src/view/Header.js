/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import image_logo from '../asset/images/logo1.png'

function Header() {
    return (
        <>
            <header>
                <div style={{ opacity: '0.5' }} className="fixed-top">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="logo">
                            <img className="nav-link" src={image_logo} alt="Logo"/>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-child-tab" ><a href="">Home</a></button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-child-tab" ><a>Tour</a></button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-child-tab" ><a>Blog</a></button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-child-tab" ><a>Contact</a></button>
                        </li>
                    </ul>
                </div>
                <div className="slick">
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/asset/images/dalat2.jpg`} style={{ width: '100%' }} />
                    </div>
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/asset/images/vinhhalong.jpg`} style={{ width: '100%' }} />
                    </div>
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/asset/images/phuquoc.jpg`} style={{ width: '100%' }} />
                    </div>
                </div>
                
            </header>
        </>

    )
}

export default Header
