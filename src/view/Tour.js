/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { useState, useEffect } from 'react'
import NumberFormat from 'react-number-format';
import '../style/tour.css'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Moment from 'react-moment';

function Tour() {
    const [number1, setNumber1] = useState(1000000);
    const [number2, setNumber2] = useState(1000000);
    //get Vehicle
    const [vehicle, setVehicle] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:9090/vehicle`)
            .then(res => {
                setVehicle(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    //get Hotel
    const [hotel, setHotel] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:9090/hotel`)
            .then(res => {
                setHotel(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    //getProvince
    const [province, setProvince] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:9090/place/province`)
            .then(res => {
                setProvince(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    //get cattour
    const [cat, setCat] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:9090/cat`)
            .then(res => {
                setCat(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    //get department
    const [department, setDepartment] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:9090/department`)
            .then(res => {
                setDepartment(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    //get List Tours
    const [tours, setTours] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:9090/tour`)
            .then(res => {
                setTours(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    console.log(tours);

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
                                            <select id="departure" className="form-control" name="departure">
                                                <option value={0}>--Chọn nơi khởi hành--</option>
                                                {
                                                    department.length > 0 && department.map(item => (
                                                        <option value={item.id}>{item.address}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div className="cat mg-bot15">
                                            <label htmlFor="cattour">Loại Tour</label>
                                            <select id="cattour" className="form-control" name="cat">
                                                <option value={0}>--Chọn loại tour--</option>
                                                {
                                                    cat.length > 0 && cat.map(item =>(
                                                        <option value={item.id}>{item.name}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div className="province mg-bot15">
                                            <label htmlFor="desnitation">Nơi đến</label>
                                            <select id="desnitation" className="form-control" name="desnitation">
                                                <option value={0}>--Chọn nơi đến--</option>
                                                {
                                                    province.length > 0 && province.map(item =>(
                                                        <option value={item.id}>{item.name}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div className="arival mg-bot15">
                                            <label htmlFor="ngaykhoihanh">Ngày Khởi Hành</label>
                                            <input id="ngaykhoihanh" className="form-control" type="date" name="ngaykhoihanh"/>
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
                                            <select id="ks" className="form-control" name="ks">
                                                <option value={0}>--Chọn Khách sạn--</option>
                                                {
                                                    hotel.length > 0 && hotel.map(item =>(
                                                        <option value={item.id}>{item.type}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div className="vehicle mg-bot15">
                                            <label htmlFor="phuongtien">Phương Tiện</label>
                                            <select id="phuongtien" className="form-control" name="vehicle">
                                                <option value={0}>--Chọn phương tiện--</option>
                                                {
                                                    vehicle.length > 0 && vehicle.map(item =>(
                                                        <option value={item.id}>{item.ten}</option>
                                                    ))
                                                }
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
                            {
                                tours.length > 0 && tours.map(item => (
                                    <div id="list" key={item.id}>
                                        {/* <form action={`/tourdetail/${item.id}`}> */}
                                            <div className="wrap">
                                                <div id="day">
                                                    <div id="ngay"><Moment format="DD">{item.start_day}</Moment></div>
                                                    <div id="monyear"><Moment format="MM/YYYY">{item.end_day}</Moment></div>
                                                </div>
                                                <div id="box">
                                                    <div id="imag">
                                                        <Link to={`/tourdetail/${item.id}`}><img className="size" src={`${process.env.PUBLIC_URL}/asset/images/${item.image}`} alt="image" /></Link>
                                                    </div>
                                                    <div id="caption">
                                                        <div>
                                                            <Link to={`/tourdetail/${item.id}`} id="tourname"><strong>{item.name}</strong></Link>
                                                            <div>
                                                                <p id="datetime">
                                                                    <span>Thời gian</span>
                                                                    <span><Moment diff={item.start_day} unit="days">{item.end_day}</Moment> Ngày</span>
                                                                </p>
                                                                <p id="datetime">
                                                                    <span>Hotel: {item.hotel.type}</span>
                                                                    <span>Phương tiện: {item.vehicle.ten}</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div id="boxprice">
                                                            <div>
                                                                <span><strong>Số chỗ còn nhận: </strong>
                                                                    {item.max_amount} chỗ</span>
                                                            </div>
                                                            <p>
                                                                <span id="price"><NumberFormat value={item.price} suffix="VND" thousandSeparator={true} thousandsGroupStyle="thousand" displayType="text" /></span>
                                                            </p>
                                                            <Link to={`/tourdetail/${item.id}`}><input id="book" type="submit" value="Đặt Tour" className="form-control" /></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        {/* </form> */}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Tour
