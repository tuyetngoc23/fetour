import axios from 'axios';
import React from 'react'
import { useHistory } from 'react-router';
import './newCattour.css'

function NewCattour() {
    const history = useHistory();
    const handleSaveCat = (e) => {
        e.preventDefault();
        let name = document.getElementById("name").value;
        let saveCat = async() => {
            const formData = new FormData();
            formData.append("name", document.getElementById("name").value)
            await axios.post(`http://localhost:9090/cat/insert`, formData)
        }
        if(name !== null & name !== ""){
            saveCat();
            console.log("save cat");
            history.push("/cattours")
        }else{
            alert("Nhap day du thong tin")
        }
    }
    return (
        <div className="newCattour">
          <h1 className="addCattourTitle">New Cattour</h1>
          <form className="addCattourForm" onSubmit={handleSaveCat}>
            <div className="addCattourItem">
              <label>Name</label>
              <input type="text" id="name"/>
            </div>
            <button className="addCattourButton" type="submit">Create</button>
          </form>
        </div>
      );
}

export default NewCattour
