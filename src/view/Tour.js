/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { useState, useEffect } from 'react'
import NumberFormat from 'react-number-format';
import '../style/tour.css'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios';
import Moment from 'react-moment';
import { useHistory } from 'react-router';

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
    const search = useLocation().search;
    const [tours, setTours] = useState([]);
    const [departure, setDeparture] = useState();
    const [date, setDate] = useState(new URLSearchParams(search).get("date"));
    const [cattour, setCattour] = useState(new URLSearchParams(search).get("cattour"));
    const [prov, setProv] = useState(new URLSearchParams(search).get("prov"));
    const [ks, setKs] = useState();
    const [phuongtien, setPhuongTien] = useState();
    
    
    useEffect(() => {
        axios
            .get(`http://localhost:9090/tour`, {
                params: {
                    date: date,
                    cattour :cattour,
                    prov: prov,
                    departure: departure,
                    ks: ks,
                    phuongtien: phuongtien,
                    timgiatu: number1,
                    timgiaden: number2,
                }
            })
            .then(res => {
                setTours(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [date, cattour, prov, departure, ks, phuongtien, number1, number2])

    const history = useHistory();
    const submit=(e) => {
        e.preventDefault();
        history.push("/tour")
    }
  

    return (
        <div>
            <section id="tour">
                <div className="container">
                    <div className="title-tour text-uppercase">
                        <h1>Tour</h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mg-bot30">
                            <form onSubmit={submit}>
                                <div className="searchbar">
                                    <div className="titlesearch">T??M KI???M</div>
                                    <div className="frsearch" style={{ clear: 'both' }}>
                                        <div className="location mg-bot15">
                                            <label htmlFor="departure">N??i Kh???i H??nh</label>
                                            <select id="departure" className="form-control" 
                                                onChange={(e) => setDeparture(e.target.value)}>
                                                <option value={0}>--Ch???n n??i kh???i h??nh--</option>
                                                {
                                                    department.length > 0 && department.map(item => (
                                                        <option value={item.id} key={item.id}>{item.address}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div className="cat mg-bot15">
                                            <label htmlFor="cattour">Lo???i Tour</label>
                                            <select id="cattour" className="form-control" onChange={(e) => setCattour(e.target.value)}>
                                                <option value={0}>--Ch???n lo???i tour--</option>
                                                {
                                                    cat.length > 0 && cat.map(item =>(
                                                        <option value={item.id} key={item.id}>{item.name}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div className="province mg-bot15">
                                            <label htmlFor="desnitation">N??i ?????n</label>
                                            <select id="desnitation" className="form-control" onChange={(e) => setProv(e.target.value)}>
                                                <option value={0}>--Ch???n n??i ?????n--</option>
                                                {
                                                    province.length > 0 && province.map(item =>(
                                                        <option value={item.id} key={item.id}>{item.name}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div className="arival mg-bot15">
                                            <label htmlFor="ngaykhoihanh">Ng??y Kh???i H??nh</label>
                                            <input id="ngaykhoihanh" className="form-control" type="date" onChange={(e) => setDate(e.target.value)}/>
                                        </div>
                                        <div className="price mg-bot15">
                                            <label htmlFor="gia">Gi??</label>
                                            <div className="slidecontainer">
                                                <input type="range" min={1000000} max={10000000} defaultValue={number1} className="slider" id="myRange" name="timgiatu" onChange={(e) => setNumber1(e.target.value)} />
                                                <p>Gi?? t???: <span id="demo" /><NumberFormat value={number1} suffix="vnd" thousandSeparator={true} thousandsGroupStyle="thousand" displayType="text" /></p>
                                                <input type="range" min={1000000} max={10000000} defaultValue={number2} className="slider" id="myRange2" name="timgiaden" onChange={(e) => setNumber2(e.target.value)} />
                                                <p>Gi?? ?????n: <span id="demo2" /><NumberFormat value={number2} suffix="vnd" thousandSeparator={true} thousandsGroupStyle="thousand" displayType="text" /></p>
                                            </div>
                                        </div>
                                        <div className="hotel mg-bot15">
                                            <label htmlFor="ks">Kh??ch S???n</label>
                                            <select id="ks" className="form-control" onChange={(e) => setKs(e.target.value)}>
                                                <option value={0}>--Ch???n Kh??ch s???n--</option>
                                                {
                                                    hotel.length > 0 && hotel.map(item =>(
                                                        <option value={item.id} key={item.id}>{item.type}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div className="vehicle mg-bot15">
                                            <label htmlFor="phuongtien">Ph????ng Ti???n</label>
                                            <select id="phuongtien" className="form-control" onChange={(e) => setPhuongTien(e.target.value)}>
                                                <option value={0}>--Ch???n ph????ng ti???n--</option>
                                                {
                                                    vehicle.length > 0 && vehicle.map(item =>(
                                                        <option value={item.id} key={item.id}>{item.ten}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        {/* <div className="btsearch mg-bot15">
                                            <div>
                                                <input id="search" type="submit" className="form-control" defaultValue="T??m Ki???m" />
                                            </div>
                                        </div> */}
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
                                                                    <span>Th???i gian</span>
                                                                    <span><Moment diff={item.start_day} unit="days">{item.end_day}</Moment> Ng??y</span>
                                                                </p>
                                                                <p id="datetime">
                                                                    {item.hotel !== null ?
                                                                    <span>Hotel: {item.hotel.type}</span> : ""}
                                                                    {item.vehicle !== null ? <span>Ph????ng ti???n: {item.vehicle.ten}</span> : ""}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div id="boxprice">
                                                            <div>
                                                                <span><strong>S??? ch??? c??n nh???n: </strong>
                                                                    {item.max_amount} ch???</span>
                                                            </div>
                                                            <p>
                                                                <span id="price"><NumberFormat value={item.price} suffix="VND" thousandSeparator={true} thousandsGroupStyle="thousand" displayType="text" /></span>
                                                            </p>
                                                            <Link to={`/tourdetail/${item.id}`}><input id="book" type="submit" value="?????t Tour" className="form-control" /></Link>
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
