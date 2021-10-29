import React from 'react'
import  { useEffect } from 'react'
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import './vehicleList.css'
import axios from 'axios';

function VehicleList() {
    //get vehicle
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

    const handleDelete = (id) => {
        axios.post(`http://localhost:9090/vehicle/delete/${id}`)
        .then(res => {
            axios
            .get(`http://localhost:9090/vehicle`)
            .then(res => {
                setVehicle(res.data)
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
            field: "vehicle",
            headerName: "vehicle",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="vehicleListItem">
                        {params.row.ten}
                    </div>
                );
            },
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        {/* <Link to={"/vehicle/" + params.row.id}>
                            <button className="vehicleListEdit">Edit</button>
                        </Link> */}
                        <DeleteOutline
                            className="vehicleListDelete"
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </>
                );
            },
        },
    ];

    return (
        <div className="vehicleList">
            <Link to="/newVehicle">
                <button className="vehicleAddButton">Create</button>
            </Link>
            <DataGrid
                rows={vehicle}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                checkboxSelection
            />
        </div>
    );
}

export default VehicleList
