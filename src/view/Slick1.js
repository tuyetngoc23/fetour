/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import {useEffect} from 'react'
import script from '../jquery/script';

function Slick1() {

    useEffect(() => {
        script();
    }, []);

    return (

        <div className="slick">
            <div>
                <img src={`${process.env.PUBLIC_URL}/asset/images/dalat2.jpg`} style={{ width: '100%' }} />
            </div>
            <div>
                <img src={`${process.env.PUBLIC_URL}/asset/images/vinhhalong.jpg`} style={{ width: '100%' }} />
            </div>
            <div>
                <img src={`${process.env.PUBLIC_URL}/asset/images/songhuong.jpg`} style={{ width: '100%' }} />
            </div>
        </div>

    )
}

export default Slick1
