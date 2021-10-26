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
    //save edit tour-tour_place
    const [name, setName] = useState(tour.name)
    const [price, setPrice] = useState(tour.price)
    const [min, setMin] = useState(tour.min_amount)
    const [max, setMax] = useState(tour.max_amount)
    const [startDay, setStartDay] = useState(tour.start_day)
    const [endDay, setEndDay] = useState(tour.end_day)
    const [departure, setDeparture] = useState(tour.department.id)
    const [cattour, setCattour] = useState(tour.cattour.id)
    const [hotelTour, setHotelTour] = useState(tour.hotel.id)
    const [vehicleTour, setVehicleTour] = useState(tour.vehicle.id)
    const [content, setContent] = useState(tour.content)
    const [note, setNote] = useState(tour.note)
    const [image, setImage] = useState(tour.image)

    const handleSaveTour = (e) => {
        e.preventDefault();
        let saveTour = () => {
            const formTour = new FormData();
            formTour.append("id", tour.id)
            formTour.append("name", name);
            formTour.append("price", price)
            formTour.append("min_amount", min);
            formTour.append("max_amount", max);
            formTour.append("start_day", startDay);
            formTour.append("end_day", endDay);
            formTour.append("tour.department.id", departure);
            formTour.append("tour.cattour.id", cattour);
            formTour.append("tour.hotel.id", hotelTour);
            formTour.append("tour.vehicel.id", vehicleTour);
            formTour.append("content", content);
            formTour.append("note", note);
            formTour.append("image", image);
            formTour.append("state", 1);
        }
        saveTour();
    }
    

    return (
        <div className="tour">
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
                <form className="tourForm" onSubmit={handleSaveTour}>
                    <div className="tourFormLeft">
                        <label>Tour Name</label>
                        <input type="text"  placeholder={tour.name} onChange={(e) => setName(e.target.value)}/>
                        <label>Price</label>
                        <input type="number" placeholder={tour.price}
                                onChange={(e) => setPrice(e.target.value)}/>
                        <label>Min amount</label>
                        <input type="number" placeholder={tour.min_amount} 
                                onChange={(e) => setMin(e.target.value)}/>
                        <label>Max amount</label>
                        <input type="number" placeholder={tour.max_amount} 
                                onChange={(e) => setMax(e.target.value)}/>
                        <label>Start day:</label>
                        <input type="date" onChange={(e) => setStartDay(e.target.value)}/>
                        <label>End day:</label>
                        <input type="date" onChange={(e) => setEndDay(e.target.value)}/>
                        <label>Departure</label>
                        <select name="departure" id="idDeparture" onChange={(e) => setDeparture(e.target.value)}>
                            <option value={tour.department.id}>{tour.department.address}</option>
                            {
                                department.length > 0 && department.map(item => (
                                    item.id !== tour.department.id ?
                                        <option value={item.id} key={item.id}>{item.address}</option> : ""
                                ))
                            }
                        </select>
                        <label>Cattour</label>
                        <select name="cattour" id="idCattour" onChange={(e) => setCattour(e.target.value)}> 
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
                        <select name="hotel" id="idHotel" onChange={(e) => setHotelTour(e.target.value)}>
                            <option value={tour.hotel.id}>{tour.hotel.type}</option>
                            {
                                hotel.length > 0 && hotel.map(item => (
                                    item.id !== tour.hotel.id ?
                                        <option value={item.id} key={item.id}>{item.type}</option> : ""
                                ))
                            }
                        </select>
                        <label>Vehicle</label>
                        <select name="vehicle" id="idVehicle" onChange={(e) => setVehicleTour(e.target.value)}>
                            <option value={tour.vehicle.id}>{tour.vehicle.ten}</option>
                            {
                                vehicle.length > 0 && vehicle.map(item => (
                                    item.id !== tour.vehicle.id ?
                                        <option value={item.id} key={item.id}>{item.ten}</option> : ""
                                ))
                            }
                        </select>
                        <label>Content</label>
                        <textarea rows={5} placeholder={tour.content} onChange={(e) => setContent(e.target.value)}></textarea>
                        <label>Note</label>
                        <textarea rows={5} placeholder={tour.note} onChange={(e) => setNote(e.target.value)}></textarea>
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
                            <input type="file" id="file" style={{ display: "none" }} onChange={(e) => setImage(e.target.value)}/>
                        </div>
                        <button className="tourButton" type="submit">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
}