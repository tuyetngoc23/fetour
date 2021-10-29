import React from 'react'
import './newHotel.css'
import axios from 'axios'
import {useHistory} from 'react-router'

function NewHotel() {
    const history = useHistory();
    const handleSaveHotel = (e) => {
        let name = document.getElementById("name").value;
        let address = document.getElementById("address").value;
        let type = document.getElementById("type").value;
        let file = document.getElementById("file").files[0]
        e.preventDefault();
        let saveHotel = async() => {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("type", type)
            formData.append("address", address)
            formData.append("image", "avatar-meo2.jpg")
            formData.append("file", file)
            await axios.post(`http://localhost:9090/hotel/insert`, formData, {
                headers:{ "Content-Type": "multipart/form-data"}
            })
        }
        if(name != null & name !== "" & address != null & address !== "" & type != null & type !== "" & file != null){
            saveHotel();
            console.log("save Hotel");
            history.push("/hotels")
        }else{
            alert("nhap day du thong tin")
        }
    }
    return (
        <div className="newHotel">
          <h1 className="addHotelTitle">New Hotel</h1>
          <form className="addHotelForm" onSubmit={handleSaveHotel}>
            <div className="addHotelItem">
              <label>Image</label>
              <input type="file" id="file" />
            </div>
            <div className="addHotelItem">
              <label>Name</label>
              <input type="text" id="name"/>
            </div>
            <div className="addHotelItem">
              <label>Type</label>
              <select id="type">
                  <option value="2*">2*</option>
                  <option value="3*">3*</option>
                  <option value="4*">4*</option>
                  <option value="5*">5*</option>
              </select>
            </div>
            <div className="addHotelItem">
              <label>Address</label>
              <input type="text" id="address" />
            </div>
            <button className="addHotelButton" type="submit">Create</button>
          </form>
        </div>
    )
}

export default NewHotel
