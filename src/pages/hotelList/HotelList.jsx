import React, { useEffect } from 'react'
import './hotelList.css'
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';

function HotelList() {

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
    const handleDelete = (id) => {
        axios.post(`http://localhost:9090/hotel/delete/${id}`)
            .then(res => {
                axios
                    .get(`http://localhost:9090/hotel`)
                    .then(res => {
                        setHotel(res.data)
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
            field: "hotel",
            headerName: "hotel",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="hotelListItem">
                        <img className="hotelListImg" src={`${process.env.PUBLIC_URL}/asset/images/${params.row.image}`} alt="img" />
                        {params.row.name}
                    </div>
                );
            },
        },
        { field: "type", headerName: "Type", width: 120 },

        {
            field: "address",
            headerName: "Address",
            width: 160,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        {/* <Link to={"/hotel/" + params.row.id}>
              <button className="hotelListEdit">Edit</button>
            </Link> */}
                        <DeleteOutline
                            className="hotelListDelete"
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </>
                );
            },
        },
    ];

    return (
        <div className="hotelList">
            <Link to="/newHotel">
                <button className="hotelAddButton">Create</button>
            </Link>
            <DataGrid
                rows={hotel}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                checkboxSelection
            />
        </div>
    );
}

export default HotelList
