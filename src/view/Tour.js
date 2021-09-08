/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { useState } from 'react'
import NumberFormat from 'react-number-format';
import '../style/tour.css'
import image_dao_ly_son from '../asset/images/dao-ly-son-tu-da-nang.jpg'
import image_hitashi from '../asset/images/hitashi-nhat-ban.jpg'
import {Link} from 'react-router-dom'

function Tour() {
    const [number1, setNumber1] = useState(1000000);
    const [number2, setNumber2] = useState(1000000);

    return (
        <div>
            <section id="tour">
                <div className="container">
                    <div className="title-tour text-uppercase">
                        <h1>Tour</h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mg-bot30">
                            <form action="#">
                                <div className="searchbar">
                                    <div className="titlesearch">TÌM KIẾM</div>
                                    <div className="frsearch" style={{ clear: 'both' }}>
                                        <div className="location mg-bot15">
                                            <label htmlFor="departure">Nơi Khởi Hành</label>
                                            <select id="departure" className="form-control">
                                                <option value={0}>--Chọn nơi khởi hành--</option>
                                                <option value={1}>1</option>
                                                <option value={2}>2</option>
                                            </select>
                                        </div>
                                        <div className="cat mg-bot15">
                                            <label htmlFor="cattour">Loại Tour</label>
                                            <select id="cattour" className="form-control">
                                                <option value={0}>--Chọn loại tour--</option>
                                                <option value={1}>1</option>
                                                <option value={2}>2</option>
                                            </select>
                                        </div>
                                        <div className="province mg-bot15">
                                            <label htmlFor="desnitation">Nơi đến</label>
                                            <select id="desnitation" className="form-control">
                                                <option value={0}>--Chọn nơi đến--</option>
                                                <option value={1}>1</option>
                                                <option value={2}>2</option>
                                            </select>
                                        </div>
                                        <div className="arival mg-bot15">
                                            <label htmlFor="ngaykhoihanh">Ngày Khởi Hành</label>
                                            <input id="ngaykhoihanh" className="form-control" type="date" />
                                        </div>
                                        <div className="price mg-bot15">
                                            <label htmlFor="gia">Giá</label>
                                            <div className="slidecontainer">
                                                <input type="range" min={1000000} max={10000000} defaultValue={number1} className="slider" id="myRange" name="timgiatu" onChange={(e) => setNumber1(e.target.value)} />
                                                <p>Giá từ: <span id="demo" /><NumberFormat value={number1} suffix="vnd" thousandSeparator={true} thousandsGroupStyle="thousand" displayType="text" /></p>
                                                <input type="range" min={1000000} max={10000000} defaultValue={number2} className="slider" id="myRange2" name="timgiaden" onChange={(e) => setNumber2(e.target.value)} />
                                                <p>Giá đến: <span id="demo2" /><NumberFormat value={number2} suffix="vnd" thousandSeparator={true} thousandsGroupStyle="thousand" displayType="text" /></p>
                                            </div>
                                        </div>
                                        <div className="hotel mg-bot15">
                                            <label htmlFor="ks">Khách Sạn</label>
                                            <select id="ks" className="form-control">
                                                <option value={0}>--Chọn Khách sạn--</option>
                                                <option value={1}>1</option>
                                                <option value={2}>2</option>
                                            </select>
                                        </div>
                                        <div className="vehicle mg-bot15">
                                            <label htmlFor="phuongtien">Phương Tiện</label>
                                            <select id="phuongtien" className="form-control">
                                                <option value={0}>--Chọn phương tiện--</option>
                                                <option value={1}>1</option>
                                                <option value={2}>2</option>
                                            </select>
                                        </div>
                                        <div className="btsearch mg-bot15">
                                            <div>
                                                <input id="search" type="submit" className="form-control" defaultValue="Tìm Kiếm" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <div id="list">
                                <form action="#">
                                    <div className="wrap">
                                        <div id="day">
                                            <div id="ngay">01</div>
                                            <div id="monyear">7/2021</div>
                                        </div>
                                        <div id="box">
                                            <div id="imag">
                                                <a href="#"><img className="size" src={image_dao_ly_son} alt="image" /></a>
                                            </div>
                                            <div id="caption">
                                                <div>
                                                    <Link to="/tourdetail" id="tourname"><strong>Du lịch Hè - Tour Du lịch Phú Quốc - Grand World - Checkin Dòng Sông Venice - Vinwonders</strong></Link>
                                                    <div>
                                                        <p id="datetime">
                                                            <span>Thời gian</span>
                                                            <span>3 ngày 2 đêm</span>
                                                        </p>
                                                        <p id="datetime">
                                                            <span>Hotel: 5*</span>
                                                            <span>Phương tiện: Tàu lửa</span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div id="boxprice">
                                                    <div>
                                                        <span><strong>Số chỗ còn nhận: </strong>
                                                            10 chỗ</span>
                                                    </div>
                                                    <p>
                                                        <span id="price"><NumberFormat value={4000000} suffix="VND" thousandSeparator={true} thousandsGroupStyle="thousand" displayType="text" /></span>
                                                    </p>
                                                    <input id="book" type="submit" value="Đặt Tour" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div id="list">
                                <form action="#">
                                    <div className="wrap">
                                        <div id="day">
                                            <div id="ngay">01</div>
                                            <div id="monyear">7/2021</div>
                                        </div>
                                        <div id="box">
                                            <div id="imag">
                                                <a href="#"><img className="size" src={image_hitashi} alt="image" /></a>
                                            </div>
                                            <div id="caption">
                                                <div>
                                                    <a id="tourname" href="#"><strong>Du lịch Hè - Tour Du lịch Phú Quốc - Grand World - Checkin Dòng Sông Venice - Vinwonders</strong></a>
                                                    <div>
                                                        <p id="datetime">
                                                            <span>Thời gian</span>
                                                            <span>3 ngày 2 đêm</span>
                                                        </p>
                                                        <p id="datetime">
                                                            <span>Hotel: 5*</span>
                                                            <span>Phương tiện: Tàu lửa</span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div id="boxprice">
                                                    <div>
                                                        <span><strong>Số chỗ còn nhận: </strong>
                                                            10 chỗ</span>
                                                    </div>
                                                    <p>
                                                        <span id="price"><NumberFormat value={4000000} suffix="VND" thousandSeparator={true} thousandsGroupStyle="thousand" displayType="text" /></span>
                                                    </p>
                                                    <input id="book" type="submit" value="Đặt Tour" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Tour
