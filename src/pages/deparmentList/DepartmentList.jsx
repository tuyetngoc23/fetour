import React, { useEffect } from 'react'
import './departmentList.css'
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
// import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';

function DepartmentList() {
    // const [data, setData] = useState([]);
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

    const handleDelete = (id) => {
      axios.post(`http://localhost:9090/department/delete/${id}`)
        .then(res => {
            axios
            .get(`http://localhost:9090/department`)
            .then(res => {
                setDepartment(res.data)
            })
            .catch(err => {
                console.log(err);
            })
        }).catch(err => {
            console.log(err);
        })
    };

    const columns = [
        { field: "id", headerName: "ID", width: 100 },
        {
            field: "department",
            headerName: "department",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="departmentListItem">
                        {params.row.address}
                    </div>
                );
            },
        },
        { field: "tourguide", headerName: "Tourguide", width: 200 },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        {/* <Link to={"/department/" + params.row.id}>
              <button className="departmentListEdit">Edit</button>
            </Link> */}
                        <DeleteOutline
                            className="departmentListDelete"
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </>
                );
            },
        },
    ];

    return (
        <div className="departmentList">
            <Link to="/newDepartment">
                <button className="departmentAddButton">Create</button>
            </Link>
            <DataGrid
                rows={department}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                checkboxSelection
            />
        </div>
    );
}

export default DepartmentList
