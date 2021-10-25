import { Link } from "react-router-dom";
import "./tour.css";
import Chart from "../../components/chart/Chart"
import { productData } from "../../dummyData"
import { Publish } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Moment from "react-moment";
import { useSelector } from "react-redux";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

export default function Tour1() {
    const { tourId } = useParams();
    const tour = useSelector(state => state.tour.tour)
    const [place, setPlace] = useState([])
    const [selectes, setSelectes] = useState([])
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

    //get Place Of Tour
    const [placeOfTour, setPlaceOfTour] = useState([])
    const animatedComponents = makeAnimated();

    useEffect(() => {
        axios
            .get(`http://localhost:9090/place/${tourId}/list`)
            .then(res => {
                setPlaceOfTour(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [tourId])

    //get List place
    useEffect(() => {
        axios
            .get(`http://localhost:9090/place/list`)
            .then(res => {
               setPlace(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    
    const option = place.map(d => ({
        "value": d.id,
        "label": d.name
    }))

    let placeShow = [];
    for (let index = 0; index < option.length; index++) {
        for (let i = 0; i < placeOfTour.length; i++) {
            if(option[index].value === placeOfTour[i].id){
                placeShow.push(index)
            }
        }
        
    }
    
    const handleSelected = (e ) => {
        setSelectes(e)
    }

    return (
        <div className="tour">
            <div className="tourTitleContainer">
                <h1 className="tourTitle">Tour</h1>
                <Link to="/newproduct">
                    <button className="tourAddButton">Create</button>
                </Link>
            </div>
            <div className="tourTop">
                <div className="tourTopLeft">
                    <Chart data={productData} dataKey="Sales" title="Sales Performance" />
                </div>
                <div className="tourTopRight">
                    <div className="tourInfoTop">
                        <img className="tourInfoImg" src={`${process.env.PUBLIC_URL}/asset/images/${tour.image}`} alt="img tour" />
                        <span className="tourName">{tour.name}</span>
                    </div>
                    <div className="tourInfoBottom">
                        <div className="tourInfoItem">
                            <span className="tourInfoKey">Min: </span>
                            <span className="tourInfoValue">{tour.min_amount}</span>
                        </div>
                        <div className="tourInfoItem">
                            <span className="tourInfoKey">Max: </span>
                            <span className="tourInfoValue">{tour.max_amount}</span>
                        </div>
                        <div className="tourInfoItem">
                            <span className="tourInfoKey">Start day: </span>
                            <span className="tourInfoValue"> <Moment format="DD-MM-YYYY">{tour.start_day}</Moment></span>
                        </div>
                        <div className="tourInfoItem">
                            <span className="tourInfoKey">End day: </span>
                            <span className="tourInfoValue"><Moment format="DD-MM-YYYY">{tour.end_day}</Moment></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tourBottom">
                <form className="tourForm">
                    <div className="tourFormLeft">
                        <label>Tour Name</label>
                        <input type="text" placeholder={tour.name} />
                        <label>Price</label>
                        <input type="number" placeholder={tour.price} />
                        <label>Min amount</label>
                        <input type="number" placeholder={tour.min_amount} />
                        <label>Max amount</label>
                        <input type="number" placeholder={tour.max_amount} />
                        <label>Start day:</label>
                        <input type="date" />
                        <label>End day:</label>
                        <input type="date" />
                        <label>Departure</label>
                        <select name="departure" id="idDeparture">
                            <option value={tour.department.id}>{tour.department.address}</option>
                            {
                                department.length > 0 && department.map(item => (
                                    item.id !== tour.department.id ?
                                        <option value={item.id} key={item.id}>{item.address}</option> : ""
                                ))
                            }
                        </select>
                        <label>Cattour</label>
                        <select name="cattour" id="idCattour">
                            <option value={tour.cattour.id}>{tour.cattour.name}</option>
                            {
                                cat.length > 0 && cat.map(item => (
                                    item.id !== tour.cattour.id ?
                                        <option value={item.id} key={item.id}>{item.name}</option> : ""
                                ))
                            }
                        </select>

                    </div>

                    <div className="tourFormLeft">
                        <label>Hotel</label>
                        <select name="hotel" id="idHotel">
                            <option value={tour.hotel.id}>{tour.hotel.type}</option>
                            {
                                hotel.length > 0 && hotel.map(item => (
                                    item.id !== tour.hotel.id ?
                                        <option value={item.id} key={item.id}>{item.type}</option> : ""
                                ))
                            }
                        </select>
                        <label>Vehicle</label>
                        <select name="vehicle" id="idVehicle">
                            <option value={tour.vehicle.id}>{tour.vehicle.ten}</option>
                            {
                                vehicle.length > 0 && vehicle.map(item => (
                                    item.id !== tour.vehicle.id ?
                                        <option value={item.id} key={item.id}>{item.ten}</option> : ""
                                ))
                            }
                        </select>
                        <label>Content</label>
                        <textarea rows={5} placeholder={tour.content}></textarea>
                        <label>Note</label>
                        <textarea rows={5} placeholder={tour.note}></textarea>
                        <label>Do you hava change place</label>
                        <select name="active" id="active">
                            <option value="no">No</option>
                            <option value="yes">Yes</option>
                        </select>
                        <label>Place</label>
                        <Select 
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                            isMulti
                            options={option}
                            onChange= {handleSelected}
                        />
                    </div>
                    <div className="tourFormRight">
                        <div className="tourUpload">
                            <img className="tourUploadImg" src={`${process.env.PUBLIC_URL}/asset/images/${tour.image}`} alt="img tour" />
                            {/* <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="tourUploadImg" /> */}
                            <label htmlFor="file">
                                <Publish />
                            </label>
                            <input type="file" id="file" style={{ display: "none" }} />
                        </div>
                        <button className="tourButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
}