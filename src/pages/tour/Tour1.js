import "./tour.css";
import Chart from "../../components/chart/Chart"
import { productData } from "../../dummyData"
import { Publish } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Moment from "react-moment";
import {  useSelector } from "react-redux";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { useHistory } from "react-router";

 function Tour1() {
    const { tourId } = useParams();
    const history = useHistory();
    // const tourList = useSelector(state => state.tour.tour)
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
            if (option[index].value === placeOfTour[i].id) {
                placeShow.push(index)
            }
        }

    }

    const handleSelected = (e) => {
        setSelectes(e)
    }

    // console.log(tourList);
    // let tour = {};
    // for (let index = 0; index < tourList.length; index++) {
    //     if(tourList[index].id === tourId){
    //         tour=(tourList[index])
    //         console.log("load tour")
    //         console.log(tour);
    //         break;
    //     }
    // }
    // getTour
    const [tour, setTour] = useState({})
    useEffect(() => {
        axios
            .get(`http://localhost:9090/tour/${tourId}`)
            .then(res => {
                setTour(res.data)
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    },[])
    console.log(tourId);
    console.log(tour);

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(0)
    const [startDay, setStartDay] = useState()
    const [endDay, setEndDay] = useState()
    const [departure, setDeparture] = useState(null)
    const [cattour, setCattour] = useState(null)
    const [hotelTour, setHotelTour] = useState(null)
    const [vehicleTour, setVehicleTour] = useState(null)
    const [content, setContent] = useState()
    const [note, setNote] = useState()

    const handleSaveTour = (e) => {
        
        e.preventDefault();
        let saveTour = async () => {
            const formTour = new FormData();
            formTour.append("id", tourId)
            if(name === "" || name ===null){
                formTour.append("name",tour.name)
            }else{
                formTour.append("name", name);
            }
            if(price === "" || price ===null){
                if(tour.price === null){
                    formTour.append("price", 1)
                }else{
                    formTour.append("price", tour.price)
                }
            }else{
                formTour.append("price", price)
            }
            if(min === 0 || min ===null){
                formTour.append("min_amount",tour.min_amount)
            }else{
                formTour.append("min_amount", min);
            }
            if(max === 0 || max ===null){
                formTour.append("max_amount",tour.max_amount)
            }else{
                formTour.append("max_amount", max);
            }
            if(startDay === "" || startDay ===null){
                if(tour.start_day == null){
                    formTour.append("start_day", new Date())
                }else{
                    formTour.append("start_day", new Date(tour.start_day))
                }
            }else{
                if(startDay == null){
                    formTour.append("start_day", new Date(tour.start_day))
                }else{
                    formTour.append("start_day", new Date(startDay));
                }
            }
            if(endDay === "" || endDay ===null){
                if(tour.end_day == null){
                    formTour.append("end_day", new Date())
                }else{
                    formTour.append("end_day", new Date(tour.end_day))
                }
            }else{
                if(endDay == null){
                    formTour.append("end_day", new Date(tour.end_day))
                }else{
                    formTour.append("end_day", new Date(endDay));
                }
            }
            if(departure === "" || departure === null){
                formTour.append("department.id", Number.parseInt(tour.department.id))
            }else{
                formTour.append("department.id", departure);
            }
            if(cattour === "" || cattour === null){
                formTour.append("cattour.id", Number.parseInt(tour.cattour.id))
            }else{
                formTour.append("cattour.id", cattour);
            }
            if(hotelTour === "" || hotelTour === null){
                formTour.append("hotel.id", Number.parseInt(tour.hotel.id))
            }else{
                formTour.append("hotel.id", hotelTour);
            }
            if(vehicleTour === "" || vehicleTour ===null){
                formTour.append("vehicle.id", Number.parseInt(tour.vehicle.id))
            }else{
                formTour.append("vehicle.id", Number.parseInt(vehicleTour));
            }
            if(content === "" || content ===null){
                formTour.append("content",tour.content)
            }else{
                formTour.append("content", content);
            }
            if(note === "" || note === null){
                formTour.append("note",tour.note)
            }else{
                formTour.append("note", note);
            }
            formTour.append("image", tour.image);
            formTour.append("file", document.getElementById("file").files[0])
            formTour.append("state", 1);
            await axios.post(`http://localhost:9090/tour/update`, formTour, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            selectes.map((item, index) => {
                //delete -> insert
                let id = Number.parseInt(tourId)
                axios.post(`http://localhost:9090/place/tour/delete/${id}`)
                    .then(res => {
                        console.log(res);
                    }).catch(err => {
                        console.log(err);
                    })
                const formTourPlace = new FormData();
                formTourPlace.append("tour.id", tour.id)
                formTourPlace.append("place.id", item.value)
                axios.post(`http://localhost:9090/place/tour/update`, formTourPlace, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                });
            })
        }
        saveTour();
        history.push("/tours");
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
                        <input type="text" id="name" placeholder={tour.name} onChange={(e) => setName(e.target.value)} />
                        <label>Price</label>
                        <input type="number" id="price" placeholder={tour.price}
                            onChange={(e) => setPrice(e.target.value)} />
                        <label>Min amount</label>
                        <input type="number" id="min" placeholder={tour.min_amount}
                            onChange={(e) => setMin(e.target.value)} />
                        <label>Max amount</label>
                        <input type="number" id="max" placeholder={tour.max_amount}
                            onChange={(e) => setMax(e.target.value)} />
                        <label>Start day:</label>
                        <input type="date" id="startDay" onChange={(e) => setStartDay(e.target.value)} />
                        <label>End day:</label>
                        <input type="date" id="endDay" onChange={(e) => setEndDay(e.target.value)} />
                        <label>Departure</label>
                        <select name="departure" id="idDeparture" onChange={(e) => setDeparture(e.target.value)}>
                            
                            {
                                department.length > 0 && department.map(item => (
                                        <option value={item.id} key={item.id}>{item.address}</option> 
                                ))
                            }
                        </select>
                        <label>Cattour</label>
                        <select name="cattour" id="idCattour" onChange={(e) => setCattour(e.target.value)}>
                            
                            {
                                cat.length > 0 && cat.map(item => (
                                    
                                        <option value={item.id} key={item.id}>{item.name}</option> 
                                ))
                            }
                        </select>

                    </div>

                    <div className="tourFormLeft">
                        <label>Hotel</label>
                        <select name="hotel" id="idHotel" onChange={(e) => setHotelTour(e.target.value)}>
                            
                            {
                                hotel.length > 0 && hotel.map(item => (
                                    
                                        <option value={item.id} key={item.id}>{item.type}</option> 
                                ))
                            }
                        </select>
                        <label>Vehicle</label>
                        <select name="vehicle" id="idVehicle" onChange={(e) => setVehicleTour(e.target.value)}>
                            
                            {
                                vehicle.length > 0 && vehicle.map(item => (
                                    
                                        <option value={item.id} key={item.id}>{item.ten}</option> 
                                ))
                            }
                        </select>
                        <label>Content</label>
                        <textarea rows={5} id="content" placeholder={tour.content} onChange={(e) => setContent(e.target.value)}></textarea>
                        <label>Note</label>
                        <textarea rows={5} id="note" placeholder={tour.note} onChange={(e) => setNote(e.target.value)}></textarea>
                        <label>Place</label>
                        <Select
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                            isMulti
                            options={option}
                            onChange={handleSelected}
                        />
                    </div>
                    <div className="tourFormRight">
                        <div className="tourUpload">
                            <img className="tourUploadImg" src={`${process.env.PUBLIC_URL}/asset/images/${tour.image}`} alt="img tour" />
                            {/* <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="tourUploadImg" /> */}
                            <label htmlFor="file">
                                <Publish />
                            </label>
                            <input type="file" id="file"  />
                        </div>
                        <button className="tourButton" type="submit">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Tour1