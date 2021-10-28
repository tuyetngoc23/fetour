import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react'
import './newTour.css'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import {useHistory} from 'react-router-dom'
import { useDispatch } from 'react-redux';

export default function NewTour() {
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

    //get List place
    const [place, setPlace] = useState([])
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
    const animatedComponents = makeAnimated();
    const option = place.map(d => ({
        "value": d.id,
        "label": d.name
    }))
    console.log(option);
    const [selectes, setSelectes] = useState([])
    console.log(selectes);
    const handleSelected = (e) => {
        setSelectes(e)
    }
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(0)
    const [startDay, setStartDay] = useState(new Date())
    const [endDay, setEndDay] = useState(new Date())
    const [departure, setDeparture] = useState()
    const [cattour, setCattour] = useState()
    const [hotelTour, setHotelTour] = useState()
    const [vehicleTour, setVehicleTour] = useState()
    const [content, setContent] = useState()
    const [note, setNote] = useState()
    const [image, setImage] = useState()
    const history = useHistory();
    // const dispatchTour = useDispatch();

    const handleSaveTour = async (e) => {
        e.preventDefault();
        let saveTour = async () => {
            const formTour = new FormData();

            formTour.append("name", name);
            formTour.append("price", price)
            formTour.append("min_amount", min);
            formTour.append("max_amount", max);
            formTour.append("start_day", new Date(startDay));
            formTour.append("end_day", new Date(endDay));
            formTour.append("department.id", departure);
            formTour.append("cattour.id", cattour);
            formTour.append("hotel.id", hotelTour);
            formTour.append("vehicle.id", vehicleTour);
            formTour.append("content", content);
            formTour.append("note", note);
            formTour.append("image", "hitashi-nhat-ban.jpg");
            formTour.append("file", document.getElementById("file").files[0])
            formTour.append("state", 1);

            await axios.post(`http://localhost:9090/tour/insert`, formTour, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            await axios
                .get(`http://localhost:9090/tour`)
                .then(res => {
                    const data= res.data.slice(-1);
                    console.log(data);
                    selectes.map(item => {
                        const formTourPlace = new FormData();
                        formTourPlace.append("tour.id", Number.parseInt(data[0].id))
                        formTourPlace.append("place.id", item.value)
                         axios.post(`http://localhost:9090/place/tour/insert`, formTourPlace, {
                            headers: {
                                "Content-Type": "multipart/form-data"
                            }
                        });
                    })
                })
                .catch(err => {
                    console.log(err);
                })
            
        }
        if(name !== "" & price !== "" & departure != null & vehicle != null & hotel != null &
             cattour != null & startDay < endDay & selectes.length > 0){
                saveTour();
                history.push("/tours")
                // dispatchTour({
                //     type: "GET_TOUR",
                //     payload: null
                // })
             }else{
                 alert("Vui lòng nhập đầy đủ thông tin")
             }
        
    }

    
    
    return (
        <div className="newTour">
            <h1 className="addTourTitle">New Tour</h1>
            <form className="addTourForm" onSubmit={handleSaveTour}>
                <div className="addTourItem">
                    <label>Image</label>
                    <input type="file" id="file" onChange={(e) => setImage(e.target.value)} />
                </div>
                <div className="addTourItem">
                    <label>Name</label>
                    <input type="text" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="addTourItem">
                    <label>Price</label>
                    <input type="number" onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div className="addTourItem">
                    <label>Min amount</label>
                    <input type="number" onChange={(e) => setMin(e.target.value)} />
                </div>
                <div className="addTourItem">
                    <label>Max amount</label>
                    <input type="number" onChange={(e) => setMax(e.target.value)} />
                </div>
                <div className="addTourItem">
                    <label>Start day:</label>
                    <input type="date" onChange={(e) => setStartDay(e.target.value)} />
                </div>
                <div className="addTourItem">
                    <label>End day:</label>
                    <input type="date" onChange={(e) => setEndDay(e.target.value)} />
                </div>
                <div className="addTourItem">
                    <label>Departure</label>
                    <select name="departure" id="idDeparture"  onChange={(e) => setDeparture(e.target.value)}>
                        {
                            department.length > 0 && department.map(item => (
                                <option value={item.id} key={item.id}>{item.address}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="addTourItem">
                    <label>Cattour</label>
                    <select name="cattour" id="idCattour" value={cattour} onChange={(e) => setCattour(e.target.value)}>
                        {
                            cat.length > 0 && cat.map(item => (

                                <option value={item.id} key={item.id}>{item.name}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="addTourItem">
                    <label>Hotel</label>
                    <select name="hotel" id="idHotel" value={hotelTour} onChange={(e) => setHotelTour(e.target.value)}>
                        {
                            hotel.length > 0 && hotel.map(item => (

                                <option value={item.id} key={item.id}>{item.type}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="addTourItem">
                    <label>Vehicle</label>
                    <select name="vehicle" id="idVehicle" value={vehicleTour} onChange={(e) => setVehicleTour(e.target.value)}>

                        {
                            vehicle.length > 0 && vehicle.map(item => (

                                <option value={item.id} key={item.id}>{item.ten}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="addTourItem">
                    <label>Place</label>
                    <Select
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        defaultValue={[option[0], option[1]]}
                        isMulti
                        options={option}
                        onChange={handleSelected}
                    />
                </div>
                <div className="addTourItem">
                    <label>Content</label>
                    <textarea rows={5} onChange={(e) => setContent(e.target.value)}></textarea>
                </div>
                <div className="addTourItem">
                    <label>Note</label>
                    <textarea rows={5} onChange={(e) => setNote(e.target.value)}></textarea>
                </div>
                <div className="addTourItem" style={{ justifyContent: 'end' }}>
                    <button className="addTourButton" type="submit">Create</button>
                </div>
            </form>
        </div>
    );
}