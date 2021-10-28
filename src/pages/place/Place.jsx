import "./place.css";
import Chart from "../../components/chart/Chart"
import { productData } from "../../dummyData"
import { Publish } from "@material-ui/icons";
import { useHistory, useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Place() {
    const history = useHistory();
    const {id} = useParams();
    //getPlace
    const [place, setPlace] = useState({});

    useEffect(() => {
        axios
            .get(`http://localhost:9090/place/${id}`)
            .then(res => {
                setPlace(res.data)
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
    const [name, setName] = useState("")
    // const [proince, setProince] = useState(0)
    const [address, setAddress] = useState("")
    const [description, setDescription] = useState("")

    const handleSavePlace = (e) => {
        e.preventDefault()
        let file = document.getElementById("file").files[0]
        let province = document.getElementById("province").value
        let savePlace = async () =>{
            const formPlace = new FormData();
            formPlace.append("id", id);
            formPlace.append("name", name);
            formPlace.append("address", address);
            formPlace.append("description", description);
            formPlace.append("image", "avatar-meo3.jpg");
            formPlace.append("file", file);
            formPlace.append("province.id", province)
            await axios.post(`http://localhost:9090/place/update`, formPlace, {
                headers:{ "Content-Type": "multipart/form-data"}
            })
        }
        if(name !== "" & address !== "" & file !== null){
            savePlace();
            console.log("save place");
            history.push("/places")
        }else{
            alert("Vui long nhap thong day du")
        }
        
    }
    return (
        <div className="place">
            <div className="placeTitleContainer">
                <h1 className="placeTitle">Edit Place</h1>
            </div>
            <div className="placeTop">
                {/* <div className="placeTopLeft">
                    <Chart data={productData} dataKey="Sales" title="Sales Performance" />
                </div> */}
                <div className="placeTopRight">
                    <div className="placeInfoTop">
                        {/* <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="img" className="placeInfoImg" /> */}
                        <img src={`${process.env.PUBLIC_URL}/asset/images/${place.image}`} alt="img" className="placeInfoImg" />
                        <span className="placeName">{place.name}</span>
                    </div>
                    <div className="placeInfoBottom">
                        <div className="placeInfoItem">
                            <span className="placeInfoKey">Address</span>
                            <span className="placeInfoValue">{place.address}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="placeBottom">
                <form className="placeForm" onSubmit={handleSavePlace}>
                    <div className="placeFormLeft">
                        <label>Place Name</label>
                        <input type="text" placeholder={place.name} onChange={(e) => setName(e.target.value)}/>
                        <label>Address</label>
                    <input type="text" onChange={(e) => setAddress(e.target.value)}/>
                        <label>Province</label>
                        <select name="province" id="province">
                            {
                                province.length > 0 && province.map(item => (
                                    <option value={item.id} key={item.id}>{item.name}</option>
                                ))
                            }
                        </select>
                        <label>Description</label>
                    <textarea rows={5} onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>
                    <div className="placeFormRight">
                        <div className="placeUpload">
                            <img src={`${process.env.PUBLIC_URL}/asset/images/${place.image}`} alt="img" className="placeUploadImg" />
                            <label htmlFor="file">
                                <Publish />
                            </label>
                            <input type="file" id="file" />
                        </div>
                        <button className="placeButton" type="submit">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
}