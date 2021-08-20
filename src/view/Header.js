/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
// import image1 from 'asset/images/phuquoc.jsp'

function Header() {
    return (
        <>
            <ul className="nav nav-pills mb-3 fixed-top" id="pills-tab" role="tablist">
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
        </>

    )
}

export default Header
