import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import './newPlace.css'

function NewPlace() {
    const history = useHistory();
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
            formPlace.append("name", name);
            formPlace.append("address", address);
            formPlace.append("description", description);
            formPlace.append("image", "avatar-meo3.jpg");
            formPlace.append("file", file);
            formPlace.append("province.id", province)
            await axios.post(`http://localhost:9090/place/insert`, formPlace, {
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
        <div className="newPlace">
            <h1 className="addPlaceTitle">New Place</h1>
            <form className="addPlaceForm" onSubmit={handleSavePlace}>
                <div className="addPlaceItem">
                    <label>Image</label>
                    <input type="file" id="file" />
                </div>
                <div className="addPlaceItem">
                    <label>Name</label>
                    <input type="text"  onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="addPlaceItem">
                    <label>Address</label>
                    <input type="text" onChange={(e) => setAddress(e.target.value)}/>
                </div>
                <div className="addPlaceItem">
                    <label>Province</label>
                    <select name="province" id="province">
                        {/* <option value={0}>--Chọn tỉnh thành--</option> */}
                        {
                            province.length > 0 && province.map(item => (
                                <option value={item.id} key={item.id}>{item.name}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="addPlaceItem">
                    <label>Description</label>
                    <textarea rows={5} onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                <button className="addPlaceButton" type="submit">Create</button>
            </form>
        </div>
    );
}

export default NewPlace
