import axios from 'axios';
import React from 'react'
import { useHistory } from 'react-router';
import './newVehicle.css'

function NewVehicle() {
    const history = useHistory();
    const handleSaveVehicle = (e) => {
        e.preventDefault();
        let name = document.getElementById("name").value;
        let saveVehicle = async() => {
            const formData = new FormData();
            formData.append("ten", document.getElementById("name").value)
            await axios.post(`http://localhost:9090/vehicle/insert`, formData)
        }
        if(name !== null & name !== ""){
            saveVehicle();
            console.log("save Vehicle");
            history.push("/vehicles")
        }else{
            alert("Nhap day du thong tin")
        }
    }
    return (
        <div className="newVehicle">
          <h1 className="addvehicleTitle">New vehicle</h1>
          <form className="addVehicleForm" onSubmit={handleSaveVehicle}>
            <div className="addVehicleItem">
              <label>Name</label>
              <input type="text" id="name"/>
            </div>
            <button className="addVehicleButton" type="submit">Create</button>
          </form>
        </div>
      );
}

export default NewVehicle
