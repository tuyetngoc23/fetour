import axios from 'axios';
import React from 'react'
import { useHistory } from 'react-router';
import './newDepartment.css'

function NewDepartment() {
  const history = useHistory();
  const handleSaveDepartment = (e) => {
    e.preventDefault();
    let address = document.getElementById("address").value
    let tourguide = document.getElementById("tourguide").value
    let saveDepartment = async () => {
      const formData = new FormData();
      formData.append("address", address)
      formData.append("tourguide", tourguide)
      await axios.post(`http://localhost:9090/department/insert`, formData)
        .catch(err => {
          console.log(err);
        })
    }
    if(address !== null & address !== "" & tourguide !== null & tourguide !== ""){
      saveDepartment();
      console.log("save department");
      history.push("/departments")
    }else{
      alert("nhap day du thong tin")
    }
  }
  return (
    <div className="newDepartment">
      <h1 className="addDepartmentTitle">New Department</h1>
      <form className="addDepartmentForm" onSubmit={handleSaveDepartment}>
        <div className="addDepartmentItem">
          <label>Address</label>
          <input type="text" id="address" />
        </div>
        <div className="addDepartmentItem">
          <label>Tourguide</label>
          <input type="text" id="tourguide" />
        </div>
        <button className="addDepartmentButton" type="submit">Create</button>
      </form>
    </div>
  );
}

export default NewDepartment
